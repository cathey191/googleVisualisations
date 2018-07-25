// our data
const studentData = {
	code: [
		{
			langauge: 'CSS',
			count: 5
		},
		{
			langauge: 'Javascript',
			count: 5
		},
		{
			langauge: 'PHP',
			count: 1
		}
	],
	countries: [
		{
			country: 'Fiji',
			count: 3
		},
		{
			country: 'Dubai',
			count: 2
		},
		{
			country: 'Tanzania',
			count: 1
		},
		{
			country: 'Australia',
			count: 6
		},
		{
			country: 'United States',
			count: 3
		},
		{
			country: 'Japan',
			count: 2
		},
		{
			country: 'United Kingdom',
			count: 2
		},
		{
			country: 'France',
			count: 2
		},
		{
			country: 'Italy',
			count: 2
		},
		{
			country: 'Netherlands',
			count: 2
		},
		{
			country: 'Czech Republic',
			count: 1
		},
		{
			country: 'China',
			count: 1
		},
		{
			country: 'Malaysia',
			count: 1
		},
		{
			country: 'Germany',
			count: 2
		},
		{
			country: 'Poland',
			count: 1
		},
		{
			country: 'Switzerland',
			count: 2
		},
		{
			country: 'Hungary',
			count: 1
		},
		{
			country: 'Austria',
			count: 2
		},
		{
			country: 'Slovakia',
			count: 1
		},
		{
			country: 'Hong Kong',
			count: 2
		},
		{
			country: 'Thailand',
			count: 2
		},
		{
			country: 'Laos',
			count: 1
		},
		{
			country: 'Vietnam',
			count: 1
		},
		{
			country: 'Portugal',
			count: 1
		},
		{
			country: 'Spain',
			count: 1
		},
		{
			country: 'Croatia',
			count: 1
		},
		{
			country: 'Whales',
			count: 1
		},
		{
			country: 'Belgium',
			count: 1
		},
		{
			country: 'India',
			count: 1
		},
		{
			country: 'Bali',
			count: 1
		},
		{
			country: 'South Africa',
			count: 1
		},
		{
			country: 'Zimbabwe',
			count: 1
		},
		{
			country: 'Samoa',
			count: 1
		}
	]
};

console.log(studentData.code['0']);

google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

// create chart
function drawChart() {
	const data = new google.visualization.DataTable();
	// add columns
	data.addColumn('string', 'Country');
	data.addColumn('number', 'Count');

	// create rows
	for (var i = 0; i < studentData.countries.length; i++) {
		data.addRow([
			studentData.countries[i].langauge,
			studentData.countries[i].count
		]);
	}

	// create chart
	const chart = new google.visualization.PieChart(
		document.getElementById('chartContainer')
	);
	chart.draw(data);
}
