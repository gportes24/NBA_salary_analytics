// Create function for Data plotting (Bar, gauge, bubble)
function getdata(tm) {
  d3.json("Resources/basketball_table.json").then(function (nbaData) {
    console.log(nbaData);
    var trying = Object.values(nbaData);
    console.log(trying);

    var grouped = Object.fromEntries(Object.entries(nbaData).filter(([k,v]) => v="tm"))[0];
    console.log(grouped);
    
    //This creates a unique list of Team names//
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

    
    //Filter
    let sample_filter = nbaData.filter(t => t.tm.toString() === t.tm)[0];
    console.log(sample_filter)

    var filtered = nbaData.filter(a => a.tm == teamnames[0]);
    console.log(filtered);

    var salary_test = filtered.filter(s => s.Player == s.Player);
    console.log(salary_test);
    
    var player_list = salary_test.map(data => data.Player);
    console.log(player_list);
    
    var points = salary_test.map(data => data.pts);
    console.log(points);

    difTeam = nbaData.map(data=> data.tm)[1];
    console.log(difTeam)

    var per = salary_test.map(data => data.PER);
    console.log(per);

    var salary = salary_test.map(data => data.yr2019_20);
    console.log(salary);




    //Bar Graph
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



    //Guage Graph
    let trace2 = [
      {
          domain: { x: [0, 1], y: [0,1] }, 
          value: per,
          title: { text: "PER"},
          type: "indicator",
          mode: "guage+number"
      }
    ];
    var layout = { width: 600, height: 500, margin: { t: 0, b: 0, } 
  };
    Plotly.newPlot("guage", data, layout);


    

    //Bubble Graph
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
    };
    Plotly.newPlot("bubble", data1, layout)
  });

}

//Functions 
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

