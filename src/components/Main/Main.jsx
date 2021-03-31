import React from 'react';
import Form from './Form/Form';
import List from './List/List';
import useTransaction from '../../useTransaction';
import { Paper } from '@material-ui/core';
import useStyles from './styles';


function Main () {
    const classes = useStyles();
    const incomeAmount = useTransaction( 'Income' ).total;
    const expenseAmount = useTransaction( 'Expense' ).total;
    const netIncome = incomeAmount - expenseAmount;
    let colorClass = { color: 'green',fontFamily: 'system-ui',fontWeight: '700' };
    if ( netIncome < 0 ) {
        colorClass.color = 'red';
    }
    return (
        <React.Fragment>
            <Paper >
                <div style={ { textAlign: 'center' } }>
                    <h1 className={ classes.header1 }>Expense Tracker</h1>
                    <p style={ colorClass }>Total Balance :  <span>&#8377;</span>{ netIncome } </p>
                </div>
                <Form />
                <List />
            </Paper>
        </React.Fragment>
    )
}

export default Main
