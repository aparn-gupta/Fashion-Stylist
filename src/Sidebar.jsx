
import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import RestoreIcon from '@mui/icons-material/Restore';
import SettingsIcon from '@mui/icons-material/Settings';
import MenuIcon from '@mui/icons-material/Menu';
import { Context } from './Context/Context';
import { useContext } from 'react';




const Sidebar = () => {

  const [extended, setExtended] = React.useState(false)
  const {onSent, prevPrompt, setRecentPrompts, input, setInput} = useContext(Context)

  const handleClick = () => {
    setExtended(prev => !prev)
  }


  return (
    <div className="">
    <div className= {`bg-slate-300 h-screen relative p-4 ${extended ? 'w-44' : 'w-16'}`}>
    <MenuIcon onClick = {handleClick}  />
   <div className='mt-36'>
   
   {extended ?  <p className='font-semibold' > Recent</p>  : null } 
   <div className=' flex mt-3'>  {extended ? <div className=''> {prevPrompt.map((item, index) =>  <div className='flex' key= {index} onClick={ ()=> { setInput(item)
  } }
   > <ChatBubbleOutlineIcon  /> <p className='overflow-y-clip text-sm ml-2 mt-1 hover:bg-slate-300'>{item}</p> </div> )}  </div>  : null } </div>
   </div>

    <div className='absolute bottom-6' >

   <div className='flex'>  <HelpOutlineIcon   />   {extended ? <p className='ml-4 text-sm'> Help</p>  : null } </div>
  
   <div className='flex '>  <RestoreIcon   />   {extended ? <p className='ml-4 text-sm'> History</p>  : null } </div>
   <div className='flex  '>  <SettingsIcon />   {extended ? <p className='ml-4 text-sm'> Settings</p>  : null } </div>
   

    </div>
  
  
   </div>

 
   </div>
  )
}

export default Sidebar
