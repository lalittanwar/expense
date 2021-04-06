const incomeColors = [ '#123123','#154731','#165f40','#16784f','#14915f','#10ac6e','#0bc77e','#04e38d','#00ff9d' ];
const expenseColors = [ '#b50d12','#bf2f1f','#c9452c','#d3583a','#dc6a48','#e57c58','#ee8d68','#f79d79','#ffae8a','#cc474b','#f55b5f','#81080c','#690508','#580305','#350304' ];

export const incomeCategories = [
    { type: 'Salary',amount: 0,color: incomeColors[ 0 ] },
    { type: 'Investments',amount: 0,color: incomeColors[ 1 ] },
    { type: 'Extra income',amount: 0,color: incomeColors[ 2 ] },
    { type: 'Deposits',amount: 0,color: incomeColors[ 3 ] },
    { type: 'Lottery',amount: 0,color: incomeColors[ 4 ] },
    { type: 'Gifts',amount: 0,color: incomeColors[ 5 ] },
    { type: 'Other',amount: 0,color: incomeColors[ 6 ] },
    { type: 'Savings',amount: 0,color: incomeColors[ 7 ] },
    { type: 'Rental income',amount: 0,color: incomeColors[ 8 ] },
];

export const expenseCategories = [
    { type: 'Rent',amount: 0,color: expenseColors[ 0 ] },
    { type: 'PPF',amount: 0,color: expenseColors[ 1 ] },
    { type: 'Stocks',amount: 0,color: expenseColors[ 2 ] },
    { type: 'Family',amount: 0,color: expenseColors[ 3 ] },
    { type: 'Education Loan',amount: 0,color: expenseColors[ 4 ] },
    { type: 'Housing Loan',amount: 0,color: expenseColors[ 5 ] },
    { type: 'Grocery',amount: 0,color: expenseColors[ 6 ] },
    { type: 'Vegetables',amount: 0,color: expenseColors[ 7 ] },
    { type: 'Fruit',amount: 0,color: expenseColors[ 8 ] },
    { type: 'Bill',amount: 0,color: expenseColors[ 9 ] },
    { type: 'Household',amount: 0,color: expenseColors[ 10 ] },
    { type: 'Shopping',amount: 0,color: expenseColors[ 11 ] },
    { type: 'Food',amount: 0,color: expenseColors[ 12 ] },
    { type: 'Travel',amount: 0,color: expenseColors[ 13 ] },
    { type: 'Other',amount: 0,color: expenseColors[ 14 ] },
];

export const resetCategories = () => {
    incomeCategories.forEach( ( c ) => c.amount = 0 );
    expenseCategories.forEach( ( c ) => c.amount = 0 );
};