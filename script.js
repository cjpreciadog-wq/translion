// ============================================================
// TRANSLION LOGISTICS — lógica del sitio
// ============================================================

// Número de WhatsApp en formato internacional (Perú = 51 + número)
const WHATSAPP_NUMBER = "51926153710";
const DEFAULT_MESSAGE = "Hola, quisiera más información sobre sus productos/servicios.";

function buildWhatsAppUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function setWhatsAppLinks() {
  const url = buildWhatsAppUrl(DEFAULT_MESSAGE);
  document.querySelectorAll(
    "#nav-whatsapp, .hero-whatsapp, .float-whatsapp, .contact-whatsapp-link, .contact-big-cta"
  ).forEach((el) => el.setAttribute("href", url));
}

function initYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded", () => {
  setWhatsAppLinks();
  initYear();
});
