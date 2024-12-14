import {   Button, Divider, Grid, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import TableParvande from '../../components/TableParvande'
import { FaTowerObservation } from "react-icons/fa6";
import { AiFillAudio } from "react-icons/ai";
import { Link, NavLink, useNavigate } from 'react-router-dom';
function ParvandePage() {

    const navigate = useNavigate()

    const data = [
        {
            id : '1',
            title : 'زیست بوم بازی' ,
            dec : 'گزارش زیست بوم بازی',
            countOn : '2',
            count : '4'
        },
        {
            id : '2',
            title : 'زیست بوم آموزش' ,
            dec : 'گزارش زیست بوم آموزش',
            countOn : '2',
            count : '4'
        },
        {
            id : '3',
            title : 'زیست بوم محتوای حرفه ای' ,
            dec : 'گزارش زیست بوم حرفه ای',
            countOn : '2',
            count : '4'
        },

        {
            id : '4',
            title : 'زیست بوم محتوای مردمی' ,
            dec : 'گزارش زیست بوم محتوای مردمی',
            countOn : '2',
            count : '4'
        },
        {
            id : '5',
            title : 'ویژه معاونت' ,
            dec : 'گزارش ویژه معاونت',
            countOn : '2',
            count : '4'
        },
        {
            id : '6',
            title : 'ویژه مسائل فرهنگی' ,
            dec : 'گزارش مسائل فرهنگی کشور',
            countOn : '2',
            count : '4'
        },
        {
            id : '7',
            title : 'زیست بوم بین الملل' ,
            dec : 'گزارش زیست بوم بین الملل',
            countOn : '2',
            count : '4'
        },

        
    ]


  


  return (
    <Grid container>
        <Grid md={12} lg={9}>
            
            <div className='p-10 w-full'>
                
                {/* <TableParvande/> */}
                <div className=' p-2  rounded-md border border-[#b7d4e4] h-auto'>
                    
                    <Grid className='pb-2 text-[#b7d4e4] ' sx={{fontSize : '13px'}} container>
                    <Grid md={3} lg={3} className='pr-20'>
                    دسترسی ویژه
                    </Grid>
                    <Grid md={3} lg={3}> 
                    معرفی کوتاه
                    </Grid>
                    <Grid md={3} lg={3}> 
                     تعداد گزارش انلاین
                    </Grid>
                    <Grid md={3} lg={3}> 
                    تعداد گزارش افلاین  
                    </Grid>
                    </Grid>
                    
                    <Divider className='px-1' flexItem style={{color : 'black '}}/>

                    {data.map((data)=> (
                        <>
                        <Grid key={data.id} container className='items-center text-[14px] text-[#3D5A80] p-2'>

                            <Grid>                          
                            <p><FaTowerObservation style={{fontSize : '20px'}}/></p>
                            </Grid>

                            <Grid md={2} lg={2}>
                                <div className='flex p-3 items-center'>
    
                                <span onClick={()=>{navigate(`${data.id}`)}}   className='mr-10 overflow-x-auto cursor-pointer transition duration-300 hover:text-[#b7d4e4]  '>
                                    تایتل
                                </span>
                                </div>
                            </Grid>

                            <Grid  md={3}  lg={3}>
                                <div className='flex p-3 items-center'>
    
                                <span className='overflow-auto'>
                                  تایتل
                                </span>
                                </div>
                            </Grid>

                            <Grid md={3}  lg={3}>
                                <div className='flex p-3 pl-10 items-center justify-center'>
    
                                <span className='overflow-auto'>
                                    1     
                                </span>
                                </div>
                            </Grid>



                            <Grid md={3}  lg={3}>
                              <div className='flex p-3 pl-10 items-center justify-center'>
    
                             <span className='overflow-auto'>
                                  2     
                             </span>
                             </div>
                            </Grid>



    
    

</Grid>
<Divider/>
                        </>
                    ))}


                    
                    
                    
                    
                </div>
                
            </div>
            
        </Grid>

        <Grid sx={{display:{lg : 'fixed' , md : 'none'}, padding: 5 , }}     lg={3}>
 

       <div className='space-y-1'>
        <div className='text-[14px]'>
          جستجو
        </div>
        <div>
        <input type="text" className='duration-300 text-[14px] px-1 h-8 w-48 bg-slate-200 border-blue-200 border-2 focus:border-[#0c1b41] rounded-md focus:bg-slate-300 '  />
        </div>
        <div className='text-[14px]'>
          جستجو
        </div>
        <div>
        <input  className='duration-300 text-[14px] px-1 h-8 w-48 bg-slate-200 border-blue-200 border-2 focus:border-[#0c1b41] rounded-md focus:bg-slate-300 '  />
        </div>
        <div className='flex justify-center'>
        <button className='bg-yellow-300 p-1 rounded-lg text-[14px]  px-4  drop-shadow-sm hover:shadow-md duration-300 transition-all'>
          جستجو
        </button>
        </div>
       </div>
    </Grid>
    </Grid>
  )
}

export default ParvandePage










{/* <Grid container className='items-center text-[14px] text-[#3D5A80] p-2'>

<Grid>
<p><FaTowerObservation style={{fontSize : '20px'}}/></p>
</Grid>

<Grid md={2} lg={2}>
    <div className='flex p-3 items-center'>
    
    <span onClick={()=>{console.log('test')}}   className='mr-10 overflow-x-auto cursor-pointer transition duration-300 hover:text-[#b7d4e4]  '>
          موسی پور
    </span>
    </div>
</Grid>

<Grid  md={3}  lg={3}>
    <div className='flex p-3 items-center'>
    
    <span className='overflow-auto'>
        دبستان شهید سلیمانی تودشک      
    </span>
    </div>
</Grid>

<Grid md={3}  lg={3}>
    <div className='flex p-3 pl-10 items-center justify-center'>
    
    <span className='overflow-auto'>
         1     
    </span>
    </div>
</Grid>



<Grid md={3}  lg={3}>
    <div className='flex p-3 pl-10 items-center justify-center'>
    
    <span className='overflow-auto'>
         2     
    </span>
    </div>
</Grid>



    
    

</Grid>
<Divider/> */}