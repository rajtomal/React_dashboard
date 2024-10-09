import React, { useState } from 'react'
import './layout.scss'
import { Icon } from '@iconify-icon/react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Outlet } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
const LayOut = () => {
    const [openSideBar, setOpen] = useState(true)
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [openMenu, setOpenMenu] = useState({});
    const open = Boolean(anchorEl);
    const navigate = useNavigate();
    const location = useLocation();
    const [activeMenu, setActiveMenu] = useState(location.pathname);
    // const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); 

    const arrowClick = () => {
        setOpen(!openSideBar)
    }
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (logout) => {
        setAnchorEl(null);
        if (logout == 'logout') {
            navigate('/login');
        }
    };
    const handleMenuClick = (id, path) => {
        if (!openSideBar) {
            setOpen(!openSideBar);
        }
        setOpenMenu((prevOpen) => ({
            ...prevOpen,
            [id]: !prevOpen[id], // Toggle open/close for the specific menu item
        }));

        if (window.innerWidth <= 991 && path !== null) {
            setOpen(!openSideBar)
        }

        if (path !== null) {
            console.log(path);
            setActiveMenu(path); // Set the active menu
            navigate(path);
        }
    };
    const handleSubMenuClick = (path) => {
        setActiveMenu(path); // Set the active menu
        navigate(path);
        if (window.innerWidth <= 991 && path !== null) {
            setOpen(!openSideBar)
        }
    };
    const menu = [
        {
            id: 1,
            name: 'Dashboard',
            icon: 'material-symbols:dashboard-outline',
            path: '/',
            subMenu: []
        },
        {
            id: 1,
            name: 'Factory Details',
            icon: 'material-symbols:dashboard-outline',
            path: '/factory-details',
            subMenu: []
        },
        {
            id: 2,
            name: 'Master Data',
            icon: 'icon-park-outline:data-user',
            path: null,
            subMenu: [
                { id: 11, name: 'Factory', icon: 'material-symbols:dashboard-outline', path: '/factory' },
                { id: 12, name: 'Country', icon: 'material-symbols:dashboard-outline', path: '/country' },
                { id: 12, name: 'Division', icon: 'material-symbols:dashboard-outline', path: '/division' },
                { id: 12, name: 'District', icon: 'material-symbols:dashboard-outline', path: '/district' },
                { id: 12, name: 'Police Station', icon: 'material-symbols:dashboard-outline', path: '/police-station' },
                { id: 12, name: 'Business Type', icon: 'material-symbols:dashboard-outline', path: '/business-type' },
                { id: 12, name: 'Department', icon: 'material-symbols:dashboard-outline', path: '/department' },
                { id: 12, name: 'Designation', icon: 'material-symbols:dashboard-outline', path: '/designation' },
                { id: 12, name: 'Role', icon: 'material-symbols:dashboard-outline', path: '/role' },
            ]
        },
        {
            id: 3,
            name: 'menu-2',
            icon: 'material-symbols:dashboard-outline',
            path: '',
            subMenu: []
        },
    ];
    return (
        <>
            <div className='lay-out'>
                <header className='header'>
                    <div className='header-main'>
                        <div className='d-flex justify-content-between w-100'>
                            <div className='d-flex align-items-center gap-3 logo'>
                                <button onClick={arrowClick} className='arrow-left'>
                                    {openSideBar ? <Icon icon="ri:menu-unfold-4-line" width="24" height="24" /> : <Icon icon="ri:menu-fold-4-line" width="24" height="24" />}
                                </button>
                                {/* <img height={40} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" /> */}
                                <h1>Admin Dashboard</h1>
                            </div>
                            <div className='d-flex g-2'>
                                <div className='d-flex align-items-center justify-content-center'><Icon icon="carbon:notification" width="24" height="24" /></div>
                                <div>
                                    <React.Fragment>
                                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                            <Tooltip title="Account settings">
                                                <IconButton
                                                    onClick={handleClick}
                                                    size="small"
                                                    sx={{ ml: 2 }}
                                                    aria-controls={open ? 'account-menu' : undefined}
                                                    aria-haspopup="true"
                                                    aria-expanded={open ? 'true' : undefined}
                                                >
                                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                                </IconButton>
                                            </Tooltip>
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            id="account-menu"
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            slotProps={{
                                                paper: {
                                                    elevation: 0,
                                                    sx: {
                                                        overflow: 'visible',
                                                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                        mt: 1.5,
                                                        '& .MuiAvatar-root': {
                                                            width: 32,
                                                            height: 32,
                                                            ml: -0.5,
                                                            mr: 1,
                                                        },
                                                        '&::before': {
                                                            content: '""',
                                                            display: 'block',
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 14,
                                                            width: 10,
                                                            height: 10,
                                                            bgcolor: 'background.paper',
                                                            transform: 'translateY(-50%) rotate(45deg)',
                                                            zIndex: 0,
                                                        },
                                                    },
                                                },
                                            }}
                                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Avatar /> Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <Avatar /> My account
                                            </MenuItem>
                                            <Divider />
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <PersonAdd fontSize="small" />
                                                </ListItemIcon>
                                                Add another account
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <ListItemIcon>
                                                    <Settings fontSize="small" />
                                                </ListItemIcon>
                                                Settings
                                            </MenuItem>
                                            <MenuItem onClick={() => handleClose('logout')}>
                                                <ListItemIcon>
                                                    <Logout fontSize="small" />
                                                </ListItemIcon>
                                                Logout
                                            </MenuItem>
                                        </Menu>
                                    </React.Fragment>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='d-flex'>
                    <div className={`left-side-bar ${openSideBar ? 'active-side-bar' : 'inactive-side-bar'}`}>
                        <div className='left-side-bar-menu'>
                            {menu.map((item) => (
                                <React.Fragment key={item.id}>
                                    <ListItemButton className='my-2' onClick={() => handleMenuClick(item.id, item.path)} selected={activeMenu === item.path} >
                                        <ListItemIcon>
                                            <Icon icon={item.icon} width="24" height="24" />
                                        </ListItemIcon>
                                        {openSideBar && <ListItemText primary={item.name} />}
                                        {item.subMenu.length !== 0 && openSideBar ? (openMenu[item.id] ? <ExpandLess /> : <ExpandMore />) : null}
                                    </ListItemButton>
                                    {openSideBar && item.subMenu.length > 0 && item.subMenu.map((i) => (
                                        <Collapse key={i.id} in={openMenu[item.id]} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItemButton className='my-1' sx={{ pl: 4 }} onClick={() => handleSubMenuClick(i.path)} selected={activeMenu === i.path}>
                                                    <ListItemIcon>
                                                        <Icon icon="radix-icons:dot" width="22" height="22" />
                                                    </ListItemIcon>
                                                    <ListItemText primary={i.name} />
                                                </ListItemButton>
                                            </List>
                                        </Collapse>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                        {openSideBar ? <div className='copyright'>
                            <p>Design & Developed by <a target="_blank" href="https://intellier.com">Intellier</a></p>
                        </div> : null}
                    </div>
                    <div className={`main-container ${openSideBar ? 'active-main-container' : 'inactive-main-container'}`}>
                        <div>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LayOut