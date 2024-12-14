import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';

import { useLocation } from 'react-router-dom';
import { TableRow } from '@mui/material';
function FaravaniEbaratForod({height , data}) {
  const {pathname} = useLocation()

  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead className='' sx={{fontFamily : "fontIOS" , borderRadius : '25px' , display : 'sticky'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">
          {pathname.split('/')[2] == 'forodostan' ? 'نام استان' : 'عبارات'}
          </TableCell>
          <TableCell sx={{fontFamily : "fontIOS" }}  align="right">
          {pathname.split('/')[2] == 'forodostan' ? 'انتشار' : 'تعداد'}
          </TableCell>
          <TableCell sx={{fontFamily : "fontIOS" }} align="right">
          {pathname.split('/')[2] == 'forodostan' ? 'مصرف' : 'رشد'}
          </TableCell>
         
       
     
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS"  }} component="th" align="right" scope="row">{row.ebarat}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} component="th" align="right" scope="row">{row.tedad}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , }} align="right">{row.roshd}</TableCell>
           
      
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default FaravaniEbaratForod
