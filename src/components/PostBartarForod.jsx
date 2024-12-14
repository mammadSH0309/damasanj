import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(name , enteshar, masraf ) {
    return {  name ,enteshar, masraf   };
  }
function PostBartarForod({height , type}) {
    const rows = [
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
        createData('خبرگزاری صداوسیما' , '23123' , '12313'),
     

    ]
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead className='' sx={{fontFamily : "fontIOS" , borderRadius : '25px' , display : 'sticky'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">نام</TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , paddingRight : 1}}  align="right">انتشار </TableCell>
          {type !== 'نهاد' ? <>
            <TableCell sx={{fontFamily : "fontIOS" ,paddingLeft : 0 }} align="right">مصرف</TableCell>
          </> : null}
         
       
     
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS",  fontSize :' 13px'}} component="th" align="right" scope="row">{row.name}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS", paddingRight : 1}} component="th" align="right" scope="row">{row.enteshar}</TableCell>
           {type !== 'نهاد' ? <>
            <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 2 }} align="right">{row.masraf}</TableCell>
           </> : null}
           
      
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default PostBartarForod
