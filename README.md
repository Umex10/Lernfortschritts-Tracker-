## 📚 Lernfortschritts-Tracker

Der Lernfortschritts-Tracker ist eine Webanwendung zur strukturierten Verfolgung des eigenen Lernprozesses. Nutzer sehen eine Liste vordefinierter Lerninhalte, können für jeden Inhalt ihren aktuellen Lernstatus festlegen und persönliche Kommentare hinzufügen. Der Fortschritt wird übersichtlich visualisiert, Lerninhalte können gesucht oder gefiltert werden, und alle Daten bleiben dauerhaft gespeichert, sodass der Lernstand auch bei einem späteren Besuch erhalten bleibt.

## 🚀 Quick Start

Voraussetzungen: Node.js und npm.

```bash
npm install
npm run dev   # Entwicklungsserver mit nodemon
```

Der Server läuft anschließend (standardmäßig) unter `http://localhost:3000`.

Tests ausführen:

```bash
npm test            # Playwright E2E-Tests im Headless-Modus
npm run test:headed # Playwright im sichtbaren Browser
```

Mehr Details zu Tests in [docs/tests.md](docs/tests.md).

## 🗂 Projektstruktur (Auszug)

- [server](server) – Express-Server, der statische Dateien ausliefert und module.json bereitstellt.
- [public](public) – Statischer Frontend-Code (HTML, CSS, JS).
	- [public/index.html](public/index.html) – Einstiegspunkt im Browser.
	- [public/style.css](public/style.css) – Layout und Styling.
	- [public/index.js](public/index.js) – Darstellung der Module im DOM.
	- [public/getModules.js](public/getModules.js) – Laden der Module (localStorage) und Fehlerbehandlung.
	- [public/constants](public/constants) – Gemeinsame Konstanten wie STATUS (siehe [public/constants/README.md](public/constants/README.md)).
- [tests](tests) – Playwright-E2E-Tests und Fixtures (siehe [docs/tests.md](docs/tests.md)).
- [docs](docs) – Zentrale Projektdokumentation für einzelne Bereiche.

Eine ausführlichere Beschreibung des Frontends findest du in [docs/public.md](docs/public.md).

## 🧪 Tests

Die E2E-Tests basieren auf Playwright und liegen unter [tests/e2e](tests/e2e).

Aktuell wichtig:
- [tests/e2e/groupByStatus.spec.js](tests/e2e/groupByStatus.spec.js) testet die Funktion `groupByStatus` mit den Dummy-Daten aus [tests/fixtures/dummyData.js](tests/fixtures/dummyData.js).

Weitere Details zur Teststruktur und zu Fixtures: [docs/tests.md](docs/tests.md).

## 📄 Dokumentation

Dieses Projekt verwendet eine Kombination aus zentraler und ordnerspezifischer Dokumentation:

- Zentrale Bereichsdokus:
	- [docs/public.md](docs/public.md) – Übersicht zum Frontend/Ordner public.
	- [docs/tests.md](docs/tests.md) – Übersicht zu Tests, E2E-Struktur und Fixtures.
- Ordner-Readmes:
	- [public/constants/README.md](public/constants/README.md) – Doku für Konstanten im Frontend.

Richtlinien, wie neue Dokumentation angelegt werden soll, findest du in [CONTRIBUTING.md](CONTRIBUTING.md).

## 👥 Team-Mitglieder

| Name                  | GitHub                                       |
| --------------------- | -------------------------------------------- |
| Thomas Feyerl         | [@Thomas](https://github.com/FrontendTF)     |
| Umejr Dzinovic        | [@Umejr](https://github.com/Umex10)          |
| Rozaliya Aleksandrova | [@Rozaliya](https://github.com/rozaliyaAleksandrova) |
| Liyu Wu               | [@Liyu](https://github.com/LiyuWu1976)       |
| Afik                  | [@Afik]()                                   |
