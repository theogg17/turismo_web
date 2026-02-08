const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}

const i18n = {
  es: {
    common: {
      ".lang-selector label": "Idioma",
      ".wsp-float": "WhatsApp",
      '.wsp-float@aria-label': "Contactar por WhatsApp"
    },
    pages: {
      "index.html": {
        ".menu-links a:nth-child(1)": "Inicio",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Reseñas",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".tag": "Turismo cultural de alto nivel en Montevideo",
        ".lead": "Descubrí Montevideo con una guía altamente valorada por viajeros exigentes: contexto histórico sólido, mirada local auténtica y experiencias diseñadas con precisión.",
        ".section-grid article:nth-child(1) h2": "Tour de Carnaval",
        ".section-grid article:nth-child(2) h2": "Tour General Montevideo",
        ".section-grid article:nth-child(3) h2": "Tour Judío",
        ".section-grid article:nth-child(4) h2": "Tour Punta del Este",
        ".section-grid article:nth-child(5) h2": "Montevideo by Night",
        ".cta h2": "Experiencias curadas para viajeros que buscan excelencia",
        ".featured-reviews .section-head h2": "Reseñas destacadas",
        ".featured-reviews .section-head a": "Ver todas las reseñas",
        ".contact-section h2": "¿Hablamos por WhatsApp?",
        ".contact-form button": "Enviar consulta"
      },
      "tours.html": {
        ".menu-links a:nth-child(1)": "Inicio",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Reseñas",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Tours regulares en Montevideo",
        ".tour-list article:nth-child(1) h2": "Tour de Carnaval",
        ".tour-list article:nth-child(2) h2": "Tour General Montevideo",
        ".tour-list article:nth-child(3) h2": "Tour Judío",
        ".tour-list article:nth-child(4) h2": "Tour Punta del Este",
        ".tour-list article:nth-child(5) h2": "Una propuesta exclusiva para la noche"
      },
      "perfil.html": {
        ".menu-links a:nth-child(1)": "Inicio",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Reseñas",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Perfil profesional"
      },
      "resenas.html": {
        ".menu-links a:nth-child(1)": "Inicio",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Reseñas",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Reseñas en plataformas independientes"
      },
      "montevideo-by-night.html": {
        ".lang-selector label": "Idioma",
        ".night-menu .menu-links a:nth-child(1)": "Tours Gabriela",
        ".night-menu .menu-links a:nth-child(2)": "Tours diurnos",
        ".night-menu .menu-links a:nth-child(3)": "Perfil guía",
        ".night-menu .menu-links a:nth-child(4)": "Reseñas"
      }
    }
  },
  en: {
    common: {
      ".lang-selector label": "Language",
      ".wsp-float": "WhatsApp",
      '.wsp-float@aria-label': "Contact on WhatsApp"
    },
    pages: {
      "index.html": {
        ".menu-links a:nth-child(1)": "Home",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Profile",
        ".menu-links a:nth-child(4)": "Reviews",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".tag": "High-end cultural tourism in Montevideo",
        ".lead": "Discover Montevideo with a highly rated guide: strong historical context, authentic local perspective, and carefully designed experiences.",
        ".section-grid article:nth-child(1) h2": "Carnival Tour",
        ".section-grid article:nth-child(2) h2": "Classic Montevideo Tour",
        ".section-grid article:nth-child(3) h2": "Jewish Heritage Tour",
        ".section-grid article:nth-child(4) h2": "Punta del Este Tour",
        ".section-grid article:nth-child(5) h2": "Montevideo by Night",
        ".cta h2": "Curated experiences for travelers seeking excellence",
        ".featured-reviews .section-head h2": "Featured reviews",
        ".featured-reviews .section-head a": "See all reviews",
        ".contact-section h2": "Shall we chat on WhatsApp?",
        ".contact-form button": "Send inquiry"
      },
      "tours.html": {
        ".menu-links a:nth-child(1)": "Home",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Profile",
        ".menu-links a:nth-child(4)": "Reviews",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Regular tours in Montevideo",
        ".tour-list article:nth-child(1) h2": "Carnival Tour",
        ".tour-list article:nth-child(2) h2": "Classic Montevideo Tour",
        ".tour-list article:nth-child(3) h2": "Jewish Heritage Tour",
        ".tour-list article:nth-child(4) h2": "Punta del Este Tour",
        ".tour-list article:nth-child(5) h2": "An exclusive night proposal"
      },
      "perfil.html": {
        ".menu-links a:nth-child(1)": "Home",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Profile",
        ".menu-links a:nth-child(4)": "Reviews",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Professional profile"
      },
      "resenas.html": {
        ".menu-links a:nth-child(1)": "Home",
        ".menu-links a:nth-child(2)": "Tours",
        ".menu-links a:nth-child(3)": "Profile",
        ".menu-links a:nth-child(4)": "Reviews",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Reviews on independent platforms"
      },
      "montevideo-by-night.html": {
        ".night-menu .menu-links a:nth-child(1)": "Gabriela Tours",
        ".night-menu .menu-links a:nth-child(2)": "Day tours",
        ".night-menu .menu-links a:nth-child(3)": "Guide profile",
        ".night-menu .menu-links a:nth-child(4)": "Reviews"
      }
    }
  },
  pt: {
    common: {
      ".lang-selector label": "Idioma",
      ".wsp-float": "WhatsApp",
      '.wsp-float@aria-label': "Contato pelo WhatsApp"
    },
    pages: {
      "index.html": {
        ".menu-links a:nth-child(1)": "Início",
        ".menu-links a:nth-child(2)": "Passeios",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Avaliações",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".tag": "Turismo cultural de alto nível em Montevidéu",
        ".lead": "Descubra Montevidéu com uma guia muito bem avaliada: contexto histórico sólido, olhar local autêntico e experiências bem planejadas.",
        ".section-grid article:nth-child(1) h2": "Tour de Carnaval",
        ".section-grid article:nth-child(2) h2": "Tour Geral de Montevidéu",
        ".section-grid article:nth-child(3) h2": "Tour Judaico",
        ".section-grid article:nth-child(4) h2": "Tour Punta del Este",
        ".section-grid article:nth-child(5) h2": "Montevideo by Night",
        ".cta h2": "Experiências curadas para viajantes exigentes",
        ".featured-reviews .section-head h2": "Avaliações em destaque",
        ".featured-reviews .section-head a": "Ver todas as avaliações",
        ".contact-section h2": "Vamos falar no WhatsApp?",
        ".contact-form button": "Enviar consulta"
      },
      "tours.html": {
        ".menu-links a:nth-child(1)": "Início",
        ".menu-links a:nth-child(2)": "Passeios",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Avaliações",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Passeios regulares em Montevidéu",
        ".tour-list article:nth-child(1) h2": "Tour de Carnaval",
        ".tour-list article:nth-child(2) h2": "Tour Geral de Montevidéu",
        ".tour-list article:nth-child(3) h2": "Tour Judaico",
        ".tour-list article:nth-child(4) h2": "Tour Punta del Este",
        ".tour-list article:nth-child(5) h2": "Uma proposta exclusiva para a noite"
      },
      "perfil.html": {
        ".menu-links a:nth-child(1)": "Início",
        ".menu-links a:nth-child(2)": "Passeios",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Avaliações",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Perfil profissional"
      },
      "resenas.html": {
        ".menu-links a:nth-child(1)": "Início",
        ".menu-links a:nth-child(2)": "Passeios",
        ".menu-links a:nth-child(3)": "Perfil",
        ".menu-links a:nth-child(4)": "Avaliações",
        ".menu-links a:nth-child(5)": "MVD by Night",
        ".sub-header h1": "Avaliações em plataformas independentes"
      },
      "montevideo-by-night.html": {
        ".night-menu .menu-links a:nth-child(1)": "Passeios Gabriela",
        ".night-menu .menu-links a:nth-child(2)": "Passeios diurnos",
        ".night-menu .menu-links a:nth-child(3)": "Perfil da guia",
        ".night-menu .menu-links a:nth-child(4)": "Avaliações"
      }
    }
  }
};

const page = window.location.pathname.split("/").pop() || "index.html";

function applyMap(map = {}) {
  Object.entries(map).forEach(([selector, text]) => {
    const [sel, attr] = selector.split("@");
    const el = document.querySelector(sel);
    if (!el) return;
    if (attr) {
      el.setAttribute(attr, text);
    } else {
      el.textContent = text;
    }
  });
}

function applyLanguage(lang) {
  const pack = i18n[lang] || i18n.es;
  applyMap(pack.common);
  applyMap((pack.pages && pack.pages[page]) || {});
  document.documentElement.lang = lang;
  const select = document.getElementById("lang-select");
  if (select) select.value = lang;
  localStorage.setItem("siteLang", lang);
}

const select = document.getElementById("lang-select");
const saved = localStorage.getItem("siteLang") || "es";
if (select) {
  select.addEventListener("change", (e) => applyLanguage(e.target.value));
}
applyLanguage(saved);
