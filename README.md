# Linguax Accessible: Learn Languages

Accessibility-first bilingual language learning app with voice, focus mode and progress tracking.

Live demo: https://laurandreea10.github.io/learnflow-accessible/

## Repo metadata to add in GitHub

Description:
Accessibility-first bilingual language learning app with voice, focus mode and progress tracking.

Website:
https://laurandreea10.github.io/learnflow-accessible/

Topics:
accessibility, education, language-learning, a11y, javascript, github-pages, web-speech-api

## Implemented roadmap

- RO / EN interface switch
- 10 English basics lessons
- 10 Romanian basics lessons
- 8 Sign language intro lessons
- quiz after each unit
- local progress tracking with localStorage
- exportable progress report as JSON
- certificate screen after completing a learning path
- downloadable certificate as HTML
- dedicated Accessibility Audit tab
- mobile-friendly layout

## Accessibility features

The app includes accessibility profiles and settings for blind users, low vision users, dyslexia, deaf or hard-of-hearing users, reduced mobility and ADHD / focus mode.

Supported options include high contrast, large text, voice mode, image descriptions, reduced motion, simplified navigation, keyboard navigation, focus mode and a screen reader friendly live status region.

## Learning paths

### English basics

10 beginner lessons covering greetings, polite phrases, people, numbers, colors, family, home, food, time and travel basics.

### Romanian basics

10 beginner lessons for international learners covering equivalent Romanian vocabulary and short phrases.

### Sign language intro

8 introductory visual lessons with gesture descriptions for hello, thank you, name, me / you, nice to meet you, family, help and a mini visual dialogue.

## Play Store screenshot plan

Recommended screenshots:

1. Onboarding and accessibility profile
2. Lesson screen
3. Quiz screen
4. Focus mode
5. Sign language intro
6. Progress profile
7. Certificate
8. Accessibility audit

Detailed checklist: docs/play-store-screenshots.md

## Progress export

The Profile tab includes an Export progress action. It downloads a JSON report with learner name, selected course, completed lessons, progress percentage, XP, gems, accessibility score, active settings and export date.

## Certificate

After completing all lessons in the selected path, the Certificate tab unlocks a completion certificate. The certificate can be downloaded as an HTML file and saved or printed from the browser.

Next certificate polish:

- add a visible Save / Print button
- wire a print-specific certificate stylesheet into the app
- make the certificate more visual for Play Store screenshots

Starter print stylesheet: docs/certificate-print.css

## Accessibility Audit

The Audit tab displays a product-facing accessibility score for contrast, keyboard navigation, voice mode, image descriptions, reduced motion, screen reader labels, simplified navigation and focus mode.

## Automated Lighthouse checks

This repository includes a GitHub Actions workflow for Lighthouse CI at .github/workflows/lighthouse.yml.

The workflow checks the GitHub Pages URL and uploads the Lighthouse reports as an artifact.

## Zero-cost architecture

The project remains fully static: no backend, no database, no API keys, no paid hosting and browser-only state with localStorage.

## Tech stack

- HTML
- CSS
- JavaScript
- Web Speech API
- localStorage
- GitHub Pages
- Lighthouse CI

## Next improvements

- split the single-file app into HTML, CSS and JS files
- add richer lesson copy
- wire the certificate print CSS directly into the app
- add Play Store screenshots and metadata
- tighten Lighthouse thresholds after the first audit run

## Author

Created by Laura Andreea as an accessibility-first front-end product demo.