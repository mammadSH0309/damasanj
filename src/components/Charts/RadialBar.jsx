import React, { useMemo } from 'react'

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)
function RadialBar({width , height , data}) {
console.log(data)
    const options = useMemo(()=> (
        {
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
            colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
            chart: {
                type: 'column',
                inverted: true,
                polar: true,
                width : width ? width : '',
               
                height : height? height : '' , 
                style : {
                    fontFamily : 'fontIOS',
                   
                  
                        borderBottomLeftRadius : '25px',
                        borderBottomRightRadius : '25px',
                    
                 
                },
            },
            title: {
                text: '',
                align: ''
            },
            legend : {
                enabled : false
            },
            subtitle: {
                text: ' ' +
                    '' +
                    '',
                align: ''
            },
            tooltip: {
                outside: true
            },
            credits: {
                // Remove highcharts.com credits link from chart footer.
                enabled: false,
              },
            pane: {
                size: '85%',
                innerSize: '70%',
                endAngle: 270
            },
            xAxis: {
                tickInterval: 1,
                labels: {
                    align: 'right',
                    useHTML: true,
                    allowOverlap: true,
                    step: 1,
                    y: 3,
                    style: {
                        fontSize: '13px'
                    }
                },
                lineWidth: 0,
                gridLineWidth: 0,
                categories: data?data?.categories : [
                    'روزمره نویس',
                    'سیاسی',
                    'اجتماعی' 
                    
                ]
            },
            yAxis: {
                lineWidth: 0,
                tickInterval: 25,
                reversedStacks: false,
                endOnTick: true,
                showLastLabel: true,
                gridLineWidth: 0
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    borderWidth: 0,
                    pointPadding: 0,
                    groupPadding: 0.15,
                    borderRadius: '50%'
                }
            },
            series: data?data.data : [{
                name: 'Gold medals',
                data: [148, 113, 104, ]
            }, 
            ]
        }
    ), [])
    

  return (
    <HighchartsReact 
	highcharts={Highcharts}
	options={options}
/>
  )
}

export default RadialBar
