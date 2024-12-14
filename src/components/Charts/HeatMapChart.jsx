import React, { useMemo } from 'react'
import HighchartsReact from 'highcharts-react-official'
import HighchartsHeatmap from "highcharts/modules/heatmap";
import Highcharts from "highcharts";
import HighchartsExporting from 'highcharts/modules/exporting'
import { cloneDeep } from 'lodash';
HighchartsExporting(Highcharts)
HighchartsHeatmap(Highcharts);
function HeatMapChart({
  minColor, 
  width , 
  height , 
  catY,
  catX,
maxColor,
}) {
 
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
      events: {
        load() {
          
            return (<>لودینگ</>)
        },
        render(){
            return (<>لودینگ</>)
        }

    },
    
        type: "heatmap",
        marginTop: 10,
        marginBottom: 40,
        plotBorderWidth:1,
        width : width ? width : '',
      height : height ? height : '',
        styleMode : true , 
        style : {
            borderBottomLeftRadius : '25px',
            borderBottomRightRadius : '25px',
            fontFamily  : 'fontIOS' 
        }
      },

      title: {
        text: ""
      },
      credits: {
        // Remove highcharts.com credits link from chart footer.
        enabled: false,
      },
      xAxis: {
        gridLineColor : "",
        categories: catX
        // [
        //   "شنبه",
        //   "یک شنبه",
        //   "دو شنبه",
        //   "سه شنبه",
        //   "چهار شنبه",
        //   "پنچ شنبه",
        //   "جمعه",
   
        // ]
      },
      // ["ساترا", "سریال", "مدیران", "فضای مجازی", "حواشی"]
      yAxis: {
        categories: catY,
        title: null,
        reversed: true
      },

      colorAxis: {
        min: 20,
        minColor:minColor, 
        maxColor: maxColor 
      },

      legend: {
        align: "right",
        layout: "vertical",
        margin: 0,
        verticalAlign: "top",
        y: 25,
        symbolHeight: 280
      },

      series: [
        {
          name: "",
          borderWidth: 0,
          data: [
            [0, 0, 10],
            [0, 1, 19],
            [0, 2, 8],
            [0, 3, 24],
            [0, 4, 67],
            [1, 0, 92],
            [1, 1, 58],
            [1, 2, 78],
            [1, 3, 117],
            [1, 4, 48],
            [2, 0, 35],
            [2, 1, 15],
            [2, 2, 123],
            [2, 3, 64],
            [2, 4, 52],
            [3, 0, 72],
            [3, 1, 132],
            [3, 2, 114],
            [3, 3, 19],
            [3, 4, 16],
            [4, 0, 38],
            [4, 1, 5],
            [4, 2, 8],
            [4, 3, 17],
            [4, 4, 18],
           
          
             
          ],
          dataLabels: {
            enabled: true,
            color: "#000000"
          }
        }
      ],

}

const chartOptions = useMemo(()=> {
  const chartOptions = cloneDeep(options)
  return chartOptions
} , [options])
    
  return (
    <HighchartsReact
	highcharts={Highcharts}
	options={chartOptions}
/>
  )
}

export default HeatMapChart
