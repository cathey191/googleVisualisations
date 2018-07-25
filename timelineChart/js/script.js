google.charts.load('current', { packages: ['timeline'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// creating data
	// const data = google.visualization.arrayToDataTable([
	// 	['Year', 'Birth', 'Deaths', 'Years', 'Marrages'],
	// 	['2013', 58719, 29568, '2013', 19237],
	// 	['2014', 57243, 31062, '2014', 20125],
	// 	['2015', 61038, 31608, '2015', 19947],
	// 	['2016', 59430, 31179, '2016', 20235]
	// ]);

	const data = google.visualization.arrayToDataTable([
		['Sections', 'Start', 'End'],
		['Planning', new Date(2018, 7, 26), new Date(2018, 8, 1)],
		['UX & UI', new Date(2018, 8, 1), new Date(2018, 8, 15)],
		['Testing', new Date(2018, 8, 15), new Date(2018, 8, 26)]
	]);

	// styling chart
	const options = {
		animation: {
			startup: true,
			easing: 'linear',
			duration: 500
		},
		title: 'Class Data',
		hAxis: {
			title: 'Height in m'
		},
		vAxis: {
			title: 'Highest Education'
		}
	};

	// setting chart to a bar chart
	const chart = new google.visualization.Timeline(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);
}
