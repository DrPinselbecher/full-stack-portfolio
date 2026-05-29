import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="flex flex-col gap-8 py-24"
    >
      <div className="flex flex-col gap-4">
        <h2
          id="contact-heading"
          className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
        >
          Kontakt
        </h2>
        <p className="max-w-2xl text-base text-pretty text-muted-foreground">
          Ich bin offen für neue Möglichkeiten – ob Festanstellung, Projekt oder
          fachlicher Austausch. Recruiter, Unternehmen und technische
          Ansprechpartner sind herzlich willkommen, sich zu melden.
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
        <Button variant="outline" size="lg" disabled>
          E-Mail folgt
        </Button>
        <Button variant="outline" size="lg" disabled>
          LinkedIn folgt
        </Button>
        <Button variant="outline" size="lg" disabled>
          GitHub folgt
        </Button>
      </div>
    </section>
  );
}
