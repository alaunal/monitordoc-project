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
  let getId = params.getAttribute('id');

  let data = {};

  switch (getId) {
    case 'chart-1':
      data = {
        label: 'Chart Area',
        data: [12, 19, 6, 5, 8, 3],
        backgroundColor: ['rgba(255, 99, 132, 1)'],
        borderColor: ['rgba(255, 99, 132, 1)'],
        borderWidth: 1,
        fill: true,
      };
      break;
    case 'chart-2':
      data = {
        label: 'Chart Area',
        data: [12, 10, 6, 5, 16, 7],
        backgroundColor: ['rgba(54, 162, 235, 1)'],
        borderColor: ['rgba(54, 162, 235, 1)'],
        borderWidth: 1,
        fill: true,
      };
      break;

    case 'chart-3':
      data = {
        label: 'Chart Area',
        data: [12, 3, 6, 17, 8, 12],
        backgroundColor: ['rgba(153, 102, 255, 1)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
        fill: true,
      };
      break;
  }

  let myChart = new Chart(params, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [data],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
};

export default chartInit;
