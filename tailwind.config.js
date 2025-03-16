import catppuccinDaisy from "@catppuccin/daisyui";
import catppuccinTailwind from "@catppuccin/tailwindcss";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {},
    },
    plugins: [
        daisyui,
        catppuccinTailwind({
            prefix: "cat",
            defaultFlavour: "mocha",
        }),
    ],
    daisyui: {
        themes: [
            catppuccinDaisy("mocha", { primary: "sky", secondary: "rosewater" }),
            "dark",
        ],
        logs: false
    },
};
