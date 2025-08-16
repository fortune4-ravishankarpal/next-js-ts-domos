import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import headerPlugin from "eslint-plugin-header"; // Import the plugin

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        rules: {
            "no-var": "error",
        },
    },
    // {
    //     files: ["./src/controller/**/*.ts", "src/controller/**/*.tsx", "todo.ts"],
    //     plugins: { header: headerPlugin },
    //     rules: {
    //         "header/header": [2, "use server"],
    //     },
    // },
];

export default eslintConfig;
