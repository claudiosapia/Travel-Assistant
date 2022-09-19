import React, {useState, useEffect} from "react";
import {CssBaseline, Grid} from '@material-ui/core';

//import component get Places
import {getPlacesData} from "./api";


import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";


const App = ()=> {

    const [places, setPlaces] = useState([]);
    const [filteredPlaces, setFilteredPlaces]= useState([]);
 
const [childClicked, setChildClicked] = useState(null);

    const [coordinates, setCoordinates]= useState({});
    const [bounds, setBounds]= useState({});

    const[isLoading,setIsloading] = useState(false);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(({coords: {latitude, longitude}})=> {
            setCoordinates({lat: latitude, lng: longitude});
        })
    },[]);
 //if rating of place is > than currently selected rating, return that rating
    useEffect(()=> {
        const filteredPlaces= places.filter((place)=> place.rating > rating)
        setFilteredPlaces(filteredPlaces);
    },[rating])
    
    useEffect(()=> {
        //if bounds.sw truthy, bounds empty obj, always truthy code keeps getting executed
        if(bounds.sw && bounds.ne){

       
        setIsloading(true)

        getPlacesData(type, bounds.sw, bounds.ne )
        .then((data)=> {
            //filter data so we don't get dummy items
            setPlaces(data?.filter((place)=> place.name && place.num_reviews >0 ))
            setIsloading(false)
            //reset every time we getnew places data
            setFilteredPlaces([])
        })
    }
    },[type, bounds]) //removed coordinates as already being changed 2 timesin Header also on Map.js
 
    console.log(places)
    console.log(filteredPlaces)

    return (
        <>
        <CssBaseline/>
        <Header setCoordinates={setCoordinates}/>
        <Grid container spacing= {3} style={{ width : '100%'}}>
            <Grid item xs= {12} md={4}>
              <List places={filteredPlaces.length ? filteredPlaces : places}

               childClicked={childClicked} isLoading={isLoading}
              type={type} 
              setType={setType}
              rating={rating}
              setRating={setRating}/>
            </Grid>
            <Grid item xs= {12} md={4}>
                <Map setCoordinates={setCoordinates} setBounds={setBounds}
                 coordinates={coordinates} places={places} 
                 setChildClicked= {setChildClicked}
                 places={filteredPlaces.length ? filteredPlaces : places}
                 />
                </Grid>
               
        </Grid>
        </>
    )
}

export default App;