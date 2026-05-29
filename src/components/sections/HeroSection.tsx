export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex min-h-[60vh] flex-col justify-center gap-4 py-24"
    >
      <h1
        id="hero-heading"
        className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
      >
        Hero
      </h1>
      <p className="max-w-2xl text-lg text-muted-foreground">
        Platzhalter für die Hero Section.
      </p>
    </section>
  );
}
