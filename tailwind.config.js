/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/*.{html, js}', './node_modules/tw-elements/dist/js/**/*.js'],
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
                lightPurple: 'hsl(294, 37%, 90%)',
                mainGreen: 'hsl(154, 57%, 49%)',
                mainBlue: 'hsl(188, 100%, 36%)',
                darkBlue: 'hsl(189, 100%, 15%)',
                darkBlueHover: 'hsl(189, 100%, 10%)',
                goldBg: 'hsl(45, 100%, 65%)',
                goldMain: 'hsl(45, 100%, 50%)',
                bronzeMain: 'hsl(30, 50%, 50%)',
                bronzeBg: 'hsl(30, 50%, 60%)',
                silverMain: 'hsl(0, 0%, 50%)',
                silverBg: 'hsl(0, 0%, 60%)',
                cardDefault: 'hsl(0, 0%, 85%)'
            }
        },
    },
    plugins: [],
}