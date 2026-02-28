# Die Trauer von Sam — Hard Land

> Ein interaktives Deutsch-Referat über Benedict Wells' Roman *Hard Land* (2021).  
> Gedicht, Traueranalyse und Hilfsangebote — gestaltet als filmisches Web-Erlebnis.

---

## 📖 Über das Projekt

Diese Website entstand als Deutsch-Referat für die Analyse des Romans **Hard Land** von Benedict Wells.  
Sie verbindet ein eigenes Gedicht über die Trauer der Hauptfigur Sam mit einer interaktiven Analyse der fünf Trauerphasen nach **Elisabeth Kübler-Ross** sowie regionalen Hilfsangeboten im Rhein-Sieg-Kreis.

**Inhalt der Seite:**
- 🎭 **Gedicht** — 9 Strophen über Verlust, Einsamkeit und Akzeptanz
- 📂 **Traueranalyse** — Die fünf Phasen nach Kübler-Ross, verknüpft mit Szenen aus Hard Land
- 💙 **Hilfsangebote** — Lokale und bundesweite Anlaufstellen (Rhein-Sieg-Kreis, NRW)

---

## 🛠️ Tech Stack

| Technologie | Zweck |
|---|---|
| [Next.js 16](https://nextjs.org) | React Framework (App Router) |
| [Framer Motion](https://www.framer.com/motion/) | Scroll- & Eintrittsanimationen |
| [Tailwind CSS v4](https://tailwindcss.com) | Styling |
| [Lucide React](https://lucide.dev) | Icons |
| Canvas API | Partikel-Hintergrundanimation |
| TypeScript | Typsicherheit |

---

## 🚀 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Seite ist dann unter [http://localhost:3000](http://localhost:3000) erreichbar.

```bash
# Produktions-Build erstellen
npm run build

# Build lokal vorschauen
npm start
```

---

## 📁 Projektstruktur

```
src/
├── app/
│   ├── page.tsx          # Hauptseite (Gedicht, Analyse, Hilfe)
│   ├── layout.tsx        # Root Layout & Fonts
│   ├── globals.css       # Globale Styles & Animationen
│   ├── impressum/        # Impressum-Seite
│   └── datenschutz/      # Datenschutz-Seite
└── components/
    └── ParticleField.tsx  # Canvas-Partikelanimation (nur Desktop)
```

---

## ⚡ Performance-Optimierungen (Mobile)

- **ParticleField** ist auf Mobilgeräten (`< 768px`) komplett deaktiviert
- **Film-Grain-Animation** läuft nur auf Desktop
- **Scroll-basierte Animationen** (`useScroll`) werden auf Mobile durch einfache `whileInView`-Animationen ersetzt
- `prefers-reduced-motion` wird respektiert — alle dekorativen Animationen deaktivieren sich automatisch
- `backdrop-filter: blur()` ist auf Mobile per CSS deaktiviert

---

## 📚 Quellen

- Wells, B. (2021). *Hard Land*. Suhrkamp Verlag.
- Kübler-Ross, E. (1969). *On Death and Dying*. Macmillan.
- Telefonseelsorge: [online-beratung.de](https://www.online-beratung.de)
- Jugendnotmail: [jugendnotmail.de](https://www.jugendnotmail.de)

---

## ✍️ Autor

**Bünyamin Dagdelen** · Deutsch-Referat 2026  
Gedicht, Design & Entwicklung: Bünyamin Dagdelen
