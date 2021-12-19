import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router';


export function Navbar() {
    const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className="menu-item">
      <Button
      onClick={()=>history.push("/application")}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
      Dashboard
    </Button>
    <Button
     
      onClick={()=>history.push("/create")}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
     CreateURL
    </Button>
    <Button
     
      onClick={()=>history.push("/showtable")}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
     ShowTable
    </Button>
      </MenuItem>
      <Button
     
      onClick={()=>history.push("/")}
      sx={{ my: 2, color: 'white', display: 'block' }}
    >
     Logout
    </Button>
    </Menu>
  );

  return (
      <div className="nav-bar">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor:"#51459E" }}>
          <IconButton
          className="btn-color"
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 ,color:"white" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: {  sm: 'block',color:"white" } }}
          >
            URLSHORTEN
          </Typography>
          
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Button
          className="btn-color"
          onClick={()=>history.push("/application")}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
          Dashboard
        </Button>
        <Button
        className="btn-color"
          onClick={()=>history.push("/create")}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
         CreateURL
        </Button>
        <Button
        className="btn-color"
          onClick={()=>history.push("/showtable")}
          sx={{ my: 2, color: 'white', display: 'block' }}
        >
         ShowTable
        </Button>
        <Button
        className="navbar-btn"
        variant="outlined"
        onClick={()=>history.push("/")}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
       Logout
      </Button>
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
            className="btn-color"
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
    </div>
  );
}