import React, { useState } from 'react'

function DialogTest() {

    const [open , setOpen ] = useState(false)
  return (
   <>
   <button onClick={()=> setOpen(!open)}>click</button>
    {open ? (
        <div className={`h-full w-full  -in ${open ? 'animate-fade-in' : 'fade-out'} bg-slate-800 duration-300 transition-all items-center justify-center flex `}>

        <div className='bg-black  shadow-xl relative text-white duration-300 transition-all opacity-1   h-32 w-[400px] rounded-md'>
              <p>
                  adsad
              </p>
              <div className=' absolute bottom-2 left-3'>
                  <button className='bg-slate-500 p-1 rounded-md w-20 text-[12px] hover:bg-slate-300 duration-200 transition-all'>
                      بستن
                  </button>
              </div>
        </div>
        
        </div>
    )
: (
    <>
    
    </>
)
}
   </>
  )
}

export default DialogTest
