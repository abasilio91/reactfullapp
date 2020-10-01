import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '@coreui/React';

const useStyles = makeStyles(theme => ({

}))

const Dashboard: React.FC = () => {
    const classes = useStyles()
    return (
        <h1>Dashboard</h1>
    )
}

export default Dashboard;