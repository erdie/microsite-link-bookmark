/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/*.{html,js}',
        './index.html'
      ],
    theme: {
        extend: {
            colors: {
                'domion-gray': '#212121',
            },
        },
        screens: {
            'sm': '600px',
            'md': '600px',
            'lg': '600px',
            'xl': '600px',
            '2xl': '600px',
        }
    },
    plugins: [],
}
