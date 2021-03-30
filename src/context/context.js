import React,{ createContext,useReducer } from 'react';
import { reducer } from './contextReducer';

const initialState = JSON.parse( localStorage.getItem( 'transaction' ) ) || [];

export const ExpenseTrackerContext = createContext( initialState );

export const Provider = ( { children } ) => {

    const [ transaction,dispatch ] = useReducer( reducer,initialState );

    const deleteTransaction = ( id ) => dispatch( { type: 'DELETE_TRANSACTION',payload: id } );
    const addTransaction = ( transaction ) => dispatch( { type: 'ADD_TRANSACTION',payload: transaction } );

    return (
        <ExpenseTrackerContext.Provider value={ { deleteTransaction,addTransaction,transaction } }>
            {children }
        </ExpenseTrackerContext.Provider>
    )

}