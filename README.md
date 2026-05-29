# Linguax Accessible: Learn Languages

Learn English, Romanian and basic sign language with accessibility-first lessons.

Live demo: https://laurandreea10.github.io/learnflow-accessible/

## Short description

Learn English, Romanian and basic sign language with accessibility-first lessons.

## Product positioning

Linguax Accessible is an accessibility-first bilingual language learning app with voice support, high contrast, focus mode, RO / EN interface, local progress tracking, mistake review and a visual completion certificate.

The repository name can remain `learnflow-accessible`, but the public product name is **Linguax Accessible: Learn Languages**.

## Play Store MVP features

- Strong commercial hero for Linguax Accessible
- English, Romanian and basic sign language learning paths
- Voice support through browser / device speech features
- High contrast mode
- Focus mode
- Large text mode
- Dyslexia-friendly font option
- RO / EN interface switch
- Progress dashboard
- Certificate preview
- Download / print certificate
- Accessibility audit score
- Mistake Review tab
- Practice again from saved mistakes
- Reset progress
- Export progress report
- Import progress report
- Privacy Policy page
- PWA manifest
- Service worker cache for GitHub Pages

## Accessibility features

The app includes accessibility profiles and settings for blind users, low vision users, dyslexia, deaf or hard-of-hearing users, reduced mobility and ADHD / focus mode.

Supported options include high contrast, large text, voice mode, image descriptions, reduced motion, simplified navigation, keyboard navigation, focus mode and a screen reader friendly live status region.

## Learning paths

### English basics

10 beginner lessons covering greetings, polite phrases, people, numbers, colors, family, home, food, time and travel basics.

### Romanian basics

10 beginner lessons for international learners covering equivalent Romanian vocabulary and short phrases.

### Basic sign language

8 introductory visual lessons with gesture descriptions for hello, thank you, name, me / you, nice to meet you, family, help and a mini visual dialogue.

## Privacy

Linguax Accessible does not collect, sell or share personal data.

Learning progress, selected language, accessibility preferences and saved mistakes are stored locally on the user’s device using browser localStorage.

The app does not require account creation, does not use a backend server, does not use advertising SDKs and does not send learning data to external services.

Voice features may use the browser or device speech capabilities. No voice data is stored by this app.

Privacy page: https://laurandreea10.github.io/learnflow-accessible/privacy.html

## Repo metadata to add in GitHub

Description:

```text
Accessibility-first bilingual language learning app with voice support, focus mode, progress tracking and certificate.
```

Website:

```text
https://laurandreea10.github.io/learnflow-accessible/
```

Topics:

```text
accessibility
a11y
education
language-learning
javascript
pwa
github-pages
web-speech-api
inclusive-design
```

Recommended release:

```text
v1.0.0-google-play-mvp
```

## Google Play screenshot plan

Create 8 screenshots:

1. Welcome / Start learning
2. Accessibility profile
3. English lesson
4. Romanian lesson
5. Sign language lesson
6. Quiz
7. Progress dashboard
8. Certificate + Accessibility audit

Suggested screenshot text overlays:

- Learn at your pace
- Choose your accessibility profile
- Voice support and focus mode
- English, Romanian and sign language basics
- Track progress locally
- Earn a completion certificate

Detailed checklist: `docs/play-store-screenshots.md`

## Progress export

The Profile tab includes an Export progress action. It downloads a JSON report with learner name, selected course, completed lessons, progress percentage, XP, gems, accessibility score, active settings, saved mistakes and export date.

## Certificate

After completing all lessons in the selected path, the Certificate tab unlocks a completion certificate. The certificate can be downloaded as an HTML file and saved or printed from the browser.

## Accessibility Audit

The Audit tab displays a product-facing accessibility score for contrast, keyboard navigation, voice mode, image descriptions, reduced motion, screen reader labels, simplified navigation and focus mode.

## Zero-cost architecture

The project remains fully static: no backend, no database, no API keys, no paid hosting and browser-only state with localStorage.

## Tech stack

- HTML
- CSS
- JavaScript
- Web Speech API
- localStorage
- PWA manifest
- Service worker
- GitHub Pages

## Next improvements

- Add PNG icon exports: `icons/icon-192.png`, `icons/icon-512.png`, `icons/maskable-512.png`
- Add final Play Store screenshot images inside `screenshots/`
- Run Lighthouse after GitHub Pages deploy refresh
- Package with Bubblewrap / TWA only after Play Store listing assets are ready

## Author

Created by Laura Andreea as an accessibility-first front-end product demo.
