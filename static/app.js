// Create function for Data plotting (Bar, gauge, bubble)



d3.json("Resources/basketball_table.json").then(function (nbaData) {
  console.log(nbaData);
  mo= nbaData["tm"];
  console.log(mo);
  let teamnames =new Set;
  let teamStats = new Set;
  for(var i = 0; i < nbaData.length-1; i++) {
    console.log(nbaData[i]);
    teamnames.add(nbaData[i]['tm']) ;
    teamStats.add(nbaData[i]);
  }
  console.log(teamnames);
  teamnames=[...teamnames]
  console.log(teamnames)
  teamStats = [...teamStats];
  console.log(teamStats);
  var salary = nbaData.map(data => data.yr2019_20);
  console.log(salary);

  var salary_10 = salary.slice(0, 10).reverse();
  console.log(salary_10);

  players = nbaData.map(data => data.Player);
  console.log(players);

  labels = players.slice(0,10).reverse();
  console.log(labels);
  
  teams_filter = teamStats.filter(h => h.tm===h.tm)[0];
  console.log(teams_filter);

  let salaries = teams_filter.yr2019_20;
  console.log(salaries);
  // let salary_labels = salaries.map(o=> "Player" + o);
  // console.log(`yr2019_20: ${salaries}`);



  var trace = {
    x: mo,
    y: salary_10,
    type: "bar",
    text: players,
    orientation: "h",

  };
  var data = [trace];

  var layout = {
    title: "NBA TEAMS",
    yaxis: {
      tickmode: "linear",
    },
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 10
    }
  };

  Plotly.newPlot("bar", data, layout);
  
function init() {
  let dropdown = d3.select("#selDataset");
  d3.json("Resources/basketball_table.json").then((data)=>{
    console.log(data);

  })
}

 


  // let unique = nbaData.tm.filter((item, i, ar) => ar.indexOf(item) === i)[0];
  // console.log(unique);

  // dataset = JSON.stringify(nbaData);
  // trying = JSON.parse(dataset);
  // console.log(trying[0]["tm"]);
  // console.log(trying);

  // var samplevalues = nbaData["tm"];
  // console.log(samplevalues);

  // var sample_filter = nbaData[0].filter(s => s.toString() === s.Player)[0];
  // console.log(sample_filter)

  var tmplayers = nbaData.samplevalues;
  console.log(tmplayers);

  var search = Object.values(nbaData.tm);
  console.log(search);

  let teams_default = nbaData[0].filter(s => s.tm.toString() === s.tm)[0];
  console.log(teams_default)

  players = nbaData.map(data => data.Player);
  console.log(players)

  let sample_teams = search.filter(s => s.tm === s.tm)[0];
  console.log(sample_teams);

  var teams = nbaData.map(data => data.tm)[0];
  console.log(teams);


  var salary = nbaData.map(data => data.yr2019_20);
  console.log(salary)

  // var samplevalues = nbaData.map(data => data.tm).slice().reverse();
  // console.log(samplevalues);


  // let unique = samplevalues.filter((item, i, ar) => ar.indexOf(item) === i)[0];
  // console.log(unique);

  // var salary_sample = teams.team_values;
  // console.log(salary_sample);
  // var labels = samples.otu_labels.slice(0, 10);



  var trace = {
    x: mo,
    y: salary_10,
    text: labels,
    type: "bar",
    orientation: "h",

  };
  var data = [trace];

  var layout = {
    title: "NBA TEAMS",
    yaxis: {
      tickmode: "linear",
    },
    margin: {
      l: 100,
      r: 100,
      t: 100,
      b: 10
    },
    text: pla_labels
  };

  Plotly.newPlot("bar", data, layout);




});

// function init() {

//   let dropdown = d3.select("#selDataset");

//   d3.csv("Resources/basketball_table.json").then((data) => {
//     console.log(data);
//     data.columns.forEach(function (teams) {
//       dropdown.append("option").text(teams).property("value")
//       console.log(teams)
//     })

//   })



// }

// init();
// drops(940);
// optionChanged = drops

// function getPlot(id) {
//   // getting data from the json file
//   d3.csv("Resources/csv_files/final_table.csv").then(function (nbaData) {
//     console.log(data);

//     var wfreq = data.player.map(d => d.Player)
//     console.log(`Washing Freq: ${wfreq}`)

//     // filtering sample value
//     var samples = data.samples.filter(s => s.tm.toString() === id)[0];

//     console.log(samples);

//     // Get the top 10 
//     var samplevalues = samples.sample_values.slice(0, 10).reverse();

//     // getting only top 10 otu ids for the plot OTU and reversing it. 
//     var OTU_top = (samples.otu_ids.slice(0, 10)).reverse();

//     // get the otu id's to the desired form for the plot
//     var OTU_id = OTU_top.map(d => "OTU " + d)

//     //   console.log(`OTU IDS: ${OTU_id}`)


//     // get the top 10 labels for the plot
//     var labels = samples.otu_labels.slice(0, 10);

//     var trace = {
//       x: samplevalues,
//       y: OTU_id,
//       text: labels,
//       marker: {
//         color: 'rgb(142,124,195)'
//       },
//       type: "bar",
//       orientation: "h",
//     };

//     // create data variable
//     var data = [trace];

//     // create layout variable to set plots layout
//     var layout = {
//       title: "Top 10 OTU",
//       yaxis: {
//         tickmode: "linear",
//       },
//       margin: {
//         l: 100,
//         r: 100,
//         t: 100,
//         b: 10
//       }
//     };

//     // create the bar plot
//     Plotly.newPlot("bar", data, layout);

//     //console.log(`ID: ${samples.otu_ids}`)

//     // The bubble chart
//     var trace1 = {
//       x: samples.otu_ids,
//       y: samples.sample_values,
//       mode: "markers",
//       marker: {
//         size: samples.sample_values,
//         color: 'ReadableStreamReader'
//       },
//       text: samples.otu_labels

//     };

//     // set the layout for the bubble plot
//     var layout_b = {
//       xaxis: { title: "OTU ID" },
//       height: 600,
//       width: 1000
//     };

//     // creating data variable 
//     var data1 = [trace1];

//     // create the bubble plot
//     Plotly.newPlot("bubble", data1, layout_b);

//     // The guage chart

//     var data_g = [
//       {
//         domain: { x: [0, 1], y: [0, 1] },
//         value: parseFloat(wfreq),
//         title: { text: `Weekly Washing Frequency ` },
//         type: "indicator",

//         mode: "gauge+number",
//         gauge: {
//           axis: { range: [null, 9] },
//           steps: [
//             { range: [0, 2], color: "red" },
//             { range: [2, 4], color: "white" },
//             { range: [4, 6], color: "black" },
//             { range: [6, 8], color: "green" },
//             { range: [8, 9], color: "blue" },
//           ]
//         }

//       }
//     ];
//     var layout_g = {
//       width: 700,
//       height: 600,
//       margin: { t: 20, b: 40, l: 100, r: 100 }
//     };
//     Plotly.newPlot("gauge", data_g, layout_g);
//   });
// }
// // create the function to get the necessary data
// function getInfo(id) {
//   // read the json file to get data
//   d3.json("Resources/team_locs.json").then((data) => {

//     // get the metadata info for the demographic panel
//     var metadata = data.metadata;

//     console.log(metadata)

//     // filter meta data info by id
//     var result = metadata.filter(meta => meta.id.toString() === id)[0];

//     // select demographic panel to put data
//     var demographicInfo = d3.select("#sample-metadata");

//     // empty the demographic info panel each time before getting new id info
//     demographicInfo.html("");

//     // grab the necessary demographic data data for the id and append the info to the panel
//     Object.entries(result).forEach((key) => {
//       demographicInfo.append("h5").text(key[0].toUpperCase() + ": " + key[1] + "\n");
//     });
//   });
// }

// // create the function for the change event
// function optionChanged(id) {
//   getPlot(id);
//   getInfo(id);
// }

// // create the function for the initial data rendering
// function init() {
//   // select dropdown menu 
//   var dropdown = d3.select("#selDataset");

//   // read the data 
//   d3.json("Resources/nba_stats.json").then((data) => {
//     console.log(data)

//     // get the id data to the dropdwown menu
//     data.tm.forEach(function (team) {
//       dropdown.append("option").text(team).property("value");
//     });

//     // call the functions to display the data and the plots to the page
//     getPlot(data.team[0]);
//     getInfo(data.team[0]);
//   });
// }

// init();