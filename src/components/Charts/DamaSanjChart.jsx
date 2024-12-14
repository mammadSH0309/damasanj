import React from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'

import highchartsMore from 'highcharts/highcharts-more'

highchartsMore(Highcharts)
function DamaSanjChart({height , width , data,   margintTop , marginRight , marginBot, marginLeft , backgroundColor , backgroundButton}) {
    const option = {
        chart: {
            events: {
                load() {
                  
                    return (<>لودینگ</>)
                },
                render(){
                    return (<>لودینگ</>)
                }
    
            },
            boost: {
                enabled: true
            },
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            height : height ? height : '',
            width : width ? width : '', 
            marginBot : marginBot, 
            marginLeft : marginLeft,
            marginTop :  margintTop, 
            marginRight :marginRight , 
            backgroundColor: backgroundColor,
            color: {
                linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                stops: [
                    [0, '#003399'],
                    [1, '#3366AA']
                ]
            },
            styleMode : true , 
            style : {
                borderBottomLeftRadius : '25px',
                borderBottomRightRadius : '25px',
                fontFamily : 'iranSans_light' , 
                backgourndColor : '#bbe1f4'
                
            }
        
        },        
        exporting: {
            enabled : true , 
            menuItemDefinitions: {
            
            }, 
            // 'downloadPNG', 'downloadSVG', "downloadPDF", 'printChart'
            buttons: {
                contextButton: {
                    menuItems: [
                       
                        'printChart' ,'downloadPNG', 'downloadSVG', "downloadPDF"
                    ]
                }
            },
          
        },
        lang :{
                downloadPDF : "PDF دانلود ",
                downloadPNG : "PNG دانلود",
                downloadSVG : "SVG دانلود",
                downloadCSV : "CSV دانلود",
                printChart : "پرینت نمودار"
        },
        navigation: {
            buttonOptions: {
                theme: {

                    r: 5,
                      fill: backgroundButton ? backgroundButton : null ,
               
                }
            }
        }, 
        title: {
            text: ''
        },
        credits : {
            enabled : false
        },
        pane: {
            startAngle: -90,
            endAngle: 89.9,
            background: null,
            center: ['50%', '75%'],
            size: '110%'
        },
        yAxis: {
            min: 0,
            max: 100,
            tickPixelInterval: 72,
            tickPosition: 'inside',
            tickColor: Highcharts.defaultOptions.chart.backgroundColor || '#FFFFFF',
            tickLength: 20,
            tickWidth: 3,
            minorTickInterval: null,
            labels: {
                distance: 20,
                style: {
                    fontSize: '14px',
                    fontFamily : 'CalibriBold'
                    
                }
            },
            lineWidth: 0,
            plotBands: [{
                from: 0,
                to: 25,
                color: '#bad10d', // green
                thickness: 20,
              
            }, {
                from: 25,
                to: 50,
                color: '#ede615', // red
                thickness: 20,
               
            }, {
                from: 50,
                to: 75,
                color: '#e83c53', // yellow
                thickness: 20
            },
            {
                from: 75,
                to: 100,
                color: '#f20a28', // yellow
                thickness: 20
            }
        ]
        },
        series: [{
            name: 'درجه',
            data: [data ? data : 20],
            tooltip: {
                valueSuffix: ' km/h'
            },
            dataLabels: {
                format: 'درجه',
                borderWidth: 0,
                color: (
                    Highcharts.defaultOptions.title &&
                    Highcharts.defaultOptions.title.style &&
                    Highcharts.defaultOptions.title.style.color
                ) || '#333333',
                style: {
                    fontSize: '16px'
                }
            },
            dial: {
                radius: '80%',
                backgroundColor: 'gray',
                baseWidth: 12,
                baseLength: '0%',
                rearLength: '0%'
            },
            pivot: {
                backgroundColor: 'gray',
                radius: 6
            }
    
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

export default DamaSanjChart