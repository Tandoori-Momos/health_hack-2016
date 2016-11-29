$(document).ready(function(){

google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	
	data.addColumn('string', 'Location');
	data.addColumn('number', 'Dump filled in the location (%)');


	data.addRows([
		['20/8/2016', 79],
		['19/8/2016', 61],
		['18/8/2016', 93],
		['17/8/2016', 56],
		['16/8/2016', 88]
	]);

	// Set chart options
	var options = {
		'title':'',
 		series: {
			0: {color: '#ff666b'},
		},
		lineWidth: 7,
		backgroundColor: '#202034',
		hAxis: {
			textStyle: {
				color: "#fff"
			},
		},
		vAxis: {
			textStyle: {
				color: "#fff"
			},
		},
		legend: {
			textStyle: {
				color: "#fff"
			},
		},
		legend: {
			textStyle: {
				color: "#fff"
			},
		},
		
	};

	var chart = new google.visualization.LineChart($('#chart')[0]);
	chart.draw(data, options);


}

});