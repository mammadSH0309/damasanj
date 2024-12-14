import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '@mui/material';
import naft from '../assets/images/naft.jpeg'
function createData(logo , name , shabake  , barname , followers , view , like , enteshar , comment , link) {
    return { logo , name , shabake  , barname , followers , view , like , enteshar , comment , link  };
  }
function AccountSazmanList({height }) {
    const rows = [
        createData(
            <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
            <>
            <div className='flex-row w-32'>
              <span>سید خندان</span>
              <br />
            <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
            </div>
            </>
            ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
            createData(
              <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
              <>
              <div className='flex-row w-32'>
                <span>سید خندان</span>
                <br />
              <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
              </div>
              </>
              ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
              createData(
                <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                <>
                <div className='flex-row w-32'>
                  <span>سید خندان</span>
                  <br />
                <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                </div>
                </>
                ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                createData(
                  <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                  <>
                  <div className='flex-row w-32'>
                    <span>سید خندان</span>
                    <br />
                  <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                  </div>
                  </>
                  ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                  createData(
                    <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                    <>
                    <div className='flex-row w-32'>
                      <span>سید خندان</span>
                      <br />
                    <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                    </div>
                    </>
                    ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                    createData(
                      <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                      <>
                      <div className='flex-row w-32'>
                        <span>سید خندان</span>
                        <br />
                      <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                      </div>
                      </>
                      ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                      createData(
                        <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                        <>
                        <div className='flex-row w-32'>
                          <span>سید خندان</span>
                          <br />
                        <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                        </div>
                        </>
                        ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                        createData(
                          <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                          <>
                          <div className='flex-row w-32'>
                            <span>سید خندان</span>
                            <br />
                          <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                          </div>
                          </>
                          ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                          createData(
                            <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                            <>
                            <div className='flex-row w-32'>
                              <span>سید خندان</span>
                              <br />
                            <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                            </div>
                            </>
                            ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                            createData(
                              <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                              <>
                              <div className='flex-row w-32'>
                                <span>سید خندان</span>
                                <br />
                              <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                              </div>
                              </>
                              ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                              createData(
                                <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                                <>
                                <div className='flex-row w-32'>
                                  <span>سید خندان</span>
                                  <br />
                                <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                                </div>
                                </>
                                ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
                                createData(
                                  <Avatar  sx={{ width: 40, height: 40 }} alt="Remy Sharp" src={naft} />,
                                  <>
                                  <div className='flex-row w-32'>
                                    <span>سید خندان</span>
                                    <br />
                                  <span className='text-[11px] mr-1 text-stone-400'>اطلاع رسانی</span>
                                  </div>
                                  </>
                                  ,'شبکه 2','سید خندان','۲۸', '۲۸','۲۸','۲۸','۲۸', ),
            
           
        
      ];
  return (
    <TableContainer sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className={`  ${height} w-full overflow-scroll no-scrollbar `} >
    
    <Table sx={{fontFamily : "fontIOS" , borderRadius : '25px'}} className='h-full w-full'  size="small" aria-label="a dense table">
      <TableHead sx={{fontFamily : "fontIOS" , borderRadius : '25px'}}>
        <TableRow >
          <TableCell sx={{fontFamily : "fontIOS"}}  align="right">لوگو </TableCell>
          <TableCell sx={{fontFamily : "fontIOS" , paddingLeft : 12 ,}} align="right">نام اکانت</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">شبکه</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">برنامه</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">دنبال کننده </TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">بازدید</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">لایک</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">انتشار</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">کامنت</TableCell>
          <TableCell sx={{fontFamily : "fontIOS"}} align="right">لینک</TableCell>
     
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow 
            key={row.name} 
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell sx={{fontFamily : "fontIOS"}} component="th" align="right" scope="row">{row.logo}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS" }} align="right">{row.name}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.shabake}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.barname}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.followers}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.view}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.like}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.enteshar}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">{row.comment}</TableCell>
            <TableCell sx={{fontFamily : "fontIOS"}} align="right">
                <div className='bg-[#d7eaf9] p-1 rounded-md flex justify-center'>
                <a href={row.link}>بازکردن لینک</a>
                </div>
            </TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default AccountSazmanList
