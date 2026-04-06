/** @type {Record<'en' | 'it', Record<string, unknown>>} */
export const translations = {
  en: {
    meta: {
      title: 'Canto dei Mille · Florence',
    },
    nav: {
      about: 'About',
      rooms: 'Rooms',
      amenities: 'Amenities',
      location: 'Location',
      contact: 'Contact',
      bookNow: 'Book Now',
      tagline: 'Florence · Italy',
    },
    a11y: {
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      prevTestimonial: 'Previous testimonial',
      nextTestimonial: 'Next testimonial',
      slideDot: 'Go to slide',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      mapIframe: 'Map — Canto dei Mille, Florence',
    },
    hero: {
      eyebrow: 'Campo di Marte · Florence, Italy',
      title: 'Canto dei Mille',
      subtitle: 'A quiet retreat in the heart of Florence',
      ctaPrimary: 'Reserve a Room',
      ctaSecondary: 'Discover the House',
      scroll: 'Scroll',
      ariaHero: 'Canto dei Mille — Florence',
    },
    about: {
      eyebrow: 'The House',
      title: 'A Florentine Guest House Like No Other',
      subtitle: 'Est. in the heart of Campo di Marte',
      p1: 'Canto dei Mille is a boutique affittacamere on Via Frusa 16, where the quiet streets of Campo di Marte meet the warmth of Italian hospitality. Morning light moves through the garden; corridors breathe like a private home rather than a hotel.',
      p2: "Six to seven thoughtfully appointed rooms, eleven beds and seven bathrooms welcome guests who value calm, detail, and space to breathe between Florence's masterpieces. Our team speaks English and Italian, ready to arrange your days without intruding on the stillness you came for.",
      p3: 'This is not a grand palace — it is a house that opens its doors: terracotta tones, linen-soft silence, and the sense that Florence, at last, is yours to live slowly.',
      stats: { rooms: 'Rooms', bathrooms: 'Bathrooms', beds: 'Beds', rating: 'Rating' },
      reviewsLine: 'Rated 9.2 / 10 Excellent across 288+ guest reviews',
    },
    quote: {
      text: 'Florence does not reveal herself at once — but this house does.',
    },
    rooms: {
      eyebrow: 'Where You Sleep',
      title: 'The Rooms',
      body: 'Each room is composed for rest: crisp linen, private bathrooms, air conditioning, flat-screen television, and views that lean toward the garden — a calm prelude to Florence beyond the door.',
      viewRoom: 'View Room',
      cards: {
        'room-1': {
          name: 'Twin / Double Room',
          features: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Free Wi-Fi'],
        },
        'room-2': {
          name: 'Superior Room',
          features: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Garden View'],
        },
        'room-3': {
          name: 'Garden View Room',
          features: ['Air Conditioning', 'Flat-Screen TV', 'Private Bathroom', 'Terrace Access'],
        },
      },
    },
    amenities: {
      eyebrow: 'The Experience',
      title: 'Everything Prepared for You',
      body: 'From the first cup of morning light to the last quiet hour, we anticipate what makes a stay effortless — so you can focus on Florence, and on rest.',
      items: {
        wifi: 'Free Wi-Fi',
        ac: 'Air Conditioning',
        garden: 'Garden',
        terrace: 'Terrace',
        lounge: 'Shared Lounge',
        pets: 'Pets Allowed',
        concierge: 'Concierge',
        nonsmoking: 'Non-Smoking',
        tv: 'Flat-Screen TV',
        bathroom: 'Private Bathroom',
        luggage: 'Luggage Storage',
        heating: 'Heating',
      },
    },
    gallery: {
      eyebrow: 'The Spaces',
      title: 'Light, Stone & Stillness',
      captions: {
        g1: 'The Garden',
        g2: 'The Terrace',
        g3: 'A Room',
        g4: 'The Bathroom',
        g5: 'The Lounge',
        g6: 'The Exterior',
      },
    },
    location: {
      eyebrow: 'Find Us',
      title: 'In the Soul of Florence',
      p1: "Campo di Marte carries the rhythm of everyday Florence — cafés opening quietly, cyclists crossing the avenues, the stadium's glow at dusk. Here you are close to the heart of the city, yet removed from the densest crowds.",
      p2: 'Tree-lined streets, local markets, and the soft pace of a residential quarter make this neighborhood a place to return to after long walks among the Renaissance.',
      address: 'Via Frusa 16, 50131 Florence, Italy',
      distances: [
        { place: 'Artemio Franchi Stadium', dist: '0.2 km' },
        { place: 'Nelson Mandela Forum', dist: '5 min walk' },
        { place: 'Accademia Gallery', dist: '2.8 km' },
        { place: 'Piazza del Duomo', dist: '3.1 km' },
        { place: 'Florence Peretola Airport', dist: '7.4 km' },
      ],
    },
    reviews: {
      eyebrow: 'Guest Voices',
      title: 'What People Say',
      badges: [
        { platform: 'Google', score: '4.7 / 5' },
        { platform: 'Trivago', score: '9.2 / 10' },
        { platform: 'TripAdvisor', score: '4.8 / 5' },
        { platform: 'Planet of Hotels', score: '9.0 / 10' },
      ],
      testimonials: [
        {
          quote:
            'We felt like we were staying in a private home — quiet, immaculate, and minutes from everything that matters in Florence.',
          name: 'Elena R.',
          country: 'Spain',
          flag: '🇪🇸',
          stars: 5,
        },
        {
          quote:
            'The garden light in the morning, the gentle staff, the beds — this is the Florence we dreamed of, not the one rushed through in crowds.',
          name: 'James M.',
          country: 'United Kingdom',
          flag: '🇬🇧',
          stars: 5,
        },
        {
          quote:
            'Campo di Marte is a revelation. Canto dei Mille became our refuge after long days of art and walking.',
          name: 'Chiara V.',
          country: 'Italy',
          flag: '🇮🇹',
          stars: 5,
        },
      ],
    },
    contact: {
      eyebrow: 'Reach Us',
      title: 'Begin Your Stay',
      address: 'Via Frusa 16, 50131 Florence',
      hours: 'Check-in from 14:00 · Check-out by 10:00',
      bookingLinks: ['Booking.com', 'TripAdvisor', 'Agoda'],
      form: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone (optional)',
        checkin: 'Check-in date',
        checkout: 'Check-out date',
        message: 'Message',
        submit: 'Send Enquiry',
      },
      toast: "Thank you. We'll be in touch shortly.",
      toastClose: 'Close',
    },
    footer: {
      tagline: 'Florence · Italy',
      social: { instagram: 'Instagram', facebook: 'Facebook' },
      cols: {
        about: { title: 'About', link: 'The House' },
        rooms: { title: 'Rooms', link: 'Stay With Us' },
        location: { title: 'Location', link: 'Campo di Marte' },
        contact: { title: 'Contact', link: 'Reach Us' },
      },
      legal: '© 2025 Canto dei Mille · All rights reserved',
      license: 'Lic. 048017AFR2189 · Florence, Italy',
      languages: 'English & Italian Spoken',
      quote: 'Somewhere between art and sleep.',
    },
  },

  it: {
    meta: {
      title: 'Canto dei Mille · Firenze',
    },
    nav: {
      about: 'La casa',
      rooms: 'Camere',
      amenities: 'Servizi',
      location: 'Dove siamo',
      contact: 'Contatti',
      bookNow: 'Prenota',
      tagline: 'Firenze · Italia',
    },
    a11y: {
      openMenu: 'Apri menu',
      closeMenu: 'Chiudi menu',
      prevTestimonial: 'Recensione precedente',
      nextTestimonial: 'Recensione successiva',
      slideDot: 'Vai alla slide',
      themeToLight: 'Passa al tema chiaro',
      themeToDark: 'Passa al tema scuro',
      mapIframe: 'Mappa — Canto dei Mille, Firenze',
    },
    hero: {
      eyebrow: 'Campo di Marte · Firenze, Italia',
      title: 'Canto dei Mille',
      subtitle: 'Un rifugio silenzioso nel cuore di Firenze',
      ctaPrimary: 'Prenota una camera',
      ctaSecondary: 'Scopri la casa',
      scroll: 'Scorri',
      ariaHero: 'Canto dei Mille — Firenze',
    },
    about: {
      eyebrow: 'La casa',
      title: 'Una guest house fiorentina come nessun’altra',
      subtitle: 'Nel cuore di Campo di Marte',
      p1: 'Canto dei Mille è un affittacamere di charme in Via Frusa 16, dove le vie tranquille di Campo di Marte incontrano il calore dell’ospitalità italiana. La luce del mattino attraversa il giardino; i corridoi respirano come una casa privata, non come un hotel.',
      p2: 'Sei o sette camere curate, undici posti letto e sette bagni accolgono chi cerca calma, dettaglio e spazio tra un capolavoro e l’altro di Firenze. Il nostro team parla inglese e italiano, pronto a organizzare le vostre giornate senza disturbare la quiete che cercate.',
      p3: 'Non è un palazzo monumentale — è una casa che apre le porte: toni terracotta, silenzio morbido come il lino, e la sensazione che Firenze, finalmente, sia vostra da vivere con lentezza.',
      stats: { rooms: 'Camere', bathrooms: 'Bagni', beds: 'Letti', rating: 'Valutazione' },
      reviewsLine: 'Valutazione 9,2 / 10 Eccellente su oltre 288 recensioni',
    },
    quote: {
      text: 'Firenze non si rivela tutta in una volta — ma questa casa sì.',
    },
    rooms: {
      eyebrow: 'Dove dormite',
      title: 'Le camere',
      body: 'Ogni camera è pensata per il riposo: biancheria fresca, bagni privati, aria condizionata, TV a schermo piatto e viste che si aprono sul giardino — un preludio calmo alla Firenze oltre la porta.',
      viewRoom: 'Vedi la camera',
      cards: {
        'room-1': {
          name: 'Camera doppia / matrimoniale',
          features: ['Aria condizionata', 'TV a schermo piatto', 'Bagno privato', 'Wi‑Fi gratuito'],
        },
        'room-2': {
          name: 'Camera superior',
          features: ['Aria condizionata', 'TV a schermo piatto', 'Bagno privato', 'Vista giardino'],
        },
        'room-3': {
          name: 'Camera vista giardino',
          features: ['Aria condizionata', 'TV a schermo piatto', 'Bagno privato', 'Accesso terrazza'],
        },
      },
    },
    amenities: {
      eyebrow: 'L’esperienza',
      title: 'Tutto pronto per voi',
      body: 'Dalla prima luce del mattino all’ultima ora silenziosa, anticipiamo ciò che rende il soggiorno naturale — perché possiate concentrarvi su Firenze e sul riposo.',
      items: {
        wifi: 'Wi‑Fi gratuito',
        ac: 'Aria condizionata',
        garden: 'Giardino',
        terrace: 'Terrazza',
        lounge: 'Salone condiviso',
        pets: 'Animali ammessi',
        concierge: 'Concierge',
        nonsmoking: 'Non fumatori',
        tv: 'TV a schermo piatto',
        bathroom: 'Bagno privato',
        luggage: 'Deposito bagagli',
        heating: 'Riscaldamento',
      },
    },
    gallery: {
      eyebrow: 'Gli spazi',
      title: 'Luce, pietra e quiete',
      captions: {
        g1: 'Il giardino',
        g2: 'La terrazza',
        g3: 'Una camera',
        g4: 'Il bagno',
        g5: 'Il salone',
        g6: 'L’esterno',
      },
    },
    location: {
      eyebrow: 'Trovaci',
      title: 'Nel cuore di Firenze',
      p1: 'Campo di Marte ha il ritmo della Firenze quotidiana — bar che aprono piano, bici che attraversano i viali, la luce dello stadio al crepuscolo. Qui siete vicini al centro, ma lontani dalla folla più fitta.',
      p2: 'Vie alberate, mercati di quartiere e il passo morbido di un rione residenziale rendono questo angolo un luogo a cui tornare dopo lunghe passeggiate tra il Rinascimento.',
      address: 'Via Frusa 16, 50131 Firenze, Italia',
      distances: [
        { place: 'Stadio Artemio Franchi', dist: '0,2 km' },
        { place: 'Nelson Mandela Forum', dist: '5 min a piedi' },
        { place: 'Galleria dell’Accademia', dist: '2,8 km' },
        { place: 'Piazza del Duomo', dist: '3,1 km' },
        { place: 'Aeroporto di Firenze Peretola', dist: '7,4 km' },
      ],
    },
    reviews: {
      eyebrow: 'Ospiti',
      title: 'Cosa dicono',
      badges: [
        { platform: 'Google', score: '4,7 / 5' },
        { platform: 'Trivago', score: '9,2 / 10' },
        { platform: 'TripAdvisor', score: '4,8 / 5' },
        { platform: 'Planet of Hotels', score: '9,0 / 10' },
      ],
      testimonials: [
        {
          quote:
            'Sembrava di stare in casa — silenzio, tutto impeccabile, a pochi minuti da ciò che conta davvero a Firenze.',
          name: 'Elena R.',
          country: 'Spagna',
          flag: '🇪🇸',
          stars: 5,
        },
        {
          quote:
            'La luce del giardino al mattino, il team discreto, i letti — la Firenze che sognavamo, non quella consumata tra la folla.',
          name: 'James M.',
          country: 'Regno Unito',
          flag: '🇬🇧',
          stars: 5,
        },
        {
          quote:
            'Campo di Marte è una rivelazione. Canto dei Mille è diventato il nostro rifugio dopo le giornate tra arte e passeggiate.',
          name: 'Chiara V.',
          country: 'Italia',
          flag: '🇮🇹',
          stars: 5,
        },
      ],
    },
    contact: {
      eyebrow: 'Contattaci',
      title: 'Inizia il tuo soggiorno',
      address: 'Via Frusa 16, 50131 Firenze',
      hours: 'Check-in dalle 14:00 · Check-out entro le 10:00',
      bookingLinks: ['Booking.com', 'TripAdvisor', 'Agoda'],
      form: {
        name: 'Nome',
        email: 'Email',
        phone: 'Telefono (facoltativo)',
        checkin: 'Data di arrivo',
        checkout: 'Data di partenza',
        message: 'Messaggio',
        submit: 'Invia richiesta',
      },
      toast: 'Grazie. Ti risponderemo a breve.',
      toastClose: 'Chiudi',
    },
    footer: {
      tagline: 'Firenze · Italia',
      social: { instagram: 'Instagram', facebook: 'Facebook' },
      cols: {
        about: { title: 'La casa', link: 'La struttura' },
        rooms: { title: 'Camere', link: 'Soggiorna con noi' },
        location: { title: 'Dove siamo', link: 'Campo di Marte' },
        contact: { title: 'Contatti', link: 'Scrivici' },
      },
      legal: '© 2025 Canto dei Mille · Tutti i diritti riservati',
      license: 'Lic. 048017AFR2189 · Firenze, Italia',
      languages: 'Parliamo inglese e italiano',
      quote: 'Tra l’arte e il sonno.',
    },
  },
}

export function getByPath(obj, path) {
  const parts = path.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = cur[p]
  }
  return cur
}
