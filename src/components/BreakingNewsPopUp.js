import React from 'react';
import CardButton from "./CardButton"
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import logo from "../utiles/images/search-news-logo.png";
import {
  useTheme,
} from "@mui/material";
import { Link } from 'react-router-dom';
import { EnterAnimation } from '../utiles/constants';

const BreakingNewsPopUp = ({ open, onClose }) => {
  const theme = useTheme()
  return (
   <EnterAnimation duration={0.5}>
    <Dialog
    open={open}
    onClose={onClose}
    sx={{height:"fitContent"}}
  >
      <img src={logo} alt="logo" style={{width:"200px", height:"100%"}}/>
    <DialogTitle id="alert-dialog-title">{"اشترك في خدمةالأخبار العاجلة"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        يمكنك الاطلاع دائما على اخر الاحداث, وفقا لخياراتك 
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Link to="/breaking-news"> <CardButton text="اشترك" 
    color={theme.palette.blue.main}
    background={theme.palette.blue.light} 
    onClick={onClose} /></Link>
    
    <CardButton text="إغلاق" 
    color={theme.palette.red.main}
    background={theme.palette.red.light} 
    onClick={onClose}
    />
    </DialogActions>
  </Dialog>
  </EnterAnimation>
  )
}

export default BreakingNewsPopUp;