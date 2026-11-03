# Meli Melissas 🍯

E-shop του οικογενειακού μελισσοκομείου — Αλεξάνδρεια Ημαθίας.

## Τοπική εκτέλεση

```bash
npm install
npm run dev        # http://localhost:5173
```

## Φωτογραφίες

Όλες οι εικόνες βρίσκονται στο `public/images/`. Για να βάλεις τις full-res
εκδόσεις, απλά **αντικατέστησε τα αρχεία κρατώντας τα ίδια ονόματα**:

| Αρχείο | Τι είναι |
|---|---|
| meli-antheon.webp | Βάζο — Μέλι Ανθέων |
| meli-kastano.webp | Βάζο — Μέλι Καστανιάς |
| meli-pefkou.webp | Βάζο — Μέλι Πεύκου |
| vasilikos-poltos.webp | Βασιλικός Πολτός (προσωρινή εικόνα) |
| vamma-propolis.webp | Βάμμα Πρόπολης — σταγονόμετρο (κατάλογος + 1η στο pop-up) |
| vamma-propolis-2.webp | Βάμμα Πρόπολης — μπουκαλάκι (2η στο pop-up) |
| kapnistiri.webp | Κολάζ αρχικής — καπνιστήρι |
| kypseles-prasino.webp | Κολάζ αρχικής — κυψέλες στο πράσινο |
| melisses.webp | Κολάζ αρχικής — μέλισσες (και εικόνα κοινοποίησης / og:image) |
| kypseles-vouno.webp | Κολάζ αρχικής — κυψέλες στο βουνό |
| kampos.webp | Κολάζ αρχικής — κάμπος |
| mixani-1.webp … mixani-5.webp | Γκαλερί απολεπιστικής μηχανής |

Συμβουλή: κράτα τις full-res κάτω από ~300–400 KB η καθεμία (μορφή WebP,
πλάτος ~1600px φτάνει και περισσεύει) για γρήγορη φόρτωση στο κινητό.

## Deploy: GitHub + Vercel

1. Νέο repository στο GitHub (π.χ. `meli-melissas`), μετά:
   ```bash
   git init
   git add .
   git commit -m "Meli Melissas e-shop v2"
   git branch -M main
   git remote add origin git@github.com:<username>/meli-melissas.git
   git push -u origin main
   ```
2. Στο [vercel.com](https://vercel.com): **Add New → Project → Import** το repo.
   Το Vercel αναγνωρίζει αυτόματα το Vite — δεν χρειάζεται καμία ρύθμιση.
   Πάτα **Deploy** και σε ~1 λεπτό έχεις live URL (`meli-melissas.vercel.app`).
3. Κάθε `git push` στο `main` κάνει αυτόματα νέο deploy.

## Domain melimelissas.gr

1. Αγορά του domain από ελληνικό καταχωρητή (π.χ. papaki, pointer, top.host).
2. Vercel → Project → **Settings → Domains** → πρόσθεσε `melimelissas.gr`
   και `www.melimelissas.gr`.
3. Στον καταχωρητή, στη διαχείριση DNS:
   - `A` record στο `@` → `76.76.21.21`
   - `CNAME` στο `www` → `cname.vercel-dns.com`
   (Το Vercel σου δείχνει τις ακριβείς τιμές στην ίδια οθόνη — ακολούθησε αυτές
   αν διαφέρουν.)
4. Το SSL (https) ενεργοποιείται αυτόματα από το Vercel σε λίγα λεπτά.

## Αλλαγές περιεχομένου

Όλα τα «δεδομένα» είναι στην αρχή του `src/App.jsx`:
- `SHOP` → email, τηλέφωνο, τοποθεσία, Facebook
- `PRODUCTS` → προϊόντα (για νέο προϊόν αντέγραψε ένα μπλοκ `{ ... }`,
  για εξαντλημένο βάλε `soldOut: true`, για πολλές φωτογραφίες στο pop-up
  βάλε `images: ["...", "..."]`)

## Μελλοντικά

- Πρόπολη & βασιλικός πολτός → νέο μπλοκ στο `PRODUCTS` + φωτό στο `public/images/`
- Βίντεο μηχανής → YouTube embed στη σελίδα «Η μηχανή»
