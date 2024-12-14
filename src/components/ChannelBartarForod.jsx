
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useLocation } from 'react-router-dom';

function createData(name , category, follower , entershar , masraf) {
    return {  name ,category, follower  , entershar , masraf };
  }
function ChannelBartarForod({height , data }) {
  const location = useLocation()

    const rows = data.map((data)=> 
      createData(
        <div className='flex-row w-[100px]'>
        <span>{data.name}</span>
        <br />
      <span className='text-[11px] mr-1  text-stone-400'>{data.subname}</span>
      </div>
         ,
        <div className='flex-row  text-[11px] w-[100px]'>
        <span> {data.category} </span>
      </div>
         , 
         data.follower , 
         data.enteshar , 
         '۸۲'
        ),
    
  )
      
      
            
        
    
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead className='' sx={{fontFamily : "fontIOS" , borderRadius : '25px' , display : 'sticky'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">نام </TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 0 ,}}  align="right">دسته </TableCell>
          <TableCell sx={{fontFamily : "fontIOS" ,paddingLeft :1 }} align="right">فالوور</TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 0 , }} align="right">{location.pathname.split('/')[2] == 'forodostan' ? 'مصرف' : 'انتشار'}</TableCell>
          {/* <TableCell sx={{fontFamily : "fontIOS"  , paddingLeft : 2}} align="right">مصرف</TableCell> */}
       
     
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" }} component="th" align="right" scope="row">{row.name}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , paddingRight : 0}} component="th" align="right" scope="row">{row.category}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" }} align="right">{row.follower}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , justifyContent : 'center' , alignItems : 'center'}} align="right">{row.entershar}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default ChannelBartarForod
