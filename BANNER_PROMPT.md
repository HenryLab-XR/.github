# HenryLab-XR Banner Generation Prompt

Generate the banner without text. The site and GitHub profile should render the group name and tagline as accessible HTML or Markdown instead of baking them into the image.

## Prompt

```text
Create a 3:1 ultra-wide hero banner for an international academic research group focused on eXtended Reality (XR) systems, covering VR, AR, and MR. Style: clean modern editorial illustration with subtle hand-drawn warmth; professional first, lightly cute. Use a warm off-white background, deep navy linework, restrained teal and cyan accents, and small touches of warm coral. Keep the composition airy, polished, and suitable for a world-class university research website.

Leave the left 45% calm and uncluttered for a later HTML text overlay. On the right, create one coherent research scene containing a translucent XR headset, a spatial wireframe room, connected software nodes, automated test traces through 3D scenes, repair markers on code blocks, sensor traces from hand/eye/head movement, a small shield with a check mark representing XR security, and a compact embodied robot interacting with a virtual cube. Add three tiny mascot researchers as secondary accents only: a white bear carrying a research notebook, a cream rabbit holding VR controllers, and a white cat with navy ears inspecting a security shield. The mascots should feel intelligent, friendly, and understated, occupying no more than 15% of the image.

Visually communicate four themes: XR reliability, XR software engineering, XR security, and future embodied AI. The image should suggest testing, analysis, repair, and protection for immersive software systems while staying focused on XR applications, 3D scenes, runtime behavior, sensors, and developer tooling. Use crisp vector-like forms, accessible contrast, balanced negative space, subtle depth, and safe margins for desktop and mobile cropping.

Do not include any letters, words, publication timelines, paper titles, university logos, rankings, flags, dense interface panels, photorealistic people, cyberpunk neon, or watermarks. Output at 2400 × 800 pixels.
```

## Text to Overlay Separately

**HenryLab-XR**  
Engineering Reliable, Secure, and Intelligent XR Systems.

## Asset Placement

After generation, save the optimized image in both locations:

- GitHub profile: `src/henrylab-xr-banner.webp`
- Standalone site: `website/public/henrylab-xr-banner.webp`

Target a final WebP size below 700 KB. Keep the main visual subjects in the center-right so mobile crops do not remove them.
