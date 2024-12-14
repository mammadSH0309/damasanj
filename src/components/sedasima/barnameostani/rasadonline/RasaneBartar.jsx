import React from 'react'
import FilterZaman from '../../../FilterZaman'
import FilterPlatform from '../../../FilterPlatform'
import BarRaceChart from '../../../Charts/BarRaceChart'
import { ColorBarnameOstaniLight } from '../../../../Theme'

function RasaneBartar() {

    const data = {
        categories : [
           ' alborz_...',
            'ag_salmas'	,
            'Shahda...'	,
            'Tvzagr...'	,
            'shahrdarinow...'	,
            'varzesh_jav...',
            'daftare_kha...',
            'nishaburiy...'	,

            ],      
      data : [
        {
     
            data : [14,7,7,7,5,4,4,]
        },
      

      ]

    }
  return (
    <>
     <div className='flex justify-center items-center gap-x-2 pt-2'>
                   
                   <div className='items-center flex'>
                   <FilterZaman  textcolor={'text-black'}  color={ColorBarnameOstaniLight}  width={'w-[140px]'}/>
                      </div>
                     
                      <div className=''>
                      <FilterPlatform  textcolor={'text-black'}  color={ColorBarnameOstaniLight}  width={'w-[140px]'}/>
                      </div>
                  </div>
                 <BarRaceChart data={data}  marginTop={20}    height={273}  padding={0.42}/>
    </>
  )
}

export default RasaneBartar
