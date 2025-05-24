document.addEventListener('DOMContentLoaded', function() {
  const ctxBar = document.getElementById('barChart').getContext('2d');
  const ctxPie = document.getElementById('pieChart').getContext('2d');
  const ctxLine = document.getElementById('lineChart').getContext('2d');
  const ctxRadar = document.getElementById('radarChart').getContext('2d');
  const ctxPolar = document.getElementById('polarAreaChart').getContext('2d');
  const ctxBubble = document.getElementById('bubbleChart').getContext('2d');

  const labels = chartData.map(item => item.label);
  const counts = chartData.map(item => item.count);

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
    }
  };

  new Chart(ctxBar, {
    type: 'bar',
    data: { labels: labels, datasets: [{ label: 'Issues', data: counts, backgroundColor: 'rgba(54, 162, 235, 0.5)' }] },
    options: options
  });

  new Chart(ctxPie, {
    type: 'pie',
    data: { labels: labels, datasets: [{ label: 'Issues', data: counts, backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'] }] },
    options: options
  });

  new Chart(ctxLine, {
    type: 'line',
    data: { labels: labels, datasets: [{ label: 'Issues', data: counts, fill: false, borderColor: 'rgba(75,192,192,1)' }] },
    options: options
  });


  // Data for radar and polar area can use same labels and counts
  const radarData = {
    labels: chartData.map(item => item.label),
    datasets: [{
      label: 'Issues Radar',
      data: chartData.map(item => item.count),
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
    }]
  };

  const polarData = {
    labels: chartData.map(item => item.label),
    datasets: [{
      label: 'Issues Polar Area',
      data: chartData.map(item => item.count),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
    }]
  };

  // Bubble data requires x, y, and r (radius) values, so let's create sample bubble data
  // Here we create bubbles with x=label index, y=count, and radius proportional to count
  const bubbleData = {
    datasets: chartData.map((item, index) => ({
      label: item.label,
      data: [{ x: index + 1, y: item.count, r: Math.sqrt(item.count) * 5 }],
      backgroundColor: 'rgba(54, 162, 235, 0.5)'
    }))
  };


  new Chart(ctxRadar, {
    type: 'radar',
    data: radarData,
    options: options
  });

  new Chart(ctxPolar, {
    type: 'polarArea',
    data: polarData,
    options: options
  });

  new Chart(ctxBubble, {
    type: 'bubble',
    data: bubbleData,
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Index' }, beginAtZero: true },
        y: { title: { display: true, text: 'Count' }, beginAtZero: true }
      },
      plugins: { legend: { position: 'top' } }
    }
  });
});
