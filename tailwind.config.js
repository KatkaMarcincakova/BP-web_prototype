/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.html'],
    darkMode: 'class',
    theme: {
        screens: {
            sm: '480px',
            md: '720px',
            lg: '976px',
            xl: '1440px'
        },
        extend: {
            colors: {
                mainPurple: 'hsl(288, 43%, 34%)',
                mainGreen: 'hsl(154, 57%, 49%)',
                mainBlue: 'hsl(188, 100%, 36%)',
                darkBlue: 'hsl(189, 100%, 15%)',
                darkBlueHover: 'hsl(189, 100%, 10%)'
            }
        },
    },
    plugins: [],
}