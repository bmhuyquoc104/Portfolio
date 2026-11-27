# Portfolio

One-page portfolio for Huy Quoc Vo (Steve Vo), software engineer. Live at [huyvq.netlify.app](https://huyvq.netlify.app/).

## Stack

- React 19, Vite 8, styled-components 6
- Catppuccin Mocha (dark) and Latte (light) from `@catppuccin/palette`
- Inter and JetBrains Mono, `react-icons`
- No router: two pages (`/` and `/projects`), picked by pathname

## Run locally

Needs Node 24 (`mise install` reads `mise.toml`).

```sh
npm install
npm run dev      # http://localhost:5173
npm run lint
npm run build    # output in dist/
```

## Where things live

| Path | What |
| --- | --- |
| `src/data/` | All content: experience, projects, skills, links. Edit here, not in components. |
| `src/style/Theme.js` | Semantic colour tokens built from the Catppuccin palette. Components use `var(--clr-*)`, never raw hex. |
| `src/components/` | One folder per component. |
| `public/resume.pdf` | The résumé, at a stable URL. |
| `public/_redirects` | Makes Netlify serve `index.html` for `/projects`. |

To feature a project on the home page, set `featured: 1`, `2` or `3` on it in `src/data/projects.js`. The rest appear on `/projects`.

## Quality checks

GitHub Actions (`.github/workflows/ci.yml`) runs lint, build, `npm audit` and gitleaks on every push and pull request. Dependabot opens weekly updates.
