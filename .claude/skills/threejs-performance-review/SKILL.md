---
name: threejs-performance-review
description: Prüft Three.js, React Three Fiber, Drei und GSAP ScrollTrigger auf Performance, Lazy Loading, Mobile-Optimierung und unnötige Render-Kosten. Nur verwenden, wenn der Nutzer diesen Skill ausdrücklich anfordert.
---

# Three.js Performance Review

Prüfe nur Dateien, die mit 3D, Canvas, Animation, GSAP, React Three Fiber, Drei oder Three.js zusammenhängen.

Nicht ändern:
- Keine Dateien bearbeiten.
- Keine neuen Dateien erstellen.
- Keine Dependencies installieren.
- Keine externen URLs, CDNs, Fonts, Scripts oder Assets hinzufügen.
- Keine `.env`-Dateien lesen oder erwähnen.
- Keine Remote-Skripte oder Code-Snippets abrufen.

## Prüfkriterien

### 1. Lazy Loading

Prüfe:

- Werden schwere 3D-Komponenten dynamisch geladen?
- Wird Three.js vom initialen Page Load getrennt?
- Gibt es sinnvolle Fallbacks während des Ladens?
- Wird Canvas nur dort geladen, wo er wirklich gebraucht wird?

### 2. Mobile Performance

Prüfe:

- Werden teure 3D-Effekte auf Mobile reduziert oder deaktiviert?
- Gibt es unnötige Animationen auf kleinen Screens?
- Sind Touch-Geräte berücksichtigt?
- Wird die Lesbarkeit durch Animationen nicht gestört?

### 3. Reduced Motion

Prüfe:

- Wird `prefers-reduced-motion` respektiert?
- Können Animationen reduziert oder deaktiviert werden?
- Bleibt die Seite auch ohne Animation verständlich und hochwertig?

### 4. Render Performance

Prüfe:

- Gibt es unnötige `useFrame`-Arbeit?
- Gibt es vermeidbare Re-Renders?
- Werden Objekte, Materialien und Geometrien unnötig neu erzeugt?
- Werden Ressourcen korrekt aufgeräumt?
- Werden GSAP ScrollTrigger-Instanzen sauber entfernt?

### 5. Bundle Size und Assets

Prüfe:

- Werden 3D-Libraries nur dort geladen, wo sie gebraucht werden?
- Sind Assets unnötig groß?
- Gibt es unkomprimierte oder ungeeignete 3D-/Bild-Dateien?
- Werden keine externen Asset-URLs ohne Zustimmung verwendet?

### 6. UX-Wirkung

Prüfe:

- Unterstützt der 3D-Effekt die Portfolio-Wirkung?
- Ist der Effekt professionell und nicht überladen?
- Lenkt die Animation nicht von Inhalt, CTA oder Lesbarkeit ab?

## Ausgabeformat

Antworte kurz mit:

1. Ergebnis: bestanden / teilweise bestanden / nicht bestanden
2. Kritische Performance-Probleme
3. Empfohlene Verbesserungen
4. Betroffene Dateien
5. Was warten kann
6. Was nicht geprüft werden konnte