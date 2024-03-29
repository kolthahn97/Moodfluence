import { createTheme } from "@mui/material/styles";
import variables from "./Theme.scss"

export const theme = createTheme({
    palette: {
        primary: {
            main: variables.primaryColor,
        },
        secondary: {
            main: variables.secondaryColor,
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})