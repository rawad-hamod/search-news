import { Container, Stack, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';



const Details = () => {
  const location= useLocation();
  const {data}= location.state || {};
  if (!data) {
    return <h1>No news data found.</h1>};
  return (
    <Container maxWidth="md">
      <Stack direction="column" spacing={2}>
     <Typography variant={{xs:"h5", sm:"h4", md:"h3",lg:"h2", xl:"h1"}}> {data.title}</Typography>
     <img src={data.urlToImage} alt="details" sx={{height:"350px"}}/>
     <Typography variant='h5'>{data.author} تأليف</Typography>
     <Typography variant='h5'>{data.puplishedAt}   تم النشر</Typography>
     <Typography variant='body1'>{data.description}   </Typography>
     
    </Stack>
    </Container>
  )
}

export default Details
