// src/config/contact.js
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// CONTACT CONFIGURATION
// To change the WhatsApp number: edit whatsappRaw below.
// Write the full international number with any formatting you
// like — the normalizer strips everything automatically.
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ── HELPER ─────────────────────────────────────────────────
// Strips ALL non-digit characters (+, spaces, dashes, parens)
// so the result is safe for https://wa.me/{digits}
// NEVER use placeholder letters like X in whatsappRaw —
// only real digits (or formatting characters that get stripped).
export function normalizeWhatsAppDigits(value) {
  return String(value).replace(/\D/g, '')
}

// ── PHONE ───────────────────────────────────────────────────
// Write your real number here in any readable format:
// e.g. "+39 055 123 4567" or "0039-055-1234567"
const whatsappRaw = '+39 328 0073854'

export const CONTACT = {
  // Digits-only string built automatically — never edit this line
  whatsappNumber: normalizeWhatsAppDigits(whatsappRaw),

  // Pre-filled message shown in WhatsApp chat when user taps button.
  // If the project is single-language, only whatsappMessage is used.
  // If bilingual (i18n), the component picks by locale automatically.
  whatsappMessage: "Hello, I'd like to get in touch.", // EN
  whatsappMessageIT: 'Salve, vorrei mettermi in contatto.', // IT

  // Human-readable display number (used in tooltips / contact UI)
  phoneDisplay: '+39 328 0073854',

  // Click-to-call href
  phoneHref: 'tel:+393280073854',
}
