import React, { useEffect, useState } from "react";
import {
  Button,
  Typography,
  Container,
  Stack,
  Grid2,
  Pagination,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedDots from "./AnimatedDots";
import { useTheme } from "@mui/material/styles";
import logo from "../utiles/images/search-news-logo.png";
import NewsCard from "./NewsCard";
const Home = () => {
  const theme = useTheme();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 9;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedNews = news.slice(startIndex, startIndex + itemsPerPage);

  const fetchApi = () => {
    fetch(
      "https://newsapi.org/v2/everything?q=غزة&language=ar&apiKey=e29c9dac114441be9cd5fd9f84b3f63f"
    )
      .then((data) => data.json())
      .then((data) => setNews(data.articles))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchApi();
  }, []);

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
        <Stack direction="row" spacing={2}>
          <Button variant="contained">اخر الأخبار</Button>
          <Button variant="contained">تواصل معنا</Button>
        </Stack>
      </Container>
      <Container m={3}>
        <Grid2
          container
          spacing={2}
          justify="center"
          alignItems="center"
          m={5}
          maxWidth="lg"
        >
          {paginatedNews.map((item, index) => {
            return (
              <Grid2 key={index} size={{ xs: 12, md: 6, lg: 4, xl: 3 }}>
                <NewsCard data={item} index={index} />
              </Grid2>
            );
          })}
        </Grid2>
        <Pagination
          count={Math.ceil(news.length / itemsPerPage)}
          page={page}
          onChange={(event, value) => setPage(value)}
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            position: "fixed",
            bottom: 0,
            backgroundColor: "#fff",
          }}
        />
      </Container>
    </>
  );
};

export default Home;
