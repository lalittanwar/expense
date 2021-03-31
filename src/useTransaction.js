import { useContext } from 'react';
import { expenseCategories,incomeCategories,resetCategories } from './constant/categories';
import { ExpenseTrackerContext } from './context/context';

const useTransaction = ( title ) => {
    const { transaction } = useContext( ExpenseTrackerContext );
    if ( transaction ) {
        resetCategories();
        const transactionPerType = transaction.filter( t => t.type === title );
        const total = transactionPerType.reduce( ( total,current ) => total += parseInt( current.amount ),0 );

        const categories = title === 'Income' ? incomeCategories : expenseCategories;

        transactionPerType.forEach( t => {
            const category = categories.find( c => c.type === t.category )
            if ( category ) category.amount = ( category.amount ) + parseInt( t.amount );
        } );

        const filteredCategories = categories.filter( ( sc ) => sc.amount > 0 );

        const chartData = {
            datasets: [ {
                data: filteredCategories.map( ( c ) => c.amount ),
                backgroundColor: filteredCategories.map( ( c ) => c.color ),
            } ],
            labels: filteredCategories.map( ( c ) => c.type ),
        };


        return { total,chartData };
    }
}

export default useTransaction;