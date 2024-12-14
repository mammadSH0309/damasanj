import React, { useEffect, useState } from 'react'
import { createSearchParams, useLocation, useSearchParams } from 'react-router-dom'

function useParamsAll() {
    
    const [params , setParams] = useSearchParams({
        'ch' : '', 
        'reg' : '',
        'prog' : '',
        'plat' : ''
    })
    useEffect(()=>{
        setParams(params)
    } , [setParams , params])

 return [params , setParams]

}
export default useParamsAll
