import React from "react"


function FilterPlatform({color , height , width , textcolor , border , value , onChange }){

    return(
      <>
       <div style={{backgroundColor : color ? color : ''}} className={`p-1  ${color} rounded-2xl w-[140px] border ${border}   ${height} ${width ? width : 'w-[140px]'} flex rounded-lg  items-center`}>
         <select value={value} onChange={onChange}  style={{backgroundColor : color ? color : ''}} label="پلتفرم" className={`${width} text-[12px] w-full ${color}  ${textcolor} border-white`} >
            <option className={`${color} ` }>تلگرام</option>
            <option>توییتر</option>
        </select>
        </div>
      </>
    )
  }

  export default FilterPlatform