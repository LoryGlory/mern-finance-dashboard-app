import {useMemo} from "react";
import {createTheme} from "@mui/material/styles";
import {themeSettings} from "@/theme";
import {CssBaseline, ThemeProvider} from "@mui/material";

function App() {
    // load theme once on initial load
    const theme = useMemo(() => createTheme(themeSettings), []);

    return (
        <div className='app'>
            {/* theme settings */}
            <ThemeProvider theme={theme}>
                {/* reset css settings to default */}
                <CssBaseline/>
            </ThemeProvider>
        </div>
    )
}

export default App
