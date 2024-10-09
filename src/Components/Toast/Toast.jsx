import React, { useEffect } from 'react'
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';


const Toast = ({ show, errorName = 'success', errorMessage }) => {
    const [open, setOpen] = React.useState(false);

    useEffect(() => {
        setOpen(show);
    }, [show]);
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    return (
        <>
            <div>
                <Snackbar open={open} autoHideDuration={2000} onClose={handleClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} key={'bottom' + 'right'}>
                    <Alert
                        onClose={handleClose}
                        severity={errorName}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        {errorMessage}
                    </Alert>
                </Snackbar>
            </div>
        </>
    )
}

export default Toast