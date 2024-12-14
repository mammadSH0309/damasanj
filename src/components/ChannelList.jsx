import React from 'react'
import jalili from '../assets/images/jalili.png'
import jebeli from '../assets/images/jebeli.png'
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
function createData(name, content , viewcount , viewdate ) {
    return { name, content , viewcount , viewdate  };
  }
function ChannelList({height}) {
    const rows = [
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , ), 
        createData('تست1', '۲۲', '۲۲' , '۲۲' , )                   
      ];
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'  , height : height }} className='  overflow-scroll no-scrollbar'  >

    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px' }} className='h-full w-full'  size="medium" >
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px' , }}>
        <TableRow className=''  >
        <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '12px' }} align="right"> مدت بازدید</TableCell>
        <TableCell sx={{fontFamily : "fontIOS"  ,width : '40px' ,  paddingLeft :2,fontSize : '12px' }} align="right">تعداد بازدید </TableCell>
        <TableCell sx={{fontFamily : "fontIOS" ,  paddingLeft : 5 ,fontSize : '12px'}} align="right">تعداد محتوا</TableCell>
        <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '12px' }} align="right">نام کانال</TableCell>
     
       
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow 
            key={row.name} 
            sx={{ '&:last-child td, &:last-child th': { width : '100%' } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '12px'}} component="th" align="right" scope="row">{row.viewdate}</TableCell>
            <TableCell  sx={{fontFamily : "fontIOS"  ,fontSize : '12px' , paddingLeft : 10 ,}} align="right">{row.viewcount}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , paddingLeft :11,fontSize : '12px' }} align="right">{row.content}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 4 ,fontSize : '12px'}} align="right"> {row.name}</TableCell>
      
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ChannelList
