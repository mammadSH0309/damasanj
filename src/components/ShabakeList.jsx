import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import useNumPersian from '../customhook/useNumPersian'
import useApiParams from '../store'
import _, { debounce } from 'lodash'

  
function ShabakeList({ data , height , width  , }) {
 const {params , setParams} = useApiParams()
 

const title = Object.values(data?.characterise)
const handleParams = (i, value)=>{
  switch(title[i]){
    case 'کانال' : return setParams({'ch' : value})
    case 'نام کانال' : return setParams({'ch' : value})
    case 'پلتفرم' : return setParams({'plat' : value})
    case 'برنامه' : return setParams({'prog' : value})
    case 'عبارت' : return setParams({'ex' : value})
  }
}
  return (
    <TableContainer 
    
    sx={{fontFamily : "IranSans_Light" , 
      borderBottomLeftRadius : '25px', 
      borderBottomRightRadius : '25px', 
      width : width ? width : null
       }} className= {`  ${height}   w-fit  overflow-scroll no-scrollbar border-l-2  `} >
 
    <Table  align="right" sx={{fontFamily : "IranSans_Light" , }} className='h-full w-full'  size="small" >
      <TableHead align="right" sx={{fontFamily : "IranSans_Light" , borderRadius : '25px' }}>
        <TableRow align="right" sx={{fontFamily :'IranSans_Light', }} className=''  >
        {
          data?.characterise?.map((i , index)=> (
            <>
            <TableCell align="right" key={index} sx={{fontFamily : "IranSans_medium" , fontSize : 13 ,backgroundColor : 'black' , color : 'whitesmoke' }}>{i}</TableCell>
            </>
          ))
        }
        
       
        </TableRow>
      </TableHead >
      <TableBody align="right" sx={{fontFamily :'IranSans_Light' }}>
          {data?.data?.map((row, rowIndex) => (
            <TableRow  align="right" sx={{fontFamily :'IranSans_Light',  backgroundColor : `${rowIndex % 2 == 0 ? 'white' : '#D3D3D3'}` , }}  key={rowIndex}>
              {/* {console.log(Object.keys(row))} */}
              {Object?.values(row).map((value, cellIndex) => (
                
                <TableCell onclic align="right" className='cursor-context-menu'
                onClick={()=> {
                  handleParams(cellIndex , value)
               

                }} sx={{fontFamily : "IranSans_Light" , fontSize : 12.8}} key={cellIndex}>
                  {typeof(value) == 'number' ? useNumPersian(value) :  value}
                  </TableCell>
              ))}
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </TableContainer>
  
  )
}

export default ShabakeList
