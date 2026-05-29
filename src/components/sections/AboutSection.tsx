export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex flex-col gap-4 py-24"
    >
      <h2
        id="about-heading"
        className="text-3xl font-semibold tracking-tight text-foreground"
      >
        Über mich
      </h2>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Platzhalter für die Über-mich Section.
      </p>
    </section>
  );
}
