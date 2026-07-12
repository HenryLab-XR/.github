import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the complete HenryLab-XR homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(
    html,
    /<title>HenryLab-XR \| Reliable, Secure, and Intelligent XR Systems<\/title>/i,
  );
  assert.match(html, /Engineering reliable, secure, and intelligent XR systems/i);
  assert.match(html, /XR Reliability &amp; Testing/i);
  assert.match(html, /Embodied AI/i);
  assert.match(html, /VRAgent/i);
  assert.match(html, /Current Members/i);
  assert.match(html, /PhD students, Research Assistants, and Visiting Students/i);
  assert.match(html, /zhuzhy57@mail2\.sysu\.edu\.cn/i);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  assert.doesNotMatch(html, /[\u4e00-\u9fff]/u);
});

test("removes starter-only preview assets and metadata", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.match(packageJson, /"name": "henrylab-xr-website"/);
  assert.doesNotMatch(page, /[\u4e00-\u9fff]/u);
  assert.doesNotMatch(layout, /[\u4e00-\u9fff]/u);
  assert.doesNotMatch(packageJson, /[\u4e00-\u9fff]/u);

  await assert.rejects(access(new URL("public/favicon.svg", templateRoot)));
});
