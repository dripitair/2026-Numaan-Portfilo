# Mohd Numaan — Portfolio Website

A responsive portfolio for Mohd Numaan with a home page and a separate Websites page. It uses plain HTML, CSS, and JavaScript and is ready to publish with GitHub Pages.

## Preview and deploy

Open `index.html` directly in a browser to preview. To publish, upload the contents of this `outputs` folder to the root of a GitHub Pages repository, then enable Pages for the repository's main branch.

## Included local files

- `assets/backgrounds/ORANGE_BACKGROUND_01.png` and `ORANGE_BACKGROUND_02.png` — the supplied portrait cutouts; `ORANGE_BACKGROUND_01.png` is the large, wide hero image and `ORANGE_BACKGROUND_02.png` is used in the About section.
- `assets/video-posters/` — optimized poster frames from the supplied video files.
- `assets/resume/MOHD_NUMAAN_RESUME_2026.pdf.pdf` — the supplied resume PDF.
- `websites.html` — a dedicated project page featuring the Labh NexGen corporate website.

## Drive-hosted portfolio artwork and videos

The shared Drive folder was accessible and inspected: [MOHD_NUMAAN_PORTFOLIO_2026](https://drive.google.com/drive/folders/1fKPGdxetHNVFOVdMROrDijUFKfFszUo7?usp=sharing). The gallery artwork is referenced by its verified Drive file ID in `script.js`, using the Drive thumbnail endpoint at up to 1600 px. This keeps the source project small while preserving each artwork's proportions. The ten full video files are embedded from their verified Drive preview URLs. Those originals range from 5.6 MB to 470.7 MB; keeping them on Drive avoids GitHub's 100 MB per-file limit and keeps the deployed site practical to load.

The public Drive folder must remain available for gallery images and video playback. If you want a fully self-hosted site, download the named files from these folders and add a local `src` field to the corresponding objects in `script.js`; `src` takes precedence over the Drive ID:

- `VERTICAL_THUMBNAILS` — 24 images (the brief says 22, but Drive contained 24: `2VERTICAL_THUMBNAIL_24.jpg`, `VERTICAL_THUMBNAIL_01.png` through `_22.png`, and `VERTICAL_THUMBNAIL_23.jpg`). All 24 are included.
- `HORIZONTAL_THUMBNAILS` — 16 images.
- `POSTER_DESIGNS` — 4 images.
- `01_VIDEOS` — 10 MP4 projects.
- `05_WEBSITE_ASSETS` — 2 PNG portrait cutouts, already included locally.
- `06_RESUME` — the resume PDF, already included locally.

Example gallery change in `script.js`:

```js
{ name: "VERTICAL_THUMBNAIL_01.png", id: "1Cbmhh48UBz7UDIXltOWn1qDO649hMkPX", src: "assets/vertical-thumbnails/VERTICAL_THUMBNAIL_01.png" }
```

For videos, replace a project's `driveId` with a `videoSrc` field and update `openVideo()` to use a local `<video controls>` element if you have compressed web-ready MP4s. The source project intentionally does not bundle the large original videos.

## Updating the site

- **Contact links and resume path:** change `SITE_CONFIG` near the top of `script.js`. The WhatsApp, email, Instagram and LinkedIn links are set to the supplied details.
- **Website projects:** edit `websites.html` to add more website cards and live project links.
- **Fonts:** the display headings prefer Coolvetica Regular, body copy uses Inter, and labels use Space Grotesk. Add your licensed Adobe Fonts web-project embed to both page heads to load Coolvetica for all visitors; a system fallback is included.
- **Project order or video details:** reorder or edit `videoProjects` in `script.js`. Each video card has a short project description; the view and lead figures shown are the supplied results.
- **Performance statistics:** edit `performanceStats` in `script.js`. Keep each figure tied to its verified project.
- **Gallery contents:** edit `verticalThumbnails`, `horizontalThumbnails`, and `posterDesigns` in `script.js`. Keep each `name` and `id` paired.
- **Replace local poster frames:** put the new file under `assets/video-posters/` and update that project's `poster` path.
- **Replace portrait images or resume:** overwrite the matching file in `assets/backgrounds/` or `assets/resume/`, or change the paths in `index.html` and `SITE_CONFIG`.

The Narayana Infra and Labh NexGen employment details come from the supplied resume. The Dripitair freelance timeline and description were supplied by the portfolio owner. The portfolio omits unrelated personal details. The included original resume PDF is unchanged and still contains its personal-details section.
