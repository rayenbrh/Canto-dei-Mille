// /src/config/images.js
// ─────────────────────────────────────────────────────────
// OWNER INSTRUCTIONS:
// Replace every placeholder string with your actual image URL or local path.
// Each entry includes a NAME and PLACEMENT note so you know exactly
// which photo goes where. Do not change the key names.
// ─────────────────────────────────────────────────────────

/** @type {Record<string, string>} — fallback URLs when REPLACE_ME placeholders are still in use */
const PLACEHOLDER_RESOLVERS = {
  'hero.background':
    'https://cdn.phototourl.com/free/2026-04-06-bda11389-cbf7-494f-a3e8-eec1dd0f2317.jpg',
  'about.main':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168540.jpg?k=10e567add96681d6e12323535c6404de726767ef765bb6ff0885a18a6384705d&o=',
  'quote.background':
    'https://cdn.phototourl.com/free/2026-04-06-4a04b705-ec4a-4769-8265-ea0bab82411d.jpg',
  'room-1':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168527.jpg?k=1c1b7a69c62e8f0e19bfed42350c05f19d44155d6be8a90020dfe7aff220b762&o=',
  'room-2':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168519.jpg?k=1c289f91bb86e77305f3f0f223366d470a7aafc467636d3c69517e93716a55fa&o=',
  'room-3':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168523.jpg?k=8ae57bb5f8be403945ef7130b2a8851d389206d916db0a2ce0a8113d779ecc26&o=',
  'g1':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168534.jpg?k=f09c610cba924e38bcb814d089e8e927eeb3f943a8b4e2e63047982e55479f7a&o=',
  'g2':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168535.jpg?k=27d136ac16b77989fd410e16f7afceee55d526489cbc45b055c97112a11eb3b8&o=',
  'g3':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168540.jpg?k=10e567add96681d6e12323535c6404de726767ef765bb6ff0885a18a6384705d&o=',
  'g4':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168531.jpg?k=37d3c2c9bef3569a3528e6ea7b52244bcf7be0ce548fe1d504a25863c093a45d&o= ',
  'g5':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/301387147.jpg?k=bfaf4cc5b9c69187318f7a521da577bcadd4cba059659f52115800d393ef6a22&o=',
  'g6':
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/76168536.jpg?k=67c11c1837245f34e65c35ff7926367014ed587938857a67c6df4031a1863771&o=',
  'pwa.icon192':
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=192&h=192&q=80',
  'pwa.icon512':
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=512&h=512&q=80',
  'pwa.ogImage':
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&h=630&q=80',
  'fallback.avatar':
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  'fallback.room':
    'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&q=80',
}

export function resolveAssetUrl(value, resolverKey) {
  if (typeof value === 'string' && value.startsWith('REPLACE_ME')) {
    return PLACEHOLDER_RESOLVERS[resolverKey] ?? PLACEHOLDER_RESOLVERS['hero.background']
  }
  return value
}

export const images = {
  // ── HERO ──────────────────────────────────────────────
  hero: {
    background:
      'REPLACE_ME — Hero Section: full-viewport parallax background. Best: an exterior or garden shot, landscape orientation, high resolution minimum 2400px wide.',
  },

  // ── ABOUT ─────────────────────────────────────────────
  about: {
    main:
      'REPLACE_ME — About Section: large portrait image left column. Best: interior room, hallway, or garden detail. Portrait orientation 4:5.',
  },

  // ── FULL-WIDTH QUOTE BREAK ────────────────────────────
  quote: {
    background:
      'REPLACE_ME — Quote Break Section: full-bleed atmospheric background behind the italic quote. Best: garden, terrace, or exterior at golden hour.',
  },

  // ── ROOMS ─────────────────────────────────────────────
  rooms: [
    {
      id: 'room-1',
      name: 'Twin / Double Room',
      url:
        'REPLACE_ME — Rooms Section, Card 1: room interior. Landscape orientation preferred.',
      features: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Free Wi-Fi'],
    },
    {
      id: 'room-2',
      name: 'Superior Room',
      url:
        'REPLACE_ME — Rooms Section, Card 2: different room interior or detail shot.',
      features: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Garden View'],
    },
    {
      id: 'room-3',
      name: 'Garden View Room',
      url:
        'REPLACE_ME — Rooms Section, Card 3: room with garden view or window detail.',
      features: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Terrace Access'],
    },
  ],

  // ── GALLERY ───────────────────────────────────────────
  gallery: [
    {
      id: 'g1',
      url: 'REPLACE_ME — Gallery, Position 1 (large landscape): exterior facade or garden wide shot.',
      caption: 'The Garden',
    },
    {
      id: 'g2',
      url: 'REPLACE_ME — Gallery, Position 2 (portrait): terrace detail or chair/table.',
      caption: 'The Terrace',
    },
    {
      id: 'g3',
      url: 'REPLACE_ME — Gallery, Position 3 (portrait): room interior close-up.',
      caption: 'A Room',
    },
    {
      id: 'g4',
      url: 'REPLACE_ME — Gallery, Position 4 (portrait): bathroom detail.',
      caption: 'The Bathroom',
    },
    {
      id: 'g5',
      url: 'REPLACE_ME — Gallery, Position 5 (portrait): common lounge or corridor.',
      caption: 'The Lounge',
    },
    {
      id: 'g6',
      url: 'REPLACE_ME — Gallery, Position 6 (large landscape): aerial or wide exterior.',
      caption: 'The Exterior',
    },
  ],

  // ── PWA / META ────────────────────────────────────────
  pwa: {
    icon192:
      'REPLACE_ME — PWA icon 192×192px, used in manifest.json and home screen.',
    icon512:
      'REPLACE_ME — PWA icon 512×512px, used in manifest.json.',
    ogImage:
      'REPLACE_ME — Open Graph image 1200×630px, used in <meta og:image> for social sharing previews.',
  },

  // ── FALLBACKS ─────────────────────────────────────────
  fallback: {
    avatar:
      'REPLACE_ME — Reviews Section: circular avatar placeholder for guest testimonials.',
    room:
      'REPLACE_ME — Rooms Section: shown if a room image fails to load.',
  },
}
