import { FlatCompat } from "@eslint/eslintrc";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    eslintPluginPrettierRecommended,
    {
        rules: {
            "prettier/prettier": [
                "error",
                {
                    plugins: ["@trivago/prettier-plugin-sort-imports", "prettier-plugin-tailwindcss"],
                    printWidth: 120,
                    singleQuote: false,
                    trailingComma: "all",
                    tabWidth: 4,
                    useTabs: false,
                    semi: true,
                    importOrder: ["^@core/(.*)$", "^@server/(.*)$", "^@ui/(.*)$", "^[./]"],
                    importOrderSeparation: true,
                    importOrderSortSpecifiers: true,
                },
            ],
        },
    },
];

export default eslintConfig;
