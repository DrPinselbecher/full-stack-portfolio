---
name: deployment-checklist
description: Prüft, ob das Portfolio für Vercel Deployment bereit ist. Fokus auf Build, TypeScript, Linting, SEO, Accessibility, Performance und sichere Konfiguration. Nur verwenden, wenn der Nutzer diesen Skill ausdrücklich anfordert.
---

# Deployment Checklist

Prüfe, ob das Portfolio bereit für ein sauberes Vercel Deployment ist.

Nicht ändern:

- Keine Dateien bearbeiten.
- Keine neuen Dateien erstellen.
- Keine Dependencies installieren.
- Keine externen URLs, CDNs, Fonts, Scripts oder Assets hinzufügen.
- Keine `.env`-Dateien lesen, ausgeben oder zusammenfassen.
- Keine Secrets, Tokens oder privaten Werte prüfen oder erwähnen.
- Keine Remote-Skripte oder Code-Snippets abrufen.

## Prüfkriterien

### 1. Build-Fähigkeit

Prüfe:

- Existieren passende Scripts in `package.json`?
- Läuft der TypeScript-Check?
- Läuft Linting?
- Läuft der Production Build?
- Gibt es offensichtliche Build-Risiken?

Bevorzugte Commands:

- `npm run lint`
- `npm run typecheck`
- `npm run build`

Wenn ein Command fehlt, zuerst `package.json` prüfen und den korrekten Command vorschlagen.

### 2. Next.js / Vercel

Prüfe:

- App Router korrekt genutzt
- Keine lokalen Pfad-Annahmen
- Keine serverseitigen Abhängigkeiten, die Vercel blockieren
- Keine unnötigen Client Components
- Keine Build-Fehler durch Browser APIs in Server Components
- Kein Zugriff auf `.env` nötig für die Prüfung

### 3. Sicherheit

Prüfe:

- Keine Secrets im Code
- Keine `.env`-Dateien committed
- Keine privaten Werte hardcoded
- Keine externen Tracking-/Analytics-/Script-URLs ohne Zustimmung
- Keine externen Asset- oder CDN-URLs ohne Zustimmung

### 4. SEO

Prüfe:

- Sinnvolle Metadata
- Aussagekräftiger Title
- Aussagekräftige Description
- Open Graph Basics, falls sinnvoll
- Saubere Heading-Struktur
- Crawlbarer Text
- Wichtige Inhalte nicht nur in Canvas/3D

### 5. Accessibility

Prüfe:

- Semantisches HTML
- Tastaturbedienung
- Sichtbare Focus States
- Ausreichender Kontrast
- Sinnvolle Labels
- Sinnvolle Alt-Texte
- `prefers-reduced-motion`
- Keine kritischen Inhalte nur in Animationen

### 6. Performance

Prüfe:

- 3D-Komponenten lazy-loaded
- Keine unnötige Initial-JavaScript-Last
- Optimierte Bilder
- Keine unnötigen Re-Renders
- Keine schweren Mobile-Effekte
- Keine unnötigen Libraries
- Bundle-Risiken benennen

## Ausgabeformat

Antworte kurz mit:

1. Deployment-Status: bereit / teilweise bereit / nicht bereit
2. Blockierende Probleme
3. Empfohlene Verbesserungen
4. Ausgeführte Checks mit Ergebnis
5. Was nicht geprüft werden konnte
6. Nächster sinnvoller Schritt