import React, { useEffect, useMemo, useRef } from 'react'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import HighchartsExporting from 'highcharts/modules/exporting'

import useApiParams from '../../store'
HighchartsExporting(Highcharts)
function PieChartMain({width ,height , marginTop, marginRight, marginBot,marginLeft , data ,  url , backgroundcolor}) {
    const chartComponentRef = useRef(null);
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

    const {params , setParams} = useApiParams()
    const options =  useMemo(()=> (
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
                    },
                    click: function(e) {
                        document.getElementById('context-menu').style.display = 'none';
                      }
                },
                
                type: 'pie', 
                width : width? width : '' , 
                height : height ? height : '',
                styleMode : true ,
                backgroundcolor : backgroundcolor? backgroundcolor : '' , 
                marginTop : marginTop ? marginTop : null, 
                
                marginRight : marginRight ? marginRight : null,
                marginBot :  marginBot ? marginBot : null,
                marginLeft : marginLeft ? marginLeft : null , 
                style : {
                    borderBottomLeftRadius : '25px',
                    borderBottomRightRadius : '25px',
                    fontFamily : 'IranSans_Light'
                    
                },
                
            },
            credits: {
                // Remove highcharts.com credits link from chart footer.
                enabled: false,
              },
            title: {
                text: ''
            },
            tooltip: {
                valueSuffix: ''
            },
            subtitle: {
                text:
                ''
            },
            legend : {
                enabled : true
            },
            plotOptions: {
                series: {
                    point : {
                        events : {
                          
                          
                            click: function (e) { 
                                if(url.split('/')[5] == 'platform'){
                                  
                                    setParams({...params , 'plat' : e.point.name})
                                }else if(url.split('/')[5] == 'region'){
                                  
                                    setParams({...params , 'region' : e.point.name})
                                }
                                     
                            },
                          
                        }
                    },
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: [{
                        enabled: true,
                        distance: 20
                    }, {
                        enabled: false,
                        distance: -40,
                        format: '{point.percentage:.1f}%',
                        style: {
                            fontSize: '1.2em',
                            textOutline: 'none',
                            opacity: 0.5
                        },
                        filter: {
                            operator: '>',
                            property: 'percentage',
                            value: 10
                        }
                    }]
                }
            },
            series: [
                {
                    name: 'Percentage',
                    colorByPoint: true,
                    data: data?data.data : [
                    
                        {
                            name: '1400',
                            
                            y: 23
                        },
                        {
                            name: '1401',
                            y: 500
                        },
                        {
                            name: '1402',
                            y: 200
                        },
                        {
                            name: '1403',
                            y: 1.68
                        }
                    ]
                }
            ]
        }
    ), [])
        
        
  return (
    <HighchartsReact 
    highcharts={Highcharts}
    options={options}
   ref={chartComponentRef}
/>
  )
}

export default PieChartMain
