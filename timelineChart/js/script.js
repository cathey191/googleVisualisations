google.charts.load('current', { packages: ['timeline'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// creating data
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
		}
	};

	// setting chart to a bar chart
	const chart = new google.visualization.Timeline(
		document.getElementById('chartContainer')
	);

	// creating chart
	chart.draw(data, options);
}
