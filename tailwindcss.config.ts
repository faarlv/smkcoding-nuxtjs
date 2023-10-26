import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
 theme: {
     extend: {
        colors: {
            primary: "#6867C5",
    },
 },
 container: {
    screens: {
        md: "598px",
        sm: "470px",
        xl: "1110px",
        lg: "854px",
    },
    center: true,
    },
  }
}