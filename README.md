# Austin Pets Alive! Homepage Redesign

A homepage redesign prototype for [Austin Pets Alive!](https://www.austinpetsalive.org) (APA!). It's meant to be modern, playful and easy to navigate, and still instantly recognizable as APA!.

> **Prototype, not the official website.** Built as a volunteer hackathon project to propose a refresh. Pet listings and blog posts are sample content.

## The idea in one line

Keep everything people love about APA! (the orange-and-green logo, the warm voice, the lifesaving mission) and cut the clutter, so visitors can **adopt, foster, volunteer or give in one or two clicks**.

## What changed from the current homepage

| Today on austinpetsalive.org | In this prototype |
|---|---|
| 4-slide carousel, about 15 stacked sections, end-of-year pop-up | One clear hero, 8 focused sections, no pop-ups |
| Mega-menu with about 70 links, up to 3 levels deep | 5 menu items (Adopt, Foster, Volunteer, Get Pet Help, About) and one Donate button |
| Several competing donate buttons and banners | One Donate button and one simple donation card (monthly by default) |
| Several campaign promos stacked on the homepage | One slim campaign bar ("Wrap a Pet in 2X the Love") |
| Busy layout that is hard to scan on a phone | Mobile-first: single-column sections, 44px tap targets, no sideways scrolling |
| Sponsor logo wall | Kept, as a tidy grid that turns to color on hover |

### Homepage sections

1. **Campaign bar:** the current matching-gift campaign.
2. **Hero:** the mission, "Find your new best friend" and Donate buttons, and a "140K+ lives saved" sticker.
3. **Impact:** 140,000+ lives saved, 7,831 adoptions in 2025, and 10,959 foster placements in 2025.
4. **Four ways to save a life:** Adopt, Foster, Volunteer, Give monthly.
5. **Featured pets:** adoptable dogs and cats with quick filters.
6. **Donate:** a monthly or one-time card with an impact line ("$50 a month covers vaccines for 5 kittens"). That line is a placeholder; confirm the figure with APA.
7. **News:** the latest stories from the blog.
8. **Sponsors:** all current sponsors from the live site.
9. **Footer:** newsletter sign-up, address, hours, phone, social links and simplified links.

### Brand: recognizable, but refreshed

- **Logo:** APA!'s official wordmark, full color in the header and white in the footer.
- **Colors:** the brand palette from the live site, modernized.
  - **Orange** `#e8622c` leads; `#b9471d` is used where text needs extra contrast.
  - **Maroon** `#84332e` anchors.
  - **Yellow** `#fac053` highlights.
  - **Soft tints** of the brand's sky blue and leaf green add playful variety.
- **Type:** *Bricolage Grotesque* for friendly, modern headlines and *Figtree* for easy-to-read body text. These are free stand-ins for the licensed Neuzeit Grotesk.
- **Personality:** tilted stickers, highlighter swashes, wavy dividers, paw-print details and gentle hover wiggles. The playful touches sit on a clean, spacious layout.

---

## About the current site (austinpetsalive.org)

*Summary of the live production site as reviewed on November 20, 2026.*

**Who they are.** Austin Pets Alive! is an Austin, Texas nonprofit, founded in 2008. It focuses on the animals most at risk of euthanasia: parvo puppies, neonatal kittens, cats with feline leukemia, dogs with behavior challenges, and more. Its mission is *"promoting and providing the resources, education, and programs needed to eliminate the killing of companion animals."* APA! is known for creating first-of-their-kind lifesaving programs ("Innovation is in our blood") and for helping keep Austin a No Kill city.

**Impact (from the homepage).**
- 140,000+ lives saved since 2008. The About page says "over 100,000", so the two pages disagree.
- 7,831 adoptions in 2025.
- 10,959 foster placements in 2025.

**Locations and contact.**
- **Main shelter:** 1156 West Cesar Chavez, Austin, TX 78703. Open noon to 6 PM daily. Phone 512-961-6519.
- **Elsewhere:** an adoption center in Huntersville, NC, and a partnership with Hays County Pets Alive (HCPA!) and PAWS.

**What the site covers.**
- **Adopt:** dogs, cats and other animals, pets being rehomed, adoption FAQs. Applications go through Shelterluv.
- **Foster:** cats, dogs and bottle babies, with FAQs and resources.
- **Volunteer:** opportunities and getting started. Volunteer login is on Better Impact.
- **Donate:** one-time, monthly ("Constant Companions"), tribute gifts, urgent needs, stock, kennel sponsorship, Walmart Roundup.
- **Programs:**
  - Barn Cat
  - Dog Behavior
  - Feline Leukemia
  - Medical Triage & Wellness
  - Neonatal Kitten
  - Parvo Puppy
  - P.A.S.S.
  - Pet Pals
  - Ringworm
  - Transport
- **Other:**
  - pet help resources
  - a clinic
  - training
  - thrift and retail stores
  - events, such as Second Chance Saturdays and an Austin FC partnership
  - a blog
  - careers
  - financials

**Trust signals.** Charity Navigator 4-star, Candid Platinum 2026, several "Best of Austin" awards, and a large group of sponsors and foundations, including Maddie's Fund, Petco Love, Best Friends, Purina and PetSmart.

**Opportunities we saw.**
- **Navigation:** the menu is very deep, with about 70 links, overlapping "Donate" and "Ways to Give" sections, and a few broken or mislinked items.
- **Homepage:** it tries to say everything at once. A carousel, four promos, three callouts and a pop-up compete for attention, and there are several donate prompts.
- **Consistency:** stats differ between pages, and social links differ between the header and footer.
- **Spanish:** Spanish-language help is hard to find.

---

## Technical details

<details>
<summary><strong>Run it locally</strong></summary>

Requires Node 24 (see `.nvmrc`).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
```

If you use mise and have no global Node: `mise x node@24.18.0 -- npm run dev`.

**Known quirk:** Astro's hot reload sometimes keeps serving old CSS after an edit changes a component's markup and styles at the same time. If the page looks unstyled, restart the dev server. If that doesn't fix it, also delete `node_modules/.vite`.
</details>

<details>
<summary><strong>Deploy (Netlify)</strong></summary>

- **Recommended:** in Netlify, choose **Add new site → Import from Git** and pick this repo. `netlify.toml` already sets the build command (`npm run build`) and the publish folder (`dist`). Every push to `main` redeploys, and every pull request gets a preview URL.
- **Command line:** `npx netlify-cli deploy --prod --dir=dist`.
- **Other hosts:** Cloudflare Pages and Vercel also work with no changes.
</details>

<details>
<summary><strong>Stack and why Astro</strong></summary>

- **[Astro 5](https://astro.build):** a static site generator that ships **zero client-side JavaScript** by default, so pages load fast even on budget phones.
- **Plain scoped CSS:** no framework. Brand colors and other design values are CSS variables in `src/styles/global.css`.
- **No JavaScript in the browser:** the mobile menu is a native `<details>` element, and the donation and newsletter forms are UI only.
- **Performance:** about 20 KB of HTML and one CSS file. Images below the fold lazy-load. Fonts come from Google Fonts with `display=swap`.
- **Accessibility:**
  - a "skip to content" link
  - semantic page landmarks
  - visible focus rings
  - WCAG AA color contrast
  - tap targets of 44px or more
  - support for the reduce-motion setting
</details>

<details>
<summary><strong>Project structure</strong></summary>

```
public/
  apa-logo.svg         official APA! wordmark
  favicon.svg
src/
  layouts/Base.astro   <head>, fonts, global CSS
  components/
    Header.astro       campaign bar, logo, nav, mobile menu
    Footer.astro       newsletter, contact, links
  pages/index.astro    homepage sections
  data/
    pets.json          sample adoptable pets (swap for Shelterluv)
    posts.json         sample blog posts
    sponsors.json      sponsors from the live site (logos load from austinpetsalive.org)
  styles/global.css    brand tokens and shared styles
netlify.toml           build and cache headers
```
</details>

<details>
<summary><strong>Next steps</strong></summary>

1. **Live pets:** fetch listings from the Shelterluv API at build time, and schedule a Netlify build hook (for example, hourly) to keep them fresh.
2. **Staff editing:** add a git-based or headless CMS (Decap CMS, Sanity or Storyblok) for news, campaigns and stats.
3. **Inner pages:** build a landing page for each of the five main menu items, and fold the current mega-menu into them.
4. **Spanish:** add `/es` pages with Astro's i18n routing.
5. **Images:** use Astro `<Image>` for AVIF/WebP and responsive sizes. Host the sponsor logos locally.
6. **Real fonts:** switch to APA!'s licensed Neuzeit Grotesk (Typekit) if they want an exact brand match.
7. **Quality bar:** Lighthouse 95+ on mobile, plus an automated accessibility check in CI.
</details>

<details>
<summary><strong>Credits</strong></summary>

- The APA! logo, sponsor logos and brand colors belong to Austin Pets Alive! and their respective owners. They are used here only to show the redesign.
- Sample pet and blog photos are from [Unsplash](https://unsplash.com).
</details>
