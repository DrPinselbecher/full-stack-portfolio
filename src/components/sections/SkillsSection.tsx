const skillGroups = [
  {
    label: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "SCSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "Angular Material",
      "RxJS",
      "React",
      "Next.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Responsive Design",
      "REST APIs",
      "Firebase",
      "Supabase",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "JWT Authentication",
      "PostgreSQL",
      "SQL",
      "Redis",
      "RQ / django-rq",
      "FFmpeg",
      "REST APIs",
    ],
  },
  {
    label: "Deployment / Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "Linux",
      "Ubuntu",
      "Nginx",
      "Gunicorn",
      "Certbot",
      "Cloud Hosting",
      "Google Cloud",
      "Oracle Cloud",
      "Vercel",
    ],
  },
  {
    label: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm", "Scrum"],
  },
  {
    label: "AI & Automation",
    skills: [
      "ChatGPT",
      "Claude",
      "Claude Code",
      "GitHub Copilot",
      "Gemini API",
      "Whisper AI",
      "n8n",
    ],
  },
] as const;

export function SkillsSection() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="flex flex-col gap-8 py-24"
    >
      <h2
        id="skills-heading"
        className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
        {skillGroups.map(({ label, skills }) => (
          <div key={label} className="flex flex-col gap-3">
            <h3 className="text-sm font-medium text-foreground">{label}</h3>
            <ul aria-label={`${label} Skills`} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="border border-border px-3 py-1 text-xs text-muted-foreground"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
