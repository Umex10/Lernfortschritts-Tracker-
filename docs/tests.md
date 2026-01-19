# Doku: Tests

## Übersicht

Die Tests liegen gesammelt im Ordner [tests](../tests).

Struktur:
- [tests/e2e](../tests/e2e) – End-to-End-Tests mit Playwright.
- [tests/fixtures](../tests/fixtures) – Wiederverwendbare Testdaten und Hilfsdateien.
- [tests/playwright.config.js](../tests/playwright.config.js) – Konfiguration für Playwright.

## Ordner `tests/e2e`

In `tests/e2e` liegen End-to-End-Tests (E2E), aktuell mit Playwright.

Aktuell:
- [tests/e2e/groupByStatus.spec.js](../tests/e2e/groupByStatus.spec.js): Testet die Funktion `groupByStatus` mit den Dummy-Daten aus `tests/fixtures` und prüft die Gruppierung nach Status.

Zweck:
- Sicherstellen, dass wichtige Funktionen der App (z.B. Gruppierung nach Status) stabil bleiben.

## Ordner `tests/fixtures`

In `tests/fixtures` liegen wiederverwendbare Testdaten und Hilfsdateien.

Aktuell:
- [tests/fixtures/dummyData.js](../tests/fixtures/dummyData.js): Beispiel-Module mit unterschiedlichen Status-Werten (als Strings), genutzt u.a. in den E2E-Tests.

Zweck:
- Zentrale Sammlung von Testdaten, damit sie nicht in jedem Test dupliziert werden müssen.

Richtlinien:
- Neue gemeinsame Testdaten hier ablegen.
- Struktur der Daten möglichst stabil halten, weil mehrere Tests darauf zugreifen können.
