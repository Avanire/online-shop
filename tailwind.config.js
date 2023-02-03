const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
        './resources/js/**/*.{js,jsx,tsx,ts}',
    ],

    theme: {
        extend: {
            colors: {
                linkColor: '#545454',
                textColor: '#374151',
                whiteColor: '#fff',
                headerColor: '#111827',
                bgColor: '#F7F7F7',
                productBrandColor: '#94959B',
                productSalesColor: '#9CA3AF',
                productNewPrice: '#FD4D63',
                productCartColor: '#787878',
                productTipsColor: '#FF2867',
                linkMore: '#6B7176',
                sliderBtnBg: 'rgba(246, 247, 249, 0.2)',
                gray1: '#333333',
                mainPurple: '#764AEF',
                mainOrange: '#F98026',
                menuLink: '#494F54',
                borderColor: '#E5E7EB',
                productLightGray: '#6B7280',
                purpleBg: 'rgba(118, 74, 239, 0.07)',
                orangeBg: '#FFF2EC',
                available: '#12B052',
                gray: '#4B5563'
            },
            gridTemplateRows: {
                '[auto,auto,1fr]': 'auto auto 1fr',
            },
        },
        screens: {
            'xs': '375px',
            // => @media (min-width: 640px) { ... }

            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '1024px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        }
    },

    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio')
    ],
};
