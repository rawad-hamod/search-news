import React,{ useState , useRef} from "react";
import {
  Button,
  Typography,
  Container,
  Stack,
  Grid2,
  Pagination,
  Box,
  CircularProgress
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedDots from "./AnimatedDots";
import { useTheme } from "@mui/material/styles";
import logo from "../utiles/images/search-news-logo.png";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";
import { EnterAnimation } from "../utiles/constants";
const Home = () => {
  const theme = useTheme();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const newsSectionRef = useRef(null);
  const itemsPerPage = 9;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedNews = news.slice(startIndex, startIndex + itemsPerPage);
console.log(news.length)
  const fetchApi = () => {
    setIsLoading(true); // Set loading state to true
    fetch(
      "https://newsapi.org/v2/everything?q=سوريا&language=ar&pageSize=99&apiKey=e29c9dac114441be9cd5fd9f84b3f63f"
    )
      .then((data) => data.json())
      .then((data) => {
        setNews(data.articles); 
        setIsLoading(false); 
        if (newsSectionRef.current) {
          newsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
      })
      .catch((err) => {
        setIsLoading(false); 
      });
  };

  // Handle button click to fetch news
  const handleShowNews = () => {
    fetchApi(); // Fetch news data when the button is clicked
  };
  
  return (
    <>

      <Container
        justify="center"
        maxWidth="md"
        sx={{
          position: "relative",
          height: "50vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff", // Dark background
          overFlow: "hidden",
          textAlign: "center",
        }}
      >
        <AnimatedDots count={20} />
        <img src={logo} alt="logo" style={{ maxWidth: "70%" }} />
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              mb: 3,
              color: theme.palette.text.dark,
              typography: { xs: "h4", sm: "h3", md: "h2" },
            }}
          >
            اكتشف العالم من حولك مع أحدث الأخبار العاجلة والشاملة
          </Typography>
        </motion.div>
        <EnterAnimation duration={0.4}>
        <Typography
          variant="h5"
          sx={{
            mb: 4,
            color: theme.palette.text.light,
            typography: { xs: "body1", sm: "h6", md: "h5" },
          }}
        >
          نقدم لك آخر الأخبار المحلية والعالمية في جميع المجالات: السياسة،
          الاقتصاد، الرياضة، التكنولوجيا، والثقافة.
        </Typography>
        </EnterAnimation>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={handleShowNews} ref={newsSectionRef}> اخر أخبار سوريا</Button>
          <Button variant="contained" 
      >
          <Link to="/breaking-news">اشترك بخدمة الخبر العاجل</Link>
          </Button> 
          
       
        </Stack>
        {isLoading && (
          
          <Box sx={{ display:'flex',margin:"3rem"}} >
          <CircularProgress color="primary" size={50}/>
        </Box>
         )}
      </Container>
      
      {news.length>0 &&
      <Container sx={{marginTop:"5rem"}}>
      <Grid2
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        m={5}
        maxWidth="lg"
       
      >
        {paginatedNews.map((item, index) => {
          return (
            <Grid2 key={index}  xs={12} md={6} lg={index===0?6:3}>
            <EnterAnimation duration={0.4}>
              <NewsCard data={item} index={index} />
              </EnterAnimation>
            </Grid2>
          );
        })}
      </Grid2>
      <Pagination
      size="large"
      color="primary"
        count={Math.ceil(news.length / itemsPerPage)}
        page={page}
        onChange={(event, value) => {
          setPage(value);
          if (newsSectionRef.current) {
            newsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}

      />
    </Container>}
    </>
  );
};

export default Home;
