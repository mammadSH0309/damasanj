import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';
import jebeli from '../assets/images/jebeli.png'
import { useLocation } from 'react-router-dom';
function createData(name , category, follower , entershar , masraf) {
    return {  name ,category, follower  , entershar , masraf };
  }
function OstanBartar({data , height}) {

   


  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead className='' sx={{fontFamily : "fontIOS" , borderRadius : '25px' , display : 'sticky'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">نام استان </TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 0,}}  align="right">انتشار</TableCell>
          <TableCell sx={{fontFamily : "fontIOS" ,paddingLeft :0 }} align="right">مصرف</TableCell>
       
     
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow 
            key={row.name} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" }} component="th" align="right" scope="row">{row.name}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" }} component="th" align="right" scope="row">{row.masraf}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" }} align="right">{row.enteshar}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default OstanBartar
