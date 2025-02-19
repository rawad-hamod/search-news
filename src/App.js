import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createTheme , ThemeProvider} from "@mui/material/styles";
import { Navbar , Home , Details , ContactUs , Search , Footer } from "./components";
import { Box } from "@mui/material";
import { themeColors } from "./utiles/themeColors";
function App() {

  const theme = createTheme(themeColors);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box sx={{backgroundColor:"#fff"}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<Details />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Search" element={<Search />} />
        </Routes>
        <Footer/>
        </Box>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
