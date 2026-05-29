const projects = [
  {
    name: "DABubble",
    description:
      "Discord-/Slack-ähnliche Plattform mit Channels, Direktnachrichten, Emoji-Reaktionen, Thread-Chats, Bild-/PDF-Versand, dynamischem Design und Login inklusive Google.",
    stack: ["Angular", "TypeScript", "Firebase", "HTML", "SCSS"],
  },
  {
    name: "JOIN",
    description:
      "Kanban-Board mit Login-System, Kontaktbuch, Aufgabenverwaltung, Kategorien, Prioritäten und Statusübersicht.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Pokédex",
    description:
      "Interaktive Anwendung mit API-Anbindung, Pokémon-Detailseiten, Fähigkeiten, Angriffen und Statistiken.",
    stack: ["JavaScript", "API", "HTML", "CSS"],
  },
  {
    name: "El Pollo Loco",
    description:
      "2D-Jump-and-Run-Spiel mit Gegnern, Level-Fortschritt und Endboss.",
    stack: ["JavaScript", "HTML", "CSS"],
  },
  {
    name: "Videoflix",
    description:
      "Backend für eine moderne Video-Streaming-Plattform mit Registrierung, Login, JWT-Authentifizierung, PostgreSQL, Redis, Docker-Setup und Videoverarbeitung über FFmpeg.",
    stack: [
      "Python",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
      "FFmpeg",
      "JWT",
    ],
  },
] as const;

export function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="flex flex-col gap-8 py-24"
    >
      <h2
        id="projects-heading"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Projekte
      </h2>

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map(({ name, description, stack }) => (
          <li key={name}>
            <article
              aria-labelledby={`project-${name}`}
              className="flex h-full flex-col gap-4 border border-border p-6"
            >
              <div className="flex flex-col gap-2">
                <h3
                  id={`project-${name}`}
                  className="text-lg font-semibold tracking-tight text-foreground"
                >
                  {name}
                </h3>
                <p className="text-sm text-pretty text-muted-foreground">
                  {description}
                </p>
              </div>

              <ul
                aria-label={`Tech Stack: ${name}`}
                className="mt-auto flex flex-wrap gap-2 pt-2"
              >
                {stack.map((tech) => (
                  <li
                    key={tech}
                    className="border border-border px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
