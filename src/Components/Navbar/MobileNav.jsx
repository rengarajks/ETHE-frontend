import { Drawer } from '@mui/material'
import React from 'react'
import { IoCart, IoLogOut } from 'react-icons/io5'
import { VscThreeBars } from 'react-icons/vsc'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { FaUser } from 'react-icons/fa';
import { TbCategoryFilled } from 'react-icons/tb';
import { MobileEtheData, MobileServiceData, MobileUserData } from './data/MobileData';

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250,height:'100%'}} role="presentation" onClick={toggleDrawer(false)}>
      <div className=' text-white h-full w-full'>
        <div className='flex justify-between items-center px-3 py-4 bg-[#312ba6]'>
          <FaUser/>
          <h1>Login & Signup</h1>
          <h1>ETHE</h1>
        </div>

        <div className='text-black border-b space-y-2 py-2'>
          {
            MobileEtheData.map((data)=>
            <span className='flex items-center text-[0.9rem] font-medium px-2 py-1 gap-2'>
               {data.icon}
               <h1 className=''>{data.title}</h1>
            </span>
            )
          }
        </div>

        <div className='text-black border-b space-y-2 py-2'>
          {
            MobileUserData.map((data)=>
            <span className='flex items-center text-[0.9rem] font-medium px-2 py-1 gap-2'>
               {data.icon}
               <h1 className=''>{data.title}</h1>
            </span>
            )
          }
        </div>

        <div className='text-black border-b space-y-2 py-2'>
          {
            MobileServiceData.map((data)=>
            <span className='flex items-center text-[0.9rem] font-medium px-2 py-1 gap-2'>
               {data.icon}
               <h1 className=''>{data.title}</h1>
            </span>
            )
          }
        </div>

        <div className='text-black space-y-2 py-2'>
            <span className='flex items-center text-[0.9rem] font-medium px-2 py-1 gap-2'>
               <IoLogOut/>
               <h1 className=''>Logout</h1>
            </span>
        </div>

      </div>
      
    </Box>
  );

  return (
    <div className='flex w-full items-center justify-between px-2'>
        <div className='flex items-center gap-2 font-semibold'>
            <VscThreeBars size='1.5rem' onClick={toggleDrawer(true)}/>
            <h1>ETHE</h1>
            <div>
            <Drawer open={open} onClose={toggleDrawer(false)}>
              {DrawerList}
            </Drawer>
            </div>
        </div>
        <div onClick={toggleDrawer}>
           <IoCart size='1.6rem'/>
        </div>
    </div>
  )
}

export default MobileNav