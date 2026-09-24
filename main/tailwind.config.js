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