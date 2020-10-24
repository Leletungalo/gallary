import React from 'react'
import {AppBar,Typography} from "@material-ui/core"
const Header = () => {
    return (
        <AppBar position="static"  className="top-bar" color="secondary">
            <Typography
                variant="h5" 
                >My Gallary
            </Typography>
        </AppBar>
    )
}

export default Header
