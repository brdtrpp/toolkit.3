Template.dashboardv1.onRendered(function(){

    var pieOptions = {
        animate: {
            duration: 800,
            enabled: true
        },
        barColor:  APP_COLORS['info'],
        trackColor: 'rgba(200,200,200,0.4)',
        scaleColor: false,
        lineWidth: 10,
        lineCap: 'round',
        size: 145
    };

    $('#easypie1').easyPieChart(pieOptions);

    var data = [{
      "label": "Uniques",
      "color": "#768294",
      "data": [
        ["Mar", 70],
        ["Apr", 85],
        ["May", 59],
        ["Jun", 93],
        ["Jul", 66],
        ["Aug", 86],
        ["Sep", 60]
      ]
    }, {
      "label": "Recurrent",
      "color": "#1f92fe",
      "data": [
        ["Mar", 21],
        ["Apr", 12],
        ["May", 27],
        ["Jun", 24],
        ["Jul", 16],
        ["Aug", 39],
        ["Sep", 15]
      ]
    }];

    var options = {
      series: {
          lines: {
              show: false
          },
          points: {
              show: true,
              radius: 4
          },
          splines: {
              show: true,
              tension: 0.4,
              lineWidth: 1,
              fill: 0.5
          }
      },
      grid: {
          borderColor: '#eee',
          borderWidth: 1,
          hoverable: true,
          backgroundColor: '#fcfcfc'
      },
      tooltip: true,
      tooltipOpts: {
          content: function (label, x, y) { return x + ' : ' + y; }
      },
      xaxis: {
          tickColor: '#fcfcfc',
          mode: 'categories',
          font: {
            size:12
          }
      },
      yaxis: {
          min: 0,
          max: 150, // optional: use it for a clear represetation
          tickColor: '#eee',
          //position: 'right' or 'left',
          tickFormatter: function (v) {
              return v/* + ' visitors'*/;
          },
          font: {
            size:12
          }
      },
      shadowSize: 0
    };

    var chart = $('.chart-spline');
    if(chart.length)
      $.plot(chart, data, options);

    // Now time
    $('[data-now]').each(function(){
      var element = $(this),
          format = element.data('format');

      function updateTime() {
        var dt = moment( new Date() ).format(format);
        element.text(dt);
      }

      updateTime();
      setInterval(updateTime, 1000);

    });

    // Sparkline
    $('[data-sparkline]').each(initSparkLine);

    // Slimscroll
    $('[data-scrollable]').each(initSlimScroll);

});
