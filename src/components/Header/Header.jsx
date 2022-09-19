import React, {useState} from "react";
import {Autocomplete} from '@react-google-maps/api';
import {AppBar, Toolbar, Typography, InputBase, Box} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


//import styles
import useStyles from './styles'

const Header = ({setCoordinates}) => {

    const [autocomplete,setAutocomplete]=useState(null)
    //get autocomp on load, set so we have in state
    const onLoad =(autoC) => setAutocomplete(autoC)
    //call hook useStyles

    //find lat and lng of the new location
    const onPlaceChanged= () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();
            
        setCoordinates({lat,lng});
    }
    const classes = useStyles();
    return (
    <Toolbar className={classes.toolbar}>
    <Typography variant = "h4" className= {classes.title}>
        Travel Assistant
    </Typography>
    <Box display="flex">
    <Typography variant = "h5" className= {classes.title}>
        Explore
    </Typography>
    <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <div className={classes.search}>
       <div className={classes.searchIcon}>
        <SearchIcon/>
       </div>
       <InputBase placeholder= "Search..." classes= {{ root: classes.inputRoot, input: classes.inputInput}}/>
            </div>
    </Autocomplete>

    </Box>


    </Toolbar>
    
    
    )
}

export default Header;