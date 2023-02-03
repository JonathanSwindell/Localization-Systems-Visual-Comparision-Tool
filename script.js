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

let map1, map2, map3, map4;
function initMap() {
  map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 6,
    center: { lat: 20.291, lng: 153.027 },
    mapTypeId: "terrain",
    mapTypeControl: false,
  });

  map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 6,
    center: { lat: 20.291, lng: 153.027 },
    mapTypeId: "terrain",
    mapTypeControl: false,
  });


  map3 = new google.maps.Map(document.getElementById("map3"), {
    zoom: 6,
    center: { lat: 20.291, lng: 153.027 },
    mapTypeId: "terrain",
    mapTypeControl: false,
  });

  map4 = new google.maps.Map(document.getElementById("map4"), {
    zoom: 6,
    center: { lat: 20.291, lng: 153.027 },
    mapTypeId: "terrain",
    mapTypeControl: false,
  });
}

function createPath(map, pathCoords, color) {
  // Create a new google maps Polyline object
  var path = new google.maps.Polyline({
    path: pathCoords,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  // Add the path to the map
  path.setMap(map);

  // Return the path object
  return path;
}

var pathCoords = [
  {lat: 37.7749, lng: -122.4194},
  {lat: 40.730610, lng: -73.935242},
  {lat: 41.8781, lng: -87.6298},
  {lat: 34.0522, lng: -118.2437}
];

// // Create path
// var path = createPath(map1, pathCoords, 'red');
// var startPoint = pathCoords[0];
// var marker = new google.maps.Marker({
//   position: startPoint,
//   map: map1,
//   title: "Start Point",
// })

//google.maps.event.addDomListener(window, 'load', initMap);

// Change latitude and longitude of path 
//path.getPath().setAt(1, {lat: 38.8977, lng: -77.0366});

  // const lineSymbol = {
  //   path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
  // };
  // // Create the polyline and add the symbol via the 'icons' property.
  // line = new google.maps.Polyline({
  //   path: [
  //     { lat: startingLat, lng: startingLng },
  //     { lat: startingLat + 0.5, lng: startingLng - 0.1},
  //   ],
  //   icons: [
  //     {
  //       icon: lineSymbol,
  //       offset: "100%",
  //     },
  //   ],
  //   map: map,
  // });
//}

// function oneSecondFunction() {
//   // get existing path
//   points = line.getPath().getArray();
  
  
//   // add new point
//   points.push(new google.maps.LatLng(points[0] + 1.2, points[0] + 1.2));
  
//   window.alert(points);

//   // update the polyline with the updated path
//   line.setPath(points);
// }

//Add parseing for this function
function getCurrentLat(){

}

function getCurrentLng(){
}
// let timerId = setInterval(() => oneSecondFunction(), 1000);
