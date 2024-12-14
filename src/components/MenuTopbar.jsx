import { IconButton, Menu, MenuItem } from '@mui/material'
import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import { Link, useNavigate } from 'react-router-dom';
function MenuTopbar({icon}) {

    const navigate = useNavigate()

    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    if(e.target.id == '1'){
        navigate('/profile')
    }else if (e.target.id == '2'){
        navigate('/login')
    }
  };
  return (
    <>
    <IconButton 
     aria-controls={open ? 'demo-positioned-menu' : undefined}
     aria-haspopup="true"
     aria-expanded={open ? 'true' : undefined}
     onClick={handleClick}>
        <PersonIcon  className='text-[#98c1d9]'/>
    </IconButton>
    <Menu
    id="demo-positioned-menu"
    aria-labelledby="demo-positioned-button"
    anchorEl={anchorEl}
    open={open}
    onClose={handleClose}
    
    PaperProps={{
        elevation : 0 , 
        sx : {
            display : 'flex',
            justifyContent :'center' , 
            justifyItems :'center',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
           
            borderColor : '#b7d4e4'
        }
    }}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'left',
    }}
  >
    <MenuItem 
    id='1'
    sx={{fontSize : 15 , color : '#7796ab' , fontWeight : '' , fontFamily : 'fontIOS' , display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}
    divider onClick={handleClose}>پروفایل</MenuItem>
    <MenuItem 
    id='2'
    sx={{fontSize : 15 , color : '#7796ab' , fontWeight : '' , fontFamily : 'fontIOS', display : 'flex' , justifyContent : 'center' , alignItems : 'center'}}
     onClick={handleClose}>خروج</MenuItem>
   
  </Menu>
    </>
  )
}

export default MenuTopbar
