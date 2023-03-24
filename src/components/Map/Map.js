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
        center: path[path.length-1],
        mapTypeId: "terrain",
        mapTypeControl: false,
      });
  
      const pathPolyline = createPath(map,path,color);
      return () => {
	   pathPolyline.setMap(null);
      };
    }, [path,color,id]);
	    
   //createPath(map, path, color);
   // }, [path,color,id]);
  
    return <div style={{ width: "100%", height: "400px" }} id={id} />;
  };


export default Map;
