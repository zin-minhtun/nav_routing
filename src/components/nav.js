import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1
    },
    btn: {
        color: "white"
    },
    link: {
        textDecoration: "none"
    }
}));

const Nav = () => {
    const classes = useStyles();
    return (
        <div className="navBar container">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>News</Typography>
                        <Link to="/" className={classes.link}><Button className={classes.btn}>Home</Button></Link>
                        <Link to="/about" className={classes.link}><Button className={classes.btn}>About</Button></Link>
                        <Link to="/contact" className={classes.link}><Button className={classes.btn}>Contact</Button></Link>
                    </Toolbar>
            </AppBar>
        </div>
    )
}
export default Nav