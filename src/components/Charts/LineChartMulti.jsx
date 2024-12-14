import React, { useMemo, useState } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'

import ExportData from 'highcharts/modules/export-data';
import { cloneDeep } from 'lodash';
import useNumPersian from '../../customhook/useNumPersian';
HighchartsExporting(Highcharts)

ExportData(Highcharts)
function LineChartMulti({backgroundButton ,height , width ,color, type , margintTop , marginRight , marginBot, marginLeft , backgroundColor , colorY  , colorX , gridLineXColor , gridLineYColor , data}) {





    
    
    const converters = {
        // Latin to Farsi
        fa: function (number) {
            return number.toString().replace(/\d/g, function (d) {
                return String.fromCharCode(d.charCodeAt(0) + 1728);
            });
        },
        // Latin to Arabic
        ar: function (number) {
            return number.toString().replace(/\d/g, function (d) {
                return String.fromCharCode(d.charCodeAt(0) + 1584);
            });
        }
    };
    const options = useMemo(()=> (
        { 
            plotOptions: {
                series: {
                    color: color ? color : null
                }
            },
            navigation: {
                buttonOptions: {
                    theme: {
                   
                        
                        r: 5,
                          fill: backgroundButton ? backgroundButton : null ,
                   
                    }
                }
            },
            exporting: {
                enabled : true , 
                menuItemDefinitions: {
                
                }, 
             
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
            chart:{
                numberFormatter: function () {
                    const ret = Highcharts.numberFormat.apply(0, arguments);
                    return converters.ar(ret);
                },
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
                type : type ? type : 'line',
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
                        [0, ''],
                        [1, '']
                    ]
                },
                styleMode : true , 
                style : {
                    borderBottomLeftRadius : '25px',
                    borderBottomRightRadius : '25px',
                    fontFamily : 'IranSans_Light'
                 
                }
            },
            title: {
            text: '',
            align: ''
        },
        exporting: {
            enabled: true,
              menuItemDefinitions: {
              // Custom definition
              viewFullscreen: {
                text: 'fullscreen',
              },
            },
            buttons: {
                
              contextButton: {
                menuItems: [
                  'viewFullscreen',
                  {
                    text: 'DownloadXLSX',
                    onclick() {
                        Highcharts.downloadXLSX();
                    },
                  },
                  {
                    text: 'DownloadCSV',
                    onclick() {
                        Highcharts.getCSV();
                    },
                  },
                ],
              },
            },
          },
        subtitle: {
            text: '',
            align: ''
        },
        credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
        yAxis: {
            labels : {
                style : {
                    color :  colorY , 
                    fontFamily : 'IranSans_Light'
                }
            },
            gridLineColor : gridLineYColor,
            title: {
                text: ''
            }
        },
    
        xAxis: {
            categories : data?.categories,
            gridLineWidth :1 ,
        
            style : {
                color : '#262238'
            },
            gridLineColor : gridLineXColor,
            labels : {
              
                style : {
                    color : colorX,
                    fontFamily : 'IranSans_Light'
                }
            },
         
        },
        legend : {
            enabled : false
        },
        tooltip: {
            formatter: function () {
                return   this.y.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ':تعداد ';
            }
        },
    
       
    
        exporting: {
            enabled: true
          },
        series: data?.series,
       
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: '100%'
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }
        
        }
    ) , [])


    const chartOptions = useMemo(()=> {
        const chartOptions = cloneDeep(options)
        return chartOptions
      } , [options])
       
    
    return (
        <>

        <HighchartsReact
         
        highcharts={Highcharts}
        
        options={chartOptions}
        />
        </>
    )
}

export default LineChartMulti
