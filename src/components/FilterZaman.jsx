import React from "react"

function FilterZaman({color , height ,width , textcolor , border , value , onChange}){
    return(
      <>
        <div style={{backgroundColor : color ? color : ''}} className={`p-1  ${color} rounded-lg   border  ${border}   ${height} ${width ? width : 'w-[140px]'} flex  items-center`}>
         <select value={value} onChange={onChange} style={{backgroundColor : color ? color : ''}} label="مدت زمان" className={`w-full text-[12px] ${color} ${textcolor}  border-white`} >
            <option >امروز</option>      
            <option>هفته</option>         
        </select>
        </div>
      </>
    )
  }

export default FilterZaman