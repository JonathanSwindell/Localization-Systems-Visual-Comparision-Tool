//
// UAH Senior Design 2023
// Multi-Sensor Signals of Opportunity Localization System
//

let map1, map2, map3, map4;
var m1Vector, m2Vector, m3Vector, m4Vector;

var startingLat = 34.719;
var startingLng = -86.666;

function createPath(map, pathCoords, color) {
  // Create a new google maps Polyline object
  return line = new google.maps.Polyline({
    map: map,
    path: pathCoords,
    geodesic: true,
    strokeColor: color,
    strokeOpacity: 1.0,
    strokeWeight: 2
  });
}

function initMap() {

  var path1 = [
  {lat: startingLat, lng: startingLng },
  {lat: 21.291, lng: -157.821},
  {lat: -18.142, lng: 178.431},
  {lat: -27.467, lng: 153.027}
];

var path2 = [
  {lat: startingLat, lng: startingLng },
  {lat: -21.291, lng: 10.821},
  {lat: -18.142, lng: 178.431},
  {lat: -27.467, lng: 153.027}
];

var path3 = [
  {lat: startingLat, lng: startingLng },
  {lat: 22.291, lng: -147.821},
  {lat: -18.142, lng: 178.431},
  {lat: -27.467, lng: 153.027}
];



  map1 = new google.maps.Map(document.getElementById("map1"), {
    zoom: 10,
    center: {lat: startingLat, lng: startingLng},
    mapTypeId: "terrain",
    mapTypeControl: false,
  });

  map2 = new google.maps.Map(document.getElementById("map2"), {
    zoom: 10,
    center: {lat: startingLat, lng: startingLng},
    mapTypeId: "terrain",
    mapTypeControl: false,
  });

  map3 = new google.maps.Map(document.getElementById("map3"), {
    zoom: 10,
    center: {lat: startingLat, lng: startingLng},
    mapTypeId: "terrain",
    mapTypeControl: false,
  });

  map4 = new google.maps.Map(document.getElementById("map4"), {
    zoom: 10,
    center: {lat: startingLat, lng: startingLng},
    mapTypeId: "terrain",
    mapTypeControl: false,
  });

  m1Vector1 = createPath(map1, path1, 'blue');
  m2Vector2 = createPath(map2, path2, 'red');
  m3Vector3 = createPath(map3, path3, 'green');

  m4Vector1 = createPath(map4, path1, 'blue');
  m4Vector2 = createPath(map4, path2, 'red');
  m4Vector3 = createPath(map4, path3, 'green');

}  

google.maps.event.addDomListener(window, 'load', initMap);