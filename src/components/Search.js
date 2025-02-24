import React,{useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid2,
  Container,
  Typography,
  Pagination,
  Stack,
  Alert,
  Box,
  CircularProgress
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { format } from 'date-fns';
import NewsCard from './NewsCard';
// Validation schema using Yup
const validationSchema = Yup.object({
  keyword: Yup.string().required('يرجى كتابة ما تريد البحث عنه'),
  fromDate: Yup.date().nullable(),
  toDate: Yup.date().nullable(),
  sortBy: Yup.string().required('Sort by is required'),
});

// Initial form values
const initialValues = {
  keyword: '',
  fromDate: null,
  toDate: null,
  sortBy: 'publishedAt',
};

const Search = () => {
  const [results, setResults]=useState([]);
  const [page, setPage] = useState(1);
  const [isLoading,setIsLoading]= useState(false);
  const itemsPerPage = 9;
  const startIndex = (page - 1) * itemsPerPage;
  const paginatedNews = results.slice(startIndex, startIndex + itemsPerPage);
   // Format dates before sending to the API
    
  const handleSubmit = (values) => {
     // Format dates before sending to the API
     const formattedValues = {
      ...values,
      fromDate: values.fromDate ? format(values.fromDate, 'yyyy-MM-dd') : null,
      toDate: values.toDate ? format(values.toDate, 'yyyy-MM-dd') : null,
    };
    setIsLoading(true); // Set loading state to true
    fetch(
      `https://newsapi.org/v2/everything?q=${values.keyword}&language=ar&from=${formattedValues.fromDate}&to=${formattedValues.toDate}&sortBy=${values.sortBy}&pageSize=99&apiKey=e29c9dac114441be9cd5fd9f84b3f63f`
    )
      .then((data) => data.json())
      .then((data) => {
        setResults(data.articles); 
        setIsLoading(false);
        console.log(values) 
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false); 
      });
  };

  return (
    <>
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        خيارات البحث
      </Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <Grid2 container direction="column" spacing={3} sx={{textAlign:"right"}}>
              {/* Keyword Field */}
              <Grid2 item xs={12}>
                <Field
                  as={TextField}
                  fullWidth
                  label="الكلمة المفتاحية"
                  name="keyword"
                  variant="outlined"
                />
                <ErrorMessage name="keyword" component="div" className="error" />
              </Grid2>

              {/* Date Range Fields */}
              <Grid2 item xs={12}>
              <Stack direction="row" justifyContent="space-between">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="من تاريخ"
                    value={values.fromDate}
                    onChange={(date) => setFieldValue('fromDate',date)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth variant="outlined" />
                    )}
                  />
                </LocalizationProvider>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="إلى تاريخ"
                    value={values.toDate}
                    onChange={(date) => setFieldValue('toDate',date)}
                    renderInput={(params) => (
                      <TextField {...params} fullWidth variant="outlined" />
                    )}
                  />
                </LocalizationProvider>
              </Stack>
               
              </Grid2>
             

              {/* Sort By Dropdown */}
              <Grid2 item xs={12}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>اختر طبيعة نتائج البحث</InputLabel>
                  <Field
                    as={Select}
                    label="اختر طبيعة نتائج البحث"
                    name="sortBy"
                  >
                    <MenuItem value="publishedAt">الأحدث</MenuItem>
                    <MenuItem value="relevancy">الأقرب لكلمة البحث</MenuItem>
                    <MenuItem value="popularity">الأكثر شيوعاً</MenuItem>
                  </Field>
                </FormControl>
              </Grid2>

              {/* Submit Button */}
              <Grid2 item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  ابحث 
                </Button>
              </Grid2>
            </Grid2>
          </Form>
        )}
      </Formik>
      {isLoading && (
       <Box sx={{ display: 'flex' }}>
       <CircularProgress color="primary"/>
     </Box>
      )}

    </Container>
    {results.length>0 &&
      <Container m={3}>
        <Alert severity="info" >
          { `عدد النتائج${results.length}`}
        </Alert>
        

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
            <Grid2 key={index}  xs={12} md={6} lg={index===0?6:3}>
              <NewsCard data={item} index={index} />
            </Grid2>
          );
        })}
      </Grid2>
      {results.length>9 && 
      <Pagination
      count={Math.ceil(results.length / itemsPerPage)}
      page={page}
      onChange={(event, value) => setPage(value)}
      style={{
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
        position: "sticky",
        bottom: "0",
        backgroundColor: "#fff",
        zIndex:"100"
      }}
    />}
      
    </Container>}
    {/* Show loading indicator while fetching data */}
    
    </>
  );
};

export default Search;