import React, { useState } from 'react';
import { Container, Grid, Button,Box, TextField, Stack, Typography, Alert, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { EnterAnimation } from '../utiles/constants';
import logo from "../utiles/images/search-news-logo.png";
import { Link } from 'react-router-dom';
import cnn from "../utiles/images/cnn.png";
import aljazeera from "../utiles/images/aljazeera.png"
import bbc from "../utiles/images/bbc.png"
// import CardButton from './CardButton';

const BreakingNews = () => {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState('');
  const [categories, setCategories] = useState([]);
  const [time, setTime] = useState('');
  const [days, setDays] = useState([]);
  const [sources, setSources] = useState([]);

  // Options data
  const categoriesOptions = ['سياسة', 'فن', 'اقتصاد', 'بورصة', 'رياضة','طقس'];
  const timeOptions = ['صباحاً', 'ظهراً', 'مساءً'];
  const daysOptions = ['الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت', 'الأحد'];
  const sourcesOptions = [{source:"BBC News",logo:bbc},{source:"aljazeera",logo:""},{source:"CNN",logo:cnn}];
  const handleCategoryClick = (category) => {
    setCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleDayClick = (day) => {
    setDays(prev =>
      prev.includes(day)
        ? prev.filter(d => d !== day)
        : [...prev, day]
    );
  };
  const handleSourceClick = (source) => {
    setSources(prev =>
      prev.includes(source)
        ? prev.filter(s => s !== source)
        : [...prev, source]
    );
  };
  // Handlers
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true)
    // Handle form submission here
    console.log({
      email,
      categories,
      time,
      days,
      sources
    });
   
  };


  return (
    <Container maxWidth="lg" sx={{ justifyContent: "center", alignItems: "center" }}>
      {submitted ? (
        <Container>
         <EnterAnimation>
                <Alert severity="info" >
                  تم ارسال الطلب بنجاح 
                </Alert>
                <Stack direction="row" spacing={2}>
                   <Link to="/"><Button variant="outlined">الصفحة الرئيسية</Button></Link>
                  
                  </Stack>
                </EnterAnimation>
                </Container>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}  spacing={6} textAlign="center" >
            <EnterAnimation duration={0.4}>
              <img src={logo} alt="logo" style={{width:"60%"}}/>
            <Typography variant="h3" color="primary"> خدمة الخبر العاجل</Typography>
            </EnterAnimation>
            <EnterAnimation duration={1}>
            <Typography variant="h4" color="text.light">على بريدك الإلكتروني وبشكل دوري</Typography>
            </EnterAnimation>
            <EnterAnimation duration={1.5}>
            <Typography variant="h5" color="blue.main"> اختر ما يناسبك  </Typography>
            </EnterAnimation>
            <EnterAnimation duration={2}>
            <Typography variant="h6" color="red.main">  تخصيص حسب الفئة,المصدر,الوقت... </Typography>
            </EnterAnimation>
          </Grid>
          <Grid item xs={12} md={7} >
          <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Newsletter Preferences
      </Typography>

      {/* Email Input */}
      <TextField
        fullWidth
        label="Email"
        variant="outlined"
        margin="normal"
        required
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {/* Categories Selection */}
      <FormControl component="fieldset" sx={{ mt: 2, width: '100%' }}>
        <FormLabel component="legend"> اختر الفئة(متعدد)</FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          {categoriesOptions.map((category) => (
            <Button
              key={category}
              variant={categories.includes(category) ? 'contained' : 'outlined'}
              onClick={() => handleCategoryClick(category)}
              sx={{ textTransform: 'none' }}
            >
              {category}
            </Button>
          ))}
        </Box>
      </FormControl>

      {/* Time Selection */}
      <FormControl component="fieldset" sx={{ mt: 3, width: '100%' }}>
        <FormLabel component="legend">الوقت المفضل لإرسال الأخبار العاجلة:</FormLabel>
        <RadioGroup
          row
          value={time}
          onChange={(e) => setTime(e.target.value)}
          sx={{ mt: 1 }}
        >
          {timeOptions.map((t) => (
            <FormControlLabel
              key={t}
              value={t}
              control={<Radio />}
              label={t}
            />
          ))}
        </RadioGroup>
      </FormControl>

      {/* Days Selection */}
      <FormControl component="fieldset" sx={{ mt: 3, width: '100%' }}>
        <FormLabel component="legend">Days of Week (Multiple)</FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          {daysOptions.map((day) => (
            <Button
              key={day}
              variant={days.includes(day) ? 'contained' : 'outlined'}
              onClick={() => handleDayClick(day)}
              sx={{ textTransform: 'none' }}
            >
              {day}
            </Button>
          ))}
        </Box>
      </FormControl>

      {/* Sources Selection */}
      <FormControl component="fieldset" sx={{ mt: 3, width: '100%' }}>
        <FormLabel component="legend">Preferred Sources (Multiple)</FormLabel>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
          {sourcesOptions.map((source) => (
            <Box
              key={source}
              variant={sources.includes(source) ? 'contained' : 'outlined'}
              onClick={() => handleSourceClick(source.source)}
              
            >
              <img src={source.logo} alt={source.source} style={{backgroundSize:"center", width:"50px",height:"50px"}}/>
            </Box>
          ))}
        </Box>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        sx={{ mt: 3 }}
      >
        Subscribe
      </Button>
    </Box>
       
                   
                  
             
          </Grid>
          
        </Grid>
      )}
    </Container>
  );
};

export default BreakingNews;





  


  
  