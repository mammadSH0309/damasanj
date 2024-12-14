import React from 'react'
import variablePie from 'highcharts/modules/variable-pie'

import Highcharts from "highcharts/highstock";
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)
variablePie(Highcharts);
function VariableRadiusPieChart({data , height , width , marginTop, marginRight,marginBot, marginLeft , }) {

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
            type: 'variablepie', 
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
            align: 'left'
        },
        credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
        tooltip: {
            headerFormat: '',
            pointFormat: ''
        },
        series: [{
            minPointSize: 10,
            innerSize: '20%',
            zMin: 0,
            name: 'countries',
            borderRadius: 5,
            data: data? data : 
            [{
                name: 'سهند',
                y: 505992,
                z: 92
            }, {
                name: 'اصفهان',
                y: 551695,
                z: 119
            }, {
                name: 'باران',
                y: 312679,
                z: 121
            }, {
                name: 'اترک',
                y: 78865,
                z: 136
            }],
            colors: [
                '#4caefe',
                '#3dc3e8',
                '#2dd9db',
                '#1feeaf',
                '#0ff3a0',
                '#00e887',
                '#23e274'
            ]
        }]
    
    }
  return (
    <HighchartsReact 
	highcharts={Highcharts}
	options={option}
/>
  )
}

export default VariableRadiusPieChart
