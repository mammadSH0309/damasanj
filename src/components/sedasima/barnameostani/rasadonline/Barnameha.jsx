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
    createData('خبر فارسی', '5,505', 'استانی سهند' ),
    createData('سحر لر', '5,269', 'استانی سهند'),
    createData('خبر استان', '766', 'استانی سهند' ),
    createData(' چای نبات', '1,167', 'استانی سهند' ),
    createData('شلاله لر', '1,766', 'استانی سهند' ),
    createData('پاشیلیق', '1,029', 'استانی سهند' ),
    createData('دوربین مخفی', '1,658', 'استانی سهند' ),
 

    
  ];

function Barnameha({title1 , title2 , height , title3}) {
  return (
    
  <> 
    <TableContainer sx={{fontFamily : "IranSans_Light" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "IranSans_Light" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead sx={{fontFamily : "IranSans_Light" , borderRadius : '25px'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "IranSans_Light"}}  align="right">{title1}</TableCell>
          <TableCell sx={{fontFamily : "IranSans_Light"}} align="right">{title2}</TableCell>
          {title3 ? <TableCell sx={{fontFamily : "IranSans_Light"}} align="right">{title3}</TableCell> : null}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "IranSans_Light"}} component="th" align="right" scope="row">
              {row.name}
            </TableCell>
            <TableCell sx={{fontFamily : "IranSans_Light"}} align="right">{row.masraf}</TableCell>
            {title3 ? <TableCell sx={{fontFamily : "IranSans_Light"}} align="right">{row.shabake}</TableCell> : null}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
  )
}

export default Barnameha


