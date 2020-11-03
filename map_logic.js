// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
    center: [41.0000, -99.1099],
    zoom: 5
});
// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
var darkmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "dark-v10",
  accessToken: API_KEY
});

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