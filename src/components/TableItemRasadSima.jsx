import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';



function createData(name, masraf , shabake) {
    return { name, masraf , shabake  };
  }
  
  const rows = [
    createData('سریال طوبی ', '9,251,360', 'شبکه یک' ),
    createData('سریال غریبه ', '3,452,628', 'شبکه سه' ),
    createData('پاورقی', '2,100,073', 'شبکه دو' ),
    createData('جریان به افق', '2,542,320', 'شبکه یک' ),
  
    createData('فلسطین', '9,325,714', 'شبکه افق' ),
    createData('فوتبال برتر', '1,950,490', 'شبکه سه' ),

    
  ];

function TableItemRasadSima({title1 , title2 , height , title3}) {
  return (
    
  <> 
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">{title1}</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">{title2}</TableCell>
          {title3 ? <TableCell sx={{fontFamily : "fontIOS"}} align="right">{title3}</TableCell> : null}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS"}} component="th" align="right" scope="row">
              {row.name}
            </TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.masraf}</TableCell>
            {title3 ? <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.shabake}</TableCell> : null}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default TableItemRasadSima


{/* <div className='bg-yellow-400 flex justify-center text-[15px]  items-center drop-shadow-lg  h-8 rounded-t-2xl'>
برترین برنامه ها
</div>  */}