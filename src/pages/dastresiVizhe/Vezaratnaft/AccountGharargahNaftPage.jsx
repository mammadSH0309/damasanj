import { Divider, Grid } from '@mui/material'
import React from 'react'
import PaperCharts from '../../../components/PaperCharts'
import AccountSazmanList from '../../../components/AccountSazmanList'
import BarColumnChart from '../../../components/Charts/BarColumnChart'
import FilterZaman from '../../../components/FilterZaman'
import { FaArrowUp } from 'react-icons/fa6'
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiTwitter } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import VariableRadiusPieChart from '../../../components/Charts/VariableRadiusPieChart'
import LineChartMulti from '../../../components/Charts/LineChartMulti'
import { MdSearch } from 'react-icons/md'
import AccountGharargahList from '../../../components/AccountGharargahList'

function AccountGharargahNaftPage() {
  return (
    <Grid container>
    <Grid lg={12} className='text-[#98c1d9] p-3 space-y-1'>
            
            <Divider className=' ' />
        </Grid>
    <Grid className='p-2 space-y-4'  lg={4}>
        <PaperCharts bgtitle={'bg-[#0715d3]'} title={'اکانت های برتر'}  height={'h-[350px]'}  chart={
            <>
        <div className='flex  justify-center  gap-x-2 pt-2 px-2  '>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
        
        </div>

        
        <BarColumnChart colorBar={'#c8e4fb'} height={'280px'} marginTop={30} cat={[
            'اکانت 1',
            'اکانت 2',
            'اکانت 3',
            'اکانت 4',
            'اکانت 5',
            'اکانت 7    ',
            'اکانت',
            'اکانت',
            'اکانت',
            'اکانت',
        ]}/> 
            </>
        }/>

<PaperCharts bgtitle={'bg-[#0715d3]'} title={'سهم پلتفرم'}  height={'h-[440px]'}  chart={
            <>
       

        
        <VariableRadiusPieChart height={'280px'}/>
        <div className='justify-between flex ml-3  items-center px-20' >
      
    <div className='flex  items-center '>
   
    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 mt-4'>
                        <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
    </div>
    <span className='text-[12px] mr-2 mt-2 '>میانگین انتشار</span>
   
    </div>
    <div className='text-[20px] ml-10 mt-2 '>
    ۲۸۲۲ 
    </div>
    
        
        </div>

        <div className='justify-between flex ml-3  items-center px-20' >
      
      <div className='flex  items-center '>
     
      <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[40px] rounded-lg mr-4 mt-4'>
                          <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
      </div>
      <span className='text-[12px] mr-2 mt-2 '>میانگین بازدید</span>
     
      </div>
      <div className='text-[20px] ml-10 mt-2 '>
      ۲۸۲۲ 
      </div>
      
          
          </div>
            </>
        }/>
    </Grid>
    <Grid className='p-2' lg={8}>
        <div className='p-2 flex gap-x-3 justify-between justify-center items-center  '>
       <div className='flex gap-x-2'>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
        <FilterZaman color={'bg-[#c8e4fb]'}/>
       </div>
        <div>
        <div className=' w-[400px]  pr-32 mt-2 relative flex items-center   '>
                <input type="search" className="search  bg-[#c8e4fb] w-full pr-[3px] h-8 rounded-lg focus:border focus:border-red-400 "  />
                <MdSearch style={{color  : "white"}}  className='absolute bg-[#0715d3] shadow-sm drop-shadow-sm left-0 h-full w-7 rounded-l-lg  '/>
        </div>
        </div>
        </div>
        <Grid>
        <PaperCharts bgtitle={'bg-[#0715d3]'} title={'اکانت های قرارگاه'} height={'h-[350px]'} chart={
            <>
            <AccountGharargahList height={'h-[310px]'}/>
            </>
        }/>
        </Grid>

        <Grid lg={12} className=' flex   pt-4   ' container>
            <Grid className=' bg  w-full pl-4' lg={4}>
               <div className=' group  '>
               <PaperCharts bgtitle={'bg-[#0715d3]'}  bgcolor={'#c8e4fb'} height={'h-[100px]'}  chart={
                <>
                   <div dir='rtl' className='   flex'>
                    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[65px] rounded-lg mr-4 mt-4'>
                        <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
                    </div>
                    <div className='flex-col  mt-4 mr-3'>
                        <div className='font-bold text-[25px] bg'>
                        ۲۸۲۲
                        </div>
                        <div className='text-sm'>
                            مجموع مصرف
                        </div>
                    </div>
                   </div>
                </>
            }/>
               </div>
            </Grid>
            <Grid className=' w-full '  lg={4}>
            <PaperCharts  bgtitle={'bg-[#0715d3]'} bgcolor={'#c8e4fb'} height={'h-[100px]'}  chart={
                <>
                   <div dir='rtl' className='   flex'>
                    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[65px] rounded-lg mr-4 mt-4'>
                        <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
                    </div>
                    <div className='flex-col  mt-4 mr-3'>
                        <div className='font-bold text-[25px] bg'>
                        ۲۸۲۲
                        </div>
                        <div className='text-sm'>
                            مجموع انتشار
                        </div>
                    </div>
                   </div>
                </>
            }/>
            </Grid>
            <Grid className=' w-full pr-4' lg={4}>
            <PaperCharts bgtitle={'bg-[#0715d3]'} bgcolor={'#c8e4fb'} height={'h-[100px]'}  chart={
                <>
                   <div dir='rtl' className='   flex'>
                    <div className='border bg-[#c8e4fb] transition duration-300 group-hover:shadow-2xl  shadow-2xl size-[65px] rounded-lg mr-4 mt-4'>
                        <LuEye style={{color : '#e9ecee'}}   className='w-[70%]  h-full flex justify-center mx-auto align-middle items-center h'/>
                    </div>
                    <div className='flex-col  mt-4 mr-3'>
                        <div className='font-bold text-[25px] bg'>
                        ۲۸۲۲
                        </div>
                        <div className='text-sm'>
                            مجموع کاربر
                        </div>
                    </div>
                   </div>
                </>
            }/>
            </Grid>
            <Grid className='pt-4' lg={12}>
            <PaperCharts bgtitle={'bg-[#0715d3]'} height={'320px'} title={'روندیابی'} chart={
                <>
            <div className='flex justify-start mr-2 gap-x-3 p-2'>
            <FilterZaman color={'bg-[#c8e4fb]'}/>
            <FilterZaman color={'bg-[#c8e4fb]'}/>
            </div>
                <LineChartMulti  type={'spline'}  height={197} margintTop={20}/> 
                </>
            }/>
            </Grid>
            
        </Grid>
    </Grid>
   </Grid>
  )
}

export default AccountGharargahNaftPage
