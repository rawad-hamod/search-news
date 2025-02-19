import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ar";

import {

  Card,
  CardActions,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";

import CardButton from "./CardButton";
import { Link } from "react-router-dom";
dayjs.extend(relativeTime);
dayjs.locale("ar");
function TimeAgo( {dateString} ) {
  const date = dayjs(dateString);
  const timeAgo = date.fromNow();

  return timeAgo;
}
console.log(TimeAgo('2025-02-16T13:33:03Z'));

const NewsCard = ({ data, index }) => {
  const [isHovered, setIsHovered] = useState(false);
 
  const theme = useTheme();
  const navigate =useNavigate();

  const handleDetailsClick = () => {
    navigate(`/news/${index}`,{state:{data}});
    console.log(index);
  };
  return (
    <div
      style={{
        position: "relative",
        height: "350px",
        width: "300px",
        margin: "1rem",
        textAlign:"right"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* top card */}
      <Card
        sx={{
          height: "350px",
          width: "300px",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          alignItems:"center",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: isHovered ? 0 : 1, 
          transition: "opacity 1s fade",
          zIndex: 1, 
        }}
      >
        
        <CardMedia
          component="img"
          image={data.urlToImage}
          alt="news"
          sx={{ height: "65%", marginBottom: "2rem" }}
        />
        <Typography
          variant="body2"
          sx={{ color: theme.palette.primary.main, fontSize: "0.8rem" }}
        >
          {data.source.name}.{TimeAgo(data.publishedAt)}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.dark }}>
          {data.title} 
        </Typography>
        
      </Card>

     {/* bottom card */}
      <Card
        sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          alignItems:"center",
          height: "350px",
          width: "300px",
          position: "absolute",
          top: 0,
          left: 0,
          opacity: isHovered ? 1 : 0, 
          transition: "opacity 0.3s ease",
          zIndex: 2, 
        }}
      >
        <Typography
          variant="body2"
          sx={{ color: theme.palette.primary.main, fontSize: "0.8rem" }}
        >
          {data.source.name}.{TimeAgo(data.publishedAt)}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.dark }}>
          {data.title}
        </Typography>
        <Typography variant="body1" sx={{ color: theme.palette.text.dark }}>
          {data.description}
        </Typography>
        <CardActions>
          
          <CardButton
          text= "اقرأ التفاصيل"
          color={theme.palette.red.main}
          background={theme.palette.red.light}
          onClick={handleDetailsClick}
          />
          <Link to={data.url} target="_blank" rel="noopener noreferrer">
          <CardButton 
          text= {` ${data.source.name}زيارة`} 
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



