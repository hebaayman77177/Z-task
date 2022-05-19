const baseColor = {

    background: {
        light: "#3B3C4F",
        main: "#2B2B3C"
    },
    primary: { main: "#48a6eb" },
    white: "#ffffff",
    black: "#000000",
    blackBuffalo: "#1c1c1b",
    gray: {
        100: "#f9f9f9",
        200: "#F7F7F7",
        300: "#f4f4f4",
        400: "#F3F3F3",
        500: "#f1f1f1", // border alt color
        600: "#EdEdEd",
        700: "#E6E6E6", // border color
        800: "#C2C3CC",
        900: "#bdbdbd",
    },
    text: {
        bold: "#0D1136", // heading color
        medium: "#424561",
        regular: "#83838d", // regular text color
        light: "#fff",
        label: "#767676",
    },
    transparent: "transparent",
    secondary: {
        regular: "#1c1c1b",
        hover: "#1c1c1b",
        alternate: "#1c1c1b",
    },
    yellow: {
        regular: "#FFAD5E",
        hover: "#FFB369",
        alternate: "#f4c243",
    },
    blue: {
        regular: "#2e70fa",
        dark: "#161F6A",
        light: "#666D92",
        link: "#4285f4",
    },
    red: "#ea4d4a",
    success: "",
    warning: "",
    muted: "",
    highlight: "",
};
const breakpoints = ["480px", "767px", "991px", "1025px", "1300px"]
export const device = {
    xs: `(max-width: ${breakpoints[0]})`,
    sm: `(max-width: ${breakpoints[1]})`,
    md: `(max-width: ${breakpoints[2]})`,
    lg: `(max-width: ${breakpoints[3]})`,
}
export const defaultTheme = {
    colors: {
        ...baseColor,
    },
    breakpoints: breakpoints,


    appBar: {
        height: '54px'
    },
    border: {
        main: `1px solid ${baseColor.background.light}`
    },
    drawer: {
        width: {
            small: '64px',
            large: '200px',
            diff: "163px"
        }
    },
    fonts: {
        body: "Roboto",
        heading: "Roboto",
        monospace: "Roboto",
    },

    // Custom Theme keys
    customs: {
        transition: "0.35s ease",
    },

    boxSizing: "border-box",
    globals: {},
}
