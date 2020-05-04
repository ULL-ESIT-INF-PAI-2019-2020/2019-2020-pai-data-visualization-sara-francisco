
// Muertos 21 a 30 Abril, España
const PresentationDataSpain = [21.282, 21.717, 22.157, 22.524, 22.902, 23.190, 23.521, 23.822, 24.275, 24.543];
// Igual pero en Italia
const PresentationDataItaly = [24.648, 25.085, 25.549, 25.969, 26.384, 26.644, 26.977, 27.359, 27.682, 27.967];
// Igual pero en Brasil
const PresentationDataBrazil = [2.741, 2.906, 3.331, 3.704, 4.057, 4.286, 4.603, 5.083, 5.513, 6.006];

// Estos son los totales de muertes
const totalDeathSpain = 25264;
const totalDeathItaly = 28884;
const totalDeathBrazil = 7025;

// Countries names
const COUNTRIES = ["España", "Italia", "Brasil"];

// Array y función para generar los días
let days = [];

function generateDays() {
    for(let i = 0; i < 9; ++i) {
        const number = 21 + i;
        days.push(number + ' Abril');
    }
}

generateDays();

const COLORS = [
    "Brown",
    "CornflowerBlue",
    "Chartreuse",
    "Coral",
    "Crimson",
    "DarkMagenta",
    "DarkOliveGreen",
    "DeepSkyBlue",
    "Khaki",
    "Orchid"
];

function getExample(typeChart, titleChart) {
    return {
    type: typeChart,
    data: {
        labels: days,
        datasets: [{
            label: "Muertes por Coronavirus en España",
            data: PresentationDataSpain.slice(0),
            fill: false,
            backgroundColor: "brown",
            borderColor: "brown"
        },
        {
            label: "Muertes por Coronavirus en Italia",
            data: PresentationDataItaly.slice(0),
            fill: false,
            backgroundColor: "CornflowerBlue",
            borderColor: "CornflowerBlue"
        },
        {
            label: "Muertes por Coronavirus en Brasil",
            data: PresentationDataBrazil.slice(0),
            fill: false,
            backgroundColor: "Chartreuse",
            borderColor: "Chartreuse"
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },

            }],
            xAxes: [{
                ticks: {
                    beginAtZero: true,
                },
                }
            ]
        },
        title: {
            display: true,
            text: titleChart,
            fontSize: 24
        }
    }
    };
}

function changeRoundChart(chartChange) {
    chartChange.data.datasets[0].backgroundColor = COLORS;
    chartChange.data.datasets[0].borderColor = COLORS;
    chartChange.data.datasets.pop();
    chartChange.data.datasets.pop();
    chartChange.data.datasets[0].data = [totalDeathSpain, totalDeathItaly, totalDeathBrazil];
    chartChange.data.labels = COUNTRIES;
    return chartChange;
}

const MAX_POINTS = 100;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

function generateScatterChartValues() {
    let points = [];
    for(let i = 0; i < MAX_POINTS; ++i) {
        let point = {};
        point.x = getRandomInt(0, MAX_POINTS);
        point.y = getRandomInt(0, MAX_POINTS);
        points.push(point);
    }
    return points;
}

function generateScatterData(scatterChart) {
    scatterChart.data.datasets[0].data = generateScatterChartValues();
    scatterChart.data.datasets[0].label = "Variable 1";
    scatterChart.data.datasets[1].label = "Variable 2";
    scatterChart.data.datasets[2].label = "Variable 3";
    scatterChart.data.datasets[1].data = generateScatterChartValues();
    scatterChart.data.datasets[2].data = generateScatterChartValues();
    return scatterChart;
}

const MAX_BUBBLE = 20;

function add3dimension(bubbleChart) {
    for(let i = 0; i < bubbleChart.data.datasets.length; ++i) {
        for(let j = 0; j < bubbleChart.data.datasets[i].data.length; ++j) {
            bubbleChart.data.datasets[i].data[j].r = getRandomInt(0, MAX_BUBBLE);
        }
    }
    return bubbleChart;
}

function showScreen() {
    console.log("LINE");
    console.log(getExample('line'));
    console.log("PIE");
    console.log(pieChart);
    console.log("Scatter");
    console.log(scatterChart);
    console.log("Bubble");
    console.log(bubbleChart);
}