export const reducer = ( state,action ) => {
    switch ( action.type ) {
        case 'DELETE_TRANSACTION':
            let transaction = state.filter( t => t.id !== action.payload );
            localStorage.setItem( 'transaction',JSON.stringify( transaction ) );
            return transaction;
        case 'ADD_TRANSACTION':
            let newTransaction = [ ...state,action.payload ];
            localStorage.setItem( 'transaction',JSON.stringify( newTransaction ) );
            return newTransaction;
        default:
            return state;
    }
}