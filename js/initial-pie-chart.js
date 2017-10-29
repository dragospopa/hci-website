Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      data: [4,3],
      backgroundColor: ['#28a745', '#ffc107' ],
    }],
  },
});


var ctx = document.getElementById("myPieChart2");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      data: [6, 1],
      backgroundColor: ['#007bff', '#28a745'],
    }],
  },
});


var ctx = document.getElementById("myPieChart3");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Yes", "No"],
    datasets: [{
      data: [2, 5],
      backgroundColor: ['#007bff', '#ffc107'],
    }],
  },
});