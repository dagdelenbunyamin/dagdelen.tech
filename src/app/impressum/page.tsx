import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum · dagdelen.tech",
  description: "Impressum gemäß § 5 TMG — Bünyamin Dagdelen",
};

export default function Impressum() {
  return (
    <div
      className="min-h-screen py-16 px-6"
      style={{ background: "var(--bg-deep)", color: "var(--cream)" }}
    >
      <div className="max-w-2xl mx-auto">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-12 transition-colors duration-200"
          style={{ color: "rgba(245,158,11,0.5)" }}
          onMouseOver={undefined}
        >
          ← Zurück
        </Link>

        <header className="mb-12">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(56,189,248,0.6)" }}
          >
            Rechtliche Angaben
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#fbbf24" }}
          >
            Impressum
          </h1>
          <div
            className="h-px mt-4"
            style={{
              background:
                "linear-gradient(to right, rgba(245,158,11,0.4), transparent)",
            }}
          />
        </header>

        <div className="space-y-10 text-sm leading-relaxed" style={{ color: "rgba(254,243,199,0.8)" }}>

          <section>
            <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: "rgba(245,158,11,0.5)" }}>
              § 5 TMG
            </p>
            <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Angaben gemäß § 5 TMG
            </h2>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Betreiber dieser Website
            </h2>
            <address className="not-italic space-y-1" style={{ color: "rgba(254,243,199,0.75)" }}>
              <p>Bünyamin Dagdelen</p>
              <p>Im Johdorf 1</p>
              <p>53227 Bonn</p>
              <p>Deutschland</p>
              <p className="mt-3">
                E-Mail:{" "}
                <a
                  href="mailto:buenyamin.dagdelen@dagdelen.info"
                  style={{ color: "#38bdf8" }}
                >
                  buenyamin.dagdelen@dagdelen.info
                </a>
              </p>
            </address>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <address className="not-italic space-y-1" style={{ color: "rgba(254,243,199,0.75)" }}>
              <p>Bünyamin Dagdelen</p>
              <p>Anschrift wie oben</p>
            </address>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Haftungsausschluss
            </h2>
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die
              Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr
              übernommen werden. Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene
              Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
              bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Urheberrecht
            </h2>
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website
              unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche
              gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}>
              Hinweis zur Streitbeilegung
            </h2>
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#38bdf8" }}
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Ich bin nicht verpflichtet und auch nicht bereit, an Streitbeilegungsverfahren vor
              einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>

        <div
          className="mt-16 pt-8 flex gap-6 text-xs font-mono"
          style={{ borderTop: "1px solid rgba(245,158,11,0.1)", color: "rgba(254,243,199,0.3)" }}
        >
          <Link href="/" style={{ color: "rgba(245,158,11,0.4)" }}>← Startseite</Link>
          <Link href="/datenschutz" style={{ color: "rgba(245,158,11,0.4)" }}>Datenschutz →</Link>
        </div>
      </div>
    </div>
  );
}
