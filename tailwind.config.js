/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,ts,jsx,tsx,svelte}'],
    theme: {
        screens: {
            sm: '500px',
            md: '768px',
        },
        fontFamily: {
            sans: ['Poppins', 'sans-serif'],
        },
        extend: {
            animation: {
                'goto-external-link-container-show':
                    'goto-external-link-container-show 500ms cubic-bezier(0.715, 0.000, 1.000, 1.000) forwards',
            },
            keyframes: {
                'goto-external-link-container-show': {
                    '0%': { width: '0' },
                    '100%': { width: '100vw' },
                },
            },
        },
    },
    plugins: [],
};
