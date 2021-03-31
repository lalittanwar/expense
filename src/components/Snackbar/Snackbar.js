import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import useStyles from './styles';

function CustomSnackbar ( { open,setOpen,isDelete } ) {
    const classes = useStyles();

    const handleClose = ( event,reason ) => {
        if ( reason === 'clickaway' ) {
            return;
        }
        setOpen( false );
    }

    return (
        <div className={ classes.root }>
            {isDelete ?
                <Snackbar
                    anchorOrigin={ { vertical: 'top',horizontal: 'right' } }
                    open={ open } autoHideDuration={ 6000 } onClose={ handleClose }>
                    <MuiAlert onClose={ handleClose } severity="error" elevation={ 6 } variant="filled">Transaction deleted created.</MuiAlert>
                </Snackbar>
                :
                <Snackbar
                    anchorOrigin={ { vertical: 'top',horizontal: 'right' } }
                    open={ open } autoHideDuration={ 6000 } onClose={ handleClose }>
                    <MuiAlert onClose={ handleClose } severity="success" elevation={ 6 } variant="filled">Transaction successfully created.</MuiAlert>
                </Snackbar>
            }

        </div>
    )
}

export default CustomSnackbar
