import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Image } from "react-bootstrap";
import { AccountCircle, Search, Shop, ShoppingCart } from "@mui/icons-material";
import { Avatar, InputBase } from "@mui/material";
import { alpha } from '@mui/material/styles'; // Import alpha function for transparency

function Navbar() {

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{ bgcolor: "#5C4B99" }}>
                <Toolbar variant="regular">
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <Shop></Shop>
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        CartAri
                    </Typography>
                    
                    <div sx={{ flexGrow: 1 }}></div>
                    <IconButton edge="end" color="inherit" aria-label="menu" sx={{ marginLeft: 'auto', marginRight: 2 }}>
                        <ShoppingCart></ShoppingCart>
                    </IconButton>
                    <IconButton edge="end" color="inherit" aria-label="menu" sx={{ marginLeft: 2 }}>
                        <AccountCircle></AccountCircle>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
