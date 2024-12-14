import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React from 'react'
function createData(name, body ) {
    return { name, body };
  }
function FaravaniText({data}) {
   
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , width : '100%', backgroundColor : 'white' , height : '340px' , borderRadius : '25px'  }} className='   overflow-scroll no-scrollbar '   >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" >
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px'}}>
        <TableRow className=''  >
        <TableCell sx={{fontFamily : "fontIOS" , width : '450px', }} align="right">عبارت</TableCell>
        <TableCell sx={{fontFamily : "fontIOS"  , paddingLeft : 6}} align="right">تعداد</TableCell>
  

       
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((data) => (
          <TableRow 
            key={data.title} 
            sx={{ '&:last-child td, &:last-child th': { width : '100%' } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '11px' }} component="th" align="right" scope="row">
              {data.title}
            </TableCell>
            <TableCell  sx={{fontFamily : "fontIOS" ,width : '30px' ,fontSize : '12px'}} align="right">{data.count}</TableCell>

     
         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default FaravaniText
