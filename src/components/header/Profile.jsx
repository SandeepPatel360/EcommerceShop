import { Box, Menu, MenuItem, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Component = styled(Menu)`
    margin-top: 5px;
    
`

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;

`

const Profile = ({account, setAccount}) => {
    const [open, setOpen] = useState(false);

    const handleClick = (event) =>{
        setOpen(event.currentTarget);
    }
    const handleClose = () =>{
        setOpen(false);
    }
    const logOut = () =>{
        setAccount('');
    }

    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop:2, cursor:'pointer'}}>{account}</Typography>
                    <Component
                        
                        anchorEl={open}
                        open={Boolean(open)}
                        onClose={handleClose}
                       
                    >
                        <MenuItem onClick={()=>{handleClose(); logOut() }}>
                            <PowerSettingsNewIcon color="primary" fontsize="small" />
                            <Logout>Logout</Logout>
                        </MenuItem>
                        
                    </Component>
            </Box>
      
        </>
  )
}

export default Profile
