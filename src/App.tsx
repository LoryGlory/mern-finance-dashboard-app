import {useMemo} from 'react';
import {createTheme} from '@mui/material/styles';
import {themeSettings} from '@/theme';
import {Box, CssBaseline, ThemeProvider} from '@mui/material';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from '@/scenes/navbar';

function App() {
  // load theme once on initial load
  const theme = useMemo(() => createTheme(themeSettings), []);

  return (
    <div className='app'>
      {/* router */}
      <BrowserRouter>
        {/* theme settings */}
        <ThemeProvider theme={theme}>
          {/* reset css settings to default */}
          <CssBaseline />
          <Box width='100%' height='100%' padding='1rem 2rem 4rem 2rem'>
            <Navbar />
            <Routes>
              <Route path='/' element={<div> Dashboard Page</div>} />
              <Route path='/predictions' element={<div> Predictions Page</div>} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
