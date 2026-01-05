import { createTheme, responsiveFontSizes } from '@mui/material/styles';

const MAASTRICHT = '#001B3A';
const MAROON1 = '#2D0303';
const MAROON2 = '#5B0A0A';
const ACCENT_GRADIENT = `linear-gradient(90deg, ${MAROON1} 0%, ${MAROON2} 100%)`;

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // phones
      sm: 600,  // small tablets
      md: 900,  // tablets / small laptops
      lg: 1200, // desktops
      xl: 1536, // large desktops
      xxl: 1920 // custom extra large
    },
  },
  palette: {
    primary: {
      main: MAASTRICHT,
      contrastText: '#ffffff',
    },
    secondary: {
      main: MAROON1,
      contrastText: '#fff',
    },
    background: {
      // default: '#ffe4e6',
      // default: 'linear-gradient(90deg, #cab0b2 0%, #c9babaff 10%, #ffffff 100%)',
      default: '#FDFDFD',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f1724',
      secondary: '#0f282cff',
      third: '#ffffff',
    },
  },

  typography: {
    fontFamily: 'Josefin Sans, Arial, sans-serif',

    h1: {
      fontFamily: "Poppins, Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: '2.6rem',
      letterSpacing: 1,
      // textShadow: "2px 2px 4px rgba(0,0,0,0.6)",
    },

    h2: {
      fontFamily: "Poppins, Montserrat, sans-serif",
      fontWeight: 600,
      fontSize: '2rem',
      letterSpacing: 0.5,
      // textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
    },

    h3: {
      fontFamily: "Poppins, Montserrat, sans-serif",
      fontWeight: 700,
      fontSize: '1.8rem',
      letterSpacing: 0.2,
      // textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
    },

    h4: {
      fontFamily: "Poppins, Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: '1.4rem',
      letterSpacing: 0.1,
      // textShadow: "1px 1px 3px rgba(0,0,0,0.4)",
    },

    h5: {
      fontFamily: "Poppins, Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: '1.25rem',
      letterSpacing: 0.1,
      // textShadow: "1px 1px 3px rgba(0,0,0,0.5)"
    },

    h6: {
      fontFamily: "Poppins, Montserrat, sans-serif",
      fontWeight: 500,
      fontSize: '1rem',
      letterSpacing: 0.05,
      // textShadow: "1px 1px 2px rgba(0,0,0,0.3)"
    },

    body1: {
      fontFamily: "Inter, Roboto, sans-serif",
      fontWeight: 400,
      fontSize: '1rem',
      textShadow: "none"
    },

    body2: {
      fontFamily: "Inter, Roboto, sans-serif",
      fontWeight: 400,
      fontSize: '0.9rem',
      textShadow: "none"
    },

    button: {
      fontFamily: "Inter, Roboto, sans-serif",
      fontWeight: 500,
      textTransform: 'none',
      fontSize: '1.05rem',
      letterSpacing: 0.2,
      textShadow: "none"
    },
  },


  components: {

    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // background: '#ffe4e6',
          background: '#FDFDFD',
          //background: 'linear-gradient(90deg, #cab0b2 0%, #c9babaff 10%, #ffffff 100%)',
          
          minHeight: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
          '&:hover': {
            textDecoration: 'none',
            borderBottom: 'none',
          },
        },
      },
    },


    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
          fontFamily: 'Josefin Sans, Arial, sans-serif',
          fontWeight: 500,
          fontSize: '1.05rem',
          letterSpacing: 0.2,
          padding: '8px 24px',
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none' },
        },
      },
      variants: [
        {
          props: { variant: 'primaryFilled' },
          style: {
            backgroundColor: '#0F1C38',
            color: '#fff',
            border: '1px solid',
            margin: '3px',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            '&:hover': {
              backgroundColor: '#0F1C38',
            },
          },
        },
        {
          props: { variant: 'secondaryFilled' },
          style: {
            backgroundColor: '#fff',
            color: '#000',
            border: '1px solid',
            margin: '3px',
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem' },
            '&:hover': {
              backgroundColor: '#fff',
              color: '#000',
            },
          },
        },
      ],
    },

    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
          '&:hover': { textDecoration: 'none', borderBottom: 'none' },
        },
      },
    },

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: 89,
          '@media (min-width:600px)': {
            minHeight: 89,
          },
          '@media (max-width:599px)': {
            minHeight: 64,
          },
        },
      },
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          a: {
            textDecoration: 'none',
            '&:hover': { textDecoration: 'none' },
          },
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export { theme, ACCENT_GRADIENT };
