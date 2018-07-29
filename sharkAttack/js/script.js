// get resorces
google.charts.load('current', { packages: ['corechart', 'controls'] });
google.charts.setOnLoadCallback(drawDashboard);

// run other functions
function drawDashboard() {
	var dashboard = new google.visualization.Dashboard(
		document.getElementById('dashboardDiv')
	);

	// get data
	var data = google.visualization.arrayToDataTable(eventData);

	// Create a range slider, passing some options
	var donutRangeSlider = new google.visualization.ControlWrapper({
		controlType: 'NumberRangeFilter',
		containerId: 'filter_div',
		options: {
			filterColumnLabel: 'Swimming'
		}
	});

	// Create a bar chart, passing some options
	var barChart = new google.visualization.ChartWrapper({
		chartType: 'ColumnChart',
		containerId: 'provokedChart',
		options: {
			width: 700,
			height: 300,
			legend: 'right'
		},
		view: { rows: [0, 1, 2, 3] }
	});

	// Create a bar chart, passing some options
	var columnChart = new google.visualization.ChartWrapper({
		chartType: 'ColumnChart',
		containerId: 'speciesChart',
		options: {
			width: 1000,
			height: 300,
			legend: 'right'
		},
		view: { rows: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14] }
	});

	dashboard.bind(donutRangeSlider, barChart);

	dashboard.bind(donutRangeSlider, columnChart);

	dashboard.draw(data);
}

// draw country chart
function drawCountry() {
	// creating data
	const data = google.visualization.arrayToDataTable(countryData);

	// styling chart
	const options = {
		title: 'Type of Attacks Per Country',
		hAxis: {
			title: 'Country'
		},
		vAxis: {
			title: 'Number'
		},
		isStacked: true
	};

	// setting chart to a bar chart
	const chart = new google.visualization.ColumnChart(
		document.getElementById('countryChart')
	);

	// creating chart
	chart.draw(data, options);
}
