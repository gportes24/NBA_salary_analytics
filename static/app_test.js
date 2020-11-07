// Create function for Data plotting (Bar, gauge, bubble)

var basketball = "/hoops";


d3.json(basketball, function (data) {
    console.log(data.result[2].Player)
});

d3.json(basketball, function (nbaData) {
    console.log(nbaData.result[i].tm);
    // var trying = Object.values(nbaData);
    // console.log(trying);

    var grouped = Object.fromEntries(Object.entries(nbaData).filter(([k, v]) => v = "tm"));
    // console.log(grouped);


    //this creates a list of unique teams
    let teamnames = new Set;
    let teamStats = new Set;
    for (var i = 0; i < nbaData.result.length - 1; i++) {
        console.log(nbaData.result[i]);
        teamnames.add(nbaData.result[i]['tm']);
        teamStats.add(nbaData.result[i]);
    }
    console.log(teamnames);
    teamnames = [...teamnames]
    console.log(teamnames)
    teamStats = [...teamStats];
    console.log(teamStats);
    let tmlist = Array.from(teamnames);
    console.log(tmlist);




    var filtered = nbaData.result[i].filter(a => a.tm == tm);
    console.log(filtered);

    var salary_test = filtered.filter(s => s.yr2019_20.toString() == s.yr2019_20);
    console.log(salary_test);
    var player_list = salary_test.map(data => data.Player);
    console.log(player_list);
    var points = salary_test.map(data => data.pts);
    console.log(points);

    difTeam = nbaData.result[i].map(data => data.tm)[1];
    console.log(difTeam)

    var per = salary_test.map(data => data.PER);
    console.log(per);

    var salary = salary_test.map(data => data.yr2019_20);
    // var salary = salary.toString();
    console.log(salary);

    var salary1 = [... new Set(salary)];
    console.log(salary1);


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
        xaxis: {
            type: 'category-unique'
        },
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

    var data2 = [{
        values: salary,
        labels: player_list,
        type: "pie"
    }];

    var layout = {
        height: 400,
        width: 500
    };

    Plotly.newPlot('gauge', data2, layout);


    //   let trace2 = [
    //   {
    //     domain: { x: [0, 1], y: [0,1] }, 
    //     value: per,
    //     title: { text: "PER"},
    //     type: "indicator",
    //     mode: ""
    //     }
    //   ];
    //   var layout = { width: 600, height: 500, margin: { t: 0, b: 0, } 
    // };
    //   Plotly.newPlot("guage", data, layout);






});
  
  
function optionChanged(tm) {
    getdata(tm);
}
function init() {
    let dropdown = d3.select("#selDataset");
    var basketball_two = "/hoops";
    d3.json(basketball_two).then((data) => {
        console.log(data)
        let teamnames = new Set;
        let teamStats = new Set;
        for (var i = 0; i < data.result.length - 1; i++) {
            //console.log(data[i]);
            teamnames.add(data.result[i]['tm']);
            teamStats.add(data.result[i]);
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
};
