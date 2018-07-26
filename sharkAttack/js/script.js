// get resorces
google.charts.load('current', { packages: ['corechart', 'controls'] });
google.charts.setOnLoadCallback(drawDashboard);

// run other functions
function drawDashboard() {
	var dashboard = new google.visualization.Dashboard(
		document.getElementById('dashboardDiv')
	);

	drawCountry();
	drawAge();
	drawSpecies();
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

// draw country chart
function drawAge() {
	// creating data
	const data = google.visualization.arrayToDataTable(ageData);

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
		document.getElementById('ageChart')
	);

	// creating chart
	chart.draw(data, options);
}

// draw country chart
function drawSpecies() {
	// creating data
	const data = google.visualization.arrayToDataTable(speciesData);

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
		document.getElementById('speciesChart')
	);

	// creating chart
	chart.draw(data, options);
}
