// Simulated real-time data for water flow, pressure, quality, and consumption
let waterFlow = 104.736;  // In liters per second
let waterPressure = 300842.52;  // In kPa
let waterQuality = "Good";  // Water quality status
let waterConsumption = 500;  // Daily consumption in liters

// Update metrics on the dashboard
function updateMetrics() {
    document.getElementById('water-flow').innerText = `${waterFlow} L/s`;
    document.getElementById('water-pressure').innerText = `${waterPressure} kPa`;
    document.getElementById('water-quality').innerText = "Good";
    document.getElementById('water-consumption').innerText = 500;
}

// Chart.js to display predictive analytics for water demand forecasting
const ctx = document.getElementById('forecastChart').getContext('2d');
const forecastChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Water Demand (Liters)',
            data: [500, 600, 550, 700, 650, 620],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Simulate data updates every 5 seconds
setInterval(() => {
    waterFlow = 104.736;
    waterPressure = 300842.52;
    waterConsumption = 5533.783;
    updateMetrics();
}, 5000);

// Initial load
updateMetrics();
