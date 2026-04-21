import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Media Shot brand colors from reference
                primary: {
                    DEFAULT: "#2D1B4E", // Deep purple (main background)
                    dark: "#1a0f2e", // Darker purple
                    light: "#4a2f6e", // Lighter purple
                },
                secondary: {
                    DEFAULT: "#FF8C00", // Orange/Gold (main accent)
                    dark: "#E67E00", // Darker orange
                    light: "#FFA500", // Lighter orange/gold
                },
                accent: {
                    purple: "#6B46C1", // Accent purple
                    violet: "#7C3AED", // Violet shade
                },
            },
            fontFamily: {
                alexandria: ["var(--font-alexandria)", "sans-serif"],
                playfair: ["var(--font-playfair)", "serif"],
            },
            backgroundImage: {
                "gradient-purple": "linear-gradient(135deg, #2D1B4E 0%, #1a0f2e 100%)",
                "gradient-purple-light": "linear-gradient(135deg, #4a2f6e 0%, #2D1B4E 100%)",
                "gradient-orange": "linear-gradient(135deg, #FFA500 0%, #FF8C00 100%)",
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};
export default config;
