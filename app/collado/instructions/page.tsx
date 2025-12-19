import Link from "next/link";

export const metadata = {
  title: "Colado — Anleitung",
  description: "Anweisung für das Collado-Produkt",
};

export default function Page() {
  return (
    /* Hintergrund: Gleicher Gradient wie HomePage */
    <main className="flex min-h-screen flex-col items-center justify-start bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-6 sm:p-12 transition-colors duration-500">
      {/* Container mit Glassmorphism-Effekt */}
      <div className="max-w-4xl w-full p- sm:p-10 bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700">
        {/* Kopfbereich mit Gradient-Text */}
        <header className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl p-10 font-extrabold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">
            Beschreibung & Anleitung
          </h1>
        </header>

        {/* Strukturierter Inhaltsbereich */}
        <section className="">
          <h2 className="text-3xl font-bold mb-5 text-purple-400 border-b border-gray-700 pb-2">
            🌿 Miro Home Calado
          </h2>
          <p className="text-lg font-semibold mb-8 italic text-gray-300">
            Designer-Lampe aus PLA mit Dimmer
          </p>

          <div className="space-y-6">
            <InstructionPoint
              number="1"
              title="🔌 Stromversorgung"
              content="Die Lampe wird über ein Netzteil **12 V DC, 1 A (5.5 × 2.1 mm Stecker)** betrieben, das an die Buchse im Gehäuseboden angeschlossen wird. Kabellänge ≈ 1.5 m. Nach dem Anschließen der Stromversorgung ist die Lampe betriebsbereit. **Das Netzteil ist im Lieferumfang enthalten.** Geeignet für LED-Geräte mit geringer Leistung (bis zu 12 W)."
            />

            <InstructionPoint
              number="2"
              title="💡✨ Lichtquelle"
              content="Im Inneren des Gehäuses befindet sich ein **vertikales LED-Modul**, das **zentral in der Lampe als Lichtstab** montiert ist. **LED-Modul:** – COB LED Strip 12 V DC (3000 K warmweiß, CRI ≥ 90) – Typ: 320 LED/m, Breite 8 mm – In der Leuchte wird ein Abschnitt von ≈ 45–50 cm verwendet. Es beleuchtet den inneren Diffusor gleichmäßig und erzeugt ein weiches, gestreutes Licht über die gesamte Oberfläche."
            />

            <InstructionPoint
              number="3"
              title="✋ Lichtsteuerung"
              content="Auf der Oberseite der Lampe, über die gesamte Oberfläche der Abdeckung, befindet sich ein **Touch-Dimmer** Touch Dimmer Module 12/24 V DC, 3–5 A (max). – Kurzes Berühren schaltet das Licht ein oder aus. – Langes Halten reguliert die Helligkeit stufenlos — von minimaler zu maximaler Stufe. – Wiederholtes Halten ändert die Helligkeit in umgekehrter Richtung. Eine Speicherfunktion **ist nicht vorhanden**: Beim nächsten Einschalten leuchtet die Lampe mit Standardhelligkeit."
            />

            <InstructionPoint
              number="4"
              title="🌸 Konstruktion und Lichtstreuung"
              content="Das Gehäuse wird mittels **3D-Druck aus umweltfreundlichem PLA-Kunststoff** hergestellt, der sicher für Zuhause und Kinder ist. PLA wird aus nachwachsenden Rohstoffen hergestellt — **Maisstärke und Zuckerrohr**. Der innere weiße Diffusor sorgt für eine weiche und gleichmäßige Lichtverteilung, während das dekorative Paneel mit dem **Calado**-Muster ein ausdrucksstarkes Schattenspiel und ein gemütliches Licht erzeugt."
            />

            <InstructionPoint
              number="5"
              title="⚠️ Sicherheit und Betrieb"
              content="– Die Betriebsspannung beträgt **12 V DC** (sicher für den Menschen). – Die Lampe erwärmt sich nicht stark. – Kein Lampenwechsel erforderlich: Das LED-Modul ist für ≈ 30.000 Betriebsstunden ausgelegt. – Nicht in feuchten Räumen oder bei Temperaturen über **40 °C** verwenden. – Nur für den **Innenbereich**."
            />

            <InstructionPoint
              number="6"
              title="🧼 Pflege"
              content="– Die Oberfläche mit einem **trockenen, weichen Tuch** abwischen. – Keine Alkohole, Lösungsmittel oder scheuernden Mittel verwenden. – Das Gehäuse nicht demontieren."
            />
          </div>

          {/* FAQ Bereich */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              ℹ️ 7. Häufig gestellte Fragen (FAQ):
            </h3>
            <FAQSection />
          </div>

          {/* Tabelle */}
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6 text-purple-400">
              Technische Daten
            </h3>
            <TechnicalSpecsTable />
          </div>
        </section>

        {/* Fußzeile */}
        <p className="mt-10 text-center">
          <Link
            href="/"
            className="text-blue-400 hover:text-blue-300 underline transition-colors"
          >
            ← Zurück zur Startseite
          </Link>
        </p>
      </div>
    </main>
  );
}

// --- Hilfskomponenten im Dark-Style ---

function InstructionPoint({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  return (
    <div className="p-5 bg-gray-800/40 border-l-4 border-purple-500 rounded-r-xl transition-all hover:bg-gray-800/60">
      <h3 className="text-xl font-bold mb-2 text-blue-400">
        {number}. {title}
      </h3>
      <div
        className="text-gray-300 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: content
            .replace(/\*\*(.*?)\*\*/g, "<strong class='text-white'>$1</strong>")
            .replace(/\s–\s/g, "<br/>– "),
        }}
      />
    </div>
  );
}

function FAQSection() {
  const faqs = [
    "Wie lange ist die Garantiezeit für die Leuchte? Die Garantie beträgt ein Jahr, was Vertrauen in die Qualität des Produkts gibt.",
    "Aus welchem Material besteht die Leuchte? Sie wird aus PLA hergestellt – einem biologisch abbaubaren Kunststoff, der aus Maisstärke und Zuckerrohr gewonnen wird.",
    "Kann die Helligkeit der Leuchte reguliert werden? Ja, es gibt eine Dimmfunktion, mit der Sie das Licht an Ihre Bedürfnisse anpassen können.",
    "Kann die Lampe in dieser Leuchte ausgetauscht werden? Nein, die meisten modernen Dekorationsleuchten sehen keinen Lampenwechsel vor, da hier LEDs direkt im Gehäuse verbaut sind.",
    "Welche Besonderheiten gibt es bezüglich Betrieb und Sicherheit? Die Hitzebeständigkeit ist gering – bei Temperaturen um 55–60 °C kann das Produkt weich werden. Die Installation an Orten mit erhöhter Temperatur wird daher nicht empfohlen.",
    "Ist die Pflege der Leuchte einfach? Ja, zur Sauberhaltung genügt es, die Oberfläche mit einem trockenen, weichen Tuch abzuwischen.",
    "Ist PLA für den Heimgebrauch sicher? Ja, das PLA-Material ist sicher und gibt keine schädlichen Substanzen ab.",
    "Warum schaltet sich die Leuchte nicht ein? Überprüfen Sie den Anschluss an das Stromnetz, die Funktion des Netzteils und die Verfügbarkeit von Strom.",
  ];

  return (
    <ul className="space-y-4">
      {faqs.map((faq, index) => {
        const parts = faq.split("?");
        const question = parts[0] + "?";
        const answer = parts.slice(1).join("?").trim();
        return (
          <li
            key={index}
            className="bg-gray-800/20 p-4 rounded-lg border border-gray-800"
          >
            <p className="font-bold text-white mb-1">{question}</p>
            <p className="text-gray-400 ml-2">{answer}</p>
          </li>
        );
      })}
    </ul>
  );
}

function TechnicalSpecsTable() {
  const specs = [
    { param: "Betriebsspannung", value: "12 V DC" },
    { param: "Leistung", value: "≈ 3–4 W" },
    { param: "Farbtemperatur", value: "3000 K (warmweiß)" },
    { param: "Farbwiedergabeindex (CRI)", value: "≥ 90" },
    { param: "Steuerung", value: "Touch-Dimmer (12/24 V DC, 3–5 A)" },
    { param: "Lichtquelle", value: "COB LED (320 LED/m, Segment 45–50 cm)" },
    { param: "Gehäusematerial", value: "PLA (Biokunststoff)" },
    { param: "Lebensdauer LED", value: "≈ 30.000 h" },
    { param: "Lieferumfang", value: "Leuchte + Netzteil 12 V DC 1 A" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-700">
      <table className="min-w-full">
        <thead className="bg-gray-800/80 text-gray-400">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Parameter
            </th>
            <th className="px-6 py-3 text-left text-xs font-bold uppercase tracking-wider">
              Wert
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {specs.map((spec, index) => (
            <tr
              key={index}
              className="bg-gray-900/40 hover:bg-gray-800/40 transition-colors"
            >
              <td className="px-6 py-4 text-sm font-medium text-purple-300">
                {spec.param}
              </td>
              <td className="px-6 py-4 text-sm text-gray-300">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
