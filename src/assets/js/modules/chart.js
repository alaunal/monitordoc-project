import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip,
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
);

const chartInit = (params) => {
  let dataVar = params.dataset.var;
  let dataBackground = params.dataset.background;
  let dataLabel = params.dataset.label;
  let dataCore = dataChart[dataVar];

  if (typeof dataCore !== 'undefined') {
    new Chart(params, {
      type: 'line',
      data: {
        labels: dataCore.label,
        datasets: [
          {
            label: dataLabel,
            data: dataCore.value,
            backgroundColor: [dataBackground],
            borderColor: [dataBackground],
            borderWidth: 1,
            fill: true,
            tension: 0.25,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        elements: {
          point: {
            radius: 0,
          },
        },
      },
    });
  }

  /*

  let data = {};

  switch (getId) {
    case 'chart-1':
      data = {
        label: 'Chart Area',
        data: [12, 19, 6, 5, 8, 3, 19, 6, 5, 3, 14, 6],
        backgroundColor: ['rgba(255, 99, 132, 1)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
        fill: true,
        tension: 0.25,
      };
      break;
    case 'chart-2':
      data = {
        label: 'Chart Area',
        data: [12, 10, 6, 5, 16, 7, 10, 6, 5, 13, 7, 10],
        backgroundColor: ['rgba(54, 162, 235, 1)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        fill: true,
        tension: 0.4,
      };
      break;

    case 'chart-3':
      data = {
        label: 'Chart Area',
        data: [12, 3, 6, 17, 8, 12, 3, 6, 15, 12, 3, 6],
        backgroundColor: ['rgba(153, 102, 255, 1)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
        fill: true,
        tension: 0.25,
      };
      break;
  }

  let myChart = new Chart(params, {
    type: 'line',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [data],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
      elements: {
        point: {
          radius: 0,
        },
      },
    },
  });

  */
};

export default chartInit;
