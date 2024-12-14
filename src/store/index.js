import { create } from "zustand";

const useApiParams = create((set) => ({
    params : {}, 
    initParams : (n) => set((state)=> ({params : {...n}})),
    setParams : (newParams) => set((state)=> ({params : {...state.params , ...newParams}})),
    
  }))


  export default useApiParams