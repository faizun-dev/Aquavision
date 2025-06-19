// 1) Random data generators for demonstration
function getRandomTemperature() {
  return (Math.random() * 2 + 15).toFixed(2);
}

function getRandomSalinity() {
  return (Math.random() + 32).toFixed(2);
}

function getRandomPH() {
  return (Math.random() * 2.5 + 6.5).toFixed(2);
}

function getRandomOxygen() {
  return (Math.random() * 5 + 5).toFixed(2);
}

function getRandomTurbidity() {
  return (Math.random() * 10).toFixed(2);
}

// 2) Define data/config for each chart
// -------------------------------------------------
// Temperature Chart
const temperatureData = {
  labels: [],
  datasets: [
    {
      label: 'Temperature (°C)',
      data: [],
      borderColor: 'red',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      fill: true,
      tension: 0.2
    }
  ]
};

const temperatureChart = new Chart(
  document.getElementById('temperatureChart').getContext('2d'),
  {
    type: 'line',
    data: temperatureData,
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Hour' } },
        y: {
          title: { display: true, text: 'Temperature (°C)' },
          min: 14,
          max: 18
        }
      }
    }
  }
);

// -------------------------------------------------
// Salinity Chart
const salinityData = {
  labels: [],
  datasets: [
    {
      label: 'Salinity (PSU)',
      data: [],
      borderColor: 'blue',
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
      fill: true,
      tension: 0.2
    }
  ]
};

const salinityChart = new Chart(
  document.getElementById('salinityChart').getContext('2d'),
  {
    type: 'line',
    data: salinityData,
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Hour' } },
        y: {
          title: { display: true, text: 'Salinity (PSU)' },
          min: 32,
          max: 33
        }
      }
    }
  }
);

// -------------------------------------------------
// pH Chart
const phData = {
  labels: [],
  datasets: [
    {
      label: 'pH Level',
      data: [],
      borderColor: 'green',
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
      fill: true,
      tension: 0.2
    }
  ]
};

const phChart = new Chart(document.getElementById('phChart').getContext('2d'), {
  type: 'line',
  data: phData,
  options: {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Hour' } },
      y: {
        title: { display: true, text: 'pH' },
        min: 6,
        max: 9
      }
    }
  }
});

// -------------------------------------------------
// Oxygen Chart
const oxygenData = {
  labels: [],
  datasets: [
    {
      label: 'Dissolved Oxygen (mg/L)',
      data: [],
      borderColor: 'purple',
      backgroundColor: 'rgba(128, 0, 128, 0.2)',
      fill: true,
      tension: 0.2
    }
  ]
};

const oxygenChart = new Chart(
  document.getElementById('oxygenChart').getContext('2d'),
  {
    type: 'line',
    data: oxygenData,
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Hour' } },
        y: {
          title: { display: true, text: 'Oxygen (mg/L)' },
          min: 5,
          max: 10
        }
      }
    }
  }
);

// -------------------------------------------------
// Turbidity Chart
const turbidityData = {
  labels: [],
  datasets: [
    {
      label: 'Turbidity (NTU)',
      data: [],
      borderColor: 'orange',
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
      fill: true,
      tension: 0.2
    }
  ]
};

const turbidityChart = new Chart(
  document.getElementById('turbidityChart').getContext('2d'),
  {
    type: 'line',
    data: turbidityData,
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: 'Hour' } },
        y: {
          title: { display: true, text: 'Turbidity (NTU)' },
          min: 0,
          max: 10
        }
      }
    }
  }
);

// 3) Initialize data for 10 hours
function initializeData() {
  const now = new Date();
  for (let i = 9; i >= 0; i--) {
    const time = new Date(now - i * 3600000);
    const hourLabel = time.getHours() + ":00";

    temperatureData.labels.push(hourLabel);
    temperatureData.datasets[0].data.push(getRandomTemperature());

    salinityData.labels.push(hourLabel);
    salinityData.datasets[0].data.push(getRandomSalinity());

    phData.labels.push(hourLabel);
    phData.datasets[0].data.push(getRandomPH());

    oxygenData.labels.push(hourLabel);
    oxygenData.datasets[0].data.push(getRandomOxygen());

    turbidityData.labels.push(hourLabel);
    turbidityData.datasets[0].data.push(getRandomTurbidity());
  }
}

// 4) Single function to update all charts at once
function updateAllCharts() {
  const now = new Date();
  const hourLabel = now.getHours() + ":00";

  // 1. Temperature
  temperatureData.labels.push(hourLabel);
  temperatureData.datasets[0].data.push(getRandomTemperature());
  if (temperatureData.labels.length > 10) {
    temperatureData.labels.shift();
    temperatureData.datasets[0].data.shift();
  }
  temperatureChart.update();

  // 2. Salinity
  salinityData.labels.push(hourLabel);
  salinityData.datasets[0].data.push(getRandomSalinity());
  if (salinityData.labels.length > 10) {
    salinityData.labels.shift();
    salinityData.datasets[0].data.shift();
  }
  salinityChart.update();

  // 3. pH
  phData.labels.push(hourLabel);
  phData.datasets[0].data.push(getRandomPH());
  if (phData.labels.length > 10) {
    phData.labels.shift();
    phData.datasets[0].data.shift();
  }
  phChart.update();

  // 4. Oxygen
  oxygenData.labels.push(hourLabel);
  oxygenData.datasets[0].data.push(getRandomOxygen());
  if (oxygenData.labels.length > 10) {
    oxygenData.labels.shift();
    oxygenData.datasets[0].data.shift();
  }
  oxygenChart.update();

  // 5. Turbidity
  turbidityData.labels.push(hourLabel);
  turbidityData.datasets[0].data.push(getRandomTurbidity());
  if (turbidityData.labels.length > 10) {
    turbidityData.labels.shift();
    turbidityData.datasets[0].data.shift();
  }
  turbidityChart.update();
}

// 5) Initialize data and start updating charts
initializeData();
updateAllCharts();
setInterval(updateAllCharts, 3600000); // Update every hour




document.addEventListener('DOMContentLoaded', function() {
    // Chart configuration
    const chartConfig = {
        type: 'line',
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'bottom',
                    labels: {
                        color: '#fff',
                        boxWidth: 12
                    }
                },
                title: {
                    display: true,
                    color: '#fff',
                    font: {
                        size: 14
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(255, 255, 255, 0.1)'
                    },
                    ticks: {
                        color: '#fff'
                    }
                }
            }
        }
    };
    
                

  
// Populate fish data table
    const fishTable = document.querySelector('#fishData tbody');
    const currentDate = new Date();
    
    for(let i = 0; i < 10; i++) {
        const time = new Date(currentDate - i * 60000);
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${time.toLocaleTimeString()}</td>
            <td>15.${Math.floor(Math.random() * 100)}</td>
			<td>12.${Math.floor(Math.random() * 100)}</td>
        `;
        fishTable.appendChild(row);
    }   

/*
    // Setup deep video visualization
    const deepCanvas = document.getElementById('deepVideoCanvas');
    const ctx = deepCanvas.getContext('2d');
    
    function setupDeepVideo() {
        const width = deepCanvas.offsetWidth;
        const height = deepCanvas.offsetHeight;
        deepCanvas.width = width;
        deepCanvas.height = height;
        
        // Create gradient for deep visualization
        const gradient = ctx.createLinearGradient(0, 0, width, height);
        gradient.addColorStop(0, 'rgba(0, 0, 255, 0.1)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0.3)');
        
        // Fill background
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Add some random "detection" boxes
        ctx.strokeStyle = 'rgba(0, 247, 255, 0.8)';
        ctx.lineWidth = 2;
        
        for(let i = 0; i < 2; i++) {
            const x = Math.random() * (width - 100);
            const y = Math.random() * (height - 50);
            ctx.strokeRect(x, y, 100, 50);
        }
    }*/
    
    // Setup statistics chart
    const statisticsChart = new Chart(
        document.getElementById('statisticsChart'),
        {
            type: 'bar',
            data: {
                labels: ['17:51:36', '17:51:41', '17:51:44', '17:51:45', '17:51:46', '17:51:47'],
                datasets: [{
					label: 'Water Flow Speed (m/s)',
                    data: [20.00, 15.01, 15.00, 15.01, 15.00, 15.01],
                    backgroundColor: 'rgba(0, 247, 255, 0.5)',
                    borderColor: 'rgba(0, 247, 255, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff'
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.1)'
                        },
                        ticks: {
                            color: '#fff',
                            maxRotation: 45,
                            minRotation: 45
                        }
                    }
                }
            }
        }
    );
    
    // Initial setup
    setupDeepVideo();
    
    // Handle window resize
    window.addEventListener('resize', setupDeepVideo);
}); 