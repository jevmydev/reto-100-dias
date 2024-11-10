/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                jetbrains: '"JetBrains Mono", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
            },
            backgroundColor: {
                main: "rgb(8, 4, 20)",
                keys: "rgba(8, 8, 25, 255)",
                keypress: "rgba(158, 154, 227, 255)"
            },
            colors: {
                light: "rgba(169, 168, 235, 255)",
                dark: "rgba(63, 62, 120, 255)",
                failure: "rgba(222, 109, 109, 255)"
            },
            borderColor: {
                light: "rgba(169, 168, 235, 255)",
                dark: "rgba(63, 62, 120, 255)"
            },
            animation: {
                pulse: "pulse 1.2s cubic-bezier(0.4, 0, 0.6, 1) infinite"
            }
        }
    },
    plugins: []
};
