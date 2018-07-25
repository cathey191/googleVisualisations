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
		['Student', 'Height', 'Highest Education', 'To Be', 'House Hold Number'],
		['001', 1.68, 6, 'Graphic Designer', 5],
		['002', 1.55, 6, 'Developer', 5],
		['003', 1.77, 5, 'Front End Developer', 2],
		['004', 1.83, 5, 'Web Programmer', 4],
		['005', 1.71, 6, 'Front End Developer', 4],
		['006', 1.8, 7, 'Freelance UX/UI Designer', 2],
		['007', 1.4, 5, 'Front End Developer', 3],
		['008', 1.54, 5, 'Front End Developer', 4],
		['009', 1.58, 5, 'Make Things Pretty', 4],
		['010', 1.66, 5, 'Front End Developer', 5],
		['011', 1.68, 3, 'Website Developer', 5],
		['012', 1.55, 3, 'Web Developer', 5]
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
			title: 'Height'
		},
		vAxis: {
			title: 'Highest Education'
		}
	};

	// setting chart to a bar chart
	const chart = new google.visualization.BubbleChart(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);
}
