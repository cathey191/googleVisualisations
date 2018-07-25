google.charts.load('current', { packages: ['corechart'] });
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
		['Student', 'Module 1 Mark', 'Attendance %', 'To Be'],
		['001', 87, 85, 'Designer'],
		['002', 66, 69, 'Developer'],
		['003', 64, 75, 'Designer'],
		['004', 70, 60, 'Front End Developer'],
		['005', 68, 80, 'Front End Developer'],
		['006', 81, 80, 'Graphic Designer'],
		['007', 90, 75, 'Web Developer'],
		['008', 77, 60, 'Graphic Designer'],
		['009', 86, 72, 'Web Developer']
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
			title: 'Module 1 Mark'
		},
		vAxis: {
			title: 'Attendance'
		}
	};

	// setting chart to a bar chart
	const chart = new google.visualization.BubbleChart(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);
}
