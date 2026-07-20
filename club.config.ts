/**
 * ============================================================================
 *  CLUB CONFIG — the single source of truth for this website.
 * ============================================================================
 *
 *  This is the ONLY file you edit to re-skin the template for a new club.
 *  Change the values below; the entire site (every page, color, logo, roster,
 *  schedule, price, and SEO tag) updates from here. No component edits needed.
 *
 *  See README.md → "Re-skin checklist" for the field-by-field walkthrough.
 *
 *  Types live at the bottom of the file so the data reads first.
 * ============================================================================
 */

export const club: ClubConfig = {
  // ── IDENTITY ──────────────────────────────────────────────────────────────
  name: 'F3 Elite',
  legalName: 'F3 Elite Flag Football Club',
  tagline: 'Competitive youth flag football — DFW',
  foundedYear: 2021,
  region: 'Dallas–Fort Worth, TX',
  // Canonical production URL (used for metadata, OpenGraph, and sitemap).
  url: 'https://f3elite.com',

  // ── BRAND ─────────────────────────────────────────────────────────────────
  // Sampled from the F3 logo mark. Change these three and the whole UI re-skins.
  colors: {
    primary: '#2E9E4F', // logo green
    secondary: '#1A1D1F', // near-black
    accent: '#FFFFFF', // white
  },
  // Logos live in /public/brand. Provide a light mark (for dark backgrounds)
  // and a dark mark (for light backgrounds).
  logo: {
    light: '/brand/f3-logo-light.png',
    dark: '/brand/f3-logo-dark.png',
    width: 213,
    height: 120,
  },

  // ── PRIMARY CALLS TO ACTION ───────────────────────────────────────────────
  // External registration/checkout URL (TeamSnap, LeagueApps, Jotform, etc.).
  registrationUrl: 'https://f3elite.leagueapps.com/register',

  // ── CONTACT ───────────────────────────────────────────────────────────────
  contact: {
    email: 'info@f3elite.com',
    phone: '(469) 555-0134',
    address: {
      line1: 'Prairie Creek Sports Complex',
      line2: '2001 Cannon Dr',
      city: 'Plano',
      state: 'TX',
      zip: '75074',
    },
    // Google Maps embed URL for the practice facility. Get one from
    // Google Maps → Share → Embed a map → copy the src="" value.
    mapEmbedSrc:
      'https://www.google.com/maps?q=Prairie+Creek+Sports+Complex+Plano+TX&output=embed',
    // Optional: a form-service POST endpoint (Formspree, Basin, Web3Forms…).
    // Leave empty ('') to fall back to a mailto: submission.
    formEndpoint: '',
  },

  // ── SOCIAL LINKS ──────────────────────────────────────────────────────────
  social: [
    { platform: 'Instagram', url: 'https://instagram.com/f3elite' },
    { platform: 'Facebook', url: 'https://facebook.com/f3elite' },
    { platform: 'YouTube', url: 'https://youtube.com/@f3elite' },
    { platform: 'X', url: 'https://x.com/f3elite' },
  ],

  // ── FLAG FOOTBALL FINDER BACKLINK ─────────────────────────────────────────
  // Ships in the footer of every client site. Do not remove.
  flagFootballFinder: {
    label: 'Find us on Flag Football Finder',
    url: 'https://flagfootballfinder.com/clubs/f3-elite',
  },

  // ── HERO ──────────────────────────────────────────────────────────────────
  hero: {
    headline: 'Built to Compete.',
    subhead:
      'F3 Elite develops DFW youth into complete flag football players — coached by former pros, measured by results.',
    image: '/hero-athlete.jpg',
    primaryCta: { label: 'Join a Team', href: '/register' },
    secondaryCta: { label: 'View Schedule', href: '/schedule' },
  },

  // ── QUICK STATS BAND ──────────────────────────────────────────────────────
  stats: [
    { value: '6', label: 'Competitive Teams' },
    { value: '8U–14U', label: 'Age Groups' },
    { value: '5', label: 'Seasons Played' },
    { value: '3', label: 'Pro-Athlete Coaches' },
  ],

  // ── COACHES / STAFF ───────────────────────────────────────────────────────
  coaches: [
    {
      slug: 'morris-claiborne',
      name: 'Morris Claiborne',
      role: 'Director of Coaches',
      credentials: [
        'NFL First-Round Pick',
        'Jim Thorpe Award Winner',
        'Super Bowl Champion',
      ],
      photo: '/coaches/morris-claiborne.jpg',
      emphasis: [
        'Defensive back technique',
        'Coverage fundamentals',
        'Ball skills',
        'Flag-pulling angles',
      ],
      bio: 'Morris developed from a high school athlete in Shreveport, Louisiana, into one of the most accomplished defensive backs in college football. At LSU he earned consensus All-American honors and won the Jim Thorpe Award as the nation’s top defensive back, then was selected sixth overall in the NFL Draft and played nine professional seasons — earning a Super Bowl championship along the way. As F3 Elite’s Director of Coaches, Morris sets the standard for how every athlete in the program is developed, translating elite defensive technique, film study, and competitive discipline into instruction young players can apply immediately.',
    },
    {
      slug: 'kevin-dickens',
      name: 'Kevin Dickens Jr.',
      role: 'Receivers & Speed Coach',
      credentials: [
        'Five-Time Flag Football All-American',
        'National Champion',
        'Athlete Developer',
      ],
      photo: '/coaches/kevin-dickens.jpg',
      emphasis: [
        'Wide receiver development',
        'Route running',
        'Releases & separation',
        'Speed & movement efficiency',
      ],
      bio: 'Kevin brings more than two decades of competitive flag football experience and a deep understanding of the modern flag game. A former collegiate track and field athlete at the University of Nebraska–Lincoln, he became a five-time Flag Football All-American and a collegiate national champion. Beyond his playing accomplishments, Kevin has built and led competitive programs and development pathways for youth, women’s, and adult players, translating the game into practical, position-specific instruction.',
    },
    {
      slug: 'stephanie-raymond',
      name: 'Stephanie Raymond',
      role: 'Quarterbacks & Offense Coach',
      credentials: [
        'WNBA Draft Pick',
        'Professional Athlete',
        'Championship Quarterback',
      ],
      photo: '/coaches/stephanie-raymond.jpg',
      emphasis: [
        'Quarterback development',
        'Offensive decision-making',
        'Field vision',
        'Leadership',
      ],
      bio: 'Stephanie brings an exceptional multi-sport background and a powerful perspective on leadership and athlete development. After a standout career at Northern Illinois University she was selected in the 2007 WNBA Draft and competed professionally, including internationally. She later transitioned into football as the quarterback of the Chicago Blitz, leading the team to a championship and earning Offensive Player of the Year. She teaches the field vision, pre- and post-snap decision-making, and communication that define a quarterback.',
    },
    {
      slug: 'marcus-bellamy',
      name: 'Marcus Bellamy',
      role: 'Head Coach — 10U Boys',
      credentials: ['USA Football Certified', 'Former College WR', '8 Yrs Coaching'],
      photo: '/coaches/marcus-bellamy.jpg',
      emphasis: ['Fundamentals', 'Catching mechanics', 'Spacing & timing', 'Sportsmanship'],
      bio: 'Marcus focuses on the developmental years, where habits are set. A former college receiver and USA Football certified coach, he builds confidence through repetition and keeps practices fast, fun, and competitive — so young athletes fall in love with the game while learning to play it the right way.',
    },
    {
      slug: 'andre-whitfield',
      name: 'Andre Whitfield',
      role: 'Head Coach — 8U Boys',
      credentials: ['Youth Development Specialist', 'CPR/First-Aid Certified', '6 Yrs Coaching'],
      photo: '/coaches/andre-whitfield.jpg',
      emphasis: ['Introduction to flag', 'Movement & agility', 'Rules & positioning', 'Teamwork'],
      bio: 'Andre leads our youngest athletes’ introduction to competitive flag. He specializes in early athletic development — movement, agility, and the confidence to compete — and keeps every rep age-appropriate, structured, and encouraging so first-time players leave the season wanting more.',
    },
    {
      slug: 'tasha-coleman',
      name: 'Tasha Coleman',
      role: 'Head Coach — 12U Girls',
      credentials: ['Former D-I Athlete', 'USA Football Certified', 'Strength & Conditioning'],
      photo: '/coaches/tasha-coleman.jpg',
      emphasis: ['Route concepts', 'Defensive leverage', 'Conditioning', 'Competitive mindset'],
      bio: 'Tasha brings a Division-I competitive edge to the girls’ program. A certified coach with a strength-and-conditioning background, she develops athletes who are fast, physical within the rules, and mentally tough — and she models the standard she asks her players to reach.',
    },
  ],

  // ── TEAMS ─────────────────────────────────────────────────────────────────
  // `coachSlug` links to a coach above. `level` is free text (your terms).
  teams: [
    {
      slug: '8u-boys',
      name: 'F3 Elite 8U',
      ageGroup: '8U',
      division: 'Boys',
      level: 'Developmental',
      coachSlug: 'andre-whitfield',
      practiceDay: 'Tuesdays · 6:00 PM',
      homeField: 'Prairie Creek Sports Complex — Field 3',
      blurb: 'First competitive reps for our youngest athletes — fundamentals, fun, and a real love for the game.',
    },
    {
      slug: '10u-boys',
      name: 'F3 Elite 10U',
      ageGroup: '10U',
      division: 'Boys',
      level: 'Competitive',
      coachSlug: 'marcus-bellamy',
      practiceDay: 'Tuesdays & Thursdays · 6:00 PM',
      homeField: 'Prairie Creek Sports Complex — Field 2',
      blurb: 'Building the toolkit — catching, spacing, and the timing that wins one-on-one matchups.',
    },
    {
      slug: '12u-boys',
      name: 'F3 Elite 12U',
      ageGroup: '12U',
      division: 'Boys',
      level: 'Elite / Travel',
      coachSlug: 'kevin-dickens',
      practiceDay: 'Mondays & Wednesdays · 6:30 PM',
      homeField: 'Prairie Creek Sports Complex — Field 1',
      blurb: 'Route detail, releases, and separation — coached by a five-time All-American receiver.',
    },
    {
      slug: '14u-boys',
      name: 'F3 Elite 14U',
      ageGroup: '14U',
      division: 'Boys',
      level: 'Elite / Travel',
      coachSlug: 'morris-claiborne',
      practiceDay: 'Mondays & Wednesdays · 7:00 PM',
      homeField: 'Prairie Creek Sports Complex — Field 1',
      blurb: 'Our flagship team — pro-level defensive technique and tournament-tested competitive discipline.',
    },
    {
      slug: '12u-girls',
      name: 'F3 Elite 12U Girls',
      ageGroup: '12U',
      division: 'Girls',
      level: 'Competitive',
      coachSlug: 'tasha-coleman',
      practiceDay: 'Tuesdays & Thursdays · 6:30 PM',
      homeField: 'Prairie Creek Sports Complex — Field 2',
      blurb: 'Fast, physical-within-the-rules, and mentally tough — the girls’ competitive pathway.',
    },
    {
      slug: '14u-girls',
      name: 'F3 Elite 14U Girls',
      ageGroup: '14U',
      division: 'Girls',
      level: 'Elite / Travel',
      coachSlug: 'stephanie-raymond',
      practiceDay: 'Mondays & Wednesdays · 7:00 PM',
      homeField: 'Prairie Creek Sports Complex — Field 1',
      blurb: 'Quarterback-driven offense and championship habits — led by a pro championship QB.',
    },
  ],

  // ── SCHEDULE ──────────────────────────────────────────────────────────────
  season: {
    label: 'Fall 2026',
    note: 'League play Sep–Oct, playoffs & tournaments in November. Times and locations subject to change — check your team channel for updates.',
  },
  // `teamSlugs` references teams above. `type`: game | tournament | scrimmage | bye.
  schedule: [
    { id: 'e01', date: '2026-09-12', time: '9:00 AM', teamSlugs: ['8u-boys', '10u-boys'], type: 'scrimmage', opponent: 'Preseason Jamboree', location: 'Prairie Creek — Fields 2 & 3', home: true },
    { id: 'e02', date: '2026-09-12', time: '11:00 AM', teamSlugs: ['12u-boys', '14u-boys'], type: 'scrimmage', opponent: 'Preseason Jamboree', location: 'Prairie Creek — Field 1', home: true },
    { id: 'e03', date: '2026-09-19', time: '10:00 AM', teamSlugs: ['14u-boys'], type: 'game', opponent: 'Frisco Force', location: 'Prairie Creek — Field 1', home: true },
    { id: 'e04', date: '2026-09-19', time: '11:30 AM', teamSlugs: ['12u-boys'], type: 'game', opponent: 'Allen Assault', location: 'Prairie Creek — Field 1', home: true },
    { id: 'e05', date: '2026-09-19', time: '9:00 AM', teamSlugs: ['14u-girls'], type: 'game', opponent: 'McKinney Lightning', location: 'Prairie Creek — Field 2', home: true },
    { id: 'e06', date: '2026-09-26', time: '10:00 AM', teamSlugs: ['10u-boys', '8u-boys'], type: 'game', opponent: 'Richardson Renegades', location: 'Huffhines Park, Richardson', home: false },
    { id: 'e07', date: '2026-09-26', time: '1:00 PM', teamSlugs: ['12u-girls'], type: 'game', opponent: 'Prosper Storm', location: 'Prairie Creek — Field 2', home: true },
    { id: 'e08', date: '2026-10-03', time: 'All Day', teamSlugs: ['12u-boys', '14u-boys', '14u-girls'], type: 'tournament', opponent: 'DFW Fall Classic', location: 'Toyota Soccer Complex, Frisco', home: false },
    { id: 'e09', date: '2026-10-10', time: '10:00 AM', teamSlugs: ['14u-boys'], type: 'game', opponent: 'Arlington Bolts', location: 'Prairie Creek — Field 1', home: true },
    { id: 'e10', date: '2026-10-10', time: '11:30 AM', teamSlugs: ['10u-boys'], type: 'game', opponent: 'Plano Patriots', location: 'Prairie Creek — Field 2', home: true },
    { id: 'e11', date: '2026-10-17', time: '9:00 AM', teamSlugs: ['8u-boys'], type: 'game', opponent: 'Wylie Wolves', location: 'Founders Park, Wylie', home: false },
    { id: 'e12', date: '2026-10-17', time: '12:00 PM', teamSlugs: ['12u-boys', '12u-girls'], type: 'game', opponent: 'Little Elm Lobos', location: 'Prairie Creek — Field 1', home: true },
    { id: 'e13', date: '2026-10-24', time: '10:00 AM', teamSlugs: ['14u-girls'], type: 'game', opponent: 'Frisco Fury', location: 'Prairie Creek — Field 2', home: true },
    { id: 'e14', date: '2026-10-31', time: 'BYE', teamSlugs: ['8u-boys', '10u-boys', '12u-boys', '14u-boys', '12u-girls', '14u-girls'], type: 'bye', opponent: 'Halloween — No Games', location: '—', home: true },
    { id: 'e15', date: '2026-11-07', time: 'All Day', teamSlugs: ['8u-boys', '10u-boys', '12u-boys', '14u-boys', '12u-girls', '14u-girls'], type: 'tournament', opponent: 'North Texas Championship', location: 'The Colony Five Star Complex', home: false },
    { id: 'e16', date: '2026-11-14', time: 'All Day', teamSlugs: ['12u-boys', '14u-boys', '14u-girls'], type: 'tournament', opponent: 'Regional Qualifier', location: 'Round Rock Multipurpose Complex', home: false },
    { id: 'e17', date: '2026-11-21', time: '10:00 AM', teamSlugs: ['8u-boys', '10u-boys', '12u-boys', '14u-boys', '12u-girls', '14u-girls'], type: 'game', opponent: 'F3 Elite Family Bowl (Intrasquad)', location: 'Prairie Creek — All Fields', home: true },
  ],

  // ── REGISTER: PRICING TIERS ───────────────────────────────────────────────
  pricing: {
    intro:
      'One transparent price per season. Uniforms, coaching, field time, and league fees included — no surprise costs mid-season.',
    tiers: [
      {
        name: 'Developmental',
        price: '$295',
        cadence: 'per season',
        description: '8U — the introduction to competitive flag.',
        features: [
          '1 practice per week',
          '8-game league season',
          'Reversible jersey + flags',
          'End-of-season jamboree',
          'USA Football certified coaches',
        ],
        highlighted: false,
      },
      {
        name: 'Competitive',
        price: '$395',
        cadence: 'per season',
        description: '10U & 12U/14U Girls — league play with real reps.',
        features: [
          '2 practices per week',
          '8-game league season',
          'Full uniform kit',
          '1 tournament entry included',
          'Position-specific coaching',
          'Player development tracking',
        ],
        highlighted: true,
      },
      {
        name: 'Elite / Travel',
        price: '$525',
        cadence: 'per season',
        description: '12U & 14U Boys, 14U Girls — tournament-focused.',
        features: [
          '2–3 practices per week',
          'League season + 3 tournaments',
          'Premium uniform kit',
          'Pro-athlete position coaches',
          'Film & performance reviews',
          'Regional travel roster',
        ],
        highlighted: false,
      },
    ],
    note: 'Sibling and multi-season discounts available. Financial assistance offered — email us, no family turned away for cost.',
  },

  // ── REGISTER: FAQ ─────────────────────────────────────────────────────────
  faqs: [
    {
      q: 'What ages and divisions do you offer?',
      a: 'We field 8U, 10U, 12U, and 14U boys teams plus 12U and 14U girls teams. Placement is by age as of the season start date; email us if your athlete is on the border between divisions.',
    },
    {
      q: 'Do players need prior experience?',
      a: 'No. Our 8U and developmental groups are built for first-time players. More experienced athletes are challenged on our competitive and travel rosters. Every athlete is developed at the right level.',
    },
    {
      q: 'What’s included in the registration fee?',
      a: 'Coaching, field and practice time, league fees, and a uniform kit are all included. Competitive and Elite tiers include tournament entries. There are no surprise mid-season costs.',
    },
    {
      q: 'When and where are practices?',
      a: 'Practices are held at Prairie Creek Sports Complex in Plano. Days and times vary by team — see each team page for its practice schedule.',
    },
    {
      q: 'What is the time commitment?',
      a: 'Expect 1–3 practices per week depending on tier, plus games on Saturdays through the Fall season (September–November). Travel teams add select-weekend tournaments.',
    },
    {
      q: 'Is financial assistance available?',
      a: 'Yes. We offer sibling and multi-season discounts and need-based financial assistance. No family is turned away for cost — reach out and we’ll work with you.',
    },
    {
      q: 'What is your refund policy?',
      a: 'Full refund up to two weeks before the first practice, prorated (less uniform cost) through the first week of the season. After that, fees are non-refundable.',
    },
  ],

  // ── ABOUT ─────────────────────────────────────────────────────────────────
  about: {
    story: [
      'F3 Elite started in 2021 with one 12U team, a rented field, and a simple belief: youth flag football deserved real coaching. Too many programs treated the sport as recreation-only — we saw athletes who wanted to compete and get better.',
      'Five seasons later we field six competitive teams across the Dallas–Fort Worth metroplex, coached by former NFL, professional, and All-American athletes. Our players have competed in regional tournaments, developed into complete athletes, and — most importantly — kept coming back.',
      'We’re still the same club at heart: serious about development, obsessed with the details, and built for families who want their kids challenged, supported, and part of something that competes.',
    ],
    values: [
      {
        title: 'Develop the Whole Athlete',
        body: 'Speed, technique, football IQ, and confidence. We coach the details that transfer to every sport and every level.',
      },
      {
        title: 'Compete With Class',
        body: 'We play hard and we play right. Effort, sportsmanship, and respect for the game are non-negotiable.',
      },
      {
        title: 'Coach Like It Matters',
        body: 'Every practice is planned, every rep has a purpose. Pro-level standards, delivered in a way kids can use.',
      },
      {
        title: 'Family First',
        body: 'Transparent pricing, no family turned away for cost, and a sideline culture parents are proud to be part of.',
      },
    ],
  },

  // ── SPONSORS (placeholder logo row) ───────────────────────────────────────
  sponsors: [
    { name: 'Metroplex Orthopedics' },
    { name: 'Lone Star Sports Nutrition' },
    { name: 'DFW Turf & Field' },
    { name: 'Cannon Dr. Grill' },
    { name: 'North Texas Physical Therapy' },
  ],

  // ── HOME: FEATURED TEAMS ──────────────────────────────────────────────────
  featuredTeamSlugs: ['14u-boys', '12u-boys', '14u-girls'],

  // ── NAVIGATION ────────────────────────────────────────────────────────────
  nav: [
    { label: 'Teams', href: '/teams' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'About', href: '/about' },
    { label: 'Register', href: '/register' },
    { label: 'Contact', href: '/contact' },
  ],

  // ── SEO DEFAULTS ──────────────────────────────────────────────────────────
  seo: {
    defaultTitle: 'F3 Elite — Competitive Youth Flag Football | DFW',
    titleTemplate: '%s | F3 Elite Flag Football',
    description:
      'F3 Elite is a competitive youth flag football club in Dallas–Fort Worth. Boys & girls 8U–14U, coached by former pro and All-American athletes. Join a team today.',
    keywords: [
      'youth flag football',
      'DFW flag football',
      'Dallas flag football club',
      'Plano flag football',
      'competitive flag football',
      'kids flag football',
      'girls flag football',
    ],
    ogImage: '/og-image.png',
    twitterHandle: '@f3elite',
  },
};

/**
 * ============================================================================
 *  TYPES — you generally do not need to touch these to re-skin.
 * ============================================================================
 */
export interface CTA {
  label: string;
  href: string;
}

export interface Coach {
  slug: string;
  name: string;
  role: string;
  credentials: string[];
  photo: string;
  emphasis: string[];
  bio: string;
}

export interface Team {
  slug: string;
  name: string;
  ageGroup: string;
  division: string;
  level: string;
  coachSlug: string;
  practiceDay: string;
  homeField: string;
  blurb: string;
}

export type EventType = 'game' | 'tournament' | 'scrimmage' | 'bye';

export interface ScheduleEvent {
  id: string;
  date: string; // ISO YYYY-MM-DD
  time: string;
  teamSlugs: string[];
  type: EventType;
  opponent: string;
  location: string;
  home: boolean;
}

export interface PricingTier {
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  highlighted: boolean;
}

export interface ClubConfig {
  name: string;
  legalName: string;
  tagline: string;
  foundedYear: number;
  region: string;
  url: string;
  colors: { primary: string; secondary: string; accent: string };
  logo: { light: string; dark: string; width: number; height: number };
  registrationUrl: string;
  contact: {
    email: string;
    phone: string;
    address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      zip: string;
    };
    mapEmbedSrc: string;
    formEndpoint: string;
  };
  social: { platform: string; url: string }[];
  flagFootballFinder: { label: string; url: string };
  hero: {
    headline: string;
    subhead: string;
    image: string;
    primaryCta: CTA;
    secondaryCta: CTA;
  };
  stats: { value: string; label: string }[];
  coaches: Coach[];
  teams: Team[];
  season: { label: string; note: string };
  schedule: ScheduleEvent[];
  pricing: {
    intro: string;
    tiers: PricingTier[];
    note: string;
  };
  faqs: { q: string; a: string }[];
  about: {
    story: string[];
    values: { title: string; body: string }[];
  };
  sponsors: { name: string; logo?: string }[];
  featuredTeamSlugs: string[];
  nav: CTA[];
  seo: {
    defaultTitle: string;
    titleTemplate: string;
    description: string;
    keywords: string[];
    ogImage: string;
    twitterHandle: string;
  };
}

// ── Derived helpers (used across the app; no need to edit) ───────────────────
export const getTeam = (slug: string) => club.teams.find((t) => t.slug === slug);
export const getCoach = (slug: string) =>
  club.coaches.find((c) => c.slug === slug);
export const getTeamCoach = (team: Team) => getCoach(team.coachSlug);
export const fullAddress = () => {
  const a = club.contact.address;
  return `${a.line1}, ${a.line2 ? a.line2 + ', ' : ''}${a.city}, ${a.state} ${a.zip}`;
};

export default club;
