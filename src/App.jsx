import { useState } from "react";

const IMG_ANTHEON = "/images/meli-antheon.webp";
const IMG_KASTANO = "/images/meli-kastano.webp";
const IMG_PEFKOU = "/images/meli-pefkou.webp";
const IMG_BEES = "/images/melisses.webp";
const IMG_HIVES_MOUNT = "/images/kypseles-vouno.webp";
const IMG_SMOKERS_VALLEY = "/images/kampos.webp";
const IMG_ZYGISMA = "/images/zygisma.webp";
const MACHINE_IMGS = [
  "/images/mixani-1.webp",
  "/images/mixani-2.webp",
  "/images/mixani-3.webp",
  "/images/mixani-4.webp",
  "/images/mixani-5.webp"
];

/* ============================================================
   ΡΥΘΜΙΣΕΙΣ — άλλαξε εδώ τα στοιχεία σου
   ============================================================ */
const SHOP = {
  email: "notopoulosgiorgos@gmail.com",   // εδώ έρχονται οι παραγγελίες
  phone: "698 503 0144",
  location: "Αλεξάνδρεια Ημαθίας, ΤΚ 59300",
  facebook: "https://www.facebook.com/notopoulos",
};

/* ============================================================
   ΠΡΟΪΟΝΤΑ — για νέο προϊόν αντέγραψε ένα μπλοκ { ... }
   ============================================================ */
const PRODUCTS = [
  {
    id: 1,
    variety: "ΑΝΘΕΩΝ",
    name: "Μέλι Ανθέων",
    weight: "1 κιλό",
    price: 10.0,
    image: IMG_ANTHEON,
    desc: "Αγνό φυσικό μέλι ανθέων με έντονο άρωμα, απαλή λουλουδένια γεύση και χρυσαφί χρώμα. Οι μέλισσές μας το συλλέγουν την άνοιξη, όταν ανθίζει ο κάμπος της Ημαθίας και της Πέλλας. Με φυσικά σάκχαρα, βιταμίνες, ιχνοστοιχεία και αντιοξειδωτικά, είναι μια θρεπτική πηγή ενέργειας για όλη την οικογένεια.",
  },
  {
    id: 2,
    variety: "ΚΑΣΤΑΝΟ",
    name: "Μέλι Καστανιάς",
    weight: "1 κιλό",
    price: 12.0,
    image: IMG_KASTANO,
    soldOut: true,   // <-- άλλαξέ το σε false όταν έρθει νέο απόθεμα
    desc: "Αγνό φυσικό μέλι καστανιάς, σκούρο, με γήινο άρωμα και χαρακτηριστική ελαφριά πικράδα στο τέλος. Συλλέγεται το καλοκαίρι από τα καστανοδάση του βουνού. Από τα πιο πλούσια μέλια σε ιχνοστοιχεία και μέταλλα, με έντονη γεύση που ξεχωρίζει.",
  },
  {
    id: 3,
    variety: "ΠΕΥΚΟΥ",
    name: "Μέλι Πεύκου",
    weight: "1 κιλό",
    price: 10.0,
    image: IMG_PEFKOU,
    desc: "Αγνό φυσικό μέλι πεύκου με γεμάτη γεύση και χαμηλή γλυκύτητα. Συλλέγεται από τα πευκοδάση της Χαλκιδικής στα τέλη του καλοκαιριού και το φθινόπωρο. Από τα πιο θρεπτικά ελληνικά μέλια, πλούσιο σε ιχνοστοιχεία, μέταλλα και αντιοξειδωτικά.",
  },
  {
    id: 4,
    variety: "ΒΑΣΙΛΙΚΟΣ ΠΟΛΤΟΣ",
    name: "Βασιλικός Πολτός",
    weight: "10 γρ.",
    price: 25.0,
    image: "/images/vasilikos-poltos.webp",   // <-- βάλε εδώ τη φωτογραφία όταν είναι έτοιμη
    desc: "Φυσικός βασιλικός πολτός, φρέσκος, απευθείας από τις κυψέλες μας. Είναι η υπερτροφή με την οποία τρέφεται η βασίλισσα και θεωρείται από τα πιο πολύτιμα προϊόντα της κυψέλης, πλούσιος σε πρωτεΐνες, βιταμίνες του συμπλέγματος Β, αμινοξέα και ιχνοστοιχεία. Αποτελεί φυσικό τονωτικό για ενέργεια και ευεξία. Διατηρείται στο ψυγείο. Καταναλώστε μισό με ένα κουταλάκι την ημέρα.",
  },
  {
    id: 5,
    variety: "ΒΑΜΜΑ ΠΡΟΠΟΛΗΣ",
    name: "Βάμμα Πρόπολης",
    weight: "20 ml",
    price: 8.0,
    image: "/images/vamma-propolis.webp",   // <-- βάλε εδώ τη φωτογραφία όταν είναι έτοιμη
    desc: "Βάμμα από αγνή πρόπολη των κυψελών μας, παρασκευασμένο με τον παραδοσιακό τρόπο. Η πρόπολη είναι η φυσική «ασπίδα» της κυψέλης. Οι μέλισσες τη συλλέγουν από ρητίνες δέντρων και τη χρησιμοποιούν για προστασία. Είναι πλούσια σε φλαβονοειδή και αντιοξειδωτικά, με γνωστές αντιμικροβιακές ιδιότητες. Ιδανικό για τον χειμώνα. Καταναλώστε λίγες σταγόνες σε μέλι ή σε νερό.",
  },
];

/* ============================================================ */

const css = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500&family=Inter:wght@400;500;600;700&display=swap');

:root {
  --cream: #efe9d4;
  --cream-deep: #e5dcc0;
  --paper: #f7f3e6;
  --ink: #23201a;
  --ink-soft: #5c554a;
  --ochre: #b18428;
  --ochre-deep: #966e1e;
  --line: rgba(35,32,26,.16);
}

* { margin: 0; padding: 0; box-sizing: border-box; }

.shop {
  min-height: 100vh;
  background: var(--cream);
  color: var(--ink);
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
  max-width: 100vw;
}

/* --- κεφαλίδα --- */
.topbar {
  position: sticky; top: 0; z-index: 40;
  background: rgba(239,233,212,.94);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
}
.topbar-inner {
  max-width: 1040px; margin: 0 auto;
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px; padding: 14px 24px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: thin;
  scrollbar-color: var(--ochre) transparent;
}
.topbar-inner::-webkit-scrollbar { height: 4px; }
.topbar-inner::-webkit-scrollbar-thumb { background: var(--ochre); border-radius: 999px; }
.topbar-inner::-webkit-scrollbar-track { background: transparent; }
.topbar-inner > * { flex-shrink: 0; }
.brand {
  font-family: 'Playfair Display', serif;
  font-size: 21px; font-weight: 600; letter-spacing: .3px;
  line-height: 1.08; cursor: pointer; user-select: none;
  display: flex; flex-direction: column;
}
.brand .gold { color: var(--ochre); }
.tabs { display: flex; gap: 4px; }
.tab {
  background: none; border: none; cursor: pointer;
  font-family: 'Inter', sans-serif;
  font-size: 14px; font-weight: 600; letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--ink-soft);
  padding: 10px 14px;
  border-bottom: 2px solid transparent;
  transition: color .15s ease;
  white-space: nowrap;
}
.tab:hover { color: var(--ink); }
.tab.active { color: var(--ink); border-bottom-color: var(--ochre); }
.tab:focus-visible { outline: 2px solid var(--ochre); outline-offset: 2px; }
.cart-btn {
  position: relative;
  background: var(--ink); color: var(--cream);
  border: none; border-radius: 999px;
  padding: 10px 18px;
  font-family: 'Inter', sans-serif; font-weight: 600; font-size: 14px;
  cursor: pointer; transition: opacity .15s ease;
}
.cart-btn:hover { opacity: .85; }
.cart-btn:focus-visible { outline: 2px solid var(--ochre); outline-offset: 2px; }
.cart-count {
  position: absolute; top: -7px; right: -4px;
  background: var(--ochre); color: #fff;
  font-size: 11px; font-weight: 700;
  border-radius: 999px; min-width: 20px; height: 20px;
  display: flex; align-items: center; justify-content: center; padding: 0 5px;
}

/* --- ΑΡΧΙΚΗ --- */
.hero { max-width: 780px; margin: 0 auto; padding: 88px 24px 64px; text-align: center; }
.hero-eyebrow {
  font-size: 12px; font-weight: 600; letter-spacing: 4px;
  text-transform: uppercase; color: var(--ochre-deep);
  display: block; margin-bottom: 20px;
}
.hero h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(36px, 6vw, 60px);
  font-weight: 600; line-height: 1.15; margin-bottom: 20px;
}
.hero h1 em { font-style: italic; color: var(--ochre); }
.hero p {
  color: var(--ink-soft); font-size: 17px; line-height: 1.7;
  max-width: 560px; margin: 0 auto 34px;
}
.hero-cta {
  background: var(--ink); color: var(--cream);
  border: none; border-radius: 999px;
  padding: 15px 34px; font-size: 15.5px; font-weight: 600;
  cursor: pointer; font-family: 'Inter', sans-serif;
  transition: opacity .15s ease, transform .15s ease;
}
.hero-cta:hover { opacity: .88; transform: translateY(-2px); }
.hero-cta:focus-visible { outline: 2px solid var(--ochre); outline-offset: 3px; }

.divider {
  display: flex; align-items: center; gap: 14px;
  max-width: 260px; margin: 0 auto;
  color: var(--ochre);
}
.divider::before, .divider::after { content: ""; flex: 1; height: 1px; background: var(--line); }

/* --- κολάζ --- */
.collage {
  max-width: 1120px; margin: 0 auto;
  padding: 56px 24px 8px;
  display: flex; flex-direction: column;
  gap: 24px;
}
.collage-row {
  display: grid;
  gap: 24px;
}
.collage-row.row-wide-tall { grid-template-columns: 16fr 9fr; }
.collage-row.row-tall-tall { grid-template-columns: 1fr 1fr; }
.collage-item {
  border-radius: 4px; overflow: hidden;
  border: 1px solid var(--line);
  background: var(--cream-deep);
}
.collage-item.landscape { aspect-ratio: 4/3; }
.collage-item.portrait { aspect-ratio: 3/4; }
.collage-item img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.quote-tile {
  background: var(--paper);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center;
  text-align: center; gap: 10px; padding: 16px;
}
.quote-tile .quote-mark { color: var(--ochre); font-size: 18px; }
.quote-tile p {
  font-family: 'Playfair Display', serif;
  font-style: italic; font-size: 21px; line-height: 1.4;
  color: var(--ink);
}
@media (max-width: 640px) {
  .collage-row { grid-template-columns: 1fr; }
}

/* --- μπάντα κλεισίματος --- */
.cta-band {
  max-width: 1040px; margin: 0 auto 88px;
  padding: 0 24px;
  text-align: center;
}
.cta-band h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 4vw, 32px); font-weight: 600;
  margin-bottom: 10px;
}
.cta-band p { color: var(--ink-soft); font-size: 15.5px; margin-bottom: 26px; }

.story {
  max-width: 1040px; margin: 0 auto;
  padding: 48px 24px 88px;
  display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 22px;
}
.story-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 4px;
  padding: 30px 26px;
}
.story-card h3 { font-family: 'Playfair Display', serif; font-size: 20px; font-weight: 600; margin-bottom: 12px; }
.story-card h3 .num { color: var(--ochre); font-style: italic; margin-right: 8px; }
.story-card p { color: var(--ink-soft); font-size: 14.5px; line-height: 1.7; }

/* --- ΠΡΟΪΟΝΤΑ: μινιμαλ κάρτες --- */
.products { max-width: 1040px; margin: 0 auto; padding: 56px 24px 88px; }
.products-head { text-align: center; margin-bottom: 44px; }
.products-head h2 { font-family: 'Playfair Display', serif; font-size: 34px; font-weight: 600; margin-bottom: 10px; }
.products-head p { color: var(--ink-soft); font-size: 15px; }
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
}
.card {
  background: none; border: none; padding: 0;
  text-align: center; cursor: pointer;
  font-family: 'Inter', sans-serif; color: var(--ink);
}
.card:focus-visible { outline: 2px solid var(--ochre); outline-offset: 4px; }
.card-media {
  border-radius: 4px; overflow: hidden;
  background: var(--cream-deep);
  border: 1px solid var(--line);
  margin-bottom: 16px;
  aspect-ratio: 4/5;
  position: relative;
}
.card-media.sold img { filter: grayscale(45%) opacity(.75); }
.sold-badge {
  position: absolute; top: 12px; left: 12px;
  background: var(--ink); color: var(--cream);
  font-size: 11.5px; font-weight: 600; letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 12px; border-radius: 999px;
}
.sold-note {
  background: var(--cream);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 14px; color: var(--ink-soft); line-height: 1.6;
}
.card-media img {
  width: 100%; height: 100%; object-fit: cover; display: block;
  transform: translateZ(0); backface-visibility: hidden;
  transition: transform .3s ease;
}
.card:hover .card-media img { transform: translateZ(0) scale(1.04); }
.card-variety {
  font-size: 13px; font-weight: 600; letter-spacing: 4px;
  color: var(--ochre-deep); margin-bottom: 6px;
}
.card-meta {
  font-family: 'Playfair Display', serif;
  font-size: 19px; font-weight: 600;
}
.card-meta .dot { color: var(--ochre); margin: 0 8px; font-style: italic; }
.card-hint {
  display: inline-block; margin-top: 8px;
  font-size: 12.5px; color: var(--ink-soft);
  border-bottom: 1px solid var(--line);
  padding-bottom: 1px;
  transition: color .15s ease, border-color .15s ease;
}
.card:hover .card-hint { color: var(--ochre-deep); border-color: var(--ochre); }

/* --- POP-UP προϊόντος --- */
.overlay {
  position: fixed; inset: 0; background: rgba(35,32,26,.5);
  z-index: 50;
}
.modal {
  position: fixed; inset: 0; z-index: 60;
  display: flex; align-items: center; justify-content: center;
  padding: 20px; pointer-events: none;
}
.modal-panel {
  pointer-events: auto;
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 6px;
  width: min(760px, 100%);
  max-height: calc(100vh - 40px);
  overflow-y: auto;
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  animation: popIn .2s ease;
  position: relative;
}
@keyframes popIn { from { transform: scale(.97); opacity: 0; } to { transform: none; opacity: 1; } }
@media (max-width: 640px) {
  .modal-panel { grid-template-columns: 1fr; }
  .modal-img { max-height: 300px; }
}
@media (prefers-reduced-motion: reduce) {
  .modal-panel, .drawer { animation: none; }
  .card-media img, .hero-cta { transition: none; }
}
.modal-img { background: var(--cream-deep); }
.modal-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
.modal-info { padding: 34px 30px 30px; display: flex; flex-direction: column; }
.modal-close {
  position: absolute; top: 10px; right: 12px;
  background: var(--paper); border: 1px solid var(--line);
  border-radius: 999px; width: 34px; height: 34px;
  font-size: 18px; line-height: 1; cursor: pointer; color: var(--ink);
  z-index: 2;
}
.modal-close:hover { color: var(--ochre-deep); border-color: var(--ochre); }
.modal-variety { font-size: 13px; font-weight: 600; letter-spacing: 4px; color: var(--ochre-deep); margin-bottom: 8px; }
.modal-info h3 { font-family: 'Playfair Display', serif; font-size: 28px; font-weight: 600; margin-bottom: 4px; }
.modal-weight { font-size: 14px; color: var(--ink-soft); margin-bottom: 16px; }
.modal-desc { font-size: 15px; color: var(--ink-soft); line-height: 1.75; margin-bottom: 24px; flex: 1; }
.modal-price { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 600; margin-bottom: 18px; }
.modal-actions { display: flex; gap: 12px; align-items: stretch; }
.qty-big {
  display: flex; align-items: center; gap: 4px;
  border: 1.5px solid var(--ink); border-radius: 999px;
  padding: 0 6px;
}
.qty-big button {
  width: 34px; height: 44px; background: none; border: none;
  font-size: 18px; cursor: pointer; color: var(--ink);
}
.qty-big button:hover { color: var(--ochre-deep); }
.qty-big span { min-width: 22px; text-align: center; font-weight: 700; font-size: 15px; }
.modal-add {
  flex: 1;
  background: var(--ink); color: var(--cream);
  border: none; border-radius: 999px;
  padding: 12px 20px; font-size: 15px; font-weight: 600;
  cursor: pointer; font-family: 'Inter', sans-serif;
  transition: opacity .15s ease;
}
.modal-add:hover { opacity: .88; }
.modal-add.added { background: var(--ochre); color: #fff; }

/* --- μηχανή --- */
.machine { max-width: 1040px; margin: 0 auto; padding: 56px 24px 88px; }
.machine-grid {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: 36px; align-items: start;
}
@media (max-width: 700px) { .machine-grid { grid-template-columns: 1fr; } }
.machine-photo {
  border-radius: 4px; overflow: hidden;
  border: 1px solid var(--line); background: var(--cream-deep);
}
.machine-photo img { width: 100%; display: block; }
.machine-thumbs { display: flex; gap: 8px; margin-top: 10px; }
.machine-thumb {
  flex: 1; padding: 0; cursor: pointer;
  border: 2px solid transparent; border-radius: 4px;
  overflow: hidden; background: var(--cream-deep);
  aspect-ratio: 1; opacity: .75;
  transition: opacity .15s ease, border-color .15s ease;
}
.machine-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }
.machine-thumb:hover { opacity: 1; }
.machine-thumb.active { border-color: var(--ochre); opacity: 1; }
.machine-info p { color: var(--ink-soft); font-size: 15.5px; line-height: 1.75; margin-bottom: 16px; }
.machine-cta {
  margin-top: 26px;
  background: var(--paper); border: 1px solid var(--line);
  border-radius: 4px; padding: 26px 24px;
}
.machine-cta h4 { font-family: 'Playfair Display', serif; font-size: 21px; font-weight: 600; margin-bottom: 6px; }
.machine-cta > p { font-size: 14px; margin-bottom: 18px; }
.machine-cta-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
.machine-cta-row .hero-cta { text-decoration: none; display: inline-block; }
.machine-mail {
  color: var(--ochre-deep); font-weight: 600; font-size: 14.5px;
  text-decoration: none; border-bottom: 1px solid var(--ochre);
  padding-bottom: 2px;
}
.machine-mail:hover { color: var(--ink); }

/* --- υποσέλιδο --- */
.footer { border-top: 1px solid var(--line); background: var(--cream-deep); }
.footer-inner {
  max-width: 1040px; margin: 0 auto;
  padding: 32px 24px;
  display: flex; flex-wrap: wrap; gap: 16px;
  align-items: center; justify-content: space-between;
  color: var(--ink-soft); font-size: 14px;
}
.footer a { color: var(--ochre-deep); text-decoration: none; font-weight: 600; }
.footer a:hover { text-decoration: underline; }

/* --- καλάθι --- */
.drawer {
  position: fixed; top: 0; right: 0; bottom: 0;
  width: min(420px, 100%);
  background: var(--paper);
  border-left: 1px solid var(--line);
  z-index: 70; display: flex; flex-direction: column;
  animation: slideIn .22s ease;
}
.drawer-overlay { position: fixed; inset: 0; background: rgba(35,32,26,.45); z-index: 65; }
@keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: none; opacity: 1; } }
.drawer-head {
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 22px; border-bottom: 1px solid var(--line);
}
.drawer-head h3 { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 600; }
.close-btn {
  background: none; border: none; color: var(--ink-soft);
  font-size: 24px; cursor: pointer; line-height: 1; padding: 4px 8px;
}
.close-btn:hover { color: var(--ink); }
.drawer-body { flex: 1; overflow-y: auto; padding: 18px 22px; }
.empty-cart { color: var(--ink-soft); text-align: center; padding: 48px 0; font-size: 14.5px; line-height: 1.7; }
.cart-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--line); }
.cart-thumb { width: 52px; height: 52px; border-radius: 4px; overflow: hidden; flex-shrink: 0; background: var(--cream-deep); }
.cart-thumb img { width: 100%; height: 100%; object-fit: cover; }
.cart-info { flex: 1; min-width: 0; }
.cart-info .n { font-weight: 600; font-size: 14px; }
.cart-info .p { font-size: 13px; color: var(--ink-soft); }
.qty { display: flex; align-items: center; gap: 8px; }
.qty button {
  width: 26px; height: 26px; border-radius: 6px;
  background: transparent; border: 1px solid var(--line);
  color: var(--ink); cursor: pointer; font-size: 15px;
}
.qty button:hover { border-color: var(--ochre); color: var(--ochre-deep); }
.qty span { min-width: 18px; text-align: center; font-weight: 600; font-size: 14px; }
.drawer-foot { border-top: 1px solid var(--line); padding: 18px 22px 22px; }
.total-row { display: flex; justify-content: space-between; font-weight: 700; font-size: 17px; margin-bottom: 14px; }
.checkout-btn {
  width: 100%;
  background: var(--ink); color: var(--cream);
  border: none; border-radius: 8px;
  padding: 14px; font-size: 15.5px; font-weight: 600;
  cursor: pointer; font-family: 'Inter', sans-serif;
  transition: opacity .15s ease;
}
.checkout-btn:hover { opacity: .88; }
.checkout-btn:disabled { opacity: .45; cursor: default; }

.form-field { margin-bottom: 12px; }
.form-field label { display: block; font-size: 13px; font-weight: 600; margin-bottom: 5px; color: var(--ink-soft); }
.form-field input, .form-field textarea {
  width: 100%; background: #fff;
  border: 1px solid var(--line); border-radius: 8px;
  color: var(--ink); padding: 11px 12px; font-size: 14.5px;
  font-family: 'Inter', sans-serif;
}
.form-field input:focus, .form-field textarea:focus { outline: none; border-color: var(--ochre); }
.back-link {
  background: none; border: none; color: var(--ochre-deep);
  font-size: 13.5px; font-weight: 600; cursor: pointer;
  padding: 0; margin-bottom: 14px; font-family: 'Inter', sans-serif;
}
.order-note { font-size: 12.5px; color: var(--ink-soft); margin-top: 10px; line-height: 1.5; text-align: center; }
.success-box { text-align: center; padding: 40px 10px; }
.success-box .big { font-size: 44px; margin-bottom: 14px; }
.success-box h4 { font-family: 'Playfair Display', serif; font-size: 21px; margin-bottom: 10px; }
.success-box p { color: var(--ink-soft); font-size: 14px; line-height: 1.6; }
`;

const fmt = (n) => n.toFixed(2).replace(".", ",") + " €";

export default function MeliMelissas() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [view, setView] = useState("cart");
  const [selected, setSelected] = useState(null);   // προϊόν στο pop-up
  const [modalQty, setModalQty] = useState(1);
  const [added, setAdded] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", address: "", notes: "" });
  const [machineImg, setMachineImg] = useState(0);

  const items = Object.entries(cart)
    .map(([id, qty]) => ({ ...PRODUCTS.find((p) => p.id === Number(id)), qty }))
    .filter((i) => i.qty > 0);
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.qty * i.price, 0);

  const openProduct = (p) => { setSelected(p); setModalQty(1); setAdded(false); };
  const closeProduct = () => setSelected(null);

  const addFromModal = () => {
    setCart((c) => ({ ...c, [selected.id]: (c[selected.id] || 0) + modalQty }));
    setAdded(true);
    setTimeout(() => { setSelected(null); setAdded(false); }, 750);
  };

  const setQty = (id, qty) =>
    setCart((c) => {
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const goTo = (p) => { setPage(p); setSelected(null); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openDrawer = () => { setView("cart"); setDrawerOpen(true); };

  const sendOrder = () => {
    const lines = items.map((i) => `• ${i.name} (${i.weight}) x${i.qty} — ${fmt(i.qty * i.price)}`).join("\n");
    const body =
      `ΝΕΑ ΠΑΡΑΓΓΕΛΙΑ — Meli Melissas\n\n${lines}\n\nΣύνολο: ${fmt(total)}\n\n` +
      `Όνομα: ${form.name}\nΤηλέφωνο: ${form.phone}\nΔιεύθυνση: ${form.address}\n` +
      (form.notes ? `Σημειώσεις: ${form.notes}\n` : "");
    const url = `mailto:${SHOP.email}?subject=${encodeURIComponent("Παραγγελία — " + form.name)}&body=${encodeURIComponent(body)}`;
    window.open(url, "_blank");
    setView("done");
    setCart({});
  };

  const canSend = form.name.trim() && form.phone.trim() && form.address.trim();

  return (
    <div className="shop">
      <style>{css}</style>

      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand" onClick={() => goTo("home")}>
            <span>Meli</span>
            <span>Meli<span className="gold">ssas</span></span>
          </div>
          <nav className="tabs" aria-label="Πλοήγηση">
            <button className={"tab" + (page === "home" ? " active" : "")} onClick={() => goTo("home")}>
              Αρχική
            </button>
            <button className={"tab" + (page === "products" ? " active" : "")} onClick={() => goTo("products")}>
              Προϊόντα
            </button>
            <button className={"tab" + (page === "machine" ? " active" : "")} onClick={() => goTo("machine")}>
              Η μηχανή
            </button>
          </nav>
          <button className="cart-btn" onClick={openDrawer}>
            Καλάθι
            {count > 0 && <span className="cart-count">{count}</span>}
          </button>
        </div>
      </header>

      {page === "home" && (
        <>
          <section className="hero">
            <h1>Τα προϊόντα μας, όπως τα δίνει η <em>μέλισσα</em></h1>
            <p>
              Ένα οικογενειακό μελισσοκομείο, με κυψέλες που ταξιδεύουν στις ανθοφορίες
              της Μακεδονίας από την άνοιξη ως το φθινόπωρο.
            </p>
            <button className="hero-cta" onClick={() => goTo("products")}>
              Δείτε τα μέλια μας
            </button>
          </section>

          <div className="divider">✦</div>

          {/* --- ΚΟΛΑΖ: αντικατέστησε τα IMG_ με φωτογραφίες από το μελισσοκομείο --- */}
          <section className="collage" aria-label="Φωτογραφίες από το μελισσοκομείο">
            <div className="collage-row row-wide-tall">
              <div className="collage-item landscape">
                <img src={IMG_HIVES_MOUNT} alt="Το μελισσοκομείο στο βουνό" />
              </div>
              <div className="collage-item portrait">
                <img src={IMG_BEES} alt="Μέλισσες στην κηρήθρα" />
              </div>
            </div>
            <div className="collage-row row-tall-tall">
              <div className="collage-item portrait">
                <img src={IMG_SMOKERS_VALLEY} alt="Καπνιστήρια με θέα τον κάμπο" />
              </div>
              <div className="collage-item portrait">
                <img src={IMG_ZYGISMA} alt="Ζύγισμα κερήθρας στο μελισσοκομείο" />
              </div>
            </div>
          </section>

          <section className="story">
            <article className="story-card">
              <h3><span className="num">I.</span>Τα μελίσσια μας</h3>
              <p>
                Μετακινούνται με τις εποχές, από τα ανοιξιάτικα λιβάδια στις καστανιές
                του βουνού και στα πευκοδάση. Κάθε τόπος αφήνει τη δική του γεύση
                στο βάζο.
              </p>
            </article>
            <article className="story-card">
              <h3><span className="num">II.</span>Ο τρύγος</h3>
              <p>
                Ο τρύγος γίνεται μόνο όταν το μέλι είναι ώριμο και σφραγισμένο στην
                κηρήθρα. Το φιλτράρουμε ελαφρά, ώστε να φτάνει σε εσάς αγνό και
                100% φυσικό.
              </p>
            </article>
            <article className="story-card">
              <h3><span className="num">III.</span>Το βάζο</h3>
              <p>
                Από την κυψέλη στο βάζο, χωρίς μεσάζοντες. Κάθε βάζο συσκευάζεται στο
                χέρι και φτάνει σε εσάς όπως ακριβώς βγήκε από το μελισσοκομείο.
              </p>
            </article>
          </section>
        </>
      )}

      {page === "products" && (
        <main className="products">
          <div className="products-head">
            <h2>Τα μέλια μας</h2>
            <p>Τρεις ποικιλίες, από τρεις διαφορετικές ανθοφορίες. Πατήστε σε ένα βάζο για περισσότερα.</p>
          </div>
          <div className="grid">
            {PRODUCTS.map((p) => (
              <button className="card" key={p.id} onClick={() => openProduct(p)}>
                <div className={"card-media" + (p.soldOut ? " sold" : "")}>
                  <img src={p.image} alt={p.name} />
                  {p.soldOut && <span className="sold-badge">Εξαντλημένο</span>}
                </div>
                <div className="card-variety">{p.variety}</div>
                <div className="card-meta">
                  {p.weight}<span className="dot">·</span>{fmt(p.price)}
                </div>
                <span className="card-hint">Δείτε περισσότερα</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {page === "machine" && (
        <main className="machine">
          <div className="products-head">
            <h2>Απολεπιστική μηχανή</h2>
            <p>Σχεδιασμένη και κατασκευασμένη στο μελισσοκομείο μας.</p>
          </div>
          <div className="machine-grid">
            <div className="machine-gallery">
              <div className="machine-photo">
                <img src={MACHINE_IMGS[machineImg]} alt="Η απολεπιστική μηχανή" />
              </div>
              <div className="machine-thumbs">
                {MACHINE_IMGS.map((src, i) => (
                  <button
                    key={i}
                    className={"machine-thumb" + (i === machineImg ? " active" : "")}
                    onClick={() => setMachineImg(i)}
                    aria-label={"Φωτογραφία " + (i + 1)}
                  >
                    <img src={src} alt="" />
                  </button>
                ))}
              </div>
            </div>
            <div className="machine-info">
              <p>
                Η απολεπιστική μηχανή είναι ιδιοκατασκευή, φτιαγμένη στο χέρι μέσα
                από χρόνια εμπειρίας στον τρύγο. Απολεπίζει τα πλαίσια γρήγορα και
                ομοιόμορφα, χωρίς να τραυματίζει την κερήθρα.
              </p>
              <p>
                Τη χρησιμοποιούμε στο δικό μας μελισσοκομείο σε κάθε τρύγο και την
                κατασκευάζουμε κατόπιν παραγγελίας για συναδέλφους μελισσοκόμους.
              </p>
              <div className="machine-cta">
                <h4>Εάν ενδιαφέρεστε</h4>
                <p>Καλέστε μας για πληροφορίες, διαθεσιμότητα και τιμή.</p>
                <div className="machine-cta-row">
                  <a className="hero-cta" href={"tel:" + SHOP.phone.replace(/\s/g, "")}>
                    {SHOP.phone}
                  </a>
                  <a
                    className="machine-mail"
                    href={"mailto:" + SHOP.email + "?subject=" + encodeURIComponent("Ενδιαφέρον για την απολεπιστική μηχανή")}
                  >
                    Στείλτε μας email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      )}

      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} Meli Melissas · {SHOP.location}</span>
          <span>Παραγωγός: Νοτόπουλος Θωμάς</span>
          <span>Τηλ: {SHOP.phone}</span>
          <span>
            <a href={SHOP.facebook} target="_blank" rel="noreferrer">Facebook</a>
          </span>
        </div>
      </footer>

      {/* --- POP-UP προϊόντος --- */}
      {selected && (
        <>
          <div className="overlay" onClick={closeProduct} />
          <div className="modal" role="dialog" aria-label={selected.name}>
            <div className="modal-panel">
              <button className="modal-close" onClick={closeProduct} aria-label="Κλείσιμο">×</button>
              <div className="modal-img">
                <img src={selected.image} alt={selected.name} />
              </div>
              <div className="modal-info">
                <div className="modal-variety">{selected.variety}</div>
                <h3>{selected.name}</h3>
                <div className="modal-weight">Βάζο {selected.weight}</div>
                <p className="modal-desc">{selected.desc}</p>
                <div className="modal-price">{fmt(selected.price * (selected.soldOut ? 1 : modalQty))}</div>
                {selected.soldOut ? (
                  <div className="sold-note">
                    Προσωρινά εξαντλημένο. Επικοινωνήστε μαζί μας για να μάθετε
                    πότε θα είναι ξανά διαθέσιμο.
                  </div>
                ) : (
                  <div className="modal-actions">
                    <div className="qty-big">
                      <button onClick={() => setModalQty((q) => Math.max(1, q - 1))} aria-label="Μείωση">−</button>
                      <span>{modalQty}</span>
                      <button onClick={() => setModalQty((q) => q + 1)} aria-label="Αύξηση">+</button>
                    </div>
                    <button className={"modal-add" + (added ? " added" : "")} onClick={addFromModal}>
                      {added ? "Προστέθηκε ✓" : "Στο καλάθι"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* --- καλάθι --- */}
      {drawerOpen && (
        <>
          <div className="drawer-overlay" onClick={() => setDrawerOpen(false)} />
          <aside className="drawer" role="dialog" aria-label="Καλάθι αγορών">
            <div className="drawer-head">
              <h3>
                {view === "cart" && "Το καλάθι σας"}
                {view === "checkout" && "Στοιχεία παραγγελίας"}
                {view === "done" && "Ευχαριστούμε!"}
              </h3>
              <button className="close-btn" onClick={() => setDrawerOpen(false)} aria-label="Κλείσιμο">×</button>
            </div>

            {view === "cart" && (
              <>
                <div className="drawer-body">
                  {items.length === 0 ? (
                    <p className="empty-cart">Το καλάθι είναι άδειο.<br />Ρίξτε μια ματιά στα μέλια μας 🍯</p>
                  ) : (
                    items.map((i) => (
                      <div className="cart-row" key={i.id}>
                        <div className="cart-thumb"><img src={i.image} alt="" /></div>
                        <div className="cart-info">
                          <div className="n">{i.name}</div>
                          <div className="p">{fmt(i.price)} · {i.weight}</div>
                        </div>
                        <div className="qty">
                          <button onClick={() => setQty(i.id, i.qty - 1)} aria-label="Μείωση">−</button>
                          <span>{i.qty}</span>
                          <button onClick={() => setQty(i.id, i.qty + 1)} aria-label="Αύξηση">+</button>
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <div className="drawer-foot">
                  <div className="total-row"><span>Σύνολο</span><span>{fmt(total)}</span></div>
                  <button className="checkout-btn" disabled={items.length === 0} onClick={() => setView("checkout")}>
                    Ολοκλήρωση παραγγελίας
                  </button>
                </div>
              </>
            )}

            {view === "checkout" && (
              <>
                <div className="drawer-body">
                  <button className="back-link" onClick={() => setView("cart")}>← Πίσω στο καλάθι</button>
                  <div className="form-field">
                    <label htmlFor="f-name">Ονοματεπώνυμο *</label>
                    <input id="f-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-phone">Τηλέφωνο *</label>
                    <input id="f-phone" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-addr">Διεύθυνση αποστολής *</label>
                    <input id="f-addr" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
                  </div>
                  <div className="form-field">
                    <label htmlFor="f-notes">Σημειώσεις</label>
                    <textarea id="f-notes" rows={3} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
                  </div>
                  <p className="order-note">
                    Η παραγγελία στέλνεται με email και θα σας καλέσουμε για επιβεβαίωση.
                    Πληρωμή με αντικαταβολή ή κατάθεση.
                  </p>
                </div>
                <div className="drawer-foot">
                  <div className="total-row"><span>Σύνολο</span><span>{fmt(total)}</span></div>
                  <button className="checkout-btn" disabled={!canSend} onClick={sendOrder}>
                    Αποστολή παραγγελίας
                  </button>
                </div>
              </>
            )}

            {view === "done" && (
              <div className="drawer-body">
                <div className="success-box">
                  <div className="big">🍯</div>
                  <h4>Η παραγγελία ετοιμάστηκε!</h4>
                  <p>
                    Άνοιξε το πρόγραμμα email σας με έτοιμο το μήνυμα — πατήστε «Αποστολή» για να μας φτάσει.
                    Θα επικοινωνήσουμε σύντομα για επιβεβαίωση.
                  </p>
                </div>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  );
}
