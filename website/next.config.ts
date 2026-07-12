import type { NextConfig } from "next";

const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const explicitBasePath = process.env.GITHUB_PAGES_BASE_PATH;
const repository = process.env.GITHUB_REPOSITORY;
const [owner, repoName] = repository?.split("/") ?? [];
const isUserOrOrgPagesRepo =
  owner != null &&
  repoName != null &&
  repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;
const inferredBasePath =
  isGithubPagesBuild && repoName != null && !isUserOrOrgPagesRepo
    ? `/${repoName}`
    : "";
const basePath = explicitBasePath ?? inferredBasePath;

const nextConfig: NextConfig = {
  ...(isGithubPagesBuild
    ? {
        output: "export" as const,
        images: { unoptimized: true },
        trailingSlash: true,
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
