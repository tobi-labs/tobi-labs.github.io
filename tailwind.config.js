/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "max-xl": { max: "1279px" },
            "max-lg": { max: "1023px" },
            "max-md": { max: "767px" },
            "max-sm": { max: "639px" },
        },
        extend: {
            lineHeight: {
                "140": "140%",
            },
            colors: {
                primary: {
                    DEFAULT: "#00E9DB",
                    dark: "#22924E",
                    darker: "#003918",
                    50: "#F0F8F6",
                    100: "#FEFDF0",
                    200: "#B8DED3",
                    300: "#48BE9B",
                    400: "#35A181",
                    500: "#00E9DB",
                    600: "#027352",
                    700: "#026649",
                    800: "#014431",
                },
                white: "#FFFFFF",
                link: "#1F8FF5",
                brand: {
                    200: '#FFCB0B'
                },
                "dark-blue": "#1653AF",
                blue: {
                    "400": "#53B1FD",
                    "600": "#1570EF",
                    "800": "#1849A9"
                },
                "error": {
                    "600": "#D92D20",
                    "700": "#B42318",
                },
                green: {
                    200: "#003918",
                    300: "#005226",
                    400: "#006D35",
                    500: "#128946",
                    600: "#22924E",
                    700: "#56BF76",
                    800: "#73DC8F",
                    900: "#F5FFF2",
                    menu: "#157E3F",
                },
                red: {
                    100: "#FFC3C7",
                    400: "#ED1C29",
                    500: "#C70B17",
                    600: "#9C020C",
                    700: "#470005",
                },
                yellow: {
                    100: "#FFFBE6",
                    200: "#FFF1B8",
                    300: "#FFE58F",
                    400: "#FFD666",
                    500: "#FFC53D",
                    600: "#FAAD14",
                    700: "#D48806",
                    800: "#AD6800",
                    900: "#874D00",
                    menu: "#FFD549",
                },
                gray: {
                    50: "#F9FAFB",
                    100: "#F2F4F7",
                    200: "#EAECF0",
                    300: "#D0D5DD",
                    400: "#98A2B3",
                    500: "#667085",
                    600: "#475569",
                    700: "#344054",
                    800: "#1D2939",
                    900: "#21222E",
                },
                orange: {
                    400: "#AC3400",
                    500: "#E4511A",
                    600: "#F85F27",
                    700: "#FF8B65",
                    800: "#FFB59D",
                },
            },
            boxShadow: {
                xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
                sm: "0px 4px 8px rgba(0, 0, 0, 0.2)",
                md: "0px 4px 30px rgba(0, 0, 0, 0.1)",
                lg: "0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
                xl: " 0px 4px 50px rgba(0, 0, 0, 0.2), 0px 4px 20px rgba(0, 0, 0, 0.2)",
                "yellow-100": "0px 0px 0px 4px #FEF7C3",
            },
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: theme("colors.gray.900"),
                        a: {
                            color: "#0000EE",
                        },
                    },
                },
            }),

            fontFamily: {
                display: ["Cubano", ...defaultTheme.fontFamily.sans],
                sans: ["Rubik", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'category-product': "url('/public/assets/images/bgProuct.png')",
                'banner-product': "url('/public/assets/images/bannerProduct2.png')",
                'bg-contact': "url('/public/assets/images/contact/bg.png')",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1.25rem",
                    md: "1.25rem",
                    lg: "1.5rem",
                    xl: "1.75rem",
                },
            },
        },
    },

    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
}

