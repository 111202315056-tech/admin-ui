
import { writeFileSync } from 'fs'

writeFileSync('src/index.css',
`@import "tailwindcss";

@theme {
  --font-sans: 'Plus Jakarta Sans', sans-serif;

  --color-primary-50:  #E6FAF7;
  --color-primary-100: #CCEDE8;
  --color-primary-200: #99DDD3;
  --color-primary-300: #66CCBE;
  --color-primary-400: #33BBA9;
  --color-primary-500: #00B894;
  --color-primary-600: #009E7D;
  --color-primary-700: #007A61;
  --color-primary-800: #005744;
  --color-primary-900: #003328;

  --color-gray-50:  #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;

  --color-red-500: #EF4444;
  --color-green-500: #22C55E;
  --color-yellow-500: #EAB308;

  --color-surface-primary:   #FFFFFF;
  --color-surface-secondary: #F9FAFB;

  --color-text-primary:   #2D3436;
  --color-text-secondary: #636E72;
  --color-text-tertiary:  #9CA3AF;

  --color-border-primary: #E5E7EB;
  --color-border-accent:  #00B894;
}

@layer base {
  body {
    background-color: var(--color-surface-primary);
    color: var(--color-text-primary);
    font-family: var(--font-sans);
  }
}`)

console.log('index.css berhasil diupdate!')