
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
export const navBarElemets=[{text:"كل الأخبار", color:"#3538cd",background:"#f9f5ff",link:"/",icon:<HomeOutlinedIcon fontSize="large" />},
    {text:"أبحث في الأخبار", color:"#c4320a",background:"#fdf2fa",link:"/search",icon:<SearchOutlinedIcon fontSize="large" />},
    {text:"تواصل معنا", color:"#026aa2",background:"#eef4ff",link:"/contact-us", icon:<CallOutlinedIcon fontSize="large" />}];
    // get formatted date from string date
    export const getFormattedDate = (dateString) => {
      const date = new Date(dateString);

      // Extract day, month, and year
      const day = date.getUTCDate();
      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      const formattedDate = `${day}-${month}-${year}`;
      return formattedDate;
    };