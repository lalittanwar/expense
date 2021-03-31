import React,{ useContext,useState } from 'react';
import { TextField,Paper,Button,Typography,InputLabel,Select,MenuItem } from '@material-ui/core';
import { ExpenseTrackerContext } from '../../../context/context';
import { incomeCategories,expenseCategories } from '../../../constant/categories';
import dateFormat from '../../../utils/dateFormat';
import CustomSnackbar from '../../Snackbar/Snackbar';
import './Form.css';

function Form () {

    const { addTransaction } = useContext( ExpenseTrackerContext );
    const types = [ 'Income','Expense' ]

    const [ expense,setExpense ] = useState( {
        type: 'Expense',amount: '',category: 'Shopping',date: dateFormat( new Date() )
    } );

    const [ open,setOpen ] = useState( false );
    const categories = expense.type === 'Income' ? incomeCategories : expenseCategories;

    const handleSubmit = async ( event ) => {
        event.preventDefault();
        addTransaction( { ...expense,id: Math.random() } );
        setOpen( true );
        handleClear();
    }


    const handleClear = () => {
        setExpense( { type: 'Expense',amount: '',category: 'Shopping',date: dateFormat( new Date() ) } )
    }

    return (
        <div>
            <CustomSnackbar open={ open } setOpen={ setOpen } />
            <Paper style={ { position: 'relative' } }>
                <form onSubmit={ handleSubmit } className="form-container">
                    <InputLabel >Type</InputLabel>
                    <Select
                        value={ expense.type }
                        onChange={ ( event ) => setExpense( { ...expense,type: event.target.value } ) }>
                        { types.map( ( type ) => (
                            <MenuItem key={ type } value={ type } >
                                {type }
                            </MenuItem>
                        ) ) }
                    </Select>
                    <br />
                    <InputLabel >Category</InputLabel>
                    <Select
                        value={ expense.category }
                        onChange={ ( event ) => setExpense( { ...expense,category: event.target.value } ) }>
                        { categories.map( ( category ) => (
                            <MenuItem key={ category } value={ category.type } >
                                {category.type }
                            </MenuItem>
                        ) ) }
                    </Select>

                    <TextField label="Amount " name="amount" value={ expense.amount } fullWidth={ true }
                        onChange={ e => setExpense( { ...expense,amount: e.target.value } ) } />

                    <br />
                    <Typography> Date</Typography>
                    <TextField type="date" name="date" value={ expense.date } fullWidth={ true }
                        onChange={ e => setExpense( { ...expense,date: e.target.value.split( ',' ) } ) } />
                    <div style={ { 'marginTop': '15px',width: '100 %' } } >
                    </div>
                    <div style={ { textAlign: 'center' } }>
                        <Button variant="contained" color="primary" type="submit">Submit</Button>
                    </div>
                </form>
            </Paper>
        </div >
    )
}

export default Form
