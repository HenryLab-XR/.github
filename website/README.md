# HenryLab-XR Website

The standalone English website for HenryLab-XR, a research group working on XR software engineering, reliability, security and privacy, and emerging embodied AI.

## Requirements

- Node.js `>=22.13.0`

## Development

```bash
npm install
npm run dev
```

## Validation

```bash
npm run build
npm test
```

## Main Files

- `app/page.tsx`: site content and structure
- `app/globals.css`: visual system and responsive layout
- `app/layout.tsx`: metadata
- `.openai/hosting.json`: Sites hosting configuration

## Optional Hero Banner

The site includes a complete CSS-based hero visual and does not require an image. To add the optional generated banner later:

1. Generate the image using `../BANNER_PROMPT.md`.
2. Optimize it as `public/henrylab-xr-banner.webp` at 2400 × 800 pixels and below 700 KB.
3. Add it to the hero visual container with decorative `alt=""`; the group name and tagline must remain real HTML text.

## Content Maintenance

Google Scholar metrics are a dated snapshot. Recheck and update the values and access date before major announcements. Review member roles, recruitment status, project links, and publication metadata at the same time.
