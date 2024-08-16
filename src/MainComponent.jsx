import React from 'react'
import { Context } from './Context/Context'
import { useContext } from 'react'
import { Avatar } from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



const Main = () => {


 
    const {input,
        setInput,
        onSent,
        prevPrompt,
        setPrevPrompt,
        recentprompt,
        setrecentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData}  = useContext(Context)

  return (
    <div className='p-8 w-full  h-screen relative py-12'>
      { !showResult ? <div className=''>   <div className='p-12  '>
     <p className='text-6xl font-bold text-slate-300 bg-gradient-to-b from-blue-600 to-slate-600 text-transparent bg-clip-text ml-16'> Hello, How can I </p>
     <p className='text-6xl h-20 font-bold text-slate-300 bg-gradient-to-b from-blue-600 to-slate-600 text-transparent bg-clip-text ml-16 mt-1.5'> help you today ?</p>
     </div>
     <div className='flex justify-center my-12 w-full'>  
      <div className='flex justify-between w-2/3'>
      
        <div className='bg-slate-100 rounded-lg w-44 h-44 p-3 text-sm flex-col items-center'  onClick = {()=> {setInput("Suggest if green dress will go with yellow shoes")
          
        }} > <p>Suggest if green dress will go with yellow shoes</p> </div>
        <div className='bg-slate-100 rounded-lg w-44 h-44 p-3 text-sm' onClick = {()=> {setInput(" Will golden earrings look good on a red dress?")
         
        }}> Will golden earrings look good on a red dress?</div>   
       <div className='bg-slate-100 rounded-lg w-44 h-44 p-3 text-sm' onClick = {()=> {setInput(" Give styling suggestions for curly hair")
          
        }}> Give styling suggestions for curly hair  </div>
       <div onClick = {()=> {setInput(" Can I wear crocs with a formal outfit?")
         
        }} className='bg-slate-100 rounded-lg w-44 h-44 p-3 text-sm'> Can I wear crocs with a formal outfit?</div>
    
      </div>     
       </div></div>  : 
       <div> 
         <div className='flex'>  <Avatar src=''  sx= {{width : "2rem", height: "2rem"}} className='mr-4 ' /> <p className='font-semibold'> User </p>  </div>
         <p className=' ml-12'>  {recentprompt}</p>
        
         <div className='responsediv flex' > <AutoAwesomeIcon sx= {{width: "1.5rem", height : "1.5rem"}} className='text-blue-400 mr-2 '  /> <p className='text-slate-400 text-lg font-serif'>Gemini</p>
         {loading ? <div className='w-3/4 animate-pulse mt-16'> <hr  className='w-full bg-gradient-to-r from-blue-500 to-blue-700 via-blue-300 h-8' />
          <hr className='w-full bg-gradient-to-r from-blue-500 to-blue-700 via-blue-200 h-8 mt-4' />
           <hr className='w-full bg-gradient-to-r from-blue-500 to-blue-700 via-blue-300 h-8 mt-4' /> </div>  : <div> <p  dangerouslySetInnerHTML= {{ __html: resultData }}  className='responsediv ml-8'  />  </div> }
           </div>
        </div> }
   

     <div className='flex justify-center w-full absolute bottom-8'>
     <div className=' w-4/5 flex justify-between'>
      
      <input className='w-4/5 bg-slate-100 rounded-3xl py-6 px-6'   value={input} onChange={(e) => {setInput(e.target.value)}  } /> 
      <button  onClick={() => {onSent()} }  className='bg-blue-600 my-6 w-36 h-12 rounded-md'> Send</button>
      </div>
     </div>



     
      
    </div>
  )
}

export default Main
