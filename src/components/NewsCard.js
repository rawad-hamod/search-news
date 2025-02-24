import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getFormattedDate } from "../utiles/constants";
import {
  Card,
  CardActions,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import CardButton from "./CardButton";
import { Link } from "react-router-dom";

const NewsCard = ({ data, index, width }) => {
  const [isHovered, setIsHovered] = useState(false);

  const theme = useTheme();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/news/${index}`, { state: { data } });
    console.log(index);
  };
  return (
    <div
      style={{
        position: "relative",
        height: "350px",
        width: "300px",
        margin: "1rem",
        textAlign: "right",
        transition: "0.3s fade",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* top card */}
      <Card
        sx={{
          height: "350px",
          width: "300px",

          opacity: isHovered ? 0 : 1,
        }}
      >
        <CardMedia
          component="img"
          image={data.urlToImage}
          alt="news"
          sx={{ height: "65%", width: width ? width + 1 : "350px" }}
        />
        <Typography
          variant="body2"
          sx={{ color: theme.palette.primary.main, fontSize: "0.8rem" }}
        >
          {data.source.name}.{getFormattedDate(data.publishedAt)}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.dark }}>
          {data.title}
        </Typography>
      </Card>

      {/* bottom card */}
      <Card
        sx={{
          height: "350px",
          width: "300px",

          opacity: isHovered ? 1 : 0,
          // transition: "opacity 0.3s ease",
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: theme.palette.primary.main, fontSize: "0.8rem" }}
        >
          {data.source.name}.{getFormattedDate(data.publishedAt)}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.dark }}>
          {data.title}
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.dark }}>
          {data.description}
        </Typography>
        <CardActions>
          <CardButton
            text="اقرأ التفاصيل"
            color={theme.palette.red.main}
            background={theme.palette.red.light}
            onClick={handleDetailsClick}
          />
          <Link to={data.url} target="_blank" rel="noopener noreferrer">
            <CardButton
              text={` ${data.source.name.toLowerCase()}زيارة`}
              color={theme.palette.blue.main}
              background={theme.palette.blue.light}
            />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};
export default NewsCard;
