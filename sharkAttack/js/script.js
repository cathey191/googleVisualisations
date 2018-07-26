google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// creating data
	const data = google.visualization.arrayToDataTable(sharkData);

	var female = 0;
	var male = 1;

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
		document.getElementById('countryContainer')
	);

	// creating chart
	chart.draw(data, options);
}
