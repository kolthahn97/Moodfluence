import { green } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        main: green
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    }
})