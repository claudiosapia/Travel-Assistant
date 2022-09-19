import React from "react";
import{Box, Typography,Button,Card, CardMedia,CardContent, CardActions, Chip} from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

//styles
import useStyles from './styles';
const PlaceDetails = ({place, selected, refProp}) => {
    const classes= useStyles();
    //if el selected  each ref has current property? scroll into view using in-built html property
if(selected) refProp?.current?.scrollIntoView({behavior: "smooth", block:"start"})
    return (
       <Card elevation ={6}>
      <CardMedia
      style= {{height:350}}
      image={place.photo ? place.photo.images.large.url: 'https://pikwizard.com/photos/appetizer-finger-food-food-vegetable--e1720acc052f6bf52b876d027081eb8c-m.jpg'}
      title={place.name}  
    />


    <CardContent> 
      {/* Ratings */}
      <Typography gutterBottom variant = "h5">{place.name}</Typography>

      <Box display= "flex" justifyContent="space-between">
      <Rating  value ={Number(place.rating)} readOnly />
      <Typography gutterBottom variant = "subtitle1">out of {place.num_reviews} reviews</Typography>

      </Box>
      

        {/* PRICE */}
        <Box display= "flex" justifyContent="space-between">
        <Typography  variant = "subtitle1">Price </Typography>
        <Typography gutterBottom variant = "subtitle1">{place.price} </Typography>
        </Box>
        {/* RANKING */}
        <Box display= "flex" justifyContent="space-between" >
        <Typography  variant = "subtitle1">Ranking  </Typography>
        <Typography gutterBottom variant = "subtitle1">{place.ranking} </Typography>
        </Box>
        {place?.awards?.map((award)=>           
 (
         <Box my={1} display = "flex" justify-content= "space-around" align-items= "center">
          
          <img   src={award.images.small} alt= {award.display_name} />
          <Typography  variant = "subtitle2" color= "textSecondary">Awards </Typography>

         </Box>
        ))}
        {/* Cuisine: Name: Vegetarian... */}
        {place?.cuisine?.map(({name})=> (
          <Chip key= {name} size="small" label={name} className={classes.chip}/>
        ))}
        {place?.address && (
          <Typography gutterBottom variant= "subtitle2"  className={classes.subtitleBld}>
            <LocationOnIcon/> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography gutterBottom variant = "subtitle2" className={classes.subtitleBld} color="textSecondary">
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button className={classes.btnTripAd} size="small" onClick={()=> window.open(place.web_url, '_blank')}>
            Trip Advisor 
          </Button>
          <Button  className={classes.btnWeb}  size="small"  onClick={()=> window.open(place.website, '_blank')}>
           Website
          </Button>
        </CardActions>
    </CardContent>
      </Card> 
   
    )
}

export default PlaceDetails;