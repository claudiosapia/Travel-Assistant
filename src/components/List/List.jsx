import React, {useState, useEffect, createRef} from "react";

//material ui loading bar
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";

//import place details components
import PlaceDetails from '../PlaceDetails/PlaceDetails';
import useStyles from "./styles";


const List = ({places, childClicked, isLoading, type, setRating, setType, rating}) => {
   
    //switch type of menu item
 
    const classes= useStyles();

    //element refs to scroll down to el on list when clicking on el on map

    //contain all references
const[elRefs, setElRefs]= useState([]);


//create refs
useEffect(()=> {
    //construct as many els as there are places using arr constructor.
    //.fill start filling array, then map over arr, skip first param,use 2nd param, access ref[i] , 
    //if it does not exists create ref
    //return elRefs as refs is used for declaration 
 const refs = Array(places?.length).fill().map((_, i)=> elRefs[i] || createRef());
 setElRefs(refs)
},[places]);

    return (
    <div className={classes.container}>
 <Typography className={classes.title} variant = "h4"> Restaurants, Hotels & Attractions</Typography>
 {isLoading? (
    <div className={classes.loading}>
        <CircularProgress size= "5rem" />
    </div>
 ) 
 
 :
 
 (
    <>
<FormControl className ={classes.FormControl}>
    <InputLabel className={classes.selectIn}>Type</InputLabel>
    <Select  disableUnderline  className={classes.select} id="type" value={type} onChange={(e) => setType(e.target.value)}>
        <MenuItem value= "restaurants"> Restaurants</MenuItem>
        <MenuItem value= "hotels"> Hotels</MenuItem>
        <MenuItem value= "attractions"> Attractions</MenuItem>
    </Select>
</FormControl>
<FormControl className ={classes.FormControl}>
    <InputLabel className={classes.selectIn} id="rating">Rating</InputLabel>
    <Select  disableUnderline id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
        <MenuItem  value= {0}> All </MenuItem>
        <MenuItem value= {3}>Above 3.0 </MenuItem>
        <MenuItem value= {4}> Above 4.0 </MenuItem>
        <MenuItem value= {4.5}> Above 4.5 </MenuItem>
    </Select>
</FormControl>
<Grid container spacing={3} className={classes.list}>
            {places?.map((place, i) => (
              <Grid ref={elRefs[i]} key={i} item xs={12}>
                <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
              </Grid>
            ))}
 </Grid>
 </>
 )}
    </div>
    );
}

export default List;