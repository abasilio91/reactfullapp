import React from 'react';
import { Button, Avatar, CssBaseline, FormControlLabel, TextField, Checkbox, Grid, Box, Paper, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../Components/Copyright';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh"
    },
    image: {
        backgroundImage: 'url(http://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    },
}));

const Login: React.FC = () => {
    const classes = useStyles()
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
                        </Typography>
                    <form className={classes.form} noValidate>
                        <TextField variant='outlined' margin='normal' required fullWidth id='e-mail' label='E-mail' name='email' autoComplete='email' autoFocus />
                        <TextField variant='outlined' margin='normal' required fullWidth id='senha' label='Senha' name='senha' autoComplete='senha' />
                        <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Lembre-me" />
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}> Login </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">Esqueceu sua senha?</Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">Não tem conta? Cadastre-se</Link>
                            </Grid>
                        </Grid>
                        <Box mt={5} color='primary'>
                            <Copyright />
                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    )
}

export default Login;