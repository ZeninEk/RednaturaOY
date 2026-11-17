/* ============================================================
   RED NATURA · OYUKI YOSSELIN — LÓGICA DE LA PÁGINA

   Índice
   · Datos editables (anfitrión)
   · Productos y estado del pedido
   · Utilidades (imágenes de producto, enlaces de WhatsApp)
   · Secciones: 1. Anfitrión · 2. Productos
   · Pedido (cajón) y efectos
   · Eventos y portada viva
   ============================================================ */

/* ============================================================
   EDITE AQUÍ SUS DATOS
   ============================================================ */
const HOST = {
  name: "Oyuki Yosselin Coob Antonio",
  city: "", // Opcional. Ej.: "Mérida, Yucatán"
  whatsapp: "5219996018392", // Solo dígitos con lada, ej. 5219990000000. Vacío = el cliente elige el contacto.
  facebook: "https://www.facebook.com/share/1HmpUMkFdd/", // Pegue aquí el enlace de su página o perfil. Vacío = se oculta la sección de Facebook.
  bio: "Le acompaño en la elección de sus productos Rednatura, resuelvo sus dudas y gestiono su pedido de manera personalizada.",
};

const PRODUCTS = [
  {
    id: "dugran-x",
    name: "Dugran-X",
    cat: "Caballeros",
    tag: "Horny goat, L-arginina y glutamina",
    w: 1024,
    h: 1280,
    isNew: true,
    sub: "Nueva imagen · sobre con 10 cápsulas de 450 mg",
  },
  { id: "flussorin", name: "Flussorin NF", cat: "Caballeros", tag: "Próstata y vías urinarias", w: 1080, h: 1151, sub: "Frasco con 60 cápsulas de 500 mg" },
  { id: "probi-go", name: "Probi GO!", cat: "Digestivo", tag: "Probióticos y prebióticos", w: 1080, h: 1121 },
  { id: "zendra", name: "Zendra", cat: "Descanso", tag: "Ashwagandha y melena de león", w: 1080, h: 1133 },
  { id: "fembalanz", name: "Fembalanz", cat: "Intimo", tag: "Probióticos femeninos", w: 1080, h: 1130 },
  { id: "red-kaffi", name: "Red Kaffi", cat: "Peso", tag: "Café con MCT, CLA y L-carnitina", w: 1080, h: 1082 },
  { id: "mush-kaffi", name: "Mush Kaffi", cat: "Energia", tag: "Café con hongos y adaptógenos", w: 1080, h: 1027 },
  { id: "kafichai", name: "Kafichaí", cat: "Energia", tag: "Café chai con ganoderma", w: 1080, h: 1122 },
  { id: "levius", name: "Levius", cat: "Peso", tag: "Control de apetito", w: 1080, h: 1157 },
  { id: "levius-night", name: "Levius Night", cat: "Peso", tag: "Jengibre y tila", w: 1080, h: 1062 },
  { id: "gummys", name: "Gummys", cat: "Peso", tag: "Vinagre de manzana", w: 1080, h: 1142 },
  { id: "geltyvit", name: "Geltyvit Gummys", cat: "Defensas", tag: "Multivitamínico", w: 1080, h: 1153 },
  { id: "4kiddys-gummys", name: "4Kiddy's Gummys", cat: "Ninos", tag: "Para niños", w: 1080, h: 1117 },
  { id: "4kiddys", name: "4Kiddy's NF", cat: "Ninos", tag: "Para niños", w: 1080, h: 1112 },
  { id: "eucabee", name: "Eucabee NF", cat: "Defensas", tag: "Propóleo y eucalipto", w: 1080, h: 1142 },
  { id: "cloori", name: "Cloori", cat: "Digestivo", tag: "Clorofila", w: 1080, h: 1146 },
  { id: "resviv-stick", name: "Resviv NF Stick Pack", cat: "Defensas", tag: "Resveratrol y antioxidantes", w: 1080, h: 1107 },
  { id: "resviv", name: "Resviv NF", cat: "Defensas", tag: "Resveratrol y antioxidantes", w: 1080, h: 1104 },
  { id: "oxialoe", name: "Oxialoe NF", cat: "Digestivo", tag: "Sábila", w: 1080, h: 1136 },
  { id: "blunner", name: "Blunner NF", cat: "Energia", tag: "Energía natural", w: 1080, h: 1286 },
  { id: "renaiss", name: "Renaíss NF", cat: "Piel", tag: "Colágeno", w: 1080, h: 1086 },
  { id: "ventre-tea", name: "Ventre Tea", cat: "Digestivo", tag: "Té depurativo", w: 1080, h: 1154 },
  { id: "norantrix", name: "Norantrix NF", cat: "Peso", tag: "Control de glucosa", w: 1080, h: 1116 },
  { id: "femicol", name: "Femicol", cat: "Intimo", tag: "Infusión femenina", w: 1080, h: 1151 },
  { id: "plenna", name: "Plenna NF", cat: "Intimo", tag: "Equilibrio hormonal", w: 1080, h: 1145 },
  { id: "kronnos", name: "Kronnos+", cat: "Energia", tag: "Activador de NAD", w: 1080, h: 1152 },
  { id: "ant1-vr", name: "Ant1-VR", cat: "Defensas", tag: "Defensas antivirales", w: 1080, h: 1156 },
  { id: "omepax", name: "Omepax", cat: "Corazon", tag: "Omega 3", w: 1080, h: 1090 },
  { id: "kolem", name: "Kolem NF", cat: "Corazon", tag: "Coenzima Q10", w: 1080, h: 1128 },
  { id: "divant", name: "Divant NF", cat: "Peso", tag: "Gymnema sylvestre", w: 1080, h: 1126 },
  { id: "flubi", name: "Flubi", cat: "Digestivo", tag: "Vías urinarias y riñón", w: 1080, h: 1132 },
  { id: "serentra", name: "Serentra", cat: "Descanso", tag: "Estrés y sueño", w: 1080, h: 1085 },
  { id: "desmodim", name: "Desmodim", cat: "Digestivo", tag: "Hígado", w: 988, h: 1088 },
  { id: "dialegri", name: "Dialegri NF", cat: "Digestivo", tag: "Digestión y colon", w: 1080, h: 1107 },
  { id: "levene", name: "Levené NF", cat: "Corazon", tag: "Circulación", w: 1080, h: 1127 },
  { id: "blex", name: "Blex", cat: "Huesos", tag: "Articulaciones", w: 1080, h: 1143 },
  { id: "uc-ii", name: "UC-II NF", cat: "Huesos", tag: "Colágeno tipo II", w: 1080, h: 1128 },
  { id: "senzadol", name: "Senzadol", cat: "Huesos", tag: "Alivio muscular y articular", w: 1080, h: 1116 },
  { id: "renaiss-serum", name: "Renaíss Serum", cat: "Piel", tag: "Sérum facial", w: 1080, h: 1161 },
];
const CATS = [
  "Todos",
  "Digestivo",
  "Descanso",
  "Energia",
  "Peso",
  "Corazon",
  "Intimo",
  "Caballeros",
  "Huesos",
  "Defensas",
  "Ninos",
  "Piel",
];
const CAT_LABEL = {
  Todos: "Todos",
  Digestivo: "Digestivo",
  Descanso: "Estrés y descanso",
  Energia: "Energía y café",
  Peso: "Peso y metabolismo",
  Corazon: "Corazón",
  Intimo: "Mujer",
  Caballeros: "Caballeros",
  Huesos: "Huesos",
  Defensas: "Defensas",
  Ninos: "Niños",
  Piel: "Piel",
};

let filter = "Todos";
const cart = new Map(); // id -> cantidad (el orden de inserción es el orden en que se agregó)
const CART_KEY = "rednatura:pedido:v1";
function loadCart() {
  cart.clear();
  try {
    const raw = JSON.parse(localStorage.getItem(CART_KEY) || "null");
    (raw && Array.isArray(raw.items) ? raw.items : []).forEach(([id, q]) => {
      const n = Math.min(Math.max(parseInt(q, 10) || 0, 0), 99);
      if (n && PRODUCTS.some((p) => p.id === id)) cart.set(id, n);
    });
  } catch (_) {}
}
function saveCart() {
  try {
    localStorage.setItem(CART_KEY, JSON.stringify({ v: 1, items: [...cart] }));
  } catch (_) {}
}
/* Mensaje de WhatsApp: lista numerada en el mismo orden en que se agregó cada producto */
function orderMessage(items, total) {
  const lines = items.map((p, i) => `${i + 1}. ${p.name} × ${cart.get(p.id)}`).join("\n");
  const n = items.length;
  return `Buen día, ${firstName()}. Me gustaría solicitar este pedido de Rednatura:\n\n*MI PEDIDO*\n${lines}\n\n*Total:* ${total} ${total === 1 ? "pieza" : "piezas"} (${n} ${n === 1 ? "producto" : "productos"})\n\n¿Podría confirmarme disponibilidad y precio? Gracias.`;
}
let lastActive = null;
const $ = (s) => document.querySelector(s);

/* Referencias al DOM guardadas una sola vez (evita repetir búsquedas) */
const ui = {
  fab: $("#fab"),
  count: $("#fabCount"),
  drawer: $("#drawer"),
  backdrop: $("#backdrop"),
  body: $("#dBody"),
  foot: $("#dFoot"),
  sub: $("#drawerSub"),
  close: $("#dClose"),
  grid: $("#grid"),
  chips: $("#chips"),
  progress: $("#progress"),
  art: $(".art"),
  topbar: $("#topbar"),
  toast: $("#toast"),
  zoom: $("#zoom"),
  zoomImg: $("#zoomImg"),
  zoomClose: $("#zoomClose"),
  chipbar: $("#chipbar"),
  toTop: $("#toTop"),
  toTopBar: $("#toTopBar"),
};

const motionOK = window.matchMedia("(prefers-reduced-motion: no-preference)").matches;
if (motionOK) document.documentElement.classList.add("motion");

/* Aparición suave al hacer scroll (se omite si se pidió reducir movimiento) */
const io =
  motionOK && "IntersectionObserver" in window
    ? new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
      )
    : null;
function watchReveals() {
  document
    .querySelectorAll(".reveal:not(.in)")
    .forEach((el) => (io ? io.observe(el) : el.classList.add("in")));
}

/* Cada producto se muestra con su propia imagen (carpeta img/, nombre = id del producto) */
const picSrc = (p) => `img/${p.id}.jpeg`;
const thumbSrc = (p) => `img/sm/${p.id}.webp`; /* versión ligera para tarjetas y pedido */

const initials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase() || "A";
const firstName = () => HOST.name.trim().split(/\s+/)[0];
const totalPieces = () => [...cart.values()].reduce((a, b) => a + b, 0);
function waLink(text) {
  const base = HOST.whatsapp ? `https://wa.me/${HOST.whatsapp}` : "https://wa.me/";
  return `${base}?text=${encodeURIComponent(text)}`;
}

/* Nombre letra por letra (cada letra se anima y brilla en secuencia) */

/* ============================================================
   1. ANFITRIÓN
   ============================================================ */
function renderHost() {
  /* Nombre y apellido en grande; el resto de los apellidos debajo, más pequeños */
  const parts = HOST.name.trim().split(/\s+/);
  const h = $("#hostName");
  h.textContent = parts.slice(0, 2).join(" ");
  if (parts.length > 2) {
    const sn = document.createElement("span");
    sn.className = "surname";
    sn.textContent = parts.slice(2).join(" ");
    h.append(sn);
  }
  $("#monogram").textContent = initials(HOST.name);
  $("#hostRole").textContent = HOST.city
    ? `Anfitrión Rednatura · ${HOST.city}`
    : "Anfitrión Rednatura";
  $("#hostBio").textContent = HOST.bio;
  const hi = `Buen día, ${firstName()}. Vi su página de Rednatura y me gustaría recibir más información.`;
  ["#waTop", "#waCta", "#waFloat"].forEach((id) => ($(id).href = waLink(hi)));
  $("#waCta").textContent = `Contactar a ${firstName()}`;
  document.title = `${HOST.name} · Anfitrión Rednatura`;
}

/* Facebook: pone el enlace en todos los botones y oculta la sección si no hay enlace */
function renderSocial() {
  const url = (HOST.facebook || "").trim();
  document.querySelectorAll("[data-fb-only]").forEach((el) => (el.hidden = !url));
  if (!url) return;
  document.querySelectorAll("[data-fb-url]").forEach((el) => (el.href = url));
  const ld = document.createElement("script");
  ld.type = "application/ld+json";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: HOST.name,
    jobTitle: "Anfitriona Rednatura",
    description: HOST.bio,
    sameAs: [url],
  });
  document.head.appendChild(ld);
}

/* ============================================================
   3. PRODUCTOS
   ============================================================ */
function renderChips() {
  ui.chips.innerHTML = CATS.map(
    (c) =>
      `<button class="chip" data-c="${c}" aria-pressed="${c === filter}">${CAT_LABEL[c]}</button>`,
  ).join("");
}

/* Centra el filtro activo dentro de la barra de filtros (sin mover la página) */
function centerChip() {
  const a = ui.chips.querySelector('.chip[aria-pressed="true"]');
  if (!a) return;
  ui.chips.scrollTo({
    left: a.offsetLeft - (ui.chips.clientWidth - a.offsetWidth) / 2,
    behavior: motionOK ? "smooth" : "auto",
  });
}

/* Si el usuario ya bajó por el catálogo, regresa al inicio de la lista filtrada */
function jumpToGrid() {
  const off = ui.topbar.offsetHeight + ui.chipbar.offsetHeight + 16;
  const top = ui.grid.getBoundingClientRect().top + window.scrollY - off;
  if (window.scrollY > top) window.scrollTo({ top, behavior: "instant" });
}

function controls(p) {
  const q = cart.get(p.id) || 0;
  if (!q)
    return `<button class="btn add" data-id="${p.id}" data-act="add">Agregar a mi pedido</button>`;
  return `<div class="qty" role="group" aria-label="Cantidad de ${p.name}">
    <button data-id="${p.id}" data-act="minus" aria-label="Quitar uno">−</button>
    <span aria-live="polite">${q}</span>
    <button data-id="${p.id}" data-act="plus" aria-label="Agregar uno">+</button>
  </div>`;
}

function renderGrid() {
  const list = PRODUCTS.filter((p) => filter === "Todos" || p.cat === filter);
  ui.grid.innerHTML = list
    .map(
      (p, idx) => `
    <article class="card reveal${cart.has(p.id) ? " incart" : ""}${p.isNew ? " isnew" : ""}" style="--i:${idx % 4}" data-card="${p.id}">
      ${p.isNew ? '<span class="newtag" aria-label="Producto nuevo">Nuevo</span>' : ""}
      <button class="pic" type="button" data-zoom="${p.id}" aria-label="Ampliar la ficha de ${p.name}">
        <img src="${thumbSrc(p)}" alt="Ficha de ${p.name}: ${p.tag}" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" onload="this.classList.add('ld')" onerror="if(!this.dataset.f){this.dataset.f=1;this.src='${picSrc(p)}'}else{this.classList.add('ld')}" />
      </button>
      <div class="body">
        <h3>${p.name}</h3>
        <div class="tag">${p.tag}</div>
      </div>
      <div class="ctrl">${controls(p)}</div>
    </article>`,
    )
    .join("");
  watchReveals();
}

/* Destacados (solo caballeros): cada lista [data-opts] muestra sus presentaciones con control de cantidad */
function renderSpot() {
  document.querySelectorAll("[data-opts]").forEach((box) => {
    box.innerHTML = box.dataset.opts
      .split(",")
      .map((id, i) => PRODUCTS.find((x) => x.id === id))
      .filter(Boolean)
      .map(
        (p, i) => `
    <li class="feat-opt${cart.has(p.id) ? " incart" : ""}">
      <button class="fo-pic" type="button" data-zoom="${p.id}" aria-label="Ampliar la ficha de ${p.name}">
        <img src="${thumbSrc(p)}" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" />
      </button>
      <div class="fo-info"><b>${p.name}</b><span>${p.sub || p.tag}</span></div>
      <div class="fo-ctrl">${controls(p)}</div>
    </li>`,
      )
      .join("");
  });
}

function updateCard(id, act, focus) {
  const p = PRODUCTS.find((x) => x.id === id);
  const card = document.querySelector(`[data-card="${id}"]`);
  if (!p || !card) return;
  card.querySelector(".ctrl").innerHTML = controls(p);
  card.classList.toggle("incart", cart.has(id));
  if (!focus) return;
  const target =
    card.querySelector(`[data-act="${cart.has(id) ? act : "add"}"]`) ||
    card.querySelector("[data-act]");
  if (target) target.focus({ preventScroll: true });
}

/* ============================================================
   PEDIDO
   ============================================================ */
function renderCart() {
  renderSpot();
  const items = [...cart.keys()].map((id) => PRODUCTS.find((p) => p.id === id)).filter(Boolean);
  const total = totalPieces();
  const fab = ui.fab;
  fab.classList.toggle("has", total > 0);
  const count = ui.count;
  if (count.textContent !== String(total)) {
    count.textContent = total;
    if (motionOK) {
      count.classList.remove("pop");
      void count.offsetWidth;
      count.classList.add("pop");
    }
  }

  fab.setAttribute(
    "aria-label",
    total ? `Abrir mi pedido, ${total} ${total === 1 ? "pieza" : "piezas"}` : "Abrir mi pedido",
  );
  ui.sub.textContent = total
    ? `${total} ${total === 1 ? "pieza" : "piezas"} · ${items.length} ${items.length === 1 ? "producto" : "productos"}`
    : "";

  if (!total) {
    ui.body.innerHTML = `<div class="empty">
      <svg width="160" height="14" viewBox="0 0 160 14" aria-hidden="true"><path d="M0 7H66M94 7H160" stroke="#D4AF6A" stroke-opacity=".6"/><path d="M80 1l6 6-6 6-6-6z" fill="none" stroke="#D4AF6A"/></svg>
      <p>Su pedido está vacío</p>
      <span>Agregue productos y aquí verá su lista, lista para enviar.</span>
      <a class="btn gold" href="#productos" data-close>Ver catálogo</a>
    </div>`;
    ui.foot.innerHTML = "";
    return;
  }

  ui.body.innerHTML = items
    .map(
      (p, i) => `
    <div class="line" style="--i:${i}">
      <div class="lpic"><img src="${thumbSrc(p)}" alt="" width="${p.w}" height="${p.h}" loading="lazy" decoding="async" /></div>
      <div class="linfo">
        <b>${p.name}</b><span>${p.tag}</span>
        <div class="lq" role="group" aria-label="Cantidad de ${p.name}">
          <button data-id="${p.id}" data-act="minus" aria-label="Quitar uno">−</button>
          <em>${cart.get(p.id)}</em>
          <button data-id="${p.id}" data-act="plus" aria-label="Agregar uno">+</button>
        </div>
      </div>
      <button class="rm" data-id="${p.id}" data-act="remove" aria-label="Quitar ${p.name} del pedido">✕</button>
    </div>`,
    )
    .join("");
  const msg = orderMessage(items, total);
  ui.foot.innerHTML = `
    <div class="sum"><span>Total de piezas</span><b>${total}</b></div>
    <a class="btn gold big" id="waOrder" href="${waLink(msg)}" target="_blank" rel="noopener">Solicitar por WhatsApp</a>
    <button class="clear" id="clear" type="button">Vaciar pedido</button>
    <p class="fine">Confirmaré disponibilidad y precio por WhatsApp.</p>`;
}

/* Aviso breve al agregar al pedido */
let toastTimer;
function showToast(msg) {
  ui.toast.textContent = msg;
  ui.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => ui.toast.classList.remove("show"), 2200);
}

function nudgeFab() {
  if (!motionOK) return;
  const fab = ui.fab;
  fab.classList.add("bump");
  setTimeout(() => fab.classList.remove("bump"), 380);
}

/* Chispas doradas y azules */

/* El frasco vuela en arco hasta el carrito */

function openCart() {
  lastActive = document.activeElement;
  ui.drawer.classList.add("show", "enter");
  ui.backdrop.classList.add("show");
  ui.drawer.setAttribute("aria-hidden", "false");
  document.documentElement.style.overflow = "hidden";
  ui.close.focus({ preventScroll: true });
  setTimeout(() => ui.drawer.classList.remove("enter"), 1200);
}

function closeCart() {
  ui.drawer.classList.remove("show", "enter");
  ui.backdrop.classList.remove("show");
  ui.drawer.setAttribute("aria-hidden", "true");
  document.documentElement.style.overflow = "";
  if (lastActive && lastActive.focus) lastActive.focus({ preventScroll: true });
}

const isOpen = () => ui.drawer.classList.contains("show");

/* Visor para ampliar la ficha completa de un producto */
let lbTrigger = null;
function openZoom(id, trigger) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return;
  lbTrigger = trigger || null;
  ui.zoomImg.src = picSrc(p);
  ui.zoomImg.alt = `Ficha de ${p.name}: ${p.tag}`;
  ui.zoom.classList.add("show");
  ui.zoom.setAttribute("aria-hidden", "false");
  document.documentElement.style.overflow = "hidden";
  ui.zoomClose.focus({ preventScroll: true });
}

function closeZoom() {
  ui.zoom.classList.remove("show");
  ui.zoom.setAttribute("aria-hidden", "true");
  document.documentElement.style.overflow = isOpen() ? "hidden" : "";
  if (lbTrigger && lbTrigger.focus) lbTrigger.focus({ preventScroll: true });
  lbTrigger = null;
}

const isZoomOpen = () => ui.zoom.classList.contains("show");


/* ============================================================
   EVENTOS
   ============================================================ */
document.addEventListener("click", (e) => {
  if (e.target.closest("#fab")) {
    openCart();
    return;
  }

  if (e.target.closest("#toTop")) {
    window.scrollTo({ top: 0, behavior: motionOK ? "smooth" : "auto" });
    return;
  }

  if (
    e.target.closest("#dClose") ||
    e.target.closest("#backdrop") ||
    e.target.closest("[data-close]")
  ) {
    closeCart();
    return;
  }

  if (e.target.closest("#zoom")) {
    closeZoom();
    return;
  }

  const zm = e.target.closest("[data-zoom]");
  if (zm) {
    openZoom(zm.dataset.zoom, zm);
    return;
  }

  const chip = e.target.closest(".chip");
  if (chip) {
    if (chip.dataset.c === filter) return;
    filter = chip.dataset.c;
    renderChips();
    centerChip();
    const g = ui.grid;
    if (!motionOK) {
      renderGrid();
      jumpToGrid();
      return;
    }
    g.classList.add("out");
    setTimeout(() => {
      renderGrid();
      jumpToGrid();
      g.classList.remove("out");
    }, 220);
    return;
  }

  if (e.target.closest("#clear")) {
    const ids = [...cart.keys()];
    cart.clear();
    saveCart();
    ids.forEach((id) => updateCard(id, "add", false));
    renderCart();
    ui.close.focus({ preventScroll: true });
    return;
  }

  const b = e.target.closest("[data-act]");
  if (!b) return;
  const id = b.dataset.id,
    act = b.dataset.act;
  const inDrawer = !!b.closest("#drawer");
  const line = b.closest(".line");
  const q = cart.get(id) || 0;
  const removing = act === "remove" || (act === "minus" && q <= 1);
  if (inDrawer && removing && motionOK && line) {
    if (line.classList.contains("out")) return;
    line.classList.add("out");
    setTimeout(() => change(b, id, act, inDrawer), 260);
    return;
  }
  change(b, id, act, inDrawer);
});

function change(b, id, act, inDrawer) {
  const q = cart.get(id) || 0;
  const card = b.closest(".card");
  const inSpot = !!b.closest(".feat");
  if (act === "add") cart.set(id, 1);
  if (act === "plus") cart.set(id, Math.min(q + 1, 99));
  if (act === "minus") q <= 1 ? cart.delete(id) : cart.set(id, q - 1);
  if (act === "remove") cart.delete(id);
  saveCart();
  updateCard(id, act === "remove" ? "add" : act, !inDrawer && !inSpot);
  renderCart();
  if (inSpot) {
    const sb =
      document.querySelector(`.feat [data-id="${id}"][data-act="${cart.has(id) ? act : "add"}"]`) ||
      document.querySelector(`.feat [data-id="${id}"]`);
    if (sb) sb.focus({ preventScroll: true });
  }
  if (!inDrawer && (act === "add" || act === "plus")) {
    if (card && motionOK) {
      card.classList.remove("flash");
      void card.offsetWidth;
      card.classList.add("flash");
      setTimeout(() => card.classList.remove("flash"), 900);
      flyToCart(card);
    }
    nudgeFab();
    showToast(`${PRODUCTS.find((x) => x.id === id).name} agregado a su pedido`);
  }
  if (inDrawer) {
    const nb =
      ui.drawer.querySelector(`[data-id="${id}"][data-act="${act}"]`) ||
      ui.drawer.querySelector(`[data-id="${id}"]`) ||
      ui.close;
    nb.focus({ preventScroll: true });
  }
}

/* El producto "vuela" en arco hasta el botón Mi pedido */
function flyToCart(card) {
  const img = card.querySelector(".pic img");
  if (!img || !img.animate) return;
  const a = img.getBoundingClientRect(),
    t = ui.fab.getBoundingClientRect();
  if (a.bottom < 0 || a.top > window.innerHeight) return;
  const s = 84,
    cx = a.left + a.width / 2,
    cy = a.top + a.height / 2;
  const g = img.cloneNode();
  g.removeAttribute("loading");
  g.removeAttribute("onload");
  g.removeAttribute("onerror");
  g.className = "fly";
  g.alt = "";
  g.style.cssText = `left:${cx - s / 2}px;top:${cy - s / 2}px;width:${s}px;height:${s}px`;
  document.body.appendChild(g);
  const dx = t.left + t.width / 2 - cx,
    dy = t.top + t.height / 2 - cy;
  const an = g.animate(
    [
      { transform: "translate(0,0) scale(1)", opacity: 1 },
      { transform: `translate(${dx * 0.5}px,${dy * 0.5 - 90}px) scale(.7)`, opacity: 1, offset: 0.5 },
      { transform: `translate(${dx}px,${dy}px) scale(.15)`, opacity: 0.2 },
    ],
    { duration: 750, easing: "cubic-bezier(.45,.05,.3,1)" },
  );
  an.onfinish = an.oncancel = () => g.remove();
}

document.addEventListener("keydown", (e) => {
  if (isZoomOpen()) {
    if (e.key === "Escape") closeZoom();
    else if (e.key === "Tab") {
      e.preventDefault();
      ui.zoomClose.focus();
    }
    return;
  }
  if (!isOpen()) return;
  if (e.key === "Escape") {
    closeCart();
    return;
  }

  if (e.key === "Tab") {
    const f = [...ui.drawer.querySelectorAll("button,a[href]")].filter(
      (el) => el.offsetParent !== null,
    );
    if (!f.length) return;
    const first = f[0],
      last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

/* Barra de progreso, menú y botón de subir (sin lecturas de layout en cada scroll) */
let ticking = false,
  maxScroll = 0;
function measure() {
  maxScroll = document.documentElement.scrollHeight - window.innerHeight;
}
const parallaxOK = motionOK && window.matchMedia("(hover: hover) and (min-width: 781px)").matches;
function onScroll() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const y = window.scrollY,
      r = maxScroll > 0 ? Math.min(y / maxScroll, 1) : 0;
    ui.progress.style.transform = `scaleX(${r})`;
    ui.topbar.classList.toggle("show", y > 480);
    ui.toTop.classList.toggle("show", y > 700);
    ui.toTopBar.style.strokeDashoffset = 131.95 * (1 - r);
    if (parallaxOK && y < 900) ui.art.style.setProperty("--sy", y);
  });
}
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener(
  "resize",
  () => {
    measure();
    onScroll();
  },
  { passive: true },
);
if ("ResizeObserver" in window) new ResizeObserver(measure).observe(document.body);

/* Marca en la barra superior la sección que se está leyendo */
if ("IntersectionObserver" in window) {
  const links = new Map([...document.querySelectorAll("#topnav a")].map((a) => [a.dataset.sec, a]));
  const spy = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        links.forEach((l) => {
          l.classList.remove("active");
          l.removeAttribute("aria-current");
        });
        const cur = links.get(e.target.id);
        if (cur) {
          cur.classList.add("active");
          cur.setAttribute("aria-current", "true");
        }
      }),
    { rootMargin: "-45% 0px -50% 0px" },
  );
  links.forEach((_, id) => {
    const s = document.getElementById(id);
    if (s) spy.observe(s);
  });
}
loadCart();
renderHost();
renderSocial();
renderChips();
renderGrid();
renderCart();
watchReveals();
measure();
onScroll();

/* La barra de filtros cambia de aspecto al quedar fija (se detecta con un observador, no con scroll) */
if ("IntersectionObserver" in window) {
  const sentinel = document.createElement("div");
  sentinel.style.cssText = "height:1px;margin-bottom:-1px;pointer-events:none";
  ui.chipbar.before(sentinel);
  new IntersectionObserver(
    ([e]) => ui.chipbar.classList.toggle("stuck", !e.isIntersecting && e.boundingClientRect.top < 60),
    { rootMargin: "-60px 0px 0px 0px" },
  ).observe(sentinel);
}

/* Si el pedido cambia en otra pestaña, esta se actualiza sola */
window.addEventListener("storage", (e) => {
  if (e.key !== CART_KEY) return;
  loadCart();
  renderGrid();
  renderCart();
});

/* ============================================================
   EFECTOS DE LA PÁGINA (polvo dorado, pausas y luz en tarjetas)
   ============================================================ */

/* Polvo dorado de la portada: pocas partículas, solo transform y opacidad */
(function () {
  const box = $("#dust");
  if (!box || !motionOK) return;
  const n = window.matchMedia("(max-width: 780px)").matches ? 9 : 18;
  const frag = document.createDocumentFragment();
  for (let i = 0; i < n; i++) {
    const s = document.createElement("i");
    const size = 2 + Math.random() * 3.5;
    s.style.cssText =
      `left:${(Math.random() * 100).toFixed(1)}%;width:${size.toFixed(1)}px;height:${size.toFixed(1)}px;` +
      `--dx:${Math.round(Math.random() * 80 - 40)}px;--t:${(9 + Math.random() * 10).toFixed(1)}s;` +
      `--dl:${(-Math.random() * 16).toFixed(1)}s;--o:${(0.35 + Math.random() * 0.5).toFixed(2)}`;
    frag.appendChild(s);
  }
  box.appendChild(frag);
})();

/* Las animaciones que no paran se pausan al salir de pantalla o al cambiar de pestaña */
if ("IntersectionObserver" in window) {
  const live = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.target.classList.toggle("off", !e.isIntersecting)),
    { rootMargin: "80px 0px" },
  );
  document.querySelectorAll("[data-live]").forEach((el) => live.observe(el));
}
document.addEventListener("visibilitychange", () =>
  document.documentElement.classList.toggle("idle", document.hidden),
);

/* Luz dorada que sigue al cursor sobre las tarjetas (solo con mouse) */
if (window.matchMedia("(hover: hover)").matches) {
  let raf = 0,
    px = 0,
    py = 0,
    tgt = null;
  ui.grid.addEventListener(
    "pointermove",
    (e) => {
      const c = e.target.closest(".card");
      if (!c) return;
      tgt = c;
      px = e.clientX;
      py = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = tgt.getBoundingClientRect();
        tgt.style.setProperty("--mx", `${px - r.left}px`);
        tgt.style.setProperty("--my", `${py - r.top}px`);
      });
    },
    { passive: true },
  );
}

/* Fundadores: los números suben hasta su valor al entrar en pantalla */
(function () {
  const els = [...document.querySelectorAll("[data-count]")];
  if (!els.length) return;
  const fmt = (n, pre) => (pre || "") + n.toLocaleString("es-MX");
  const final = (el) => (el.textContent = fmt(+el.dataset.count, el.dataset.prefix));
  if (!motionOK || !("IntersectionObserver" in window)) {
    els.forEach(final);
    return;
  }
  els.forEach((el) => (el.textContent = fmt(0, el.dataset.prefix)));
  const run = (el) => {
    const to = +el.dataset.count,
      pre = el.dataset.prefix,
      dur = 1700,
      t0 = performance.now();
    (function step(t) {
      const k = Math.min((t - t0) / dur, 1),
        e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(Math.round(to * e), pre);
      if (k < 1) requestAnimationFrame(step);
    })(t0);
  };
  const co = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        co.unobserve(e.target);
        run(e.target);
      }),
    { threshold: 0.5 },
  );
  els.forEach((el) => co.observe(el));
})();
