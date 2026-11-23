# Brillance

### Install dependencies
npm install

### Start the development server
npm run dev

## Project structure

src/
├── App.jsx
├── main.jsx
├── index.css
└── components/
    ├── Common/        Shared Badge and PatternBar components
    ├── Features/      Feature section and feature cards
    ├── Footer/        Footer brand, links, and pattern
    ├── Header/        Logo, navigation, and login button
    ├── Hero/          Hero content, button, and pattern
    ├── Pricing/       Pricing section
    ├── Services/      Services section and service cards
    ├── SideLines/     Decorative page-side lines
    ├── Testimonials/ Testimonials section and testimonial cards
    └── icons/         Reusable icon components

public/
└── assets/
    └── images/
        └── services/  Logo and service images

`src/App.jsx` composes the page sections, and `src/main.jsx` mounts the React app. Tailwind CSS is imported from `src/index.css`.
