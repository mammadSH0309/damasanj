import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function AbrList({data, height}) {
  return (   
  <> 
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} > 
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">کلمات</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">مصرف</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS"}} component="th" align="right" scope="row">
              {row.title}
            </TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.count}</TableCell>
       
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default AbrList


{/* <div className='bg-yellow-400 flex justify-center text-[15px]  items-center drop-shadow-lg  h-8 rounded-t-2xl'>
برترین برنامه ها
</div>  */}