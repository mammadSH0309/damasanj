import React from 'react'
import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
function createData(name, itemcount , viewcount , viewdate ) {
    return { name, itemcount , viewcount , viewdate  };
  }
function NamayeBarnameList({height}) {
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
       ];
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'  , height : height }} className='  overflow-scroll no-scrollbar'  >

    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px' }} className='h-full w-full'  size="medium" >
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px'}}>
        <TableRow className=''  >
        <TableCell sx={{fontFamily : "fontIOS" ,  paddingRight : 5  ,fontSize : '12px'}} align="right">مدت بازدید</TableCell>
        <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '12px'}} align="right">تعداد بازدید</TableCell>
        <TableCell sx={{fontFamily : "fontIOS"  ,  paddingLeft : 2,fontSize : '12px' }} align="right">تعداد قطعات</TableCell>
        <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '12px' }} align="right">نام برنامه</TableCell>
     
       
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow 
            key={row.name} 
            sx={{ '&:last-child td, &:last-child th': { width : '100%' } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" , paddingRight : 5,fontSize : '12px'}} align="right">{row.viewdate}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 15,fontSize : '12px'}} align="right">{row.viewcount}</TableCell>
            <TableCell  sx={{fontFamily : "fontIOS" ,fontSize : '12px' , paddingLeft : 12}} align="right">{row.itemcount}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '12px' , paddingLeft : 4,}} component="th" align="right" scope="row">{row.name}</TableCell>
      
         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default NamayeBarnameList
