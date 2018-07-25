google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// creating data
	const data = google.visualization.arrayToDataTable([
		['Year', 'Birth', 'Deaths', 'Years', 'Marrages'],
		['2013', 58719, 29568, '2013', 19237],
		['2014', 57243, 31062, '2014', 20125],
		['2015', 61038, 31608, '2015', 19947],
		['2016', 59430, 31179, '2016', 20235]
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
			title: 'Births'
		},
		vAxis: {
			title: 'Deaths'
		}
	};

	// setting chart to a bar chart
	const chart = new google.visualization.BubbleChart(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);
}
