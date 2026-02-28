"use client";

import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  BookOpen,
  Heart,
  Phone,
  MapPin,
  ChevronDown,
  Film,
  Star,
  Bookmark,
  ExternalLink,
  Clock,
  Users,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Lightbulb,
} from "lucide-react";

const ParticleField = dynamic(() => import("@/components/ParticleField"), {
  ssr: false,
});

const poemStanzas = [
  {
    id: 1,
    lines: [
      "Eine Trauer, die alles verändert,",
      "ein Leben zwischen Hoffnung und Not.",
      "Die Tage vergehen, doch der Schmerz wird nur größer,",
      "ein Warten auf das Ende der Einsamkeit.",
    ],
    note: "Verlust & Einsamkeit",
  },
  {
    id: 2,
    lines: [
      "Ich suche die Vergangenheit, die leise ging,",
      "und sehe die Zeiten, die ich mit ihm erlebt.",
      "Ich sehe uns dort sitzen, Hand in Hand,",
      "gefangen im Gestern, das heute verblaßt.",
    ],
    note: "Sehnsucht nach der Vergangenheit",
  },
  {
    id: 3,
    lines: [
      "Ich sah die Vögel am Himmel fliegen,",
      "und verlor die Hoffnung in mich selbst.",
      "Meine Gedanken bedrängen mich schwer,",
      "und meine Freude verliert sich im Wind.",
    ],
    note: "Depression & Rückzug",
  },
  {
    id: 4,
    lines: [
      "Im Dunkel des Saals, vor der Leinwand aus Licht,",
      "such ich nach Antworten, doch finde sie nicht.",
      "Vierundneunzig Geheimnisse, in Grady versteckt,",
      "haben in mir eine neue Sehnsucht geweckt.",
    ],
    note: "Das Kino als Zufluchtsort",
  },
  {
    id: 5,
    lines: [
      "Der Tag, an dem ich dich verlor,",
      "an dem meine Welt zusammenbrach.",
      "Als du gegangen bist, habe ich viel geweint,",
      "deine Gegenwart war meine einzige Freude.",
    ],
    note: "Der Verlust",
  },
  {
    id: 6,
    lines: [
      "Doch da waren Hände, die mich hielten im Fall,",
      "ein Lachen am See, ein lauterer Knall.",
      "Zwischen Angst und Mut, in der heißen Nacht,",
      "hat die Freundschaft das Licht in mir neu entfacht.",
    ],
    note: "Freundschaft als Rettung",
  },
  {
    id: 7,
    lines: [
      "Als ich allein geblieben bin,",
      "haben meine Augen dich überall gesucht.",
      "Wie ein Jungvogel am weiten Himmel,",
      "so einsam habe ich nach dir gerufen.",
    ],
    note: "Stille Trauer",
  },
  {
    id: 8,
    lines: [
      "Nun spür ich beides, die Qual und das Glück,",
      "ich schaue nach vorn und nie mehr zurück.",
      "Euphancholie nennt man das Beben im Blut,",
      "das Ende der Kindheit gibt mir endlich den Mut.",
    ],
    note: "Euphancholie — Akzeptanz",
  },
  {
    id: 9,
    lines: [
      "Ich war verloren in der Dunkelheit,",
      "aber du hast meine Hand festgehalten.",
    ],
    note: "Weiterleben mit der Wunde",
  },
];

const trauerphasen = [
  {
    phase: "Phase 1",
    title: "Verleugnung & Schock",
    icon: XCircle,
    color: "from-blue-900/60 to-blue-800/40",
    accent: "#60a5fa",
    sam: "Sam verdrängt seinen Schmerz und wartet – ein Leben zwischen Hoffnung und Not. Er funktioniert weiter, als wäre nichts – ein typisches Abwehrmuster nach Elisabeth Kübler-Ross.",
    stanza: "Strophe 1",
    symbol: "🎥 Das Kino als Fluchtort – Realität ausblenden",
    quote: "„ein Warten auf das Ende der Einsamkeit“",
  },
  {
    phase: "Phase 2",
    title: "Wut & Aufbegehren",
    icon: AlertCircle,
    color: "from-orange-900/60 to-red-800/40",
    accent: "#f97316",
    sam: "Sams aufgestaute Wut zeigt sich im Verlust der Hoffnung. Die Freude entgleitet ihm – seine Gedanken bedrängen ihn, bis nichts mehr übrig bleibt.",
    stanza: "Strophe 3",
    symbol: "🔥 Vögel fliegen – die Hoffnung flieht",
    quote: "„und verlor die Hoffnung in mich selbst“",
  },
  {
    phase: "Phase 3",
    title: "Verhandeln & Schuld",
    icon: Lightbulb,
    color: "from-yellow-900/60 to-amber-800/40",
    accent: "#f59e0b",
    sam: "Sam sucht die Vergangenheit und grübelt: Was wäre gewesen, wenn? Er sieht sich dort sitzen, Hand in Hand – gefangen im Gestern.",
    stanza: "Strophe 2",
    symbol: "📓 Hand in Hand – die Zeit zurückdrehen wollen",
    quote: "„gefangen im Gestern, das heute verblaßt“",
  },
  {
    phase: "Phase 4",
    title: "Depression & Rückzug",
    icon: Heart,
    color: "from-purple-900/60 to-indigo-800/40",
    accent: "#a78bfa",
    sam: "Im Dunkel des Kinosaals sucht Sam nach Antworten, die er nicht findet. Grady mit seinen 94 Geheimnissen spiegelt seine innere Leere – er flüchtet ins Dunkle.",
    stanza: "Strophe 4",
    symbol: "🌫️ Im Dunkel des Saals – Antworten suchen",
    quote: "„such ich nach Antworten, doch finde sie nicht“",
  },
  {
    phase: "Phase 5",
    title: "Akzeptanz & Integration",
    icon: CheckCircle2,
    color: "from-green-900/60 to-emerald-800/40",
    accent: "#34d399",
    sam: "Euphancholie – das gleichzeitige Spüren von Qual und Glück. Sam schaut nach vorn. Die Freundschaft hat das Licht in ihm neu entfacht, das Ende der Kindheit gibt ihm Mut.",
    stanza: "Strophe 6 & 8",
    symbol: "⭐ Das Ende der Kindheit – Mut zum Weiterleben",
    quote: "„Euphancholie nennt man das Beben im Blut“",
  },
];

const hilfsangebote = [
  {
    icon: Phone,
    title: "Telefonseelsorge",
    subtitle: "Kostenlos · 24/7",
    description: "Anonyme Krisenberatung rund um die Uhr. Für alle, die jemanden zum Reden brauchen.",
    contact: "0800 111 0 111",
    contact2: "0800 111 0 222",
    type: "Sofort-Hilfe",
    color: "from-blue-900/40 to-blue-800/20",
    accent: "#38bdf8",
    available: "Rund um die Uhr",
  },
  {
    icon: Heart,
    title: "Caritas Rhein-Sieg-Kreis",
    subtitle: "Trauer- & Krisenberatung",
    description: "Persönliche Beratung für Trauernde, Angehörige und Menschen in Krisensituationen.",
    contact: "02241 / 12 45 60",
    location: "Siegburg",
    type: "Beratung",
    color: "from-red-900/40 to-rose-800/20",
    accent: "#f43f5e",
    available: "Mo–Fr 9–17 Uhr",
  },
  {
    icon: Users,
    title: "Trauergruppe Rhein-Sieg",
    subtitle: "Selbsthilfe · Gemeinschaft",
    description: "Offene Trauergruppe für Jugendliche und Erwachsene. Gegenseitige Unterstützung in sicherer Umgebung.",
    contact: "www.nakos.de",
    location: "Bonn / Siegburg",
    type: "Gruppe",
    color: "from-purple-900/40 to-violet-800/20",
    accent: "#a78bfa",
    available: "Wöchentlich",
  },
  {
    icon: BookOpen,
    title: "Kinder- & Jugendpsychiatrie",
    subtitle: "LVR-Klinik Bonn",
    description: "Spezialisierte Hilfe für junge Menschen bei Trauer, Depression und Verlusterfahrungen.",
    contact: "0228 / 55 16 0",
    location: "Bonn",
    type: "Klinik",
    color: "from-green-900/40 to-emerald-800/20",
    accent: "#34d399",
    available: "Terminvereinbarung",
  },
  {
    icon: MapPin,
    title: "Schulpsychologischer Dienst",
    subtitle: "Rhein-Sieg-Kreis",
    description: "Unterstützung für Schüler:innen bei persönlichen Krisen, Verlust und emotionalen Belastungen.",
    contact: "02241 / 13 22 20",
    location: "Siegburg",
    type: "Schule",
    color: "from-amber-900/40 to-yellow-800/20",
    accent: "#f59e0b",
    available: "Mo–Fr Schulzeiten",
  },
  {
    icon: Star,
    title: "Online-Beratung Jugend",
    subtitle: "jugendnotmail.de",
    description: "Anonyme Online-Beratung für Jugendliche in Not. Diskreter Erstkontakt ohne Hemmschwelle.",
    contact: "www.jugendnotmail.de",
    type: "Online",
    color: "from-cyan-900/40 to-sky-800/20",
    accent: "#22d3ee",
    available: "24/7 online",
  },
];

function StanzaBlock({ stanza, index }: { stanza: typeof poemStanzas[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "center center"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);
  const isEven = index % 2 === 0;

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={`relative flex ${isEven ? "justify-start" : "justify-end"} px-4 md:px-0`}>
      <div className="relative max-w-2xl w-full md:w-auto">
        <div
          className="relative rounded-lg overflow-hidden notebook-lines"
          style={{
            background: "linear-gradient(135deg, rgba(10,22,40,0.97) 0%, rgba(5,13,26,0.99) 100%)",
            border: "1px solid rgba(245,158,11,0.15)",
            boxShadow: "0 4px 40px rgba(0,0,0,0.6), inset 0 0 20px rgba(245,158,11,0.03)",
          }}
        >
          <div className="absolute -top-1 left-8 w-16 h-3 bg-amber-400/30 rotate-1 rounded" />
          <div className="absolute left-12 top-0 bottom-0 w-px" style={{ background: "rgba(239,68,68,0.2)" }} />
          <div className="absolute left-4 top-4 w-4 h-4 rounded-full bg-[#050d1a] border border-amber-500/20 flex items-center justify-center">
            <span className="text-[8px] font-mono" style={{ color: "rgba(245,158,11,0.5)" }}>{stanza.id}</span>
          </div>
          <div className="pl-16 pr-8 py-8">
            {stanza.lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl leading-[32px]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", color: "#fef3c7", letterSpacing: "0.02em" }}
              >
                {line}
              </motion.p>
            ))}
          </div>
          <div className="flex items-center gap-2 px-16 pb-4" style={{ borderTop: "1px solid rgba(56,189,248,0.08)" }}>
            <div className="w-1 h-1 rounded-full" style={{ background: "#38bdf8" }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(56,189,248,0.5)" }}>
              {stanza.note}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function TrauerphaseCard({ phase, index }: { phase: typeof trauerphasen[0]; index: number }) {
  const [open, setOpen] = useState(false);
  const Icon = phase.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
      viewport={{ once: true, margin: "-50px" }}
      style={{ willChange: "transform" }}
      className="dossier-paper rounded-xl overflow-hidden cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div
        className={`flex items-center justify-between p-5 bg-gradient-to-r ${phase.color}`}
        style={{ borderBottom: `1px solid ${open ? phase.accent + "20" : "transparent"}` }}
      >
        <div className="flex items-center gap-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ background: `${phase.accent}20`, border: `1px solid ${phase.accent}40` }}
          >
            <Icon size={20} style={{ color: phase.accent }} />
          </div>
          <div>
            <span className="text-xs font-mono tracking-widest uppercase block mb-0.5" style={{ color: `${phase.accent}80` }}>
              {phase.phase}
            </span>
            <h3 className="text-lg font-semibold" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              {phase.title}
            </h3>
          </div>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ willChange: "transform" }}
        >
          <ChevronDown size={18} style={{ color: `${phase.accent}80` }} />
        </motion.div>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateRows: open ? "1fr" : "0fr",
          transition: "grid-template-rows 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <motion.div
            initial={false}
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.25, delay: open ? 0.1 : 0 }}
          >
            <div className="p-5 space-y-4">
              <blockquote
                className="border-l-2 pl-4 py-1 italic text-base"
                style={{
                  borderColor: phase.accent,
                  color: "#fef3c7",
                  fontFamily: "'Playfair Display', serif",
                  background: `${phase.accent}08`,
                  borderRadius: "0 8px 8px 0",
                }}
              >
                {phase.quote}
              </blockquote>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(254,243,199,0.75)" }}>
                {phase.sam}
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono"
                  style={{ background: `${phase.accent}15`, border: `1px solid ${phase.accent}30`, color: phase.accent }}
                >
                  📖 {phase.stanza}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-mono"
                  style={{ background: "rgba(254,243,199,0.05)", border: "1px solid rgba(254,243,199,0.1)", color: "rgba(254,243,199,0.6)" }}
                >
                  {phase.symbol}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function HilfsangebotCard({ item, index }: { item: typeof hilfsangebote[0]; index: number }) {
  const Icon = item.icon;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, boxShadow: `0 24px 48px rgba(0,0,0,0.5), 0 0 24px ${item.accent}25` }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      viewport={{ once: true, margin: "-30px" }}
      className={`rounded-2xl p-6 bg-gradient-to-br ${item.color} relative overflow-hidden`}
      style={{ border: `1px solid ${item.accent}25`, backdropFilter: "blur(10px)", willChange: "transform" }}
    >
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20" style={{ background: item.accent }} />
      <span
        className="absolute top-4 right-4 px-2 py-0.5 rounded-md text-xs font-mono tracking-wider"
        style={{ background: `${item.accent}20`, color: item.accent, border: `1px solid ${item.accent}30` }}
      >
        {item.type}
      </span>
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: `${item.accent}15`, border: `1px solid ${item.accent}30` }}>
          <Icon size={22} style={{ color: item.accent }} />
        </div>
        <h3 className="text-lg font-bold mb-0.5" style={{ color: "#fef3c7", fontFamily: "'Playfair Display', serif" }}>
          {item.title}
        </h3>
        <p className="text-xs font-mono mb-3 tracking-wide" style={{ color: `${item.accent}90` }}>
          {item.subtitle}
        </p>
        <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(254,243,199,0.65)" }}>
          {item.description}
        </p>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <Phone size={12} style={{ color: item.accent }} />
            <span className="text-sm font-mono font-semibold" style={{ color: "#fef3c7" }}>{item.contact}</span>
          </div>
          {"contact2" in item && item.contact2 && (
            <div className="flex items-center gap-2">
              <Phone size={12} style={{ color: item.accent }} />
              <span className="text-sm font-mono font-semibold" style={{ color: "#fef3c7" }}>{item.contact2}</span>
            </div>
          )}
          {"location" in item && item.location && (
            <div className="flex items-center gap-2">
              <MapPin size={12} style={{ color: `${item.accent}70` }} />
              <span className="text-xs" style={{ color: "rgba(254,243,199,0.5)" }}>{item.location}</span>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Clock size={12} style={{ color: `${item.accent}70` }} />
            <span className="text-xs" style={{ color: "rgba(254,243,199,0.5)" }}>{item.available}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.08], [1, 0.95]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="film-grain relative">
      <ParticleField />

      {/* Reading progress */}
      <div className="fixed top-0 left-0 right-0 h-0.5 z-50" style={{ background: "rgba(245,158,11,0.1)" }}>
        <motion.div
          className="h-full"
          style={{
            width: progressBar,
            background: "linear-gradient(90deg, #f59e0b, #f97316, #22d3ee, #f59e0b)",
            boxShadow: "0 0 8px rgba(245,158,11,0.8)",
          }}
        />
      </div>

      {/* Nav */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-40 flex items-center gap-1 px-4 py-2 rounded-full"
        style={{
          background: "rgba(5,13,26,0.85)",
          backdropFilter: "blur(20px)",
          border: "1px solid rgba(245,158,11,0.15)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
        }}
      >
        {[
          { label: "Gedicht", href: "#poem" },
          { label: "Analyse", href: "#analyse" },
          { label: "Hilfe", href: "#hilfe" },
        ].map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase transition-all duration-200"
            style={{ color: "rgba(254,243,199,0.6)" }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = "rgba(245,158,11,0.1)";
              (e.target as HTMLElement).style.color = "#fbbf24";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = "transparent";
              (e.target as HTMLElement).style.color = "rgba(254,243,199,0.6)";
            }}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* HERO */}
      <motion.section
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(249,115,22,0.12) 0%, rgba(245,158,11,0.06) 40%, rgba(5,13,26,0) 70%)",
          }}
        />
        <div className="absolute top-8 left-8 opacity-10"><Film size={48} className="text-amber-400" /></div>
        <div className="absolute bottom-8 right-8 opacity-10"><Film size={32} className="text-amber-400" /></div>
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-px bg-amber-200 rounded-full pulse-slow"
            style={{
              left: `${5 + (i * 3.8) % 90}%`,
              top: `${5 + (i * 7.3) % 50}%`,
              animationDelay: `${(i * 0.3) % 4}s`,
              opacity: 0.3 + (i % 5) * 0.1,
              transform: `scale(${1 + (i % 3)})`,
            }}
          />
        ))}

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex items-center justify-center gap-1 mb-8 flex-wrap"
          >
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-3 w-3 border rounded-sm" style={{ borderColor: "rgba(245,158,11,0.3)", background: i % 3 === 0 ? "rgba(245,158,11,0.1)" : "transparent" }} />
            ))}
            <span className="mx-3 text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(245,158,11,0.5)" }}>
              Hard Land · 1984 · Missouri
            </span>
            {[...Array(10)].map((_, i) => (
              <div key={i} className="h-3 w-3 border rounded-sm" style={{ borderColor: "rgba(245,158,11,0.3)", background: i % 3 === 0 ? "rgba(245,158,11,0.1)" : "transparent" }} />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xs font-mono tracking-[0.4em] uppercase mb-4"
            style={{ color: "rgba(56,189,248,0.7)" }}
          >
            Benedict Wells · Hard Land
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-6"
          >
            <span
              className="block text-5xl md:text-7xl lg:text-8xl font-bold leading-tight glow-amber"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#fbbf24", letterSpacing: "-0.02em" }}
            >
              Die Trauer
            </span>
            <span
              className="block text-4xl md:text-6xl lg:text-7xl font-light italic"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#fef3c7", opacity: 0.85 }}
            >
              von Sam
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: "rgba(254,243,199,0.55)", fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
          >
            Ein stilles Gedicht über Verlust, Schweigen und das mühsame Weiterleben im Schatten der 80er Jahre.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-col items-center gap-3"
          >
            <a
              href="#poem"
              className="flex items-center gap-3 px-8 py-3 rounded-full font-mono text-sm tracking-widest uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.2), rgba(249,115,22,0.15))",
                border: "1px solid rgba(245,158,11,0.4)",
                color: "#fbbf24",
                boxShadow: "0 0 20px rgba(245,158,11,0.1)",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(245,158,11,0.3)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(245,158,11,0.1)"; }}
            >
              <BookOpen size={16} />
              Gedicht lesen
            </a>
            <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
              <ChevronDown size={20} style={{ color: "rgba(245,158,11,0.4)" }} />
            </motion.div>
          </motion.div>
        </div>

        <div className="absolute inset-0 cinema-vignette pointer-events-none" />
        <div className="absolute inset-0 scanlines pointer-events-none opacity-30" />
      </motion.section>

      {/* POEM */}
      <section id="poem" className="relative py-24 px-6 md:px-12 lg:px-24 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.3))" }} />
          <div className="flex items-center gap-2">
            <Bookmark size={14} style={{ color: "#f59e0b" }} />
            <span className="text-xs font-mono tracking-[0.3em] uppercase" style={{ color: "rgba(245,158,11,0.6)" }}>Das Gedicht</span>
          </div>
          <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, rgba(245,158,11,0.3))" }} />
        </motion.div>

        <div className="space-y-12">
          {poemStanzas.map((stanza, index) => (
            <StanzaBlock key={stanza.id} stanza={stanza} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: "rgba(245,158,11,0.06)", border: "1px solid rgba(245,158,11,0.15)" }}>
            <Star size={12} style={{ color: "#f59e0b" }} />
            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: "rgba(245,158,11,0.5)" }}>
              Gedicht von Bünyamin Dagdelen · inspiriert von Benedict Wells
            </span>
            <Star size={12} style={{ color: "#f59e0b" }} />
          </div>
        </motion.div>
      </section>

      {/* TRAUERPHASEN */}
      <section
        id="analyse"
        className="relative py-24 px-6 md:px-12"
        style={{ background: "linear-gradient(180deg, transparent 0%, rgba(10,22,40,0.8) 20%, rgba(10,22,40,0.8) 80%, transparent 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-4"
          >
            <div className="inline-block border-2 px-4 py-1 rounded rotate-1 mb-6" style={{ borderColor: "rgba(134,239,172,0.4)", color: "rgba(134,239,172,0.5)" }}>
              <span className="text-xs font-mono tracking-[0.3em] uppercase">Vertraulich · Fallanalyse</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Die fünf Phasen
              <span className="block text-3xl md:text-4xl font-light italic text-amber-300">der Trauer</span>
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(254,243,199,0.55)", fontStyle: "italic" }}>
              Nach Elisabeth Kübler-Ross — analysiert anhand von Sams Entwicklung in Hard Land.
              <br />Klicke auf eine Phase, um das Dossier zu öffnen.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex items-end justify-center gap-1 md:gap-2 mb-12 h-20"
          >
            {[40, 65, 55, 80, 45].map((h, i) => (
              <div
                key={i}
                className="flex-1 max-w-16 rounded-t-lg"
                style={{
                  height: `${h}%`,
                  background: `linear-gradient(to top, ${trauerphasen[i].accent}40, ${trauerphasen[i].accent}15)`,
                  border: `1px solid ${trauerphasen[i].accent}30`,
                  borderBottom: "none",
                  boxShadow: `0 0 15px ${trauerphasen[i].accent}10`,
                }}
              />
            ))}
          </motion.div>

          <div className="space-y-3">
            {trauerphasen.map((phase, index) => (
              <TrauerphaseCard key={phase.phase} phase={phase} index={index} />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-8 text-xs font-mono"
            style={{ color: "rgba(254,243,199,0.25)" }}
          >
            Quelle: Kübler-Ross, E. (1969). On Death and Dying. · Wells, B. (2021). Hard Land.
          </motion.p>
        </div>
      </section>

      {/* HILFSANGEBOTE */}
      <section id="hilfe" className="relative py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span
              className="inline-block text-xs font-mono tracking-[0.3em] uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(56,189,248,0.1)", border: "1px solid rgba(56,189,248,0.2)", color: "rgba(56,189,248,0.8)" }}
            >
              Rhein-Sieg-Kreis · NRW
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Du bist nicht allein.
              <span className="block text-2xl md:text-3xl font-light italic text-amber-300 mt-2">
                Hilfsangebote in deiner Nähe
              </span>
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(254,243,199,0.55)" }}>
              Wie Sam in Hard Land braucht jeder manchmal jemanden. Diese Anlaufstellen helfen dir — kostenlos und vertraulich.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 p-4 rounded-xl mb-10"
            style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.15), rgba(220,38,38,0.08))", border: "1px solid rgba(239,68,68,0.3)" }}
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 pulse-slow"
              style={{ background: "rgba(239,68,68,0.2)", border: "1px solid rgba(239,68,68,0.4)" }}
            >
              <Phone size={18} style={{ color: "#ef4444" }} />
            </div>
            <div>
              <p className="text-sm font-bold" style={{ color: "#fef3c7" }}>In einer akuten Krise?</p>
              <p className="text-xs" style={{ color: "rgba(254,243,199,0.6)" }}>
                Ruf sofort die{" "}
                <strong style={{ color: "#ef4444" }}>Telefonseelsorge 0800 111 0 111</strong>{" "}
                an — kostenlos, anonym, 24/7.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {hilfsangebote.map((item, index) => (
              <HilfsangebotCard key={item.title} item={item} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-12 flex items-center justify-center gap-2"
          >
            <ExternalLink size={12} style={{ color: "rgba(56,189,248,0.4)" }} />
            <p className="text-xs font-mono" style={{ color: "rgba(254,243,199,0.3)" }}>
              Alle Angaben ohne Gewähr · Stand: 2026 · Rhein-Sieg-Kreis, NRW
            </p>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-16 px-6 text-center" style={{ borderTop: "1px solid rgba(245,158,11,0.08)", background: "rgba(5,13,26,0.8)" }}>
        <div className="flex items-center justify-center gap-1 mb-6 overflow-hidden">
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="h-4 w-4 border rounded-sm flex-shrink-0"
              style={{ borderColor: "rgba(245,158,11,0.15)", background: i % 4 === 0 ? "rgba(245,158,11,0.05)" : "transparent" }}
            />
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} viewport={{ once: true }}>
          <p className="text-xs font-mono tracking-widest uppercase mb-2" style={{ color: "rgba(245,158,11,0.4)" }}>
            Hard Land · Benedict Wells · 2021
          </p>
          <p className="text-xs" style={{ color: "rgba(254,243,199,0.2)" }}>
            Erstellt für das Deutsch-Referat · Bünyamin Dagdelen · 2026
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(254,243,199,0.15)" }}>
            Gedicht & Web-Design: Bünyamin Dagdelen · Analyse: Kübler-Ross Modell
          </p>
        </motion.div>
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full text-xs font-mono tracking-widest uppercase"
          style={{ background: "rgba(245,158,11,0.08)", border: "1px solid rgba(245,158,11,0.2)", color: "rgba(245,158,11,0.6)" }}
          whileHover={{ scale: 1.05 }}
        >
          ↑ Zurück nach oben
        </motion.a>
        <div className="flex items-center justify-center gap-6 mt-6">
          <Link
            href="/impressum"
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "rgba(254,243,199,0.2)" }}
          >
            Impressum
          </Link>
          <span style={{ color: "rgba(254,243,199,0.1)" }}>·</span>
          <Link
            href="/datenschutz"
            className="text-xs font-mono tracking-widest uppercase"
            style={{ color: "rgba(254,243,199,0.2)" }}
          >
            Datenschutz
          </Link>
        </div>
      </footer>
    </div>
  );
}
