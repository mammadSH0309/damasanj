import React from 'react'
import FilterZaman from '../../../FilterZaman'
import ColumnNegativeChart from '../../../Charts/ColumnNegativeChart'
import { ColorBarnameOstaniLight } from '../../../../Theme'

function RoshdMahane() {
  return (
    <>
    <div className='p-2'>
 <FilterZaman  color={ColorBarnameOstaniLight} />
 </div>
<div> 
<ColumnNegativeChart height={250} marginRight={30} cat={[
  'فروردین ',
  'اردبیهشت',
  'خرداد',
  'تیر',
  'مرداد',
  'شهریور',
  'مهر',
  'ابان',
  'اذر',
  'سرزمین مادری',
]}/>
</div> 

<div className='flex justify-end'>




</div>
<div>

</div>
   </>
  )
}

export default RoshdMahane
