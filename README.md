# LINGUAX Accessible 🤟

**LINGUAX Accessible** is a zero-cost, accessibility-first language learning demo inspired by gamified education platforms, but with its own visual identity, interaction model, and inclusive UX direction.

Live demo: https://laurandreea10.github.io/learnflow-accessible/

## ✨ Overview

LINGUAX Accessible helps users start a personalized learning path by selecting:

- first name
- target language
- learning level
- disability / accessibility profile
- visual accessibility preferences before entering the app

The app is built as a static front-end prototype, using mock data and browser-only features. It can run entirely on GitHub Pages with no paid services.

## ♿ Accessibility-first features

### Multi-disability profiles

The onboarding includes quick profiles for:

- 🦯 Blind users
- 🔍 Low vision users
- 📖 Dyslexia
- 🧏 Deaf / hard-of-hearing users
- ⌨️ Reduced mobility
- 🎯 ADHD / focus mode

Each profile automatically enables suitable settings such as:

- voice mode
- high contrast
- large text
- image and icon descriptions
- reduced motion
- simplified navigation
- keyboard navigation
- text feedback
- focus mode

### Visual impairment onboarding

Before starting the course, users can manually enable:

- high contrast
- large text
- image descriptions
- read aloud
- automatic screen reading
- reduced motion
- simplified navigation

### Read aloud support

The app uses the browser's **Web Speech API** for text-to-speech features:

- read current screen
- stop voice
- automatic reading when navigating
- read lesson questions and answer feedback

### Accessibility Score dashboard

The Accessibility tab includes a live score panel showing whether these features are active:

- Contrast
- Keyboard navigation
- Voice mode
- Image descriptions
- Reduce motion
- Screen reader labels
- Simplified navigation
- Focus mode

## 🧾 Accessibility Onboarding Summary

After completing the setup form, users see a confirmation screen with:

- first name
- selected language
- selected level
- selected disability/accessibility type
- active accessibility settings

This makes the personalization flow clear before entering the app.

## 🤟 Sign language path

The sign language path includes more realistic beginner lessons with gesture descriptions:

- Salut
- Mulțumesc
- Nume
- Eu și Tu
- Încântat
- Familie
- Ajutor
- Mini-dialog: Salut + Nume + Ajutor

Example gesture description:

> Salut: ridică mâna dominantă lângă umăr și mișcă ușor palma spre exterior.

## 🎯 ADHD / Focus Mode

Focus Mode reduces cognitive load by:

- hiding decorative elements
- hiding leaderboard and shop navigation
- showing one recommended next lesson
- displaying a gentle 5-minute focus timer
- keeping the next action clear and visible

## 🧪 Mock backend approach

The app currently uses local mock data inside the static JavaScript file:

- mock user profile
- mock course units
- mock lessons
- mock questions
- mock shop items
- mock leaderboard

Progress is stored locally with `localStorage`.

## 💸 Zero-cost architecture

This project is designed to run without paid services:

- no backend server
- no database
- no API keys
- no paid hosting
- no external auth provider
- no paid analytics
- GitHub Pages compatible

## 🛠️ Tech stack

- HTML
- CSS
- JavaScript
- Web Speech API
- localStorage
- GitHub Pages

## 🚀 Deployment

The project is deployed as a static page on GitHub Pages.

Recommended GitHub Pages settings:

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/ root`

## 🧭 Roadmap

Possible next improvements:

- certificates after completing a learning path
- more sign language gesture lessons
- exportable progress report
- bilingual Romanian / English interface
- separate lesson editor mock
- accessibility audit checklist page
- portfolio case study section

## 👩‍💻 Author

Created by **Laura Andreea** as an accessibility-first front-end product demo.

GitHub: https://github.com/LaurAndreea10
