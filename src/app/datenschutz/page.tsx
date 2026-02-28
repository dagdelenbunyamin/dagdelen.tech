import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutzerklärung · dagdelen.tech",
  description: "Datenschutzerklärung gemäß DSGVO — Bünyamin Dagdelen",
};

function Section({ title, para, children }: { title: string; para?: string; children?: React.ReactNode }) {
  return (
    <section>
      <h2
        className="text-lg font-semibold mb-3"
        style={{ fontFamily: "'Playfair Display', serif", color: "#fef3c7" }}
      >
        {title}
      </h2>
      {para && <p style={{ color: "rgba(254,243,199,0.65)" }}>{para}</p>}
      {children}
    </section>
  );
}

export default function Datenschutz() {
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
        >
          ← Zurück
        </Link>

        <header className="mb-12">
          <p
            className="text-xs font-mono tracking-[0.3em] uppercase mb-3"
            style={{ color: "rgba(56,189,248,0.6)" }}
          >
            Stand: Februar 2026 · dagdelen.tech
          </p>
          <h1
            className="text-4xl font-bold"
            style={{ fontFamily: "'Playfair Display', serif", color: "#fbbf24" }}
          >
            Datenschutzerklärung
          </h1>
          <div
            className="h-px mt-4"
            style={{
              background:
                "linear-gradient(to right, rgba(245,158,11,0.4), transparent)",
            }}
          />
        </header>

        <div className="space-y-10 text-sm leading-relaxed">

          <Section title="Einleitung und allgemeine Angaben">
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Vielen Dank für Ihr Interesse an meiner Website. Der Schutz Ihrer personenbezogenen
              Daten ist mir ein sehr wichtiges Anliegen. Im Folgenden finden Sie Informationen zum
              Umgang mit Ihren Daten, die durch Ihre Nutzung meiner Website erfasst werden. Die
              Verarbeitung Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen der
              Datenschutz-Grundverordnung (DSGVO) und des Bundesdatenschutzgesetzes (BDSG).
            </p>
          </Section>

          <Section title="Verantwortlicher im Sinne der DSGVO">
            <address className="not-italic space-y-1" style={{ color: "rgba(254,243,199,0.65)" }}>
              <p>Bünyamin Dagdelen</p>
              <p>Im Johdorf 1</p>
              <p>53227 Bonn</p>
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:buenyamin.dagdelen@dagdelen.info"
                  style={{ color: "#38bdf8" }}
                >
                  buenyamin.dagdelen@dagdelen.info
                </a>
              </p>
            </address>
          </Section>

          <Section title="Erhebung und Speicherung personenbezogener Daten">
            <h3 className="font-semibold mt-4 mb-2" style={{ color: "rgba(254,243,199,0.85)" }}>
              Server-Logfiles
            </h3>
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Beim Aufrufen dieser Website werden durch den Hosting-Anbieter automatisch
              Informationen an den Server gesendet. Diese Informationen werden temporär in einem
              Logfile gespeichert. Folgende Informationen werden ohne Ihr Zutun erfasst und bis
              zur automatisierten Löschung gespeichert:
            </p>
            <ul
              className="list-disc list-inside mt-3 space-y-1 pl-2"
              style={{ color: "rgba(254,243,199,0.6)" }}
            >
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem Ihres Rechners</li>
            </ul>
            <p className="mt-3" style={{ color: "rgba(254,243,199,0.65)" }}>
              Die genannten Daten werden zu folgenden Zwecken verarbeitet:
            </p>
            <ul
              className="list-disc list-inside mt-2 space-y-1 pl-2"
              style={{ color: "rgba(254,243,199,0.6)" }}
            >
              <li>Gewährleistung eines reibungslosen Verbindungsaufbaus</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
            </ul>
            <p className="mt-3" style={{ color: "rgba(254,243,199,0.5)", fontStyle: "italic" }}>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Section>

          <Section title="Webhosting">
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Diese Website wird über{" "}
              <strong style={{ color: "rgba(254,243,199,0.85)" }}>GitHub Pages</strong>{" "}
              (GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA) gehostet.
              Die Domain <span style={{ color: "#38bdf8" }}>dagdelen.tech</span> ist über{" "}
              <strong style={{ color: "rgba(254,243,199,0.85)" }}>get.tech</strong>{" "}
              (Radix FZC, SHAMS Business Centre, Sharjah Media City, Sharjah, UAE) registriert.
            </p>
            <p className="mt-3" style={{ color: "rgba(254,243,199,0.65)" }}>
              Wenn Sie meine Website besuchen, werden personenbezogene Daten auf den Servern von
              GitHub Pages verarbeitet. Hierbei handelt es sich insbesondere um:
            </p>
            <ul
              className="list-disc list-inside mt-2 space-y-1 pl-2"
              style={{ color: "rgba(254,243,199,0.6)" }}
            >
              <li>IP-Adressen der Besucher</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Übertragene Datenmenge</li>
              <li>Referrer-URL</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p className="mt-3" style={{ color: "rgba(254,243,199,0.65)" }}>
              Die Datenschutzerklärung von GitHub finden Sie unter:{" "}
              <a
                href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#38bdf8" }}
              >
                docs.github.com/en/site-policy/privacy-policies/github-privacy-statement
              </a>
            </p>
            <p className="mt-3" style={{ color: "rgba(254,243,199,0.5)", fontStyle: "italic" }}>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </Section>

          <Section title="Kontaktaufnahme">
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Wenn Sie mich per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für mögliche
              Anschlussfragen gespeichert. Eine Weitergabe dieser Daten erfolgt nicht ohne Ihre
              Einwilligung.
            </p>
            <p className="mt-3" style={{ color: "rgba(254,243,199,0.5)", fontStyle: "italic" }}>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO.
            </p>
          </Section>

          <Section title="Externe Links">
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Diese Website enthält ggf. Verlinkungen zu externen Websites (z. B. GitHub,
              LinkedIn). Nach dem Anklicken dieser Links werden Nutzerinformationen an den
              jeweiligen Anbieter übertragen. Für die Verarbeitung Ihrer personenbezogenen Daten
              durch diese Anbieter ist ausschließlich deren jeweilige Datenschutzerklärung
              maßgeblich.
            </p>
          </Section>

          <Section title="Datensicherheit">
            <p style={{ color: "rgba(254,243,199,0.65)" }}>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung
              vertraulicher Inhalte eine SSL-/TLS-Verschlüsselung.
            </p>
          </Section>

          <Section title="Ihre Rechte">
            <p className="mb-3" style={{ color: "rgba(254,243,199,0.65)" }}>
              Sie haben gegenüber mir folgende Rechte hinsichtlich der Sie betreffenden
              personenbezogenen Daten:
            </p>
            <ul className="space-y-1 pl-2" style={{ color: "rgba(254,243,199,0.6)" }}>
              {[
                "Recht auf Auskunft (Art. 15 DSGVO)",
                "Recht auf Berichtigung (Art. 16 DSGVO)",
                "Recht auf Löschung (Art. 17 DSGVO)",
                "Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)",
                "Recht auf Datenübertragbarkeit (Art. 20 DSGVO)",
                "Recht auf Widerspruch (Art. 21 DSGVO)",
                "Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)",
                "Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO)",
              ].map((right) => (
                <li key={right} className="flex items-start gap-2">
                  <span style={{ color: "#f59e0b", marginTop: "2px" }}>·</span>
                  <span>{right}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4" style={{ color: "rgba(254,243,199,0.65)" }}>
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte per E-Mail an:{" "}
              <a
                href="mailto:buenyamin.dagdelen@dagdelen.info"
                style={{ color: "#38bdf8" }}
              >
                buenyamin.dagdelen@dagdelen.info
              </a>
            </p>
          </Section>

          <Section
            title="Automatisierte Entscheidungsfindung"
            para="Eine automatisierte Entscheidungsfindung oder ein Profiling gemäß Art. 22 DSGVO findet nicht statt."
          />

          <Section
            title="Änderungsvorbehalt"
            para="Ich behalte mir vor, diese Datenschutzerklärung erforderlichenfalls unter Beachtung der geltenden Datenschutzvorschriften anzupassen bzw. zu aktualisieren."
          />
        </div>

        <div
          className="mt-16 pt-8 flex gap-6 text-xs font-mono"
          style={{ borderTop: "1px solid rgba(245,158,11,0.1)", color: "rgba(254,243,199,0.3)" }}
        >
          <Link href="/" style={{ color: "rgba(245,158,11,0.4)" }}>← Startseite</Link>
          <Link href="/impressum" style={{ color: "rgba(245,158,11,0.4)" }}>Impressum →</Link>
        </div>
      </div>
    </div>
  );
}
