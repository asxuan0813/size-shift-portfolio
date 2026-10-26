# Ang Shi Xuan — Game Programmer Portfolio

## What's in the site

- A four-colour 2-bit arcade theme with pixel-grid panels, hard square edges, block shadows, and clearer high-contrast text.
- Larger body copy and project descriptions, wider project cards, and larger screenshot galleries to make the work easier to scan and read.
- A featured SizeShift Adventure UE5/C++ project section based on the Notion technical case study. Its scope is clearly labeled as one playable level in development.
- Four locally bundled screenshots and an embedded Google Drive gameplay preview for the original Unity SizeShift project.
- Four locally bundled screenshots and an embedded Google Drive gameplay preview for Letter Quest.
- A text-only Alva Productions internship section. The source Notion case study says company media, builds, and code are not included, so none are shown here.
- Responsive layout, descriptive image alt text, keyboard focus styles, a skip link, and reduced-motion support.

## Media files

The game screenshots were copied from the public Notion project pages into `public/images/` as WebP files. Keeping them locally means the deployed portfolio does not depend on private Notion attachment links.

- `sizeshift-unity-01.webp` through `sizeshift-unity-04.webp`
- `letter-quest-01.webp` through `letter-quest-04.webp`

Gameplay videos are embedded from Google Drive because they can be played in the source pages. The embeds were confirmed to load when this site was prepared. If a public visitor is asked to sign in or request access, change the corresponding Drive item's access yourself or replace the embed with a public video URL. No Drive sharing settings were changed.

## Local editing and preview

1. Open the project folder in VS Code.
2. Edit `src/pages/index.astro` to change copy, project descriptions, links, or which screenshots are shown. Replace an image by putting a `.webp`, `.jpg`, or `.png` file in `public/images/` and changing its source path.
3. Run `npm.cmd install`, then `npm.cmd run dev` in PowerShell. `npm.cmd` avoids the PowerShell script-policy error that blocks `npm.ps1`.
4. Open the local address printed in the terminal. Save edits and refresh; Astro updates the local preview.

## Free GitHub Pages deployment

The GitHub Actions workflow builds this static Astro site whenever the `main` branch changes. `astro.config.mjs` uses the GitHub repository name supplied by Actions to set the correct project-site base path automatically. The special `asxuan0813.github.io` repository uses `/`.

1. Create a **public** GitHub repository under `asxuan0813` (for example, `portfolio`).
2. Put the contents of this project folder at the repository root and push the `main` branch. Do not publish company or other restricted project assets.
3. In GitHub repository **Settings → Pages**, choose **GitHub Actions** as the source.
4. Check the **Actions** tab. When the deployment run completes, open the Pages URL it reports.
5. Check the deployed site on desktop and phone, test the project links and embedded videos, and confirm all materials are okay to share publicly.

Publishing remains with the account owner; this project has not been pushed or deployed.
