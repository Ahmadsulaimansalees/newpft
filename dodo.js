// Assuming you have a canvas element with id "myChart"
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  // Your chart configuration here
  type: "line",
  data: {
    labels: ["2020", "2021", "2022", "2023", "2024"],
    datasets: [
      {
        label: "Income",
        data: [12000, 15000, 18000, 21000, 24000],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        pointRadius: 0,
        lineTension: 0.4,
      },
      {
        label: "Expense",
        data: [8000, 10000, 12000, 14000, 16000],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        pointRadius: 0,
        lineTension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
    },
    backgroundColor: "grey",
  },
});
