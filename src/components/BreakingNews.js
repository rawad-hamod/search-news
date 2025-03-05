import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Stack, Typography, Alert, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { EnterAnimation } from '../utiles/constants';
import logo from "../utiles/images/search-news-logo.png";

import { Link } from 'react-router-dom';
import CardButton from './CardButton';

const ContactUs = () => {
  const [submitted, setSubmitted] = useState(false);

  const initialValues = {
    email: "",
    question: "",
    details: "",
  };

  const validationSchema = Yup.object({
    question: Yup.string().required("هذا الحقل مطلوب"),
    email: Yup.string().email("يرجى كتابة البريد الإلكتروني بطريقة صحيحة:example@gmail.com").required("يرجى كتابة البريد الإلكتروني"),
    details: Yup.string().nullable(),
  });

  const handleSubmit = (values) => {
    // Format dates before sending to the API
    setSubmitted(true);
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
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Stack direction="column" spacing={4}>
                    <Field
                      as={TextField}
                      fullWidth
                      label="اكتب السؤال هنا"
                      name="question"
                      variant="outlined"
                    />
                    <ErrorMessage name="question" component="div" className="error" />
                    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<CardButton text="عاجل"
        color="red.main"
        background="red.light" size="large" />}  />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
                    <Field
                      as={TextField}
                      fullWidth
                      label="اكتب عنوان بريدك الإلكتروني"
                      name="email"
                      variant="outlined"
                    />
                    <ErrorMessage name="email" component="div" className="error" />

                    <Field
                      as={TextField}
                      fullWidth
                      label="التفاصيل"
                      name="details"
                      variant="outlined"
                    />
                    <ErrorMessage name="details" component="div" className="error" />

                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      fullWidth
                    >
                  إشترك
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Grid>
          
        </Grid>
      )}
    </Container>
  );
};

export default ContactUs;