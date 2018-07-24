google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// creating data
	const data = google.visualization.arrayToDataTable([
		['Year', 'Birth', 'Deaths', 'Marrages'],
		['2013', 58719, 29568, 19237],
		['2014', 57243, 31062, 20125],
		['2015', 61038, 31608, 19947],
		['2016', 59430, 31179, 20235]
	]);

	// styling chart
	const options = {
		animation: {
			startup: true,
			easing: 'linear',
			duration: 500
		},
		title: 'Births, Deaths & Marrages from NZ',
		subtittle: 'From 2013 till 2016',
		hAxis: {
			title: 'Number'
		},
		vAxis: {
			title: 'Year'
		}
	};

	// setting chart to a bar chart
	const chart = new google.visualization.BarChart(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);
}
