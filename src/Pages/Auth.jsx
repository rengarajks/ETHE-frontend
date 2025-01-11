import React, { useState } from 'react'
import Login from '../Components/Auth/Login'
import { IoCloseOutline } from 'react-icons/io5'
import Register from '../Components/Auth/Register'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';


const Auth = ({setAuthEnable}) => {
    const[isRegister,setIsRegister]=useState(false);
    const [isOpen, setIsOpen] = React.useState(true);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };
  const list = (
    <Box
      sx={{ width: 'auto' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
        {
                !isRegister?<Login setIsRegister={setIsRegister}/>:<Register setIsRegister={setIsRegister}/>
        }

    </Box>
  );
  return (
    <div>
        <div className='fixed bg-slate-900/40 w-full md:top-0 top-10 left-0 right-0 bottom-0 z-10 flex items-center justify-center'>
        <div className='md:w-[55%] w-full h-[80vh]'>
            <div className='flex justify-end' onClick={()=>setAuthEnable(false)}>
                <IoCloseOutline  size='1.6rem' className='text-white font-bold cursor-pointer'/>
            </div>
            {
                !isRegister?<Login setIsRegister={setIsRegister}/>:<Register setIsRegister={setIsRegister}/>
            }
        </div>
    </div>
    </div>
  )
}

export default Auth