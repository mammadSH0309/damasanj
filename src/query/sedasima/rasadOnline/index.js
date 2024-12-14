import { useQuery } from "@tanstack/react-query"


export const  Api =(key , url , params )=> {

  
  return  useQuery({
    queryKey : [key ,params , url],
    queryFn : async ()=> {
     
      const queryParams = params ? `?${new URLSearchParams(params).toString()}` : ''
      const response =  fetch(`${url}${queryParams}`) 
      
      
      const data = await (await response).json()
     
      return data   
    },
  
    refetchOnWindowFocus: false , 
    retry : true,
    retryDelay : 5000,
    staleTime : 36000,
    refetchOnMount : false,
    refetchInterval : 60000 * 24
  })

 
    }


     


