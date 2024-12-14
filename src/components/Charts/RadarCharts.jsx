import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsBoost from "highcharts/modules/boost";
HighchartsBoost(Highcharts);
HighchartsExporting(Highcharts)
function RadarCharts({width , height}) {

    const options = {
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
            polar: true,
            type: 'line',
            height : height ? height : '',
            width : width ? width : '', 
            styleMode : true , 
            style : {
                borderBottomLeftRadius : '25px',
                borderBottomRightRadius : '25px',
                fontFamily : 'fontIOS'
                
            }
        },

        
    
        accessibility: {
            description: ''
        },
    
        title: {
            text: '',
            x: -80
        },
    
        pane: {
            size: '80%'
        },
    
        xAxis: {
            categories: [
                'اصولگرا', 'معاند', 'اصلاح طلب', 'مستقل',
                'سلطنت طلب', 'منافق'
            ],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },
    
        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },
    
        tooltip: {
            shared: true,
            pointFormat: ''
        },
    
        legend: {
            enabled : false ,
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
        legend: {
            enabled: false
        },
        credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
    
        series: [{
            name: 'Allocated Budget',
            data: [43000, 19000, 60000, 35000, 17000, 10000],
            pointPlacement: 'on'
        }, {
            name: 'Actual Spending',
            data: [50000, 39000, 42000, 31000, 26000, 14000],
            pointPlacement: 'on'
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    pane: {
                        size: '70%'
                    }
                }
            }]
        }
    
    }
    
    return (
    
        <HighchartsReact
        highcharts={Highcharts}
        options={options}
    />
      )
}

export default RadarCharts
