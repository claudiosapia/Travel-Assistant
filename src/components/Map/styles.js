import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  paper: {
    backgroundColor:'#f6f6ed', color:'#00000',
    padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '125px',
  },
  mapContainer: {
    height: '85vh', width: '140vh',
    margin: '10px'
  },
  markerContainer: {
    position: 'absolute', transform: 'translate(-50%, -50%)', zIndex: 1, '&:hover': { zIndex: 2 },
  },
  pointer: {
    cursor: 'pointer',
  },
  typography: {
    fontFamily: "Roboto",
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
    fontWeightBold: 700,
    h1: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      lineHeight: "1.2em"
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: "normal",
      lineHeight: "1.2em"
    },
    subtitle2: {
      "fontWeight": 700,
    }
}
  
}));