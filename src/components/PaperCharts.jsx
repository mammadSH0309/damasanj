import { Paper } from '@mui/material'
import React from 'react'

function PaperCharts({height , title  , titlejustify, titlewidth , chart , bgcolor, rounded  , bgtitle , style}) {
  return (
    <Paper  sx={{borderRadius : rounded ? rounded : '25px', backgroundColor : bgcolor ? bgcolor : 'white' , width : '100%'}}  className={`  ${height}    group   ${rounded ? rounded : `rounded-[25px]`}  w-full ${style}  duration-300     justify-center    hover:transition-all hover:duration-300 hover:shadow-2xl `} >
    {title ? <>
     <div className={`${titlejustify ? titlejustify : 'justify-center'} w-full`}>
     <div style={{backgroundColor : bgtitle ? bgtitle : ''}}  className={`${bgtitle ? bgtitle : ''} text-white font-IranSansBold flex  ${titlewidth?  titlewidth  : ''} text-[15px] justify-center   font-bold  items-center drop-shadow-lg  h-8 rounded-t-[25px]`}>
            {title} 
     </div>
     </div>
    </> : 
    <>
    </>
    }
    <div className=''>
    {chart}
    </div>
    </Paper>
  )
}

export default PaperCharts
