import { Grid } from '@mui/material'
import React from 'react'
import DadeNamaState from '../../DadeNamaState'
import LineChartMulti from '../../Charts/LineChartMulti'
import LoadingProgress from '../../LoadingProgress'
import useApiParams from '../../../store'
import { Api } from '../../../query/sedasima/rasadOnline'

function DadeNama({url ,  key , color}) {
  

  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , params)

if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>
  return (
    <>
             <Grid  className=' ' container>
         <Grid className='' lg={5}>
            <div className='p-2 '>          
            </div>
          </Grid>
          <Grid lg={12}>
           <DadeNamaState  data={data}/>
          </Grid>
          <Grid lg={12}>
            <div className='p-2'>

                <LineChartMulti color={color} height={200} marginRight={22} type={'spline'} data={data}/>
            </div>

           
          
          </Grid>
          
          
         </Grid>
            </>
  )
}

export default DadeNama
