import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
HighchartsExporting(Highcharts)
function BarRaceChart({height , width  , marginTop , data ,color
}) {
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
    const options = {
        plotOptions: {
            series: {
                color: color ? color : null
            }
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
        chart: {
            numberFormatter: function () {
                const ret = Highcharts.numberFormat.apply(0, arguments);
                return converters.ar(ret);
            },
            type: 'bar',
       
            width : width ? width : '',
            marginTop : marginTop ? marginTop : '',
            height : height? height : '' , 
            style : {
                fontFamily : 'Calibri',
                borderBottomLeftRadius : '25px',
                borderBottomRightRadius : '25px',
            
             
            },
           },
           credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
          
        title: {
            text: '',
          
        },
        yAxis : {
            labels : {
                style : {
               
                    fontFamily : 'IranSans_Light'
                }
            },
        },
        xAxis: {
            labels : {
                style : {
                
                    fontFamily : 'IranSans_Light'
                }
            },
            categories:data?data.categories : null,
        },
        legend : {
            enabled : false
        },
        series: data? data.series : [       
            {
                name: "Point2",
                data : [200]
            },
            {
                name: "Point3",
                data : [200]
            },
            {
                name: "Point4",
                data : [600]
            },
            {
                name: "Point4",
                data : [600]
            },
            {
                name: "Point4",
                data : [600]
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

export default BarRaceChart
