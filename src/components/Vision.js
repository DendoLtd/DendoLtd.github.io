import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({

    wrapper:{
        height: '100vh',
        width: '100vw',
        paddingTop:'20%'
    }

}));



function Vision() {

     const classes = useStyles();


    return (
        <div className={classes.wrapper} id='vision'>
            <Typography>Vision</Typography>
        </div>
    )
}

export default Vision
