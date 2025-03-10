import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Stack, Typography, Alert } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { EnterAnimation } from '../utiles/constants';

import { Link } from 'react-router-dom';

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
                  <Button variant="outlined" onClick={()=>(setSubmitted(false))}>سؤال آخر</Button>
                  </Stack>
                </EnterAnimation>
                </Container>
      ) : (
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}  spacing={6} textAlign="center" >
            <EnterAnimation duration={0.4}>
            <Typography variant="h4" color="primary"> نحن هنا للإجابة عن أي استفسار</Typography>
            </EnterAnimation>
            <EnterAnimation duration={1.5}>
            <Typography variant="h6" color="text.light">يرجى كتابة سؤالك وبريدك الإلكتروني واستفسارك في الحقول المجاورة </Typography>
            </EnterAnimation>
            <EnterAnimation duration={2}>
            <Typography variant="h6" color="blue.main"> سوف يتم الرد خلال 48 ساعة </Typography>
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
                  إرسال
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