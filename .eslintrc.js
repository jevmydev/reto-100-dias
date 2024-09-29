const RULES = {
    OFF: "off",
    WARN: "warn",
    ERROR: "error"
};

module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
    overrides: [
        {
            env: {
                node: true
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script"
            }
        }
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    rules: {
        indent: [RULES.WARN, 4],
        quotes: [RULES.WARN, "double"],
        semi: [RULES.WARN, "always"],
        "linebreak-style": RULES.OFF,
        "react/react-in-jsx-scope": RULES.OFF,
        "react/prop-types": RULES.OFF
    }
};
