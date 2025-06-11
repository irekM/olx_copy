/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}', // ścieżki do Twoich plików, np. folder `app` w Next.js 13+
        './pages/**/*.{js,ts,jsx,tsx}', // lub starsze struktury w `pages`
        './components/**/*.{js,ts,jsx,tsx}', // jeśli masz komponenty w osobnym folderze
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
