// our data
const studentData = [
	{
		food: 'cake',
		count: 6
	},
	{
		food: 'pie',
		count: 5
	}
];

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// create chart
function drawChart() {
	const data = new google.visualization.DataTable();
	// add columns
	data.addColumn('string', 'Food');
	data.addColumn('number', 'Count');

	// create rows
	for (var i = 0; i < studentData.length; i++) {
		data.addRow([studentData[i].food, studentData[i].count]);
	}

	// style options
	const options = {
		title: 'Cake vs Pie'
	};

	// create chart
	const chart = new google.visualization.PieChart(
		document.getElementById('chartContainer')
	);
	chart.draw(data, options);
}
