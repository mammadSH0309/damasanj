
import HighchartsReact from 'highcharts-react-official'
import React from 'react'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)
function PieChartRasad() {

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
      colors: ['#FFD700', '#C0C0C0', '#CD7F32'],
      chart: {
        type: 'column',
        inverted: true,
        polar: true
      },
      
      pane: {
        size: '50%',
        innerSize: '20%',
        endAngle: 360
      },
      
      yAxis: {
        crosshair: {
          enabled: true,
          color: '#333'
        },
        lineWidth: 0,
        tickInterval: 25,
     
        endOnTick: true,
        showLastLabel: true,
        accessibility: {
          description: 'Number of medals'
        }
      },
      plotOptions: {
        
      },
              credits: {
                // Remove highcharts.com credits link from chart footer.
                enabled: false,
              },
              title: {
                text: ''
              },
            
              series: [
            
            
                {
                  name: 'Gold medals',
                  data: [132]
                },
               
               

            ]
              
    
}

  return (
    <HighchartsReact 
	highcharts={Highcharts}
	options={options}
/>
  )
}

export default PieChartRasad
