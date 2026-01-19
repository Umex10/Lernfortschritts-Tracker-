# Doku: Ordner `public`

## Zweck

Der Ordner `public` enthält den gesamten Client-Code, der direkt vom Browser geladen wird (HTML, CSS, JavaScript, Assets).

Wichtige Dateien:
- [public/index.html](../public/index.html) – Einstiegspunkt der Anwendung, bindet Styles und Skripte ein.
- [public/style.css](../public/style.css) – Zentrales Styling der Oberfläche.
- [public/index.js](../public/index.js) – Rendert die Aufgabenliste im DOM.
- [public/getModules.js](../public/getModules.js) – Lädt Module aus `localStorage`, behandelt Fehlerzustände und übergibt Daten an `setTasks`.
- [public/fetchModuleJson.js](../public/fetchModuleJson.js) – (sofern vorhanden) Kommunikation mit dem Backend für JSON-Daten.
- [public/constants/README.md](../public/constants/README.md) – Spezielle Doku zu Konstanten wie `STATUS`.

## Ordner `public/constants`

Im Unterordner `public/constants` liegen Konstanten, die im Frontend mehrfach verwendet werden.

Aktuell:
- `status.js`: Zentrale Definition der möglichen Lernstatus (`STATUS.TODO`, `STATUS.IN_PROGRESS`, `STATUS.DONE`).

Zweck:
- Gemeinsamer Ort für Werte wie Enums/Konfigurationen.
- Vermeidet Magic Strings im Code und stellt sicher, dass alle Module dieselben Status-Werte verwenden.

Richtlinien:
- Neue, wiederverwendete Konstanten hier ablegen.
- Bezeichner möglichst stabil halten, da z.B. Tests und andere Module darauf zugreifen.
