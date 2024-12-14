import {  Button,  Grid } from '@mui/material'

import {  Outlet, useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react';
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import baztab from '../../assets/images/baztab.png'
import oprator from '../../assets/images/oprator.png'
import accsazman from '../../assets/images/accsazman.png'
import baztabtv from '../../assets/images/baztabtv.png'
import darayisazman from '../../assets/images/darayisazman.png'
import otaghvaziat from '../../assets/images/otaghvaziat.png'
import ostanha from '../../assets/images/ostanha.png'
import tahavolsazman from '../../assets/images/tahavolsazman.png'
import gozareshrasad from '../../assets/images/gozareshrasad.png'
import tasvirchehre from '../../assets/images/tasvirchehre.png'
import CardRasadSima from '../../components/CardRasadSima';
import { ToastContainer } from 'react-toastify';
function SedaSimaPage() {

    const navigate = useNavigate()

    const {pathname} = useLocation()
    

    const data = [
        {
            title :'اتاق وضعیت',
            state : 'online',
            link : 'otaghvaziat',
            img : otaghvaziat
        },
        {
            title :" برنامه های استانی",
            state : 'online',
            link : 'barnameostani/rasadonline',
            img : ostanha
        },
        {
            title : 'بازتاب TV ',
            state : 'offline',
            link : 'baztabtv/rasadonline/',
            img : baztabtv
        },
        {
            title : 'رصد نگار',
            state : 'offline',
            link : 'gozareshrasadi/afkarsanji',
            img : gozareshrasad
        },
        
        {
            title : 'تصویر چهره',
            link : 'tasvirchehre',
            state : 'online',
            img : tasvirchehre
        },
        {
            title : 'مصرف اپراتورها',
            link : 'masrafoperator/moavenatsima',
            state : 'online',
            img : oprator
        },
        {
            title : 'رصد تحول سازمان',
            link : 'asarsanji',
            state : 'online',
            img : tahavolsazman
        },
        {
            title : 'دارایی سازمان',
            link : 'daraiisazman',
            state : 'offline',
            img : darayisazman
        },
        {
            title : 'اکانت های سازمان',
            link : 'accountsazman',
            state : 'online',
            img : accsazman
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
    <Grid lg={12}  gap={2} container   className=' mt-20 justify-center  ' >
    { !pathname.split('/')[2] ? data.map((data , index)=> (
            <>
         
             <CardRasadSima key={index} data={data}/>
             
            </>
        ))
    :
    <>
    null
    </>
    }
    </Grid>
    </Grid>
  )
}

export default SedaSimaPage



// <Grid lg={12}  gap={2}  container  className=' mt-20 justify-center  ' >
// { !pathname.split('/')[2] ? data.map((data , index)=> (
//     <>

//      <CardRasadSima data={data}/>
     
//     </>
// ))
// :
// <>
// <Outlet/>
// </>
// }
// </Grid>