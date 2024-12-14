import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsBoost from "highcharts/modules/boost";
HighchartsBoost(Highcharts);
HighchartsExporting(Highcharts)
function BubbleChart({padding , height , width , marginTop, marginRight,marginBot, marginLeft , cat , colorBar}) {

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
        boost: {
            useGPUTranslations: true,
            usePreAllocated: true
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
      type: 'bubble',
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
          fontFamily : 'iranSans_light'
       
      },
      plotBorderWidth: 1,
      zooming: {
          type: 'xy'
      }
  },
  credits: {
    // Remove highcharts.com credits link from chart footer.
    enabled: false,
  },
  
  series: [{ 
   
    data: [
        { x: 95, y: 95, z: 13.8, name: 'BE', country: 'Belgium' },
        { x: 86.5, y: 102.9, z: 14.7, name: 'DE', country: 'Germany' },
        { x: 80.8, y: 91.5, z: 15.8, name: 'FI', country: 'Finland' },
        { x: 80.4, y: 102.5, z: 12, name: 'NL', country: 'Netherlands' },
        { x: 80.3, y: 86.1, z: 11.8, name: 'SE', country: 'Sweden' },
        { x: 78.4, y: 70.1, z: 16.6, name: 'ES', country: 'Spain' },
        { x: 74.2, y: 68.5, z: 14.5, name: 'FR', country: 'France' },
        { x: 73.5, y: 83.1, z: 10, name: 'NO', country: 'Norway' },
        { x: 71, y: 93.2, z: 24.7, name: 'UK', country: 'United Kingdom' },
        { x: 69.2, y: 57.6, z: 10.4, name: 'IT', country: 'Italy' },
        { x: 68.6, y: 20, z: 16, name: 'RU', country: 'Russia' },
        {
            x: 65.5,
            y: 126.4,
            z: 35.3,
            name:
                'US',
            country: 'United States'
        },
        { x: 65.4, y: 50.8, z: 28.5, name: 'HU', country: 'Hungary' },
        { x: 63.4, y: 51.8, z: 15.4, name: 'PT', country: 'Portugal' },
        { x: 64, y: 82.9, z: 31.3, name: 'NZ', country: 'New Zealand' }
    ],
    colorByPoint: true
}]
  }
  
   
      
      
  
      return (
    
        <HighchartsReact
	highcharts={Highcharts}
	options={options}
/>
      )
}

  


export default BubbleChart
