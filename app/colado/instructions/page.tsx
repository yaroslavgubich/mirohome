// app/collado/instructions/page.tsx

import Link from "next/link";
// Annahme: Tailwind CSS Klassen wie 'mx-auto' funktionieren über globale Styles.

export const metadata = {
  title: "Collado — Anleitung",
  description: "Anleitungsseite für das Collado-Produkt",
};

// Hauptkomponente, die den gesamten Seiteninhalt rendert.
export default function Page() {
  return (
    <main className="min-h-screen p-8 sm:p-12">
      {/* Container zur Zentrierung: mx-auto zentriert den Block, max-w-3xl begrenzt die Breite */}
      <div className="max-w-3xl mx-auto text-gray-800">
        {/* Kopfbereich */}
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            Colado — Anweisungen
          </h1>
        </header>

        {/* Anweisungen Inhalt (Strukturierter Bereich) */}
        <section className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 border-b pb-2 text-indigo-700">
            🌿 Miro Home Calado
          </h2>
          <p className="text-lg font-semibold mb-6 italic text-gray-700">
            Designer-Lampe aus PLA mit Dimmer
          </p>

          {/* Abschnitt 1: Stromversorgung */}
          <InstructionPoint
            number="1"
            title="🔌 Stromversorgung"
            content="Die Lampe wird über ein Netzteil **12 V DC, 1 A (5.5 × 2.1 mm Stecker)** betrieben, das an die Buchse im Gehäuseboden angeschlossen wird. Kabellänge ≈ 1.5 m. Nach dem Anschließen der Stromversorgung ist die Lampe betriebsbereit. **Das Netzteil ist im Lieferumfang enthalten.** Geeignet für LED-Geräte mit geringer Leistung (bis zu 12 W)."
          />

          {/* Abschnitt 2: Lichtquelle */}
          <InstructionPoint
            number="2"
            title="💡✨ Lichtquelle"
            content="Im Inneren des Gehäuses befindet sich ein **vertikales LED-Modul**, das **zentral in der Lampe als Lichtstab** montiert ist. **LED-Modul:** – COB LED Strip 12 V DC (3000 K warmweiß, CRI ≥ 90) – Typ: 320 LED/m, Breite 8 mm – In der Leuchte wird ein Abschnitt von ≈ 45–50 cm verwendet. Es beleuchtet den inneren Diffusor gleichmäßig und erzeugt ein weiches, gestreutes Licht über die gesamte Oberfläche."
          />

          {/* Abschnitt 3: Lichtsteuerung */}
          <InstructionPoint
            number="3"
            title="✋ Lichtsteuerung"
            content="Auf der Oberseite der Lampe, über die gesamte Oberfläche der Abdeckung, befindet sich ein **Touch-Dimmer** Touch Dimmer Module 12/24 V DC, 3–5 A (max). – Kurzes Berühren schaltet das Licht ein oder aus. – Langes Halten reguliert die Helligkeit stufenlos — von minimaler zu maximaler Stufe. – Wiederholtes Halten ändert die Helligkeit in umgekehrter Richtung. Eine Speicherfunktion **ist nicht vorhanden**: Beim nächsten Einschalten leuchtet die Lampe mit Standardhelligkeit."
          />

          {/* Abschnitt 4: Konstruktion */}
          <InstructionPoint
            number="4"
            title="🌸 Konstruktion und Lichtstreuung"
            content="Das Gehäuse wird mittels **3D-Druck aus umweltfreundlichem PLA-Kunststoff** hergestellt, der sicher für Zuhause und Kinder ist. PLA wird aus nachwachsenden Rohstoffen hergestellt — **Maisstärke und Zuckerrohr**. Der innere weiße Diffusor sorgt für eine weiche und gleichmäßige Lichtverteilung, während das dekorative Paneel mit dem **Calado**-Muster ein ausdrucksstarkes Schattenspiel und ein gemütliches Licht erzeugt."
          />

          {/* Abschnitt 5: Sicherheit */}
          <InstructionPoint
            number="5"
            title="⚠️ Sicherheit und Betrieb"
            content="– Die Betriebsspannung beträgt **12 V DC** (sicher für den Menschen). – Die Lampe erwärmt sich nicht stark. – Kein Lampenwechsel erforderlich: Das LED-Modul ist für ≈ 30.000 Betriebsstunden ausgelegt. – Nicht in feuchten Räumen oder bei Temperaturen über **40 °C** verwenden. – Nur für den **Innenbereich**."
          />

          {/* Abschnitt 6: Pflege */}
          <InstructionPoint
            number="6"
            title="🧼 Pflege"
            content="– Die Oberfläche mit einem **trockenen, weichen Tuch** abwischen. – Keine Alkohole, Lösungsmittel oder scheuernden Mittel verwenden. – Das Gehäuse nicht demontieren."
          />

          {/* Abschnitt 7: FAQ */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">
              ℹ️ 7. Häufig gestellte Fragen (FAQ):
            </h3>
            <FAQSection />
          </div>

          {/* Tabelle mit technischen Daten */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <h3 className="text-xl font-bold mb-4 text-indigo-700">
              Technische Daten
            </h3>
            <TechnicalSpecsTable />
          </div>
        </section>

        {/* Fußzeilen-Link */}
        <p className="mt-8 text-center text-gray-500">
          <Link href="/" className="text-blue-600 hover:text-blue-800">
            ← Zurück zur Startseite
          </Link>
        </p>
      </div>
    </main>
  );
}

// --- Hilfskomponenten (Unverändert, aber mit deutscher Datenbasis) ---

// Komponente für jeden nummerierten Anweisungspunkt
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
    <div className="mb-6 p-4 border-l-4 border-indigo-400 pl-4 bg-indigo-50/50 rounded-lg">
      <h3 className="text-xl font-semibold mb-2 text-indigo-700">
        {number}. {title}
      </h3>
      <div
        className="text-gray-700 leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: content
            .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
            .replace(/\s–\s/g, "<br/>– "),
        }}
      />
    </div>
  );
}

// Komponente für den FAQ-Bereich
function FAQSection() {
  const faqs = [
    "Wie lange ist die Garantiezeit für die Leuchte? Die Garantie beträgt ein Jahr, was Vertrauen in die Qualität des Produkts gibt.",
    "Aus welchem Material besteht die Leuchte? Sie wird aus PLA hergestellt – einem biologisch abbaubaren Kunststoff, der aus Maisstärke und Zuckerrohr gewonnen wird.",
    "Kann die Helligkeit der Leuchte reguliert werden? Ja, es gibt eine Dimmfunktion, mit der Sie das Licht an Ihre Bedürfnisse anpassen können.",
    "Kann die Lampe in dieser Leuchte ausgetauscht werden? Nein, die meisten modernen Dekorationsleuchten sehen keinen Lampenwechsel vor, da hier LEDs direkt im Gehäuse verbaut sind.",
    "Welche Besonderheiten gibt es bezüglich Betrieb und Sicherheit? Die Hitzebeständigkeit ist gering – bei Temperaturen um 55–60 °C kann das Produkt weich werden. Die Installation an Orten mit erhöhter Temperatur wird daher nicht empfohlen. Die Leuchte ist nicht zerlegbar und sicher in der Anwendung; sie schafft eine gemütliche Atmosphäre im Haus.",
    "Ist die Pflege der Leuchte einfach? Ja, zur Sauberhaltung genügt es, die Oberfläche mit einem trockenen, weichen Tuch abzuwischen.",
    "Ist PLA für den Heimgebrauch sicher? Ja, das PLA-Material ist sicher und gibt keine schädlichen Substanzen ab.",
    "Ist die Leuchte für ein Familienwohnzimmer geeignet? Ja, sie passt perfekt in die Einrichtung und schafft eine gemütliche Atmosphäre für die ganze Familie.",
    "Ist sie für ein Kinderzimmer geeignet? Ja, dank des umweltfreundlichen Materials und des stilvollen Designs eignet sich die Leuchte für das Kinderzimmer.",
    "Warum schaltet sich die Leuchte nicht ein? Überprüfen Sie den Anschluss an das Stromnetz, die Funktion des Netzteils und die Verfügbarkeit von Strom. Stellen Sie außerdem sicher, dass keine mechanischen Beschädigungen vorliegen.",
    "Wie kann die Langlebigkeit der Leuchte gewährleistet werden? Verwenden Sie das Gerät gemäß den Anweisungen, vermeiden Sie Überhitzung, Feuchtigkeit und Temperaturen über 40 °C.",
  ];

  return (
    <ul className="space-y-3 list-disc pl-5">
      {faqs.map((faq, index) => {
        // Split question from answer
        const parts = faq.split("?");
        const question = parts[0] + "?";
        const answer = parts.slice(1).join("?").trim();
        return (
          <li key={index}>
            <p className="font-medium text-gray-900">{question}</p>
            <p className="text-gray-700 ml-5">{answer}</p>
          </li>
        );
      })}
    </ul>
  );
}

// Komponente für die Tabelle mit technischen Daten
function TechnicalSpecsTable() {
  const specs = [
    { param: "Betriebsspannung", value: "12 V DC" },
    { param: "Leistung", value: "≈ 3–4 W" },
    { param: "Farbtemperatur", value: "3000 K (warmweiß)" },
    { param: "Farbwiedergabeindex (CRI)", value: "≥ 90" },
    {
      param: "Steuerung",
      value:
        "Touch-Dimmer (in der Abdeckung) Touch Dimmer Module 12/24 V DC, 3–5 A (max)",
    },
    { param: "Lichtquelle", value: "COB LED (320 LED/m, Segment 45–50 cm)" },
    { param: "Gehäusematerial", value: "PLA (Biokunststoff)" },
    { param: "Lebensdauer LED", value: "≈ 30.000 h" },
    {
      param: "Abmessungen",
      value: "(Bitte die genauen Maße für Etsy angeben)",
    },
    { param: "Lieferumfang", value: "Leuchte + Netzteil 12 V DC 1 A" },
  ];

  return (
    <div className="overflow-x-auto shadow rounded-lg">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-indigo-50">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider w-1/3"
            >
              Parameter
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider"
            >
              Wert
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {specs.map((spec, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {spec.param}
              </td>
              <td className="px-6 py-4 whitespace-pre-wrap text-sm text-gray-700">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
