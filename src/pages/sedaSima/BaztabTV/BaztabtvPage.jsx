import React from 'react'
import { Grid } from '@mui/material'
import { Outlet} from 'react-router-dom';
import TabsBaztabtv from '../../../components/TabsBaztabtv';




function BaztabtvPage() {

  
  
  return (
    <>
    <Grid container >
    <TabsBaztabtv/>
    <Grid item xl={12} lg={12}>
    {
       <Outlet />
}

    
    </Grid>
    </Grid>
    </>
  )
}

export default BaztabtvPage
