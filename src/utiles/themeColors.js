export const themeColors = {
  palette: {
    primary: {
      main: "#3538cd",
    },
    text: {
      main: "#000",
      dark: "#101828",
      light: "#667085",
    },
    red: {
      main: "#c4320a",
      light: "#fdf2fa",
    },
    blue: {
      main: "#026aa2",
      light: "#d6e2f3",
    },
    // primary: {
    //     main: '#101828',
    //     gray: '#667085'
    // },
    // secondary: {
    //   red: "#c4320a",
    //   purple: '#3538cd',
    //   blue: '#026aa2',

    // },
    // background: {
    //   lightRed: '#fdf2fa',
    //   lightPurple: '#f9f5ff',
    //   lightBlue: '#eef4ff',
    // },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "1rem",
          paddingTop: 0,
          borderRight: "1px solid blue",
          borderBottom: `0.1rem solid red`,
          borderLeft: `0.1rem solid purple`,
          borderTop: `0.1rem solid gray`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          display:"flex",
         
          justifyContent: "center",
          alignItems:"center",
          margin: "2rem",
          fontSize: "1.5rem",
          gap:"1rem"
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          position: "sticky",
          bottom: "0",
          backgroundColor: "#fff",
          zIndex: "100",
        },
      },
    },
    MuiToggleButton:{
      stuleOverrides:{
        root:{
          borderRadius: "3rem",
          transition: "0.5s",
          padding: "0.5rem",
          fontSize:"0.8rem",
          color:"red"
        }
      }
    }
   
  },
};
