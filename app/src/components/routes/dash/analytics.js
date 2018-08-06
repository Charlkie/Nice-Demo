let colors = ['rgba(75,192,192,0.4)', 'rgba(192, 75, 176, 0.4)', 'rgba(75, 192, 95, 0.4)']

const settings = (i, chartData, label) => {
	return {
		backgroundColor: colors[i],
		borderCapStyle: 'butt',
		borderColor: colors[i],
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		data: chartData,
		fill: false,
		label: label,
		lineTension: 0.2,
		pointBackgroundColor: '#fff',
		pointBorderColor: colors[i],
		pointBorderWidth: 1,
		pointHitRadius: 10,
		pointHoverBackgroundColor: colors[i],
		pointHoverBorderColor: colors[i],
		pointHoverBorderWidth: 2,
		pointHoverRadius: 5,
		pointRadius: 1,
	}

}

let apis = ['api1', 'api2', 'api3']

const data = {
	datasets:
		apis.map((label, index) =>
		settings(index, Array.from(Array(12), (i, x) => Math.floor(Math.random()*9)+1), label)
	),
	labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
}

export default data