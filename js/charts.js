new Chart(document.getElementById('trendChart'), {
    type: 'line',
    data: {
        labels: transactions.map(t => t.month),
        datasets: [{
            label: 'Income',
            data: transactions.map(t => t.income),
            borderColor: '#34d399',
            tension: 0.4
        }]
    }
});

new Chart(document.getElementById('donutChart'), {
    type: 'doughnut',
    data: {
        labels: ['Housing', 'Food', 'Travel', 'Shopping'],
        datasets: [{
            data: [40, 20, 15, 25]
        }]
    }
});