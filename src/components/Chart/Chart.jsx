import React from 'react';
import { Card,CardHeader,CardContent,Typography } from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransaction from '../../useTransaction';
import useStyles from './styles';

function Chart ( { title } ) {
    const { total,chartData } = useTransaction( title );
    const classes = useStyles();

    return (
        <Card className={ title === 'Income' ? classes.income : classes.expense }>
            <CardHeader title={ title } />
            <CardContent>
                <Typography variant="h5"> <span>&#8377;</span>{ total }</Typography>
                <Doughnut data={ chartData } />
            </CardContent>
        </Card>
    )
}

export default Chart


