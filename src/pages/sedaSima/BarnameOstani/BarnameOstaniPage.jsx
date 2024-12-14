import { Grid } from '@mui/material';
import React from 'react'
import {  Outlet} from 'react-router-dom';
import TabsBarnameOstani from '../../../components/TabsBarnameOstani';

function BarnameOstaniPage() {

   
  
return (
    <Grid container >
      <TabsBarnameOstani/>

    <Grid item xl={12} lg={12}>
    <Outlet/> 
    </Grid>
    </Grid>
  )
}

export default BarnameOstaniPage
