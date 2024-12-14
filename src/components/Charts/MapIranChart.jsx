import React from 'react'
import Highcharts from 'highcharts/highmaps'
import HighchartsReact from 'highcharts-react-official'
import HC_more from 'highcharts/highcharts-more' //module
import { DataMapIran } from './DataMapIran'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)
// HC_more(Highcharts) 
function MapIranChart({padding , height , width , marginTop, marginRight,marginBot, marginLeft , cat , colorBar , backgroundColor, backgroundButton}) {

    
    const data = [
        ['ir-5428', 10], ['ir-hg', 11], ['ir-bs', 12], ['ir-kb', 13],
        ['ir-fa', 14], ['ir-es', 15], ['ir-sm', 16], ['ir-go', 17],
        ['ir-mn', 18], ['ir-th', 19], ['ir-mk', 20], ['ir-ya', 21],
        ['ir-cm', 22], ['ir-kz', 23], ['ir-lo', 24], ['ir-il', 25],
        ['ir-ar', 26], ['ir-qm', 27], ['ir-hd', 28], ['ir-za', 29],
        ['ir-qz', 30], ['ir-wa', 31], ['ir-ea', 32], ['ir-bk', 33],
        ['ir-gi', 34], ['ir-kd', 35], ['ir-kj', 36], ['ir-kv', 37],
        ['ir-ks', 38], ['ir-sb', 39], ['ir-ke', 40], ['ir-al', 41]
    ];


    const options ={ 
        navigation: {
            buttonOptions: {
                theme: {
               
                    
                    r: 5,
                      fill: backgroundButton ? backgroundButton : null ,
               
                }
            }
        },
    chart: {
        map: DataMapIran ,
        height : height ? height : '',
        width : width ? width : '', 
        styleMode : true, 
        padding  : padding ? padding : null ,
        marginTop : marginTop ? marginTop : null, 
        marginRight : marginRight ? marginRight : null,
        marginBot :  marginBot ? marginBot : null,
        marginLeft : marginLeft ? marginLeft : null ,
        backgroundColor: backgroundColor ? backgroundColor : null,
        style : {
       
            fontFamily : 'iranSans_light',
            backgroundColor  : '#EEEEEE'
         
        },
    },

    title: {
        text: ''
    },

    subtitle: {
        text: ''
    },

    credits: {
        // Remove highcharts.com credits link from chart footer.
        enabled: false,
      },
    colorAxis: {
        min: 0
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
    plotOptions : {
        map: {
            events :{
                click : ()=> {console.log('click')}
            }
        }
    },
    series: [{
        data: data,
        name: 'تعداد',
        states: {
            hover: {
                color: '#BADA55'
            }
        },
        dataLabels: {
            enabled: true,
            format: '{point.name}'
        }
    }]
}
  return (
    <HighchartsReact
	highcharts={Highcharts}
    constructorType="mapChart"
	options={options}
    />
  )
}

export default MapIranChart
