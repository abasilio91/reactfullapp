import React from 'react';
import { TextField, CssBaseline, Grid, Avatar, Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CreateIcon from '@material-ui/icons/Create';
import Copyright from '../Components/Copyright';


const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        // backgroundImage: 'url(https://source.unsplash.com/featured/?nature,bicycle)',
        backgroundColor: 'rgb(15,0,0)',
    },
    form: {
        padding: '3px',
        width:"30%",
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'gray',
    },
    textField: {
        backgroundColor: 'white',
        borderRadius: '3',
        padding: '10px',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.primary.main,
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    typography: {
        color: 'white',
    },
    Header: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    box:{
        color: 'white',
        outline: '5px white',
    },
    submit:{
        margin: theme.spacing(1),
        color: 'white',
        backgroundColor: 'blue',
        border: '10px',
    }
}))

const Signup: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid container component="main" className={classes.root} >
            <Grid item xs={false} sm={1} md={2} />
            <Grid item xs={12} sm={10} md={8}>
                <CssBaseline />
                <div className={classes.paper}>
                    <Grid item>
                        <Grid container className={classes.Header}>
                            <Avatar className={classes.avatar}>
                                <CreateIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5" className={classes.typography}>
                                Sign Up
                            </Typography>
                        </Grid>
                    </Grid>
                    <form className={classes.form}>
                        <TextField variant='outlined' required autoComplete='name' className={classes.textField} id='Name' label='Nome Completo' type='string' autoFocus />
                        <TextField variant='outlined' required autoComplete='user' className={classes.textField} id='user' label='Usuário (e-mail)' type='string' />
                        <TextField variant='outlined' required autoComplete='password' className={classes.textField} id='password' label='Senha' type='string' />
                        <TextField variant='outlined' required autoComplete='pwconfirm' className={classes.textField} id='pwconfirm' label='Confirme a Senha' type='string' />
                    </form>
                    <Button variant='contained' className={classes.submit}> Cadastrar </Button>
                    <Box mt={5} className={classes.box}>
                        <Copyright />
                    </Box>
                </div>
            </Grid>
            <Grid item xs={false} sm={1} md={2} />
        </Grid>
    )
}

export default Signup;