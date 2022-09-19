import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  chip: {
    margin: '5px 5px 5px 0', 
  },
  subtitle: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '16px',fontWeight: 'bolder',
  },
  spacing: {
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
  },
  subtitleBld: {
    color: '#130E0D',
    fontWeight: '500',
    marginTop: '10px'
  },
  btnTripAd: {
    "&:hover":{
      backgroundColor: 'green', //fallback color
      backgroundColor: '#114F64',
    } ,
    backgroundColor: '#00AF87',
    fontSize: 13,
    color: '#fff',
    marginTop: '10px'
  },
  btnWeb: {
    "&:hover":{
      backgroundColor: 'blue',
    } ,
    backgroundColor: '#3030B0',
    color: '#fff',
    marginTop: '10px'
   
    
  },

  
})); 