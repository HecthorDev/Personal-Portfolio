/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a',
                primary: '#00e676',
                'primary-dark': '#00c853',
                glass: {
                    DEFAULT: 'var(--glass-bg)',
                    border: 'var(--glass-border)',
                    highlight: 'var(--glass-highlight)',
                    'ios-blue': 'rgba(0, 122, 255, 0.15)',
                    'ios-green': 'rgba(52, 199, 89, 0.15)',
                    'ios-pink': 'rgba(255, 45, 85, 0.15)',
                }
            },
            backdropBlur: {
                'liquid': '25px',
            }
        },
    },
    plugins: [],
};
