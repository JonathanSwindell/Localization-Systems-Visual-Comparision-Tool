import React, { useEffect } from "react";

const Map = ({ path, color, id }) => {
    const createPath = (map, pathCoords, color) => {
      return new window.google.maps.Polyline({
        map: map,
        path: pathCoords,
        geodesic: true,
        strokeColor: color,
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
    };
  
    useEffect(() => {
      let map = new window.google.maps.Map(document.getElementById(id), {
        zoom: 10,
        center: { lat: 34.719, lng: -86.666 },
        mapTypeId: "terrain",
        mapTypeControl: false,
      });
  
      createPath(map, path, color);
    }, [path,color,id]);
  
    return <div style={{ width: "100%", height: "400px" }} id={id} />;
  };


export default Map;