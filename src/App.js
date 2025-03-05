import {useState , useEffect} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {createTheme , ThemeProvider} from "@mui/material/styles";
import { Navbar , Home , Details , ContactUs , Search , Footer, BreakingNewsPopUp ,BreakingNews } from "./components";
import { Box } from "@mui/material";
import { themeColors } from "./utiles/themeColors";
import { ScrollToTop } from "./utiles/constants";
function App() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000); // 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const theme = createTheme(themeColors);
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      <Box sx={{backgroundColor:"#fff"}}>
        <Navbar />
        <BreakingNewsPopUp open={open} onClose={handleClose}/>
          <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news/:id" element={<Details />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/breaking-news" element={<BreakingNews />} />
        </Routes>
        <Footer/>
        </Box>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
