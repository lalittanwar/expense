import React,{ useContext,useState } from 'react';
import { List as MUIList,ListItem,ListItemAvatar,Avatar,ListItemText,ListItemSecondaryAction,IconButton,Slide } from '@material-ui/core';
import { Delete,MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../context/context';
import CustomSnackbar from "../../Snackbar/Snackbar";
import useStyles from './styles';

function List () {
    const classes = useStyles();
    const { transaction,deleteTransaction } = useContext( ExpenseTrackerContext );
    const [ open,setOpen ] = useState( false );

    const deleteItem = ( id ) => {
        deleteTransaction( id );
        setOpen( true );
    }

    return (
        <React.Fragment>
            <CustomSnackbar open={ open } setOpen={ setOpen } isDelete={ true } />
            <MUIList dense={ false } className={ classes.list }>
                { transaction.map( ( transaction ) => (
                    <Slide direction="down" in mountOnEnter unmountOnExit key={ transaction.id }>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar className={ transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense }>
                                    <MoneyOff />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary={ transaction.category } secondary={ `${ transaction.amount } - ${ transaction.date }` } />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={ () => deleteItem( transaction.id ) }>
                                    <Delete />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    </Slide>
                ) ) }
            </MUIList>
        </React.Fragment >
    )
}

export default List
