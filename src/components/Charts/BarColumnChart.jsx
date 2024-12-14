import React, { useEffect ,useRef, } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import useApiParams from '../../store'
import useNumPersian from '../../customhook/useNumPersian'
HighchartsExporting(Highcharts)

function BarColumnChart({
    backgroundButton, height , width , 
    marginTop, marginRight,marginBot,
     marginLeft ,data , datatest ,  url , color

}) {
    const {params , setParams} = useApiParams()
   
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
const chartRef = useRef(null);
const options = 
{
    navigation: {
        buttonOptions: {
            theme: {
           
                
                r: 5,
                  fill: backgroundButton ? backgroundButton : null ,
           
            }
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
            printChart : "پرینت نمودار",
            noData: 'دیتایی وجود ندارد '
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
            }

        },
        
        type: 'column',
        height : height ? height : '',
        width : width ? width : '', 
        styleMode : true, 

        marginTop : marginTop ? marginTop : null, 
        marginRight : marginRight ? marginRight : null,
        marginBot :  marginBot ? marginBot : null,
        marginLeft : marginLeft ? marginLeft : null ,
        style : {
            borderBottomLeftRadius : '25px',
            borderBottomRightRadius : '25px',
            fontFamily : 'IranSans_Light'
         
        }
    },
    credits: {
        // Remove highcharts.com credits link from chart footer.
        enabled: false,
      },
    title: {
        text: '',
        align: ''
    },
    legend : {
        enabled : false
    },
    subtitle: {
        text:
            '',
        align: ''
    },
    xAxis: {
        categories:  data ? data?.categories : datatest?.categories ,
       
       
    },
    yAxis: {
        text : {
            fontSize : '50px'
        },
        labels : {
            style : {
                fontSize : 15, 
                fontFamily : 'IranSans_Light'
            }
        },
        enabled : false , 
        min: 0,
       
    },
    tooltip: {
    
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
     
            series: {
                       color: color ? color : null,
                point : {
                    events : {
                        select : (e)=>{
                            console.log('dbclick on plotband')
                        },
                      
                        click: function (e) { 
                            console.log(e.point.category)
                            if(url.split('/')[5] == 'bestprograme'){
                                setParams({...params , 'prog' : e.point.category})
                                bestprograme
                            }if ( url.split('/')[5] == 'bestchannel'){
                                setParams({...params , 'ch' : e.point.category})
                            }if ( url.split('/')[5] == 'konesh'){
                                setParams({...params , 'user' : e.point.category})
                            }else {
                                return null
                            }
                                            
                        },
                      
                    }
                },
                lineWidth:10
            }
     
    },
    series:data ? data?.series : datatest?.data ,
}


useEffect(() => {
    if (chartRef.current && data?.length > 0) {
      chartRef.current.chart?.series[0].setData(data, true);
      chartRef.current.chart?.redraw();
    }
  }, [data]);
 
  return (
    <>
    <HighchartsReact
	highcharts={Highcharts}
	options={options}
    ref={chartRef}
    key={JSON.stringify(data)}
/>
    </> 
  )
}

export default BarColumnChart
