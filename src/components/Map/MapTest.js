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

const Maps = () => {
  return (
    <div>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&callback=initMap&v=weekly" async defer></script>
      <Map
        path={[
          { lat: 34.719, lng: -86.666 },
          { lat: 21.291, lng: -157.821 },
          { lat: -18.142, lng: 178.431 },
          { lat: -27.467, lng: 153.027 },
        ]}
        color={"blue"}
        id="Map1"
      />
      <Map
        path={[
          { lat: 34.719, lng: -86.666 },
          { lat: -21.291, lng: 10.821 },
          { lat: -18.142, lng: 178.431 },
          { lat: -27.467, lng: 153.027 },
        ]}
        color={"red"}
        id="Map2"

      />
      <Map
        path={[
          { lat: 34.719, lng: -86.666 },
          { lat: 22.291, lng: -147.821 },
          { lat: -18.142, lng: 178.431 },
          { lat: -27.467, lng: 153.027 },
        ]}
        color={"green"}
        id="Map2"
      />
    </div>
  );
};

export default Maps;
