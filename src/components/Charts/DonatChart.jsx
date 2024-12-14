import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts/highcharts'
import solidGauge from 'highcharts/modules/solid-gauge'
import HighchartsExporting from 'highcharts/modules/exporting'

import HCSoldGauge from 'highcharts/modules/solid-gauge';


HighchartsExporting(Highcharts)
HCSoldGauge(Highcharts);
function renderIcons() {

    this.series.forEach(series => {
        if (!series.icon) {
            series.icon = this.renderer
                .text(
                    `<i class="fa fa-${series.options.custom.icon}"></i>`,
                    0,
                    0,
                    true
                )
                .attr({
                    zIndex: 10
                })
                .css({
                    color: series.options.custom.iconColor,
                    fontSize: '1.5em'
                })
                .add(this.series[2].group);
        }
        series.icon.attr({
            x: this.chartWidth / 2 - 15,
            y: this.plotHeight / 2 -
                series.points[0].shapeArgs.innerR -
                (
                    series.points[0].shapeArgs.r -
                    series.points[0].shapeArgs.innerR
                ) / 2 +
                8
        });
    });
}


function DonatChart({data , height , width , marginTop, marginRight,marginBot, marginLeft}) {
    const option = {
        exporting: {
            menuItemDefinitions: {
                
              
                label: {
                   
                }
            }, 
            // 'downloadPNG', 'downloadSVG', "downloadPDF", 'printChart'
            buttons: {
                contextButton: {
                    menuItems: [
                        'printChart' ,'downloadPNG', 'downloadSVG', "downloadPDF"
                    ]
                }
            }
            
        },
        lang :{
                downloadPDF : "PDF دانلود ",
                downloadPNG : "PNG دانلود",
                downloadSVG : "SVG دانلود",
                downloadCSV : "CSV دانلود",
                printChart : "پرینت نمودار"
        },
        chart: {
            type: 'solidgauge',
        
            height : height ? height : '',
            width : width ? width : '', 
            styleMode : true, 
            marginTop : 10,
            marginTop : marginTop ? marginTop : null, 
            marginRight : marginRight ? marginRight : null,
            marginBot :  marginBot ? marginBot : null,
            marginLeft : marginLeft ? marginLeft : null ,
            style : {
                borderBottomLeftRadius : '25px',
                borderBottomRightRadius : '25px',
             
            }
            
        },
    
        title: {
            text: '',
            style: {
                fontSize: '24px'
            }
        },
    
        tooltip: {
            borderWidth: 0,
            backgroundColor: 'none',
            shadow: false,
            style: {
                fontSize: '11px'
            },
           
          
            positioner: function (labelWidth) {
                return {
                    x: (this.chart.chartWidth - labelWidth) / 2,
                    y: (this.chart.plotHeight / 2) + 15
                };
            }
        },
        credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
        pane: {
            startAngle: 0,
            title : 'test',
            text : 'teest',
            endAngle: 360,
            background: [{ // Track for Conversion
                outerRadius: '112%',
                innerRadius: '88%',
              
                borderWidth: 0
            }, { // Track for Engagement
                outerRadius: '87%',
                innerRadius: '63%',
              
                borderWidth: 0
            }, { // Track for Feedback
                outerRadius: '62%',
                innerRadius: '38%',
             
                borderWidth: 0
            },
            
        ]
        },
    
        yAxis: {
            min: 0,
            max: 100,
            lineWidth: 0,
            tickPositions: []
        },
    
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    enabled: false
                },
                linecap: 'round',
                stickyTracking: false,
                rounded: true
            }
        },
    
        series: [{
            name: 'تلگرام',
            data: [{
                color: Highcharts.getOptions().colors[0],
                radius: '112%',
                innerRadius: '88%',
                y: 80
            }],
          
        }, {
            name: 'توییتر',
            data: [{
                color: Highcharts.getOptions().colors[1],
                radius: '87%',
                innerRadius: '63%',
                y: 65
            }],
           
        }, 
        {
            name: 'ایتا',
            data: [{
                color: Highcharts.getOptions().colors[2],
                radius: '62%',
                innerRadius: '38%',
                y: 50
            }],
           
        },
        {
            name: 'اینستا',
            data: [{
                color: Highcharts.getOptions().colors[3],
                radius: '38%',
                innerRadius: '28%',
                y: 23
            }],
           
        },
        {
            name: 'روبیکا',
            data: [{
                color: Highcharts.getOptions().colors[5],
                radius: '24%',
                innerRadius: '28%',
                y: 25
            }],
           
        }
    ]
    
    }
  return (
    <HighchartsReact
	highcharts={Highcharts}
	options={option}
/>
  )
}

export default DonatChart
