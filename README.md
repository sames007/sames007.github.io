# sames007.github.io

Static GitHub Pages portfolio for Saim Sameer, a senior Computer Science student at Farmingdale State College.

## Contents

- `index.html` is the home page with a short intro and selected projects.
- `projects.html` lists every project with search and filter buttons.
- `skills.html` groups languages, frameworks, and tools, and shows which projects use them.
- `contact.html` has email, GitHub, LinkedIn, and resume links.
- `style.css` contains the responsive layout and visual styling.
- `script.js` runs the project search and filters.
- `resume.pdf` is the public resume. It leaves out home address and phone number.
- `favicon.svg` is the browser tab icon.
- `404.html` is shown by GitHub Pages for missing pages. It uses root paths (`/style.css`) so it works at any URL depth.
- `robots.txt` and `sitemap.xml` help search engines find every page. Update `lastmod` in the sitemap when a page changes.
- `image/profile.jpg` is the profile photo, also used for link previews.
- `image/projects/` holds one 960x600 WebP screenshot per project card, taken from each project's README.

## Local Preview

Open `index.html` in a browser. No build step or package installation is required.

## Maintenance Notes

- Keep external links using `target="_blank"` paired with `rel="noopener noreferrer"`.
- Keep the page dependency-free unless a new feature clearly needs a library.
- Keep the skills language honest: Java is the strongest foundation, while other languages and frameworks are familiar through projects.
- Update the project cards when featured repositories or live demo URLs change.
- Bump the `?v=` number on `style.css` in every page after changing styles, so browsers load the new version.
- When the resume changes, export a new `resume.pdf` without home address or phone number.
