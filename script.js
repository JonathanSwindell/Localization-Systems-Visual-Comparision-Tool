/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
// This example adds a predefined symbol (an arrow) to a polyline.
// Setting offset to 100% places the arrow at the end of the line.

var line;
var points;

let startingLat = 22.291;
let startingLng = 153.027;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 6,
    center: { lat: 20.291, lng: 153.027 },
    mapTypeId: "terrain",
  });
  // Define a symbol using a predefined path (an arrow)
  // supplied by the Google Maps JavaScript API.

  const lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
  };
  // Create the polyline and add the symbol via the 'icons' property.
  line = new google.maps.Polyline({
    path: [
      { lat: startingLat, lng: startingLng },
      { lat: startingLat + 0.5, lng: startingLng - 0.1},
    ],
    icons: [
      {
        icon: lineSymbol,
        offset: "100%",
      },
    ],
    map: map,
  });
}
  //TEst
  function oneSecondFunction() {
    // get existing path
    points = line.getPath().getArray();
    
    
    // add new point
    points.push(new google.maps.LatLng(points[0] + 1.2, points[0] + 1.2));
    
    window.alert(points);

    // update the polyline with the updated path
    line.setPath(points);
  }

  //Add parseing for this function
  function getCurrentLat(){

  }

  function getCurrentLng(){

  }

window.initMap = initMap;

let timerId = setInterval(() => oneSecondFunction(), 1000);
