
import React from "react"
import "keen-slider/keen-slider.min.css"
import { Badge, Skeleton } from '@mui/material'
import LoadingProgress from "./LoadingProgress"
import { Api } from "../query/sedasima/rasadOnline"
import useApiParams from "../store"


function ShabakeSlider({url , param , key}) {


  const {params , setParams} = useApiParams()
  const {data , isLoading , error , refetch , isFetching } = Api(key , url , param? param : params)


if(isLoading) return <LoadingProgress/>
if(isFetching) return <LoadingProgress/>
if(error) return <>{error.message}</>

  
 

   
    
  return (
    <div dir=""  className="  px-10 w-full gap-4 h-full p-2 grid grid-cols-11 grid-flow-row    " >
    {data?.map((data)=> (<>
      <Badge 
    color="success"
      sx={{backgroundColor : "" , borderRadius : '10px' , borderWidth : '2px' , boxShadow : '20px' , borderColor : 'green' }}

     badgeContent={data.id} 
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
 
     >
      <div onClick={()=>{
         setParams({  
         'ch' : data.title,
     })
      }} className="h-16 hover:scale-125 flex justify-center items-center w-full hover:duration-200 ">
      <img  className="    transition-transform    flex justify-center items-center   rounded-xl "
     src={data.image} style={{height : 50 , width : '100%'}} 
      alt={data.title} />
      </div>
     </Badge>
    
    </>))}




  </div>

  )
}

export default ShabakeSlider

