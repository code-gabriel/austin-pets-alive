# austin-pets-alive

Homepage redesign prototype for [Austin Pets Alive!](https://www.austinpetsalive.org): modern, easier to navigate, more serious, and still recognizably on-brand. **Not the official site.**

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
```

## Deploy (Netlify)

Connect this repo in Netlify; `netlify.toml` sets the build command and publish dir. Or run `npx netlify deploy --prod --dir=dist`.

## What changed vs. the current homepage

| Current | Prototype |
|---|---|
| 4-slide carousel, 15+ sections, end-of-year pop-up | One hero, 6 focused sections, no pop-ups |
| Mega-menu with ~70 links, 3 levels deep | 5 top-level items + one Donate button |
| Several competing donate CTAs | One Donate button + one donation module (monthly by default) |
| Campaign promos stacked on homepage | Single slim campaign bar |
| Playful script display font | Brand colors kept, script font dropped for a clean grotesk |

**Brand kept:** orange `#dc5928`, maroon `#84332e`, yellow `#fac053` (from the live site CSS), the "APA!" name and voice, the mission, and the real impact numbers. The live site uses Neuzeit Grotesk (Typekit). The prototype uses Figtree from Google Fonts as a free stand-in. The logo is a placeholder wordmark until APA provides official assets.

**Performance:** zero client-side JavaScript. The mobile menu is a native `<details>` element. The build is about 20 KB of HTML plus one CSS file. Images below the fold are lazy-loaded.

## Why Astro

- Ships static HTML with zero JS by default, which makes it fast on cheap phones.
- Component-based, so it stays maintainable as pages get added.
- Data comes from JSON (`src/data/`), which can later be swapped for build-time fetches.
- Deploys to Netlify, Cloudflare Pages or Vercel free tiers with no adapter.

## Next steps

1. **Live pets:** pull from the Shelterluv API at build time, with a scheduled Netlify build hook (e.g. hourly) to keep listings fresh.
2. **Staff editing:** add a git-based or headless CMS (Decap CMS, Sanity, or Storyblok).
3. **IA:** collapse the mega-menu into about 5 audience paths (Adopt, Foster, Volunteer, Get Pet Help, About), each with a landing page.
4. **Spanish:** add `/es` pages using Astro's i18n routing.
5. **Images:** use Astro `<Image>` for AVIF/WebP and responsive sizes once photos are local.
6. **Accessibility and performance:** Lighthouse target of 95+. Keep WCAG AA contrast (the brand orange is darkened to `#b9471d` for text and buttons).

Sample pet and blog photos are from Unsplash.
