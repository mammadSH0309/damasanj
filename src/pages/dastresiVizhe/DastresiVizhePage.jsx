import React from 'react'
import MenuItemCat from '../../components/MenuItemCat'
import { Divider, Grid, MenuItem, Select, TextField  , Button} from '@mui/material'
import CardDastresiVizhe from '../../components/CardDastresiVizhe'
import CardAfkarSanji from '../../components/Charts/CardAfkarSanji'
import {  Outlet, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import amozeshlogo from '../../assets/images/amozeshlogo.png'
import vezaratkeshvarlogo from '../../assets/images/vezaratkeshvarlogo.png'
import sanatlogo from '../../assets/images/sanatlogo.png'
import behdashtlogo from '../../assets/images/behdashtlogo.png'
import etelaatlogo from '../../assets/images/etelaatlogo.png'
import farhanglogo from '../../assets/images/farhanglogo.png'
import naftlogo from '../../assets/images/naftlogo.png'
import nirologo from '../../assets/images/nirologo.png'
import omoreghtesadlogo from '../../assets/images/omoreghtesadlogo.png'
import omorkharejelogo from '../../assets/images/omorkharejelogo.png'
import rahlogo from '../../assets/images/rahlogo.png'
import olomlogo from '../../assets/images/olomlogo.png'
import taavonlogo from '../../assets/images/taavonlogo.png'
import varzeshlogo from '../../assets/images/varzeshlogo.png'
import ertebatlogo from '../../assets/images/ertebatlogo.png'
import keshvarlogo from '../../assets/images/keshvarlogo.png'
import CardRasadHamafzaii from '../../components/CardRasadHamafzaii'

function DastresiVizhePage() {

  const {pathname} = useLocation()
  const data = [
    {
        title :'قرارگاه وزارت نفت',
        state : true,
        link : 'vezaratnaft/otaghvaziatnaft',
        img : naftlogo
    
    },
    {
        title :"قرارگاه وزارت آ.پ",
        state : true,
        link : 'vezaratap',
        img : amozeshlogo
    
    },
    {
        title : 'قرارگاه وزارت کشور',
        state : true,
        link : 'vezaratkeshvar',
        img : keshvarlogo
    },
    {
        title : 'قرارگاه وزارت ا.ف.ا',
        state : true,
        link : 'vezaratafa',
        img: ertebatlogo
   
    },

   
    {
        title : 'قرارگاه وزارت صعنت',
        link : 'tasvirchehre/1',
        state : false,
        img: sanatlogo

    },
    {
        title : 'قرارگاه وزارت بهداشت',
        link : 'tasvirchehre/1',
        state : false,
        img: behdashtlogo

    },
    {
        title : ' قرارگاه وزارت اطلاعات',
        link : 'tasvirchehre/1',
        state : false,
        img: etelaatlogo

    },
    {
        title : 'قرارگاه وزارت فرهنگ',
        link : 'tasvirchehre/1',
        state : false,
        img: farhanglogo

    },
    {
        title : 'قرارگاه وزارت کشور',
        link : 'tasvirchehre/1',
        state : false,
        img: keshvarlogo

    },
    {
        title : 'قرارگاه وزارت نیرو',
        link : 'tasvirchehre/1',
        state : false,
        img: nirologo

    },
    {
        title : 'قرارگاه وزارت امور.ا',
        link : 'tasvirchehre/1',
        state : false,
        img: omoreghtesadlogo

    },
    {
        title : 'قرارگاه وزارت امور.خ',
        link : 'tasvirchehre/1',
        state : false,
        img: omorkharejelogo

    },
    {
        title : 'قرارگاه وزارت شهرسازی',
        link : 'tasvirchehre/1',
        state : false,
        img: rahlogo

    },
    {
        title : 'قرارگاه وزارت ع.ت.ف',
        link : 'tasvirchehre/1',
        state : false,
        img: olomlogo

    },
    {
        title : 'قرارگاه وزارت ت.ک.ر',
        link : 'tasvirchehre/1',
        state : false,
        img: taavonlogo

    },
    {
        title : 'قرارگاه وزارت ورزش',
        link : 'tasvirchehre/1',
        state : false,
        img: varzeshlogo

    },
  
    
    

]

if(pathname.split('/')[2]) {
  return(
      <>
      <Outlet/>

      </>
  )
}


  return (
    <Grid >
           <ToastContainer autoClose={3000}/>
    <Grid lg={12} xl={12}  container   className='  pt-8 w-full flex justify-center      gap-4            ' >
    {data.map((data)=> (
    <>

    <Grid lg={2}>
    <CardRasadHamafzaii  data={data} titleLeftButton={'ورود'} />
    </Grid>
   
    </>
))}
    </Grid>
    </Grid>
 
  )
}

export default DastresiVizhePage
