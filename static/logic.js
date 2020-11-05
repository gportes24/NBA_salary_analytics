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

var teams = [
  {
    team: "Philadelphia 76ers",
    coords: [39.9011, -75.1719],  
    salary: 130273147,
    city: "Philadelphia, PA"
  },
  {
    team: "Washington Wizards",
    coords: [38.8981, -77.0208],
    salary: 131014920,
    city: "Washington, D.C."
  }
];

function markerSize(salary) {
  return salary / 1000;
}

for (var i = 0; i < teams.length; i++) {
  L.circle(teams[i].coords, {
    fillOpacity: 0.50,
    color: "darkorange",
    fillColor: "orange",
    radius: markerSize(teams[i].salary)
  }).bindPopup("<h3> " + teams[i].team + "</h3> <h4>Total Salary: </h4> $" + teams[i].salary).addTo(myMap);
}
// var sidebar = L.control.sidebar('sidebar', {
//   position: 'left'
// });

// map.addControl(sidebar);