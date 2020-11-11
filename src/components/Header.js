import React,{ useContext} from 'react'
import {AppBar,Typography,IconButton,makeStyles,Toolbar} from "@material-ui/core";
import {projectAuth} from "../firebase/config";
import AuthContext from "../Auth/AuthContext"
const Header = () => {
    const {setUser} = useContext(AuthContext);
   // const [logout, setLogout] = useState(false);
    const  logoutUser = () => {
        projectAuth.signOut();
        setUser(null);
    }
    const classes = useStayles();
    return (
        <AppBar position="sticky" color="secondary">
            <Toolbar className={classes.root}>
                <Typography
                    className={classes.title}
                    variant="h5" 
                    >My Gallary
                </Typography>
                <IconButton
                    className={classes.logout}
                    onClick={logoutUser}
                >
                    <Typography >
                        Log out
                    </Typography>
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

const useStayles = makeStyles({
    root:{
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    title:{
        display:"inline-block"
    },
    logout:{
        backgroundColor:"grey",
        display:"inline-block",
        marginLeft:"auto",
        color:"white"
    }
})

export default Header
