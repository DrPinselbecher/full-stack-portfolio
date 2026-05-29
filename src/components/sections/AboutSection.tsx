const strengths = [
  "Zielstrebig",
  "Lernstark",
  "Zuverlässig",
  "Technisch interessiert",
  "Professionell",
] as const;

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex flex-col gap-8 py-24"
    >
      <div className="flex flex-col gap-4">
        <h2
          id="about-heading"
          className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Über mich
        </h2>

        <div className="flex flex-col gap-4 max-w-2xl">
          <p className="text-base text-pretty text-muted-foreground sm:text-lg">
            Ich entwickle Full-Stack-Webanwendungen mit Fokus auf klare Struktur
            und moderne Technologien. Vom interaktiven Frontend bis zur
            serverseitigen Logik arbeite ich an der gesamten Breite des
            Entwicklungsprozesses – mit dem Ziel, robuste und wartbare Lösungen
            zu liefern.
          </p>

          <p className="text-base text-pretty text-muted-foreground sm:text-lg">
            Mein Anspruch ist Code, der nicht nur funktioniert, sondern langfristig
            verständlich, erweiterbar und zuverlässig bleibt. Ich lege Wert auf
            saubere Architektur, durchdachte Nutzererfahrung und eine professionelle
            Umsetzung – von der ersten Zeile bis zum fertigen Produkt.
          </p>
        </div>
      </div>

      <ul
        aria-label="Persönliche Stärken"
        className="flex flex-wrap gap-2"
      >
        {strengths.map((strength) => (
          <li
            key={strength}
            className="border border-border px-3 py-1 text-xs text-muted-foreground"
          >
            {strength}
          </li>
        ))}
      </ul>
    </section>
  );
}
