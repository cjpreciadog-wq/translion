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

// ---------- Galería de fotos por servicio ----------

const GALLERIES = {
  transporte: {
    title: "Transporte de carga pesada",
    images: [
      "assets/gallery/transporte-1.jpg",
      "assets/gallery/transporte-2.jpg",
      "assets/gallery/transporte-3.jpg",
      "assets/gallery/transporte-4.jpg",
    ],
  },
  izaje: {
    title: "Maniobras de izaje",
    images: ["assets/gallery/izaje-1.jpg", "assets/gallery/izaje-2.jpg"],
  },
  alquiler: {
    title: "Alquiler de equipos",
    images: ["assets/gallery/alquiler-1.jpg", "assets/gallery/alquiler-2.jpg"],
  },
};

function initGallery() {
  const modal = document.getElementById("gallery-modal");
  if (!modal) return;

  const titleEl = document.getElementById("gallery-title");
  const imageEl = document.getElementById("gallery-image");
  const counterEl = document.getElementById("gallery-counter");
  const prevBtn = modal.querySelector(".gallery-prev");
  const nextBtn = modal.querySelector(".gallery-next");

  let currentImages = [];
  let currentIndex = 0;
  let lastFocusedEl = null;

  function render() {
    const src = currentImages[currentIndex];
    imageEl.src = src;
    imageEl.alt = `${titleEl.textContent} — foto ${currentIndex + 1}`;
    counterEl.textContent = `${currentIndex + 1} / ${currentImages.length}`;
    const multiple = currentImages.length > 1;
    prevBtn.hidden = !multiple;
    nextBtn.hidden = !multiple;
  }

  function open(key, triggerEl) {
    const gallery = GALLERIES[key];
    if (!gallery) return;
    currentImages = gallery.images;
    currentIndex = 0;
    titleEl.textContent = gallery.title;
    lastFocusedEl = triggerEl || document.activeElement;
    render();
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".gallery-close").focus();
  }

  function close() {
    modal.hidden = true;
    document.body.style.overflow = "";
    if (lastFocusedEl) lastFocusedEl.focus();
  }

  function step(delta) {
    if (currentImages.length < 2) return;
    currentIndex = (currentIndex + delta + currentImages.length) % currentImages.length;
    render();
  }

  document.querySelectorAll("[data-gallery]").forEach((el) => {
    el.addEventListener("click", () => open(el.dataset.gallery, el));
  });

  modal.querySelectorAll("[data-gallery-close]").forEach((el) => {
    el.addEventListener("click", close);
  });

  prevBtn.addEventListener("click", () => step(-1));
  nextBtn.addEventListener("click", () => step(1));

  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setWhatsAppLinks();
  initYear();
  initGallery();
});
