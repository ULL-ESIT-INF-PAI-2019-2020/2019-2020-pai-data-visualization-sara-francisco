// Confirmed cases per day in the week of 20th April to 26th of April in Spain
// https://api.covid19tracking.narrativa.com/api/country/spain?date_from=2020-04-20&date_to=2020-04-26
$.get({
  url: 'https://api.covid19tracking.narrativa.com/api/country/spain?date_from=2020-04-20&date_to=2020-04-26',
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}).done(response => {
    let labels = Object.keys(response.dates);
    let data = [];

    for (label of labels) {
      data.push(response.dates[label].countries['Spain'].today_new_confirmed)
    }

    removeElement('loader');
    drawChart(labels, data);
  });

function drawChart(labels, data) {
  // Retrieve the canvas
  let ctx = document.getElementById('dataChart').getContext('2d');

  // Draw the chart
  let chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'New confirmed cases',
        backgroundColor: 'rgba(197, 93, 161, .4)',
        data: data
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

function removeElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    element.parentNode.removeChild(element);
  }
}