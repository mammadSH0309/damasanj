import React, { useEffect, useMemo, useRef } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
import { cloneDeep } from 'lodash'
HighchartsExporting(Highcharts)
function BarChartMulti({height , width , type , padding ,marginTop , marginRight , marginBot , marginLeft , data}) {
    const chartComponentRef = useRef(null);
 
      


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
            chart: {
                type: type ? type : 'bar',
                height : height ? height : '', 
                width : width ? width : '',
                styleMode : true  ,
                marginTop : marginTop ? marginTop : null, 
                marginRight : marginRight ? marginRight : null,
                marginBot :  marginBot ? marginBot : null,
                marginLeft : marginLeft ? marginLeft : null ,
                style : {
                    borderBottomLeftRadius : '25px',
                    borderBottomRightRadius : '25px',
                    fontFamily : 'fontIOS'
                    
                }
            },
            xAxis: {
                categories: data?data.categories : null,
               style : {
                fontFamily : 'fontIOS'
               }
            },
            credits: {
                // Remove highcharts.com credits link from chart footer.
                enabled: false,
              },
            title: {
                text: '',
              
            },
            legend : {
                enabled : false
            },
            
        
            
           
          
            plotOptions: {
                column: {
                    pointPadding: padding ? padiing : 0.3,
                    borderWidth: 0
                },
                label : {
                    enabled : false
                },
                series: {
                   
                    dataLabels: {
                        enabled: false
                    }
                }
            },
            series:data?data.series : null , 
        }
    ), [
        
    ])
    const chartOptions = useMemo(()=> {
        const chartOptions = cloneDeep(options)
        return chartOptions
      } , [options])
   
        
        return (
            <HighchartsReact 
            highcharts={Highcharts}
            ref={chartComponentRef}
            options={chartOptions}
        />
        )
}

export default BarChartMulti
