/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                system: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            }
        }
    },
    plugins: []
};
