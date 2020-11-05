// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("amber", {
  center: [41.0000, -99.1099],
  zoom: 5
});
// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer('https://{s}.tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}', {
  attribution: '<a href="http://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  minZoom: 0,
  maxZoom: 22,
  subdomains: 'abcd',
  accessToken: access_token
}).addTo(myMap);

// var teams = [
//   {
//     team: "Philadelphia 76ers",
//     coords: [39.9011, -75.1719],  
//     salary: 130273147,
//     city: "Philadelphia, PA"
//   },
//   {
//     team: "Washington Wizards",
//     coords: [38.8981, -77.0208],
//     salary: 131014920,
//     city: "Washington, D.C."
//   }
// ];

function markerSize(salary) {
  return salary / 1000;
};


var locations = "/locations";

d3.json(locations, function (data) {
  console.log(data.result[2].coordinates);
  for (var i = 0; i < data.result.length; i++) {
    console.log(data.result[i].team)
    L.circle(data.result[i].coordinates, {
      fillOpacity: 0.50,
      color: "darkorange",
      fillColor: "orange",
      radius: markerSize(data.result[i].salary),
    }).bindPopup("<h3> " + data.result[i].team + "</h3> <h4>Total Salary: </h4> $" + data.result[i].salary).addTo(myMap);
  };

});
