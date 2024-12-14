import { useQuery } from '@tanstack/react-query'
import React, { useState } from 'react'

function useFetchData(url , params , key) {
  // const [res , setRes] = useState(null)
  //   const API = useQuery({
  //       queryKey : [key , params],
  //       queryFn : async ()=> {
  //         const queryParams = params ? `?${new URLSearchParams(params).toString()}` : ''
  //         const response =  fetch(`${url}${queryParams}`) 
  //         const data = await (await response).json()
  //         setRes(data)
  //         return data    
  //       },
  //       enabled : Boolean(url),
  //       refetchInterval : 5 * 60 *10000,
  //       retryDelay : 2 * 60 * 1000,
  //       retry : false
  //     })
      
  //    return [res , API] 
}

export default useFetchData
