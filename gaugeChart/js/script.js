google.charts.load('current', { packages: ['gauge'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// creating data
	const data = google.visualization.arrayToDataTable([
		['Label', 'Value'],
		['James', 0],
		['Stephanie', 0],
		['Peter', 0],
		['Timothy', 0],
		['Jane', 0]
	]);

	// styling chart
	const options = {
		width: 900,
		height: 120,
		redFrom: 85,
		redTo: 100,
		yellowFrom: 65,
		yellowTo: 85,
		minorTicks: 5
	};

	// setting chart to a bar chart
	const chart = new google.visualization.Gauge(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);

	// animates the gauge
	setInterval(function() {
		data.setValue(0, 1, 30 + Math.round(60 * Math.random()));
		chart.draw(data, options);
	}, 1300);
	setInterval(function() {
		data.setValue(1, 1, 40 + Math.round(50 * Math.random()));
		chart.draw(data, options);
	}, 1200);
	setInterval(function() {
		data.setValue(2, 1, 60 + Math.round(30 * Math.random()));
		chart.draw(data, options);
	}, 1400);
	setInterval(function() {
		data.setValue(3, 1, 60 + Math.round(30 * Math.random()));
		chart.draw(data, options);
	}, 1380);
	setInterval(function() {
		data.setValue(4, 1, 50 + Math.round(40 * Math.random()));
		chart.draw(data, options);
	}, 1260);
}
