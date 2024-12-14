import React from 'react'
import BarColumnChart from '../../../Charts/BarColumnChart'
import FilterZaman from '../../../FilterZaman'
import FilterPlatform from '../../../FilterPlatform'
import { ColorBarnameOstaniLight } from '../../../../Theme'
import { FaravaniGoroh } from '../../../../dataStatic/FaravaniGoroh'
import { KoneshGaranOtagh } from '../../../../dataStatic/KoneshgaranOtagh'

function BestPrograms() {

    const data = {
        categories : ['جوان امروز' , 'کاشانه مهر' , 'بارانه' , 'ژین وئه وین'  , 'گئجه لر' ,'تبریزیم',
            'زیرگنبد کبود',
            'خه م ره وین'
        ],
        data :  [{
            data: [35,22,20,20,19, 19,18,18]
        }
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
         <BarColumnChart datatest={data} colorBar={'#00e272'} marginTop={20} marginRight={20} marginLeft={60}  height={270}  padding={0.42}  />
   </>
  )
}

export default BestPrograms
