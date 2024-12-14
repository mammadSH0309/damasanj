import React, { useMemo } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import { cloneDeep } from 'lodash'
HighchartsExporting(Highcharts)
function DonutCharts({height, width , marginTop , marginBot , marginRight , marginLeft , data}) {
    const options = useMemo(()=> (
        {
        
            chart: {
                type: 'pie',
                height : height ? height : '', 
                width : width ? width : '',
                styleMode : true ,
                marginTop : marginTop ? marginTop : null, 
                marginRight : marginRight ? marginRight : null,
                marginBot :  marginBot ? marginBot : null,
                marginLeft : marginLeft ? marginLeft : null ,  
                style : {
                    borderBottomLeftRadius : '25px',
                    borderBottomRightRadius : '25px',
                    fontFamily : 'fontIOS'
                    
                },
            
              
            },
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
            accessibility: {
            
            },
            title: {
                text: ''
            },
            credits: {
                // Remove highcharts.com credits link from chart footer.
                enabled: false,
              },
            subtitle: {
                text: ''
            },
            tooltip: {
                pointFormat: ''
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            legend: {
                enabled: true, 
                style : {
                    fontFamily : 'fontIOS'
                },
            },
            plotOptions: {
                series: {
                    allowPointSelect: true,
          
                    borderRadius: 2,
                    dataLabels: [{
                        enabled: true,
                        distance: 20,
                        format: ''
                    }, {
                        enabled: true,
                        distance: -15,
                        format: '',
                        style: {
                            fontSize: '0.9em'
                        }
                    }],
                    showInLegend: true
                }
            },
            series: [{
                name: 'پلتفرم',
                styles : {
                    fontFamily : 'fontIOS'
                },
                colorByPoint: true,
                innerSize: '75%',
                data: data? data : [{
                    name: 'تلگرام',
                    y: 23.9
                }, {
                    name: 'توییتر',
                    y: 12.6
                }, {
                    name: 'اینستاگرام',
                    y: 37.0
                }, {
                    name: 'شبکه های داخلی',
                    y: 26.4
                }]
            }]  
        }
    
    ), [])


    const chartOptions = useMemo(()=> {
        const chartOptions = cloneDeep(options)
        return chartOptions
      } , [options])

    return (
        <HighchartsReact 
        highcharts={Highcharts}
        options={chartOptions}
    />
    )
}

export default DonutCharts
