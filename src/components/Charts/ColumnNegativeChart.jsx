import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)
function ColumnNegativeChart({height , width , type , margintTop , marginRight , marginBot, marginLeft , cat}) {

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
            type: 'column',
            height : height ? height : '',
            width : width ? width : '', 
            marginBot : marginBot, 
            marginLeft : marginLeft,
            marginTop :  margintTop, 
            marginRight :marginRight , 
            styleMode : true , 
            style : {
                borderBottomLeftRadius : '25px',
                borderBottomRightRadius : '25px',
                fontFamily : 'Calibri'
                
            }
        },
        title: {
            text: ''
        },
        xAxis: {
          
            categories: cat
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            column: {
                borderRadius: '25%'
            }
        },
        series: [{
            name: 'مصرف',
            data: [5, 3, 4, 7, 2]
        }, {
            name: 'انتشار',
            data: [2, -2, -3, 2, 1]
        }, {
            name: 'بازدید',
            data: [3, 4, 4, -2, 5]
        }]
    
    }
  return (
    <>

    <HighchartsReact
     
    highcharts={Highcharts}
    
    options={option}
    />
    </>
  )
}

export default ColumnNegativeChart
