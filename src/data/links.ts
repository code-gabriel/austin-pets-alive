// Production URLs on austinpetsalive.org, taken from the live site's own navigation (Nov 2026).
// The demo links here so every click lands on the real page.
const SITE = 'https://www.austinpetsalive.org';
const DONATE = 'https://donate.austinpetsalive.org';

export const links = {
  home: SITE + '/',
  adopt: SITE + '/adopt',
  adoptDogs: SITE + '/adopt/dogs',
  adoptCats: SITE + '/adopt/cats',
  adoptOther: SITE + '/adopt/other-animals',
  foster: SITE + '/foster',
  volunteer: SITE + '/volunteer',
  volunteerLogin: 'https://app.betterimpact.com/Login/Volunteer',
  petHelp: SITE + '/resources/community-programs',
  about: SITE + '/about',
  ourStory: SITE + '/about/our-story',
  programs: SITE + '/programs',
  numbers: SITE + '/about/numbers',
  leadership: SITE + '/about/leadership',
  careers: SITE + '/about/careers',
  events: SITE + '/events',
  thrift: SITE + '/shop/thrift',
  blog: SITE + '/blog',
  contact: SITE + '/contact',
  donate: SITE + '/donate',
  giveMonthly: DONATE + '/give/397557/#!/donation/checkout',
  campaign: DONATE + '/campaign/864424/donate?c_src=-Nov2026&c_src2=HomepageBannerEOY',
  sponsorships: SITE + '/donate/sponsorships',
  newsletter: SITE + '/resources/newsletter-signup-form',
  privacy: SITE + '/privacy-policy',
  donorPrivacy: SITE + '/donor-privacy-policy',
};

export const speciesLink = (species: string) =>
  species === 'Dog' ? links.adoptDogs : species === 'Cat' ? links.adoptCats : links.adoptOther;

// Path to a file in public/, respecting the deploy base path (e.g. /austin-pets-alive on GitHub Pages).
export const asset = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
