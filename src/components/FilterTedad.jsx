import React from 'react'

function FilterTedad({color , height , width , textcolor , border}) {
  return (
<div className={`p-1 rounded-[25px]  ${color} rounded-2xl w-[140px] border ${border}   ${height} ${width ? width : 'w-[140px]'} flex rounded-lg  items-center`}>
         <select label="تعداد" className={`${width} text-[12px] w-full ${color}  ${textcolor} border-white`} >
            <option selected className={`${color} ` }>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          
        </select>
        </div>
  )
}

export default FilterTedad
