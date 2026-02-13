/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            colors: {
                background: '#0a0a0a', // Almost black, or pure black if requested 'completely black'
                primary: '#00e676', // Bright neon green (similar to emerald-400/accent)
                'primary-dark': '#00c853',
            },
        },
    },
    plugins: [],
};
