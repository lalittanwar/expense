import React from 'react';
import Form from './Form/Form';
import List from './List/List';
import useTransaction from '../../useTransaction';
import { Paper } from '@material-ui/core';


function Main () {
    const incomeAmount = useTransaction( 'Income' ).total;
    const expenseAmount = useTransaction( 'Expense' ).total;
    return (
        <React.Fragment>
            <Paper >
                <div style={ { textAlign: 'center' } }>
                    <h2>Expense Tracker</h2>
                    <p>Total Balance:{ incomeAmount - expenseAmount }</p>
                </div>
                <Form />
                <List />
            </Paper>
        </React.Fragment>
    )
}

export default Main
