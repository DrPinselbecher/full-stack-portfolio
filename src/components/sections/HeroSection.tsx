import {
  ArrowRight,
  FileArrowDown,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react/dist/ssr";

import { Button } from "@/components/ui/button";

const socialLinks = [
  { label: "GitHub-Profil (Platzhalter)", icon: GithubLogo },
  { label: "LinkedIn-Profil (Platzhalter)", icon: LinkedinLogo },
] as const;

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="flex min-h-[70vh] flex-col justify-center gap-8 py-24"
    >
      <div className="flex flex-col gap-6">
        <p className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
          Software Developer · Full-Stack Development
        </p>

        <h1
          id="hero-heading"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl"
        >
          Moderne Webanwendungen, sauber gebaut.
        </h1>

        <p className="max-w-2xl text-lg text-pretty text-muted-foreground">
          Ich entwickle performante, zugängliche und wartbare Anwendungen vom
          Frontend bis zum Backend – mit Fokus auf saubere Architektur und ein
          durchdachtes Nutzererlebnis.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button asChild size="lg">
          <a href="#projects">
            Projekte ansehen
            <ArrowRight aria-hidden="true" />
          </a>
        </Button>

        <Button asChild size="lg" variant="outline">
          <a href="#contact">Kontakt aufnehmen</a>
        </Button>

        <Button size="lg" variant="ghost" disabled>
          <FileArrowDown aria-hidden="true" />
          Lebenslauf folgt
        </Button>
      </div>

      <ul className="flex items-center gap-2">
        {socialLinks.map(({ label, icon: Icon }) => (
          <li key={label}>
            <Button asChild size="icon-lg" variant="ghost">
              <a href="#" aria-label={label}>
                <Icon aria-hidden="true" />
              </a>
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
}
