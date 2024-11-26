/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**"],
    theme: {
        extend: {
            fontFamily: {
                "universal-sans": "'Universal Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
            },
            textColor: {
                "main-dark": "rgb(57, 60, 65)"
            },
            backgroundColor: {
                hover: "rgba(0,0,0,.05)",
                "main-blue": "#3e6ae1"
            },
            boxShadow: {
                normal: "0 1px 0 0 #fff",
                hover: "0 2px 0 0 #fff",
                "inner-focus": "inset 0 0 0 2px currentColor"
            },
            borderColor: {
                "main-blue": "#3e6ae1"
            }
        }
    },
    plugins: []
};
