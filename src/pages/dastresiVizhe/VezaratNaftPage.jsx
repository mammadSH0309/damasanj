
import { Divider, Grid, Paper, Tab, Tabs } from '@mui/material'
import { Gauge } from '@mui/x-charts'
import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import LineChartMulti from '../../components/Charts/LineChartMulti'
import DonutCharts from '../../components/Charts/DonutCharts'
import RadarCharts from '../../components/Charts/RadarCharts'
import AvatarList from '../../components/AvatarList'
import RadialBar from '../../components/Charts/RadialBar'
import { FaArrowUp } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa6";
import BarChartMulti from '../../components/Charts/BarChartMulti'
import { LuRadar } from "react-icons/lu";
import BarColumnChart from '../../components/Charts/BarColumnChart'
import PieChartTest from '../../components/Charts/PieChartTest'
import PieChartRasad from '../../components/Charts/PieChartRasad'
import PieChartMain from '../../components/Charts/PieChartMain'
import HeatMapChart from '../../components/Charts/HeatMapChart'
import { FaTelegramPlane } from "react-icons/fa";
import { Select, Option } from "@material-tailwind/react";
import SendSharpIcon from '@mui/icons-material/SendSharp';
import { useQuery } from '@tanstack/react-query'
import PaperCharts from '../../components/PaperCharts'
import FilterZaman from '../../components/FilterZaman'
import FilterPlatform from '../../components/FilterPlatform'
import name1 from '../../assets/images/name1.jpeg'
import name2 from '../../assets/images/name2.jpeg'
import name3 from '../../assets/images/name3.jpeg'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import OtaghvaziatVezaratNaftPage from './Vezaratnaft/OtaghvaziatVezaratNaftPage'
import ChehreNamaVezaratNaftPage from './Vezaratnaft/ChehreNamaVezaratNaftPage'
function VezaratNaftPage() {

    const {pathname} = useLocation()
 
    const [value, setValue] = useState('otaghvaziatnaft');
    const navigate = useNavigate()
    const handleChange = (event, newValue) => {
      setValue(newValue)
  
     
    };



  return (
    <Grid container >
   
    <Grid  lg={12} className=' '>

    <div className=' bg-slate-100 drop-shadow-md  rounded-md  sticky top-0 z-50 bg w-full '>
    
    <Tabs 
    component={'a'}

    onChange={handleChange}
    sx={{fontFamily : "fontIOS"}} value={value} className=''  aria-label="basic tabs example">
    <Tab
    tabIndex={'otaghvaziatnaft'}
    to={'otaghvaziatnaft'}
    component={Link}
    value={'otaghvaziatnaft'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="اتاق وضعیت" />
            <Tab
    tabIndex={'chehrenamanaft'}
    to={'chehrenamanaft'}
    value={'chehrenamanaft'} 
    component={Link}
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="چهره نما" />
 
 <Tab
    tabIndex={'accountgharargahnaft'}
    to={'accountgharargahnaft'}
    component={Link}
    value={'accountgharargahnaft'} 
    sx={{fontFamily : "iranSans_light" , color : 'white' }} 
           label="اکانت های قرارگاه" />
          
    </Tabs>
 
    </div>
    <Divider sx={{}}/>
    
      
        
      
    </Grid>
 
    <Grid xl={12} lg={12}>
    <Outlet/>
    </Grid>
    
 

   
    
    
    

    </Grid>
  )
}

export default VezaratNaftPage
