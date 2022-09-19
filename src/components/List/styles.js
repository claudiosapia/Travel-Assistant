import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1), minWidth: 120, marginBottom: '30px',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  loading: {
    height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center',
  },
  container: {
    padding: '25px',
  },
  marginBottom: {
    marginBottom: '30px',
  },
  list: {
    height: '75vh', overflow: 'auto',
  },
  selectIn : {
    color: '#000',
    fontWeight: 600,
    fontSize:'20px',
    
  },
  select:{
    marginBottom: '20px',
  },
  title: {
    marginTop: 4,
    marginBottom: '30px'
  }
}));