# LINGUAX Accessible

Accessibility-first bilingual learning app prototype, built as a zero-cost static front-end project for GitHub Pages.

## Implemented roadmap

This version adds the Google Play readiness improvements from the product roadmap:

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

The app includes accessibility profiles and settings for:

- blind users
- low vision users
- dyslexia
- deaf or hard-of-hearing users
- reduced mobility
- ADHD / focus mode

Supported options include:

- high contrast
- large text
- voice mode through the browser Web Speech API
- image and icon descriptions
- reduced motion
- simplified navigation
- keyboard navigation
- focus mode
- screen reader friendly live status region

## Learning paths

### English basics

10 beginner lessons covering greetings, polite phrases, people, numbers, colors, family, home, food, time and travel basics.

### Romanian basics

10 beginner lessons for international learners covering equivalent Romanian vocabulary and short phrases.

### Sign language intro

8 introductory visual lessons with gesture descriptions for hello, thank you, name, me / you, nice to meet you, family, help and a mini visual dialogue.

## Progress export

The Profile tab includes an Export progress action. It downloads a JSON report with:

- learner name
- selected course
- completed lessons
- total lessons
- progress percentage
- XP
- gems
- accessibility score
- active accessibility settings
- export date

## Certificate

After completing all lessons in the selected path, the Certificate tab unlocks a completion certificate. The certificate can be downloaded as an HTML file and saved or printed from the browser.

## Accessibility Audit

The Audit tab displays a product-facing accessibility score and criteria for:

- contrast
- keyboard navigation
- voice mode
- image descriptions
- reduced motion
- screen reader labels
- simplified navigation
- focus mode

## Zero-cost architecture

The project remains fully static:

- no backend server
- no database
- no API keys
- no paid hosting
- browser-only state with localStorage
- GitHub Pages compatible

## Tech stack

- HTML
- CSS
- JavaScript
- Web Speech API
- localStorage
- GitHub Pages

## Next improvements

- split the single-file app into HTML, CSS and JS files
- add richer lesson copy
- add a print-optimized certificate stylesheet
- add Play Store screenshots and metadata
- add automated Lighthouse and accessibility checks

## Author

Created by Laura Andreea as an accessibility-first front-end product demo.