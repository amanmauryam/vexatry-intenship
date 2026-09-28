/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./templates/**/*.html",
        "./static/js/**/*.js",
    ],
    theme: {
        extend: {
            colors: {
                ivory: "#F7F5EF",
                navy: "#111827",
                brand: "#243B6B",
                accent: "#FF6B35",
                softblue: "#D9E6FF",
                success: "#1FA774",
                muted: "#5B6472",
                 50: "#fef2f2",
                 200: "#fecaca",
                 500: "#ef4444",
                 600: "#dc2626",
                 700: "#b91c1c",
         },

            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
            },

            borderColor: {
                ink: "#111827",
            },
        },
    },
    plugins: [],
};