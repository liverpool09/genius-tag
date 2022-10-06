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
                'xxl': '45px'
            },
            colors: {
                "primary-900": "#00426A",
                "primary-700": "#006D9E",
                "secondary-900": "#81DBDF",
                "secondary-800": "#30B5BB",
                "secondary-700": "#E7F8F8",
                "secondary-400": "#F3FCFC",
                "secondary-300": "#D2F2F4",
                "secondary-100": "#CAF0F2",
                "secondary-50": "#EBF9FA",
                "light-100": "#FCFCFC",
                "light-200": "#F2F2F2",
                "light-300": "#DBDBDB",
                "dark-900": "#1A1A1A",
                "dark-800": "#666666",
                "dark-700": "#333333",
                "dark-600": "#4D4D4D",
                "dark-500": "#808080",
                "dark-300": "#B3B3B3",
                "dark-200": "#CCC6BD",
                "success": "#4FCB14",
                "danger": "#FF1111",
                "danger-200": "#FFF0F2",
            },
            boxShadow: {
                'box': '0px 4px 24px rgba(0, 0, 0, 0.05)',
                'select': '0px 1px 20px rgba(0, 0, 0, 0.1)'
            },
            backgroundImage: {
                'start-bg': "url('/assets/images/start-bg.svg')",
                'check-icon': "url('/assets/images/check.svg')",
            }
        },
    },
    plugins: [],
}