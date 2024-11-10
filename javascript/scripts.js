// PROFIT CHART
const profitChartOptions = {
  series: [{
    name: 'Profit ($)',
    data: [120000, 220000, 320000, 350000, 420000, 480000]
  }],
  chart: {
    type: 'line',
    background: 'transparent',
    height: '90%',
    width: '100%',
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  stroke: {
    curve: 'smooth',
    width: 4,
    colors: ['#039ad6d0']
  },
  yaxis: {
    labels: {
      style: {
        colors: '#f5f7ff',
      },
      formatter: function (value) {
        return '$' + (value / 1000).toFixed(0) + 'k';
      }
    },
    max: 500000,
    min: 100000,
    tickAmount: 5
  },
  xaxis: {
    categories: [
      'Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'
    ],
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
    x: {
      show: true,
    },
    y: {
      formatter: function (val) {
        return '$' + (val / 1000).toFixed(0) + 'k';
      }
    }
  },
  grid: {
    borderColor: '#55596e',
    strokeDashArray: 4,
    xaxis: {
      lines: {
        show: false
      }
    },
    yaxis: {
      lines: {
        show: true
      }
    }
  },
  markers: {
    size: 0,
  },
};

const profitChart = new ApexCharts(
  document.querySelector('#profit-chart'),
  profitChartOptions
);

profitChart.render();


// Enrolled Students Chart


const enrolledStudentsChartOptions = {
  series: [87], // Example: 5,700 is 87% of the goal (6,500)
  chart: {
    type: 'radialBar',
    height: 150,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '50%', // Adjusts the size of the hollow center of the radial chart
      },
      dataLabels: {
        name: {
          show: false, // Hide the name label (optional)
        },
        value: {
          fontSize: '20px',  // Set the font size for the value
          fontWeight: 'bold', // Make the value bold
          color: '#fff', // Set the text color to white
          show: true, // Show the value
          offsetY: 10, // Adjusts vertical alignment within the radial chart
          position: 'center', // Place the value text in the center
        },
      },
    },
  },
  tooltip: {
    custom: function({ series, seriesIndex, dataPointIndex, w }) {
      return '<div class="arrow_box">' + series[seriesIndex][dataPointIndex] + ' Students</div>';
    }
  }
};

const enrolledStudentsChart = new ApexCharts(
  document.querySelector('#enrolled-students-chart'),
  enrolledStudentsChartOptions
);

enrolledStudentsChart.render();

// ABANDONMENT LINE CHART
// Line Chart for Abandonment Rate (Fixed Value)
// Random Distribution of 359 abandonments across months
// Random Distribution of 359 abandonments across months
const abandonmentData = [40, 60, 50, 40, 39, 90]; // Abandonments per month (can be adjusted)

const lineChartOptions = {
  series: [{
    name: 'Abandoned Users',
    data: abandonmentData,  // This is where the abandonment data for each month is input
  }],
  chart: {
    type: 'line',
    height: '180px',  // Full height of the chart container
    width: '100%',   // Full width of the chart container
    background: 'transparent',
    toolbar: {
      show: false  // Hide the toolbar for a cleaner look
    },
    zoom: {
      enabled: false  // Disable zooming
    }
  },
  stroke: {
    curve: 'smooth',  // Smooth line
    width: 3,         // Line thickness
    colors: ['#039ad6']  // Line color (blue)
  },
  xaxis: {
    categories: ['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'],  // Months with abandonment data
    labels: {
      style: {
        colors: '#f5f7ff',  // X-axis labels in light color
      },
    },
    axisTicks: {
      show: true,  // Show ticks on the x-axis
    },
    axisBorder: {
      color: '#55596e',  // Border color of the X-axis
      show: true,  // Show the border at the bottom of the chart
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: '#f5f7ff',  // Y-axis labels in light color
      },
      formatter: function (value) {
        return value.toFixed(0);  // Remove decimal places for clarity
      }
    },
    min: 0,  // Minimum value for Y-axis
    tickAmount: 5,  // Number of ticks on the Y-axis
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
    x: {
      show: true,  // Show the X value on hover
    },
    y: {
      formatter: function (val) {
        return val + ' users';  // Format tooltip value as the number of users
      }
    }
  },
  grid: {
    borderColor: '#55596e',  // Grid line color
    strokeDashArray: 4,  // Dashes for grid lines
    xaxis: {
      lines: {
        show: true  // Show grid lines for X-axis
      }
    },
    yaxis: {
      lines: {
        show: true  // Show grid lines for Y-axis
      }
    }
  },
  markers: {
    size: 4,  // Set marker size for data points
    colors: ['#039ad6'],  // Marker color
    strokeColors: ['#039ad6'],  // Stroke color for markers
    strokeWidth: 2,  // Stroke width around markers
  },
};

const lineChart = new ApexCharts(
  document.querySelector('#line-chart'),
  lineChartOptions
);

lineChart.render();
