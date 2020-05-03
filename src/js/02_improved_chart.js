// Confirmed cases per day in the week of 20th April to 26th of April in Spain

drawImprovedChart();

function drawImprovedChart() {
  // Retrieve the canvas
  let ctx = document.getElementById('improvedChart').getContext('2d');

  // Draw the chart
  let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [{
          label: 'New confirmed cases',
          backgroundColor: 'rgba(2, 121, 139, .4)',
          data: [3968, 4211, 4635, 6740, 3995, 2870, 2793]
      }]
    },
    options: {
      title: {
        text: 'New confirmed cases during the week of 20th April-26th April in Spain',
        display: true
      },
      legend: {
        position: 'right'
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}