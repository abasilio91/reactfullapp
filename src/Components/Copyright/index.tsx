import React from 'react';
import {Typography, Link } from '@material-ui/core';

const Copyright: React.FC = () => {
    return (
        <Typography variant="body2" color='primary' align="center">
            {'Copyright ©'}
            <Link color='inherit' href="http://faesa.br/next">FAESA Next</Link>
            {' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

export default Copyright;