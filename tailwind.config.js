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
                "3.5xl": '30px',
                '4.5xl': '40px',
                'xxl': '45px'
            },
            colors: {
                "primary-900": "#00426A",
                "primary-800": "#01547F",
                "primary-700": "#006D9E",
                "secondary-900": "#81DBDF",
                "secondary-800": "#30B5BB",
                "secondary-700": "#E7F8F8",
                "secondary-600": "#60D2D7",
                "secondary-400": "#F3FCFC",
                "secondary-300": "#D2F2F4",
                "secondary-200": "#E2F7F8",
                "secondary-100": "#CAF0F2",
                "secondary-50": "#EBF9FA",
                "light-100": "#FCFCFC",
                "light-200": "#F2F2F2",
                "light-300": "#DBDBDB",
                "light-400": "#F7F7F7",
                "light-500": "#CCCCCC",
                "light-600": "#F0F0F0",
                "dark-900": "#1A1A1A",
                "dark-800": "#666666",
                "dark-700": "#333333",
                "dark-600": "#4D4D4D",
                "dark-500": "#808080",
                "dark-400": "#E6E6E6",
                "dark-300": "#B3B3B3",
                "dark-200": "#CCC6BD",
                "success": "#4FCB14",
                "warning-900": "#FEC301",
                "warning-200": "#FFF8E1",
                "danger-900": "#900413",
                "danger-800": "#F95759",
                "danger-500": "#FF1111",
                "danger-400": "#FC8D8E",
                "danger-300": "#FEE1E4",
                "danger-200": "#FFF0F2",
            },
            boxShadow: {
                'box': '0px 4px 24px rgba(0, 0, 0, 0.05)',
                'select': '0px 1px 20px rgba(0, 0, 0, 0.1)',
                'plan': '0px 4px 64px rgba(0, 35, 56, 0.2)',
                'btn-inner': 'inset 0.5px 1px 0px rgba(255, 255, 255, 0.35)'
            },
            backgroundImage: {
                'start-bg': "url('/assets/images/start-bg.svg')",
                'register-bg-xs': "url('/assets/images/register-success-xs.svg')",
                'check-icon': "url('/assets/images/check.svg')",
            },
            borderRadius: {
                '3.5xl': '30px',
            }
        },
    },
    plugins: [],
}