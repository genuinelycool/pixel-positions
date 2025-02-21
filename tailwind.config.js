import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
      ],
    theme: {
        extend: {
            colors: {
                "black": "#060606"
            },
            fontFamily: {
                "hanken-grotesk": ["Hanken Grotesk", "sans-serif"]
            },
            fontSize: {
                // "2xs": "10px"   //(size_in_px=10)/(base_font_size=16) = (rem=0.625)
                "2xs": ".625rem"   //10px
            }
        },
    },
    plugins: [],
};
