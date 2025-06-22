# PiggyVest Landing Page Clone (React + Vite)

This project is a React-based clone of the PiggyVest landing page, built with Vite for fast development and modern tooling. It closely mirrors the original PiggyVest homepage, with a focus on clean structure, modular components, and maintainable code.

## Features
- Faithful recreation of the PiggyVest landing page UI
- All images and icons loaded from the `src/assets` folder using React imports
- Section-by-section React components for easy maintenance
- Responsive layout and organized CSS for each section
- Layman-friendly comments in all major components

## Project Structure

```
├── public/                         # Static files served as-is (e.g., favicon, vite.svg)
│   └── vite.svg
├── src/                            # Main source code
│   ├── assets/                     # All images and icons used in the app
│   │   ├── appstore-icon.svg
│   │   ├── arrow-right-icon.png
│   │   ├── cio.svg
│   │   ├── cnbc.png
│   │   ├── compliance-378fe121550ceac55d0eeb8c5edac2e7.avif
│   │   ├── dropdown-arrow.svg
│   │   ├── facebook.svg
│   │   ├── fastcomp.svg
│   │   ├── Frame 1020.png
│   │   ├── Frame 18.png
│   │   ├── Frame 78.png
│   │   ├── Frame 79.png
│   │   ├── Frame 80.png
│   │   ├── Frame 82.png
│   │   ├── googleplay-icon.svg
│   │   ├── greylogo.svg
│   │   ├── instagram.svg
│   │   ├── iPhone 14 - 1.png
│   │   ├── iPhone 14.avif
│   │   ├── iphone12.avif
│   │   ├── iphoneInvest.avif
│   │   ├── iphonw.avif
│   │   ├── PB 18 Small.png
│   │   ├── pexels-ketut-subiyanto-4350099.avif
│   │   ├── phonetxtImg.png
│   │   ├── piggvestlogo.svg
│   │   ├── pymnts.svg
│   │   ├── react.svg
│   │   ├── securitylock.svg
│   │   ├── SL 22 Small.png
│   │   ├── techcabal.png
│   │   ├── techcrunch.png
│   │   ├── titkok.svg
│   │   ├── twitter.svg
│   │   ├── whiteAppleLogo.svg
│   │   └── youtube.svg
│   ├── components/                  # All modular React components (each with its own folder)
│   │   ├── cta/
│   │   │   ├── CTA.jsx
│   │   │   └── CTA.css
│   │   ├── featured/
│   │   │   ├── FeaturedHeading.jsx
│   │   │   ├── FeaturedHeading.css
│   │   │   ├── FeaturedLogos.jsx
│   │   │   └── FeaturedLogos.css
│   │   ├── footer/
│   │   │   ├── FooterDetails.jsx
│   │   │   ├── FooterDetails.css
│   │   │   ├── FooterMain.jsx
│   │   │   └── FooterMain.css
│   │   ├── header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   ├── headerNav/
│   │   │   ├── HeaderNav1.jsx
│   │   │   ├── HeaderNav1.css
│   │   │   ├── HeaderNav2.jsx
│   │   │   └── HeaderNav2.css
│   │   ├── hero/
│   │   │   ├── Hero.jsx
│   │   │   ├── Hero.css
│   │   │   ├── HeroImage.jsx
│   │   │   ├── HeroImage.css
│   │   │   ├── HeroText.jsx
│   │   │   └── HeroText.css
│   │   ├── investment/
│   │   │   ├── InvestmentDetails.jsx
│   │   │   ├── InvestmentDetails.css
│   │   │   ├── InvestmentIntro.jsx
│   │   │   └── InvestmentIntro.css
│   │   ├── saverSpotlight/
│   │   │   ├── SaverSpotlight.jsx
│   │   │   └── SaverSpotlight.css
│   │   ├── savings/
│   │   │   ├── SavingsGrid.jsx
│   │   │   ├── SavingsGrid.css
│   │   │   ├── SavingsIntro.jsx
│   │   │   └── SavingsIntro.css
│   │   └── security/
│   │       ├── Security.jsx
│   │       └── Security.css
│   ├── App.jsx                       # Main app layout (imports and arranges all sections)
│   ├── App.css                       # App-level styles
│   ├── main.jsx                      # React entry point
│   └── index.css                     # Global styles
├── .gitignore
├── eslint.config.js
├── index.html                        # Main HTML file
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

- Each component folder contains both the `.jsx` and `.css` files for that section.
- All images and icons are stored in `src/assets` and imported directly in components.
- The `public/` folder is for static files that do not require processing (rarely used in this project).
- The root contains configuration files and the main `index.html`.

## Getting Started
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Notes
- All images must be placed in `src/assets` and imported in components (not referenced as `/assets/...`).
- For any layout or alignment issues, adjust the relevant CSS files in `src/components/`.
- The project is organized for clarity and easy updates.

## Credits
- [PiggyVest](https://www.piggyvest.com) for the original design inspiration.

## Author
ΞDΛ° Tomola Oke ||SAIL Innovation Lab
