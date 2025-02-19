import { Container, Stack, Typography} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { navBarElemets } from "../utiles/constants";
const Navbar = () => {
  return (
    <Container
   
      sx={{
        position: "sticky",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom:"4rem",
        backgroundColor:"#fff",
        zIndex:1000,
        paddingBottom:"1rem"
      }}
    >
      <Stack  direction="row-reverse" spacing={{ sx: 2, sm: 4 }} sx={{height:"fitContent"}}>
        {navBarElemets.map((ele, index) => (
          <div key={index}>
            <Link to={ele.link} style={{ textDecoration: "none" }}>
              <Typography
              mt={1}
                pr={2}
                pl={2}
                sx={{
                  transition: "0.3s",
                  color: ele.color,
                  fontWeight:"bold",
                  borderRadius: "0 10px 10px 0",
                  borderLeft:`1px solid ${ele.color}`,
                  typography: { xs: 'body1', sm: 'h6' },
                  "&:hover": { backgroundColor: ele.background },
                }}
              >
                {ele.text}
              </Typography>
              
            </Link>
           
          </div>
        ))}
      </Stack>
      
    </Container>
  );
};

export default Navbar;
