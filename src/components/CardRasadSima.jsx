import React from 'react'
import baztab from '../assets/images/baztab.png'
import oprator from '../assets/images/oprator.png'
import { Grid , Button} from '@mui/material'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


function CardRasadSima({data , index}) {

    const navigate = useNavigate()
  return (
   <>
   <Grid>
   <ToastContainer autoClose={3000}/>
    <Grid key={index}  style={{direction: 'ltr' , fontFamily : 'fontIOS'}}    className='     bg-[#f6f7f6] rounded-[11px]' >
                <Grid   className="justify-content-center flex  p-1 ">
                    <Grid >
                        <Grid  style={{ borderRadius: '15px' }}>
                            <Grid   className="p-2  ">
                            <div  className="d-flex flex text-black ">
                            <div className="   flex-shrink-0">
                            <img className='flex mt-3 pb-1 pr-1  mx-2 m-2'
                            style={{ width: '135px', borderRadius: '10px' ,height: '135px' }}
                            src={data.img}
                            alt='Generic placeholder image'
                            />
                             </div>
                             <div style={{direction: 'rtl' , fontFamily : 'fontIOS'}}  className=" flex-grow-1 ms-1">
                            <Grid className=' pt-1 h-10 w-[200px] text-[16px]  flex justify-end '>
                            <div className='flex items-center self-center'>
                               
                                <div className='pl-2'>
                                {data.state == 'online' ? <FontAwesomeIcon icon={faCircle} beatFade style={{color: "green",   marginTop : 5}} width={12}  /> : <FontAwesomeIcon icon={faCircle}  style={{color: "#bdbdbd",   marginTop : 5}} width={12}  />}
                                </div>
                                <div  className='font-Calibri text-[18px] pl-1'>
                                    {data.state}
                                </div>
                            </div>
                            {/* bg-[#55AD9B] */}
                            </Grid>
                         <div className="d-flex flex justify-center rounded-[10px]   py-[13px] font-IranSansBold text-[16px]   justify-content-start  bg-[#ffffff] text-[#26726e]   p-1 mb-2 m-1  "
                             style={{ backgroundColor: '' }}>
                            
                       
                            {data.title}
                          
                        </div>
                         <div className="d-flex flex justify-center pt-2  gap-2">
                            <Button disabled  color='primary' variant='outlined' sx={{backgroundColor : '#D8EFD3' , color : '#55AD9B' ,fontFamily : 'fontIOS' , fontSize : '12px'  , borderRadius : '10px'}}  className="me-1 flex flex-grow-1">اشتراک </Button>
                            <Button
                            onClick={()=>{
                                if(data.link == 'asarsanji'){
                                    toast.error("دسترسی به این بخش امکان پذیر نیست");
                                    
                                }else {
                                    navigate(data.link)
                                }
                            }}
                            color='primary' variant='outlined'
                            sx={{backgroundColor : '#D8EFD3' , color : '#084538',fontFamily : 'IranSans_bold' , fontSize : '12px' , borderRadius : '10px' , fontStyle : 'bold' , }}
                            className="flex-grow-1 flex hover:bg-[#c842e3] ">ورود</Button>
                          
                            </div>
                        </div>
                        </div>
                            </Grid>
                            
                        </Grid>
                    </Grid>
                </Grid>
    </Grid>
   </Grid>
   </>
  )
}

export default CardRasadSima


