import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
function createData(name , jaryan, follower , entershar , masraf) {
    return {  name ,jaryan, follower  , entershar , masraf };
  }
function KarbaranAsarGozarForod({height}) {
    const rows = [
    createData(
       <div className='flex-row w-[75px] '>
       <span>حامین مدیا</span>
       <br />
     <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
     </div>
        ,
       <div className='flex-row  text-[11px] '>
       <span>تولید</span>
     </div>
        , '۸۲۲۲ ' , '۸۲' , '۸۲'),
        createData(
          <div className='flex-row w-[75px] '>
          <span>حامین مدیا</span>
          <br />
        <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
        </div>
           ,
          <div className='flex-row  text-[11px] '>
          <span>تولید</span>
        </div>
           , '۸۲۲۲ ' , '۸۲' , '۸۲'),
           createData(
            <div className='flex-row w-[75px] '>
            <span>حامین مدیا</span>
            <br />
          <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
          </div>
             ,
            <div className='flex-row  text-[11px] '>
            <span>تولید</span>
          </div>
             , '۸۲۲۲ ' , '۸۲' , '۸۲'),
             createData(
              <div className='flex-row w-[75px] '>
              <span>حامین مدیا</span>
              <br />
            <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
            </div>
               ,
              <div className='flex-row  text-[11px] '>
              <span>تولید</span>
            </div>
               , '۸۲۲۲ ' , '۸۲' , '۸۲'),
               createData(
                <div className='flex-row w-[75px] '>
                <span>حامین مدیا</span>
                <br />
              <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
              </div>
                 ,
                <div className='flex-row  text-[11px] '>
                <span>تولید</span>
              </div>
                 , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                 createData(
                  <div className='flex-row w-[75px] '>
                  <span>حامین مدیا</span>
                  <br />
                <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                </div>
                   ,
                  <div className='flex-row  text-[11px] '>
                  <span>تولید</span>
                </div>
                   , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                   createData(
                    <div className='flex-row w-[75px] '>
                    <span>حامین مدیا</span>
                    <br />
                  <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                  </div>
                     ,
                    <div className='flex-row  text-[11px] '>
                    <span>تولید</span>
                  </div>
                     , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                     createData(
                      <div className='flex-row w-[75px] '>
                      <span>حامین مدیا</span>
                      <br />
                    <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                    </div>
                       ,
                      <div className='flex-row  text-[11px] '>
                      <span>تولید</span>
                    </div>
                       , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                       createData(
                        <div className='flex-row w-[75px] '>
                        <span>حامین مدیا</span>
                        <br />
                      <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                      </div>
                         ,
                        <div className='flex-row  text-[11px] '>
                        <span>تولید</span>
                      </div>
                         , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                         createData(
                          <div className='flex-row w-[75px] '>
                          <span>حامین مدیا</span>
                          <br />
                        <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                        </div>
                           ,
                          <div className='flex-row  text-[11px] '>
                          <span>تولید</span>
                        </div>
                           , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                           createData(
                            <div className='flex-row w-[75px] '>
                            <span>حامین مدیا</span>
                            <br />
                          <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                          </div>
                             ,
                            <div className='flex-row  text-[11px] '>
                            <span>تولید</span>
                          </div>
                             , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                             createData(
                              <div className='flex-row w-[75px] '>
                              <span>حامین مدیا</span>
                              <br />
                            <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                            </div>
                               ,
                              <div className='flex-row  text-[11px] '>
                              <span>تولید</span>
                            </div>
                               , '۸۲۲۲ ' , '۸۲' , '۸۲'),

                               createData(
                                <div className='flex-row w-[75px] '>
                                <span>حامین مدیا</span>
                                <br />
                              <span className='text-[11px] mr-1 text-stone-400'>رسانه</span>
                              </div>
                                 ,
                                <div className='flex-row  text-[11px] '>
                                <span>تولید</span>
                              </div>
                                 , '۸۲۲۲ ' , '۸۲' , '۸۲'),
                                 
        
    ]
  return (
    <>
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height}  overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full '  size="small" aria-label="a dense table">
      <TableHead className='' sx={{fontFamily : "fontIOS" , borderRadius : '25px' , display : 'sticky'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS" , width : 1}}  align="right">نام </TableCell>
          <TableCell sx={{fontFamily : "fontIOS", width : 10}}  align="right">جریان </TableCell>
          <TableCell sx={{fontFamily : "fontIOS", width : 10 }} align="right">فالوور</TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , width :1,}} align="right">انتشار</TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , width : 2 }} align="right">مصرف</TableCell>
       
     
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row , index) => (
          <TableRow 
            key={index} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS" , width : 2}} component="th" align="right" scope="row">{row.name}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , width : 10}} component="th" align="right" scope="row">{row.jaryan}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , width : 10}} align="right">{row.follower}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS", width : 10 }} align="right">{row.entershar}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" , width : 1 , paddingLeft : 8}} align="right">{row.masraf}</TableCell>
      
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </>
  )
}

export default KarbaranAsarGozarForod
