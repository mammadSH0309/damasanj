import React from 'react'
import LoadingProgress from './LoadingProgress'
import useApiParams from '../store'
import { Api } from '../query/sedasima/rasadOnline'
import { Avatar } from '@mui/material'

function ImageTasvirChehre({key , url , param}) {
    
  const {params , setParams} = useApiParams()
  const {data , isLoading ,  isFetching , isError } = Api(key , url , param ? param : params )



if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
  return (
    <>
    <div className='flex-col justify-center items-center'>
    <div className=' flex justify-center '>
    <Avatar   src={data[0]?.image} sx={{width : 250, height : 250}} />
    </div>
        <div className=' pt-3  flex justify-center gap-x-2  items-center'>
        <span className='h-fit w-28 flex justify-center overflow-auto'>
            <div>
              {data[0]?.title}
            </div>
        </span>
        <span className='h-fit w-40 flex overflow-auto break-words justify-center '>
        <div>
        {data[0]?.descriptions}
            </div>
        
        </span>         
   </div>
    </div>
    </>
  )
}

export default ImageTasvirChehre
