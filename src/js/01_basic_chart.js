// Confirmed cases per day in the week of 20th April to 26th of April in Spain

drawBasicChart();

function drawBasicChart() {
  // Retrieve the canvas
  let ctx = document.getElementById('basicChart').getContext('2d');

  // Draw the chart
  let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          data: [3968, 4211, 4635, 6740, 3995, 2870, 2793]
        }
      ]
    }
  });
}
