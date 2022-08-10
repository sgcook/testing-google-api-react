import React from "react";
import {
  GoogleMap,
  MarkerF,
} from "@react-google-maps/api";
import "./map.css";
import Markers from "./Markers.json";

const Map = () => {
  const latCoords = Markers.map(place => place.coordinates[0]);
  const lngcoords = Markers.map(place => place.coordinates[1]);

  const findAverageCoords = (latCoords, lngcoords) => {
    const latAverage = latCoords.reduce((a, b) => a + b, 0) / latCoords.length;
    const lngAverage = lngcoords.reduce((a, b) => a + b, 0) / lngcoords.length;
    
    const coords = [];
    coords.push(latAverage, lngAverage);
    return coords;
  }

  const averageCoords = findAverageCoords(latCoords, lngcoords);

  return (
    <GoogleMap zoom={13.5} center={{lat: averageCoords[0], lng: averageCoords[1]}} mapContainerClassName="map-container">
      {Markers.map((place) => (
        <MarkerF key={place.coordinates[0]} position={{lat: place.coordinates[0], lng: place.coordinates[1]}}/>
      ))}
    </GoogleMap>
  )
}

export default Map;