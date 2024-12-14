import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('سیبلسیلسt', 159, 6.0, 24, 4.0),
  createData('Ice سیلبسیلسیبل sandwich', 237, 9.0, 37, 4.3),
  createData('لیبل', 262, 16.0, 24, 6.0),
  createData('Cupcیبلیلake', 305, 3.7, 67, 4.3),
  createData('لیبل', 356, 16.0, 49, 3.9),
];

function TablePdf() {
  return (
    <TableContainer component={Paper}>
      <Table  sx={{color : '#b7d4e4'}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{fontFamily : 'fontIOS' , }} className='font-FontIos'>
            <TableCell sx={{fontFamily : 'fontIOS', fontWeight : 'bold' , color : '#b7d4e4'}} align='right'>نام فایل</TableCell>
            <TableCell sx={{fontFamily : 'fontIOS', fontWeight : 'bold' , color : '#b7d4e4'}} align="right">توضیحات</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell className='font-bold' sx={{fontFamily : 'fontIOS' }} align='right' >
                 {row.name}
              </TableCell>
              <TableCell sx={{fontFamily : 'fontIOS'}} align="right">{row.calories}</TableCell>
           
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablePdf
