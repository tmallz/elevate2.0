import React, { Component } from "react";
import API from "../utils/API";
import Map from '../compenents/Map';
require("dotenv").config();



class Elevate extends Component {

    render(){
        return (
            <div>
                <div style= {{width: '75vw', height: '75vh'}}>
                    <Map 
                        googleMapURL = {`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement = {<div style={{height: "100%"}} />}
                        containerElement = {<div style={{height: "100%"}} />}
                        mapElement = {<div style={{height: "100%"}} />}
                    />
                </div>
            </div>
    

        );
    }
  }


export default Elevate;
