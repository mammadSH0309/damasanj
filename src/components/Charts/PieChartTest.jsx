import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)


function PieChartTest(height , width) {
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
            type: 'pie',
            height : 200,
            width : 200,
            styledMode: true
         
            
        },
      
        title : {
            text : ''
        },
        dataLabels : {
            enable : false
        },
       
        legend: {
            enabled: false
        },
        credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
        
        series: [{
           
            data: [
            
                {
                y: 23.9, 
                
            }, {
                name: 'Hybrids',
                y: 12.6
            }, {
                type : 'pie',
           
                y: 37.0
            }, {
                type : 'pie',
                
                y: 26.4
            }]
        }]
}

    return (
        <HighchartsReact 
        highcharts={Highcharts}
        options={options}
    />
    )
}

export default PieChartTest
