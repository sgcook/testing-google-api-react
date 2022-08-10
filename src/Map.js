import React from "react";
import {
  GoogleMap,
  MarkerF,
} from "@react-google-maps/api";
import "./map.css";
import Markers from "./Markers.json";

const Map = () => {
  /*does not recenter itself if app accidentally loads*/

  return (
    <GoogleMap zoom={10} center={{lat:55.859129049203794, lng: -4.258108561806001  }} mapContainerClassName="map-container">
      {Markers.map((place) => (
        <MarkerF position={{lat: place.coordinates[0], lng: place.coordinates[1]}}/>
      ))}
    </GoogleMap>
  )
}

export default Map;