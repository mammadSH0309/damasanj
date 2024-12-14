import React, { useEffect, useMemo, useState } from 'react'
import wordcloud from 'highcharts/modules/wordcloud'
import HighchartsReact from 'highcharts-react-official'
import Highcharts from 'highcharts'
import useApiParams from '../store'
import { useLocation } from 'react-router-dom'
wordcloud(Highcharts)
function WordCloudForod({padding , height , width , marginTop, marginRight,marginBot, marginLeft , cat , colorBar, data}) {
    
    const [formattedData, setFormattedData] = useState([]);
    const {params , setParams} = useApiParams()
    const {pathname} = useLocation()
   
    useEffect(() => {
      const worker = new Worker(new URL('./wordcloudWorker.js', import.meta.url));
      worker.postMessage(data);
      worker.onmessage = (event) => {
        setFormattedData(event.data);
      };
      return () => {
        worker.terminate();
      };
    }, [data]);


    
    
    const options = useMemo(()=>({
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
                fontFamily : 'IranSans_Light'
             
            }
        },
        accessibility: {
            screenReaderSection: {
                beforeChartFormat: ''
            }
        },
        credits: {
            // Remove highcharts.com credits link from chart footer.
            enabled: false,
          },
        series: [{
            type: 'wordcloud',
            fontFamily : 'IranSans_Light',
            style : {
                fontFamily : 'IranSans_Light'
            },

            data : data ? data : [
                {
                    name : 'ازدواج ' , 
                    weight : 10
                },
                {
                    name : 'تشکیل خانواده' , 
                    weight : 12
                },
                {
                    name : 'طنز' , 
                    weight : 41
                },
                {
                    name : 'شکایت' , 
                    weight : 40
                },
                {
                    name : 'حقوق' , 
                    weight : 50
                },

                {
                    name : 'طلاق' , 
                    weight : 12
                },
                {
                    name : 'اقتصاد' , 
                    weight : 30
                },
                {
                    name : 'رسانه' , 
                    weight : 50
                },

                {
                    name : 'حمایت' , 
                    weight : 9
                },
                {
                    name : 'مشکلات' , 
                    weight : 12
                },

            ]
        
        }],
        title: {
            text: '',
            align: ''
        },
        subtitle: {
            text: '',
            align: ''
        },
        tooltip: {
            headerFormat: '<span style="font-size: 16px"><b>{point.key}</b>' +
                '</span><br>'
        },
        plotOptions: {
            series: {
              cursor: 'pointer',
              point: {
                events: {
                  click: function(e) {
                    if (pathname.split('/')[2] == 'otaghvaziat'){
                        setParams({...params , 'ex' : e.point.name})
                    }
                
               
                  
                  }
                }
              }
            }
          },
    
    }))
  return (
    
    <HighchartsReact
	highcharts={Highcharts}
	options={options}
/>
  )
}

export default WordCloudForod
