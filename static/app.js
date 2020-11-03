// Create function for Data plotting (Bar, gauge, bubble)
function getdata(tm) {
  d3.json("Resources/basketball_table.json").then(function (nbaData) {
    console.log(nbaData);
    var trying = Object.values(nbaData);
    console.log(trying);

    //this creates a list of unique teams
    let teamnames = new Set;
    let teamStats = new Set;
    for (var i = 0; i < nbaData.length - 1; i++) {
      console.log(nbaData[i]);
      teamnames.add(nbaData[i]['tm']);
      teamStats.add(nbaData[i]);
    }
    console.log(teamnames);
    teamnames = [...teamnames]
    console.log(teamnames)
    teamStats = [...teamStats];
    console.log(teamStats);
    let tmlist = Array.from(teamnames);
    console.log(tmlist);

    var filtered = nbaData.filter(a => a.tm === teamnames[0]);
    console.log(filtered);

    var salary_test = filtered.filter(s => s.Player == s.Player);
    console.log(salary_test);
    var player_list = salary_test.map(data => data.Player);
    console.log(player_list);
    var points = salary_test.map(data => data.pts);
    console.log(points);

    difTeam = salary_test.map(data=> data.tm)[0];
    console.log(difTeam)

    var per = salary_test.map(data => data.PER);
    console.log(per);

    var salary = salary_test.map(data => data.yr2019_20);
    console.log(salary);


    var trace = {
      x: salary,
      y: player_list,
      type: "bar",
      text: player_list,
      orientation: "h",

    };
    var data = [trace];

    var layout = {
      title: "NBA Salary by Team",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 10
      },
    };

    Plotly.newPlot("bar", data, layout);
    let trace1 = {
      x: salary,
      y: points,
      text: player_list,
      mode: 'markers',

      marker: {
        color: salary,
        size: per
      },
    }
    let data1 = [trace1];
    var layout = {
      title: "NBA Salary"
    }
    Plotly.newPlot("bubble", data1, layout)

  });

}
function optionChanged(tm) {
  getdata(tm);
}
function init() {
  let dropdown = d3.select("#selDataset");

  d3.json("Resources/basketball_table.json").then((data) => {
    console.log(data)
    let teamnames = new Set;
    let teamStats = new Set;
    for (var i = 0; i < data.length - 1; i++) {
      //console.log(data[i]);
      teamnames.add(data[i]['tm']);
      teamStats.add(data[i]);
    }
    console.log(teamnames);
    teamnames = [...teamnames]
    console.log(teamnames)
    teamStats = [...teamStats];
    console.log(teamStats);
    teamnames.forEach(function (team) {
      dropdown.append("option").text(team).property("value")
      console.log(team)
    })
    getdata(teamnames[0]);
  })
}
init();

