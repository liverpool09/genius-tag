/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.html' /* ... */ ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Quicksand', 'sans-serif'],
            },
            fontSize: {
                "xxs": '10px',
                "1.5xl": '22px',
                "2.5xl": '28px',
            },
            colors: {
                "primary-900": "#00426A",
                "primary-700": "#006D9E",
                "secondary-900": "#81DBDF",
                "secondary-700": "#E7F8F8",
                "light-100": "#FCFCFC",
                "light-200": "#F2F2F2",
                "light-300": "#DBDBDB",
                "dark-700": "#333333",
                "dark-600": "#4D4D4D",
            },
            boxShadow: {
                'box': '0px 4px 24px rgba(0, 0, 0, 0.05);',
            },
            backgroundImage: {
                'start-bg': "url('/assets/images/start-bg.svg')",
            }
        },
    },
    plugins: [],
}