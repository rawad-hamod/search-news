import {Grid2, Typography, Container, useTheme } from '@mui/material'
import React from 'react'
import logo from "../utiles/images/search-news-logo.png";
import {Link} from "react-router-dom";
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
const Footer = () => {
  const theme= useTheme();
  return (
    <Container maxWidth="xl" sx={{borderTop:"solid gray 0.3px", marginTop: "15rem",padding:"1rem"}}>
      <Grid2
        container
        spacing={6}
        sx={{
          justifyContent: "center",
          alignItems: "start",
          textAlign: "center",
         
          position: "sticky",
          bottom: "0",
          right: "25%",
          
        }}
      >
        
        <Grid2 xs={12} md={3}>
          <Typography variant="h6"  color="#3538cd"> :للتواصل</Typography>
          <Typography variant="body1">
        <PhoneAndroidIcon/> 0949257602
          </Typography>
          <Typography variant="body1">
       <a href=" mailto:rawadwhamod@gmail.com"> <EmailIcon/> rawadwhamod@gmail.com</a> 
          </Typography>
          <Typography variant="body1">
       <a href="../utiles/cv/رواد حمود-السيرة الذاتية.pdf" download> <FileDownloadIcon/> تحميل السيرة الذاتية</a> 
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={3}>
          <Typography variant="h6"  sx={{color:theme.palette.blue.main}}>:تصميم الموقع</Typography>
          <Typography variant="subtitle"  sx={{color:theme.palette.primary}}>رواد حمود</Typography>
          <Typography variant="body1">
          <Link to="https://github.com/rawad-hamod/search-news"> github-repository</Link>
          </Typography>
          
        </Grid2>
        <Grid2 xs={12} md={3}>
          <Typography variant="h6"  sx={{color:theme.palette.red.main}}> :مصادر الموقع</Typography>
          <Typography variant="body1">
            بيانات الأخبار:<Link to="https://newsapi.org/"> TheNewsApi</Link>
          </Typography>
          <Typography variant="body1">
            واجهات المستخدم
            <Link to="https://www.figcomponents.com/"> figma component</Link>
          </Typography>
        </Grid2>
        <Grid2 xs={12} md={3}>
         <img src={logo} alt="logo" style={{width:"200px", height:"100%"}}/>
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default Footer
