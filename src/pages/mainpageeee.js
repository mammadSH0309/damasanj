// {!path ? 
//     (
//     <>
// <motion.div
  
//   initial={{ opacity: 0, scale: 0.5 }}
//   animate={{ opacity: path? 0 : 1, scale: 1 }}
//   transition={{
//     duration: path? 2 : 0.5,
   
//     ease: [0, 0.71, 0.2, 1.01]
//   }}
//   >
//   <div className=' max-sm:flex-col lg:flex xl:flex   m-2 flex  justify-center  border border-[#b7d4e4] '>


// <Link to={'/telegram'}>
// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

//   <div>
//   <FaTelegramPlane style={{fontSize : 50}} className={` ${path == 'telegram' ? 'text-[#98c1d9]' : ''} hover:-rotate-3 w-full    rounded text-[#7796ab] p-1 transition duration-300`}/>
//   </div>
//   <div className={ ` ${path == 'telegram' ? 'text-[#98c1d9] ' : ''} text-[#7796ab] items-center justify-center flex  w-full  transition duration-300`}>
//     تلگرام
//   </div>

// </div>
// </Link>

// <Link to={'/twitter'}>
// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

//   <div>
//     <FaXTwitter style={{fontSize : 50}} className={` ${path == 'twitter' ? 'text-[#98c1d9] ' : ''} hover:-rotate-3 w-full    rounded text-[#7796ab] p-1 transition duration-300`}/>
//   </div>
//   <div className={ ` ${path == 'twitter' ? 'text-[#98c1d9] ' : ''} text-[#7796ab] items-center justify-center flex  w-full  transition duration-300`}>
//     توییتر
//   </div>

// </div>
// </Link>

// <Link to={'instagram'}> 
// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

// <div>
// <FaInstagram style={{fontSize : 50}} className={`${path == 'instagram' ? 'text-[#98c1d9] ' : ''}  hover:-rotate-3 w-full    rounded text-[#7796ab] p-1 transition duration-300`}/>
// </div>
// <div className={`text-[#7796ab] ${path == 'instagram' ? 'text-[#98c1d9] ' : ''}  items-center justify-center flex    transition duration-300  `}>
// اینستاگرام
// </div>

// </div>
// </Link>


// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

// <div>

// </div>
// <div className='text-[#7796ab] items-center justify-center flex  w-full  transition duration-300  '>
//   روبیکا
// </div>

// </div>


// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

// <div>

// </div>
// <img className='hover:-rotate-6 text-[#7796ab] hover:transition hover:duration-200' width={50} style={{borderColor : 'red'}} src={bale} alt="React Logo" />
// <div className='text-[#7796ab] items-center justify-center flex  w-full  transition duration-300  '>
//   بله
// </div>

// </div>



// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

// <div>

// </div>
// <img className='hover:-rotate-6 text-[#7796ab] hover:transition hover:duration-200' width={50} style={{borderColor : 'red'}} src={eita} alt="React Logo" />
// <div className='text-[#7796ab] items-center justify-center flex  w-full  transition duration-300  '>
//   ایتا
// </div>

// </div>


// <div className='p-5 justify-center flex-col  items-center  transition hover:bg-[#E2F7F6] hover:shadow-sm  rounded duration-300   hover:-translate-y-1 '>

// <div>

// </div>
// <img className='hover:-rotate-6 text-[#7796ab] hover:transition hover:duration-200' width={50} style={{borderColor : 'red'}} src={Soroush} alt="React Logo" />
// <div className='text-[#7796ab] items-center justify-center flex  w-full  transition duration-300  '>
//   سروش
// </div>


// </div>


// <div>

  
// </div>


// </div>

//   </motion.div>


// <motion.div
//  initial={{ opacity: 0, scale: 0.5 }}
//  animate={{ opacity: path? 0 : 1, scale: 1 }}
//  transition={{
//    duration: path? 2 : 0.5,
  
//    ease: [0, 0.71, 0.2, 1.01]
//  }}

// >

// <div className=' max-sm:hidden m-10    px-[200px] border border-[#b7d4e4] '>
// <div className='  justify-center flex  pt-3 font-bold text-xl text-[#7796ab] '>
//     منوی جستجو
// </div>
// <div className=''>
// <div className='pt-6 '>
//   <TextField 
 
//   sx={{
//     fontFamily : 'iphone',
//     WebkitTextFillColor : '#7796ab',
//     '& .MuiOutlinedInput-root' : {
      
//       "& .MuiOutlinedInput-notchedOutline" : {
//         borderColor : '#b7d4e4', 
//         borderWidth : '2px'
//       }
//     } 
//   }}
//   id="demo-helper-text-misaligned-no-helper" 
//   label="جستجو" 
//   /> 
//   </div>

//  <Grid md={12} lg={12}>
//  <div dir='rtl' className='pt-1 flex justify-center    '>
//   <div className='flex  gap-6'>
//   <TextField
//   InputLabelProps={{
//     sx : {
      
//       fontFamily : "fontIOS", 
      
//     }
//   }}
//    SelectProps={{style: {borderColor :'red'}}}
//   inputProps={{style : {color : '#7796ab' , borderColor :'red'}}}
//   sx={{
//     width : 150,
    
//     WebkitTextFillColor : '#7796ab',
//     '& .MuiOutlinedInput-root' : {
//       "& .MuiOutlinedInput-notchedOutline" : {
//         borderColor : '#b7d4e4', 
//         borderWidth : '2px'
//       }
//     }
//   }}
//    id="filled-number" label="تعداد" type="number" 
   
//    /> 
//    <div>
//    <TextField
//    InputLabelProps={{
//     sx : {
//       fontFamily : "fontIOS", 
      
//     }
//   }}
//    sx={{
//     width :150,
//     WebkitTextFillColor : '#7796ab',
//     '& .MuiOutlinedInput-root' : {
//       "& .MuiOutlinedInput-notchedOutline" : {
//         borderColor : '#b7d4e4' , 
//         borderWidth : '2px'
//       }
//     }
  
//    }}
//           id="outlined-select-currency"
//           select
//           label="پلتفرم"
          
          
          
//   >
//     {currencies.map((option)=>(
//       <MenuItem 
//       sx={{fontFamily : 'fontIOS'}}
//       key={option.value} value={option.value}>
//       {option.label}
//       </MenuItem>
//     ))}
  
//   </TextField>
//    </div>
//   </div>
   
 


  


  
   
// </div>
// <div className='flex justify-center items-center gap-10 text-[#7796ab]  '>
//   <div>
//     حالت
//   </div>
//   <div>
//         <FormGroup  sx={{  fontFamily : 'fontIOS' ,}} aria-label="position" row>
//         <FormControlLabel sx={{   '& .MuiFormControlLabel-label' : {fontFamily : 'fontIOS'}}}
//         onClick={()=> setCheck('1')}
//         checked={check == '1'}
//           value="top"
//           control={<Checkbox />}
//           label="همه مطالب"
//           labelPlacement="end"
//         />
//         <FormControlLabel  sx={{  '& .MuiFormControlLabel-label' : {fontFamily : 'fontIOS'}}}
//         onClick={()=> setCheck('2')}
//         checked={check == '2'}
//           value="start"
//           control={<Checkbox />}
//           label="مطالب استان"
//           labelPlacement="end"
//         />
       
//         </FormGroup>
//           </div>
//   <div>

//   </div>
// </div>
//  </Grid>

// <div className='flex justify-center pl-[170px] pb-4'>
// <Button
//    variant="outlined"
//    color='primary'
   
//    sx={{
//     backgroundColor : '#E2F7F6',
//     borderColor : '#b7d4e4',
//     WebkitTextFillColor : '#7796ab',
//     fontWeight : 'bold',
//     height : 40 , 
//     width : 200 , 
//     marginTop : 1 ,
//     marginRight : 20 ,

    
//     justifyContent : 'center',
//     ":hover" : {backgroundColor : '#E2F7F6'},
//     '& .MuiButton-outlined' : {backgroundColor : '#E2F7F6' , color : '#E2F7F6'},
    
//    }}
//    >
//     <p className='font-FontIos'>جستجو</p>
//    </Button>
// </div>


//   </div>
// </div>

// </motion.div>






// <motion.div
//  initial={{ opacity: 0, scale: 0.5 }}
//  animate={{ opacity: 1, scale: 1 }}
//  transition={{
//    duration: 0.8,
//    delay: 0.5,
//    ease: [0, 0.71, 0.2, 1.01]
//  }}
// >
// <div className='   p-2 flex justify-center'>
    
//     <div className= ' max-sm:grid max-sm:grid-cols-2 flex gap-8' >
//       <div className='flex flex-col duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl text-[#98c1d9]'>
//           <div>
          
//             <FaNewspaper className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
            
//           </div>
//           <div className='justify-center text-[#98c1d9] align-middle items-center w-full flex pl-2 font-bold text-2xl'>
//           ۵٬۲۸۲٬۵۶۸
//           </div>
//           <div className='flex justify-center text-[#98c1d9] w-full text-lg'>
//             محتوا
//           </div>
//       </div>

//       <div className='flex flex-col text-[#98c1d9] duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl'>
//           <div>
//             <AiOutlineLike className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
//           </div>
//           <div className='justify-center align-middle items-center w-full flex pl-1 font-bold text-2xl'>
//           ۱۳۰٬۲۸۴
//           </div>
//           <div className='flex justify-center w-full text-lg'>
//             لایک اینستاگرام
//           </div>
//       </div>

//       <div className='flex flex-col text-[#98c1d9] duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl'>
//           <div>
//             <CiTwitter className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
//           </div>
//           <div className='justify-center align-middle items-center w-full flex pl-1 font-bold text-2xl'>
//           ۴۸۶٬۷۲۹
//           </div>
//           <div className='flex justify-center w-full text-lg'>
//             لایک ایکس
//           </div>
//       </div>

//       <div className='flex flex-col text-[#98c1d9] duration-300  p-2 rounded-md hover:transition-all hover:duration-300 hover:shadow-2xl'>
//           <div>
//             <LuEye className='text-[#98c1d9] flex justify-center align-middle items-center w-full' style={{fontSize : 56}}/>
//           </div>
//           <div className='justify-center align-middle items-center w-full flex pl- font-bold text-2xl'>
//           ۸۳۶٬۹۰۲٬۹۳۶
//           </div>
//           <div className='flex justify-center w-full text-lg'>
//           بازدید تلگرام
//           </div>
//       </div>


//     </div>
//   </div>
// </motion.div>

//     </>
//     ) 
//     : 
//     (<>
//       <Outlet/>
//     </>)
//     }


const mainpage = [
    {
        title : 'text',
        count : 2
    }
]

export default mainpageeee