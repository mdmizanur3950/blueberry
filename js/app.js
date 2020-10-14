document.addEventListener('DOMContentLoaded', function () {

  // Section 1 Chart 1
  Highcharts.chart('quarterly', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    credits: {
       enabled: false
    },
    colors: [
       {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
       {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
    ],
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: '€/m<sup>2</sup>'
        }
    },
    tooltip: {
       headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
       pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
   },
    plotOptions: {
        areaspline: {
            fillOpacity: 1
        }
    },
    series: [{
      name: 'Berlin',
      data: [4092, 4077, 4059],
      tooltip: {
          valueSuffix: ' €'
        }
    }, {
        name: 'Property + 1 km',
        data: [4858, 4819, 4741],
        tooltip: {
          valueSuffix: ' €'
        }
    }]
  });
  
  
  // Section 1 Chart 2
  Highcharts.chart('yearly', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    credits: {
       enabled: false
    },
    colors: [
       {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
       {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
    ],
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: '€/m<sup>2</sup>'
        }
    },
    tooltip: {
       headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
       pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
   },
    plotOptions: {
        areaspline: {
            fillOpacity: 1
        }
    },
    series: [{
      name: 'Berlin',
      data: [4092, 4077, 4059, 4039, 4037, 4031, 4011, 3994, 3975, 3949, 3925, 3889],
      tooltip: {
          valueSuffix: ' €'
        }
    }, {
        name: 'Property + 1 km',
        data: [4858, 4819, 4741, 4690, 4614, 4583, 4549, 4511, 4460, 4453, 4391, 4350],
        tooltip: {
          valueSuffix: ' €'
        }
    }]
  });
  

  // Section 1 Chart 3
  Highcharts.chart('fiveyearly', {
    chart: {
        type: 'areaspline'
    },
    title: {
        text: ''
    },
    credits: {
       enabled: false
    },
    colors: [
       {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
       {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
    ],
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: '€/m<sup>2</sup>'
        }
    },
    tooltip: {
       headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
       pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
   },
    plotOptions: {
        areaspline: {
            fillOpacity: 1
        }
    },
    series: [{
      name: 'Berlin',
      data: [4092, 4077, 4059, 4039, 4037, 4031, 4011, 3994, 3975, 3949, 3925, 3889, 3884, 3854, 3835, 3822, 3813, 3797, 3785, 3764, 3754, 3723, 3714, 3678, 3647, 3641, 3606, 3584, 3557, 3546, 3541, 3523, 3490, 3463, 3448, 3443, 3418, 3408, 3399, 3389, 3356, 3323, 3317, 3296, 3268, 3244, 3241, 3233, 3203, 3180, 3152, 3126, 3109, 3079, 3079, 3054, 3049, 3020, 3002, 3000],
      tooltip: {
          valueSuffix: ' €'
        }
    }, {
        name: 'Property + 1 km',
        data: [4858, 4819, 4741, 4690, 4614, 4583, 4549, 4511, 4460, 4453, 4391, 4350, 4301, 4272, 4231, 4198, 4134, 4123, 4103, 4039, 3989, 3963, 3961, 3920, 3863, 3844, 3803, 3766, 3707, 3668, 3624, 3556, 3518, 3486, 3442, 3393, 3360, 3332, 3286, 3230, 3197, 3183, 3183, 3132, 3086, 3073, 3047, 3043, 3013, 2984, 2984, 2919, 2899, 2899, 2846, 2807, 2778, 2777, 2731, 2700],
        tooltip: {
          valueSuffix: ' €'
        }
    }]
});


   // Page 4 Chart 1
   Highcharts.chart('popdensity', {
      chart: {
         type: 'column'
      },
      credits: {
         enabled: false
      },
      colors: [
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
      ],
      xAxis: {
        type: 'category'
      },
      yAxis: {
         min: 0,
         max: 10000,
         tickAmount: 11,
        title: {
          text: 'Persons / km <sup>2</sup>'
        }
      },
      tooltip: {
         headerFormat: '<span style="font-size:12px"></span><br>',
         pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
     },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Berlin',
        data: [4112.9]
    
      }, {
        name: 'Property + 1 km',
        data: [9207]
    
      }]
   });
   

// Page 4 Chart 2
  
Highcharts.chart('genderchart1', {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
   },
   credits: {
      enabled: false
   },
   title: {
     text: 'All Berlin'
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}      
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   accessibility: {
     point: {
       valueSuffix: '%'
     }
   },
   plotOptions: {
     pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
         enabled: false
       },
       showInLegend: true
     }
   },
   series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
       name: 'Female',
       y: 50.03
     },{
      name: 'Male',
      y: 49.97,
      sliced: false
    }]
   }]
});
   
   
   // Page 4 Chart 3
  
Highcharts.chart('genderchart2', {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
   },
   credits: {
      enabled: false
   },
   title: {
     text: 'Property + 1 km'
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}      
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   accessibility: {
     point: {
       valueSuffix: '%'
     }
   },
   plotOptions: {
     pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
         enabled: false
       },
       showInLegend: true
     }
   },
   series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
       name: 'Female',
       y: 48.39
     },{
      name: 'Male',
      y: 51.16,
      sliced: false
    }]
   }]
});
   

// Page 4 Chart 4
Highcharts.chart('agedist', {
   chart: {
     zoomType: 'xy'
   },
   title: {
      text: ''
   },
   credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0,0,0,1)'],[1, 'rgba(0,0,0,1)']]}      
   ],
   xAxis: [{
     categories: ['0-14', '15-29', '30-44', '45-59', '60+'],
     crosshair: true
   }],
   yAxis: [{ // Primary yAxis
      min: 0,
     labels: {
       format: '{value}%',
       style: {
         color: Highcharts.getOptions().colors[1]
       }
     },
     title: {
       text: 'Property + 1 km',
       style: {
         color: Highcharts.getOptions().colors[1]
       }
     }
   }, {
         
         title: {
         text: 'Berlin',
         style: {
         color: Highcharts.getOptions().colors[0]
         }
    },
    labels: {
      format: '{value} %',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
     
     opposite: true
   }],
   tooltip: {
     shared: true
   },
   
   series: [{
     name: 'Berlin',
     type: 'column',
     yAxis: 1,
     data: [14,17.7,22.6,20.9,24.8],
     tooltip: {
       valueSuffix: ' %'
     }
 
   }, {
     name: 'Property + 1 km',
     type: 'spline',
     data: [11.6,23.2,24.6,19.8,20.8],
     tooltip: {
       valueSuffix: '%'
     }
   }]
});
   
// Page 4 Chart 5   
   
Highcharts.chart('household', {
   chart: {
      type: 'column'
   },
   credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
   ],
   xAxis: {
     type: 'category'
   },
   yAxis: {
      min: 0,
      max: 2,
     title: {
       text: ''
     }
   },
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   plotOptions: {
     column: {
       pointPadding: 0.3,
       borderWidth: 0
     }
   },
   series: [{
     name: 'Berlin',
     data: [1.7]
 
   }, {
     name: 'Property + 1 km',
     data: [1.8]
 
   }]
});
   
   
// Section 4 Chart 6
Highcharts.chart('marital', {
   chart: {
       type: 'column'
   },credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
   ],
   title: {
       text: ''
   },
   xAxis: {
       categories: [
           'Single Person',
           'Married Persons with Children',
           'Married Persons without Children'
       ],
       crosshair: true
   },
   yAxis: {
       min: 0,
       title: {
           text: ''
       }
   },
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   plotOptions: {
       column: {
           pointPadding: 0.2,
           borderWidth: 0
       }
   },
   series: [{
       name: 'Berlin',
       data: [55,19.4,25.4]

   }, {
       name: 'Property + 1 km',
       data: [52,22.2,24.9]

   }]
});
   
// Section 4 Chart 7 
   
Highcharts.chart('foreignpop', {
   chart: {
      type: 'column'
   },
   credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
   ],
   xAxis: {
     type: 'category'
   },
   yAxis: {
      min: 0,
      max: 50,
     title: {
       text: ''
     }
   },
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   plotOptions: {
     column: {
       pointPadding: 0.3,
       borderWidth: 0
     }
   },
   series: [{
     name: 'Berlin',
     data: [31.7]
 
   }, {
     name: 'Property + 1 km',
     data: [45.1]
 
   }]
});
   
   // Section 4 Chart Whatever
   
Highcharts.chart('foreignerher', {
   chart: {
       type: 'column'
   },
   credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.3)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.3)']]}
   ],
   title: {
       text: ''
   },
   xAxis: {
       crosshair: true
   },
   yAxis: {
       min: 0,
       title: {
           text: ''
       }
   },
   tooltip: {
      headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   plotOptions: {
       column: {
           pointPadding: 0.1,
           borderWidth: 0
       }
   },
   series: [{
      name: 'Berlin',
      data: [5, 1.5, 5.4, 1, 6.8, 0.6, 2.9, 0.6],
      tooltip: {
         valueSuffix: '%'
       }

  }, {
      name: 'Property Area',
      data: [10.8, 3.1, 11.1, 1.7, 11.6, 21, 5.1, 0.7],
      tooltip: {
         valueSuffix: '%'
         }

   }]
});
   
   // Section 4 Chart 8
  
Highcharts.chart('rentchart1', {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
   },
   credits: {
      enabled: false
   },
   title: {
     text: 'All Berlin'
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}      
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   accessibility: {
     point: {
       valueSuffix: '%'
     }
   },
   plotOptions: {
     pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
         enabled: false
       },
       showInLegend: true
     }
   },
   series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
       name: 'Own',
       y: 9
     },{
      name: 'Rent',
      y: 91,
      sliced: false
    }]
   }]
});
   
   
   // Section 4 Chart 9
  
Highcharts.chart('rentchart2', {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
   },
   credits: {
      enabled: false
   },
   title: {
     text: 'Property + 1 km'
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}      
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   accessibility: {
     point: {
       valueSuffix: '%'
     }
   },
   plotOptions: {
     pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
         enabled: false
       },
       showInLegend: true
     }
   },
   series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
       name: 'Own',
       y: 15
     },{
      name: 'Rent',
      y: 85,
      sliced: false
    }]
   }]
});
   
   
// Section 4 Chart 11

Highcharts.chart('salary', {
   chart: {
     zoomType: 'xy'
   },
   title: {
      text: ''
   },
   credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0,0,0,1)'],[1, 'rgba(0,0,0,1)']]}      
   ],
   xAxis: [{
     categories: ['Below 21,021 €', '21,022 € - 31,951 €', '21,022 € - 43,919 €', '43,920 € - 63,943 €', '63,944 € +'],
     crosshair: true
   }],
   yAxis: [{ // Primary yAxis
      
     labels: {
       format: '{value}k',
       style: {
         color: Highcharts.getOptions().colors[1]
       }
     },
     title: {
       text: 'Property + 1 km',
       style: {
         color: Highcharts.getOptions().colors[1]
       }
     }
   }, {
         title: {
            text: 'Berlin',
            style: {
            color: Highcharts.getOptions().colors[0]
         }
    },
    labels: {
      format: '{value} k',
      style: {
        color: Highcharts.getOptions().colors[0]
      }
    },
     
     opposite: true
   }],
   tooltip: {
     shared: true
   },
   
   series: [{
     name: 'Berlin',
     type: 'column',
     yAxis: 1,
     data: [20.1,15.3,10.6,7.2,5.1],
     tooltip: {
       valueSuffix: 'k'
     }
 
   }, {
     name: 'Property + 1 km',
     type: 'spline',
     data: [16.1,13.4,11.1,8.7,7.1],
     tooltip: {
       valueSuffix: 'k'
     }
   }]
});
   
   // Page 4 Chart 12
   Highcharts.chart('powerper', {
      chart: {
         type: 'column'
      },
      credits: {
         enabled: false
      },
      title: {
         text: ''
      },
      colors: [
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
      ],
      xAxis: {
        type: 'category'
      },
      yAxis: {
         min: 0,
         tickAmount: 11,
        title: {
          text: ''
        }
      },
      tooltip: {
         headerFormat: '<span style="font-size:12px"></span><br>',
         pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
     },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Berlin',
         data: [22181],
         tooltip: {
            valueSuffix: ' €'
          }
    
      }, {
        name: 'Property + 1 km',
            data: [19957],
            tooltip: {
               valueSuffix: ' €'
             }
    
      }]
   });

   // Page 4 Chart 13
   Highcharts.chart('unemployment', {
      chart: {
         type: 'column'
      },
      credits: {
         enabled: false
      },
      title: {
         text: ''
      },
      colors: [
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
      ],
      xAxis: {
        type: 'category'
      },
      yAxis: {
         min: 0,
         tickAmount: 11,
        title: {
          text: ''
        }
      },
      tooltip: {
         headerFormat: '<span style="font-size:12px"></span><br>',
         pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
     },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Berlin',
         data: [8],
         tooltip: {
            valueSuffix: ' %'
          }
    
      }, {
        name: 'Property + 1 km',
            data: [13],
            tooltip: {
               valueSuffix: ' %'
             }
    
      }]
   });


   // Page 4 Chart 13
   Highcharts.chart('comdensity', {
      chart: {
         type: 'column'
      },
      credits: {
         enabled: false
      },
      title: {
         text: ''
      },
      colors: [
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
         {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]}
      ],
      xAxis: {
        type: 'category'
      },
      yAxis: {
         min: 0,
         tickAmount: 11,
        title: {
          text: ''
        }
      },
      tooltip: {
         headerFormat: '<span style="font-size:12px"></span><br>',
         pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
     },
      plotOptions: {
        column: {
          pointPadding: 0.3,
          borderWidth: 0
        }
      },
      series: [{
        name: 'Berlin',
      data: [205]
      }, {
        name: 'Property + 1 km',
         data: [527]
      }]
   });

   // Page 4 Chart 14
  
Highcharts.chart('businesssize1', {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
   },
   credits: {
      enabled: false
   },
   title: {
     text: 'All Berlin'
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]},{linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 201, 255,1)'],[1, 'rgba(0,201,255,.1)']]}      
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   accessibility: {
     point: {
       valueSuffix: '%'
     }
   },
   plotOptions: {
     pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
         enabled: false
       },
       showInLegend: true
     }
   },
   series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
       name: 'Large Companies (100+ Employees)',
       y: 20
     },{
      name: 'Medium Companies (10-100 Employees)',
      y: 50,
      sliced: false
    },{
      name: 'Small Companies (1-10 Employees)',
      y: 30,
      sliced: false
    }]
   }]
});
   
      // Page 4 Chart 15
  
Highcharts.chart('businesssize2', {
   chart: {
     plotBackgroundColor: null,
     plotBorderWidth: null,
     plotShadow: false,
     type: 'pie'
   },
   credits: {
      enabled: false
   },
   title: {
     text: 'Property + 1 km'
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]},
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 132, 232,1)'],[1, 'rgba(0,132,232,.1)']]},{linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 201, 255,1)'],[1, 'rgba(0,201,255,.1)']]}      
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px"></span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
   accessibility: {
     point: {
       valueSuffix: '%'
     }
   },
   plotOptions: {
     pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
         enabled: false
       },
       showInLegend: true
     }
   },
   series: [{
     name: 'Brands',
     colorByPoint: true,
     data: [{
       name: 'Large Companies (100+ Employees)',
       y: 15
     },{
      name: 'Medium Companies (10-100 Employees)',
      y: 35
    },{
      name: 'Small Companies (1-10 Employees)',
      y: 50
    }]
   }]
});
   
   
   
// Page 5 Chart

// Age categories
let pagecategories = [
   'Luxury Interior', '1st Move In', 'Refurbished', 'Built-In Kitchen', 'Ground Floor', 'Rooftop', 'Newly Renovated', 'Balcony', 'Energy Efficiency', 'Elevator', 'Altbau', 'Parking', 'Garden', 'Live-In Tenants'
];

Highcharts.chart('page5chart', {
   chart: {
       type: 'bar'
   },
   title: {
       text: ''
   },
   credits: {
      enabled: false
   },
   colors: [
      {linearGradient: [0, 0, 0, 500], stops: [[0, 'rgba(0, 53, 181,1)'],[1, 'rgba(0,53,181,.1)']]}     
   ],
   tooltip: {
      headerFormat: '<span style="font-size:12px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>{point.y}<br/>'
  },
  plotOptions: {
    bar: {
      pointPadding: 0.1,
      borderWidth: 0
    }
  },
   accessibility: {
       point: {
           valueDescriptionFormat: '{index}. Age {xDescription}, {value}%.'
       }
   },
   xAxis: [{
       categories: pagecategories,
       reversed: false,
       labels: {
           step: 1
       }
   }, { // mirror axis on right side
       opposite: true,
       reversed: true,
       categories: pagecategories,
       linkedTo: 0,
       labels: {
           step: 1
       }
   }],
   yAxis: {
       title: {
           text: null
       },
       labels: {
           formatter: function () {
               return Math.abs(this.value) + '%';
           }
       },
   },

   plotOptions: {
       series: {
         stacking: 'normal',
         pointPadding: 0.1
       }
   },
   series: [{
       name: 'Average Valuation difference',
       data: [
           15,5,5,17,-10,13,3,10,0,5,25,2,0,-30
      ],
      tooltip: {
         valueSuffix: ' %'
       }
   }]
});



});