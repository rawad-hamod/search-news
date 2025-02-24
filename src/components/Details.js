import { Alert, Button, Container, Stack, Typography, useTheme } from '@mui/material';
import React from 'react'
import { useLocation} from 'react-router-dom';
import { getFormattedDate } from '../utiles/constants';


const Details = () => {
  const theme= useTheme()
  const location= useLocation();
  const {data}= location.state || {};
  
  
  if (!data) {
    return <Alert severity="error"> لايوجد تفاصيل</Alert>};
  return (
    <Container maxWidth="md" >
      <Button>الخبر التالي</Button>
      <Button>العودة الى الصفحة الرئيسية</Button>
      <Stack direction="column" spacing={2} justifyContent="center" >
     <Typography variant="h4" sx={{textAlign:"center",color:theme.palette.blue.main}}> {data.title}</Typography>
     <img src={data.urlToImage} alt="details" sx={{height:"350px"}}/>
     <Typography variant='h5'>{data.author} :تأليف</Typography>
     <Typography variant='h5'>{getFormattedDate(data.puplishedAt)}  في تم النشر</Typography>
     <Typography variant='body1'>{data.description}   </Typography>
     
    </Stack>
    </Container>
  )
}

export default Details
