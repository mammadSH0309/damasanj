import { Avatar, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

function AvatarList({height , data}) {
   
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'  , height : height }} className='  overflow-scroll no-scrollbar'  >

    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px' }} className='h-full w-full'  size="medium" >
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px'}}>
        <TableRow className=''  >
        <TableCell sx={{fontFamily : "fontIOS"  }} align="right">تصویر</TableCell>
        <TableCell sx={{fontFamily : "fontIOS"  ,width : '30px' ,  paddingLeft : 15 }} align="right">نام</TableCell>
        <TableCell sx={{fontFamily : "fontIOS" ,}} align="right">انتشار</TableCell>
        <TableCell sx={{fontFamily : "fontIOS" , }} align="right">مصرف</TableCell>
        <TableCell sx={{fontFamily : "fontIOS" , }} align="right">مثبت</TableCell>     
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((data) => (
          <TableRow 
            key={data.name} 
            sx={{ '&:last-child td, &:last-child th': { width : '100%' } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" ,fontSize : '1px'}} component="th" align="right" scope="row">
            <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={data.img} />
            </TableCell>
            <TableCell  sx={{fontFamily : "fontIOS" ,fontSize : '13px'}} align="right">{data.name}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"  ,width : '40px'}} align="right">{data.enteshar}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" ,width : '30px'}} align="right">{data.masraf}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" ,paddingLeft : 3}} align="right">{data.mosbat}</TableCell>
           
         
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AvatarList
