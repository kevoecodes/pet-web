import Slide from '@mui/material/Slide';
import Dialog from '@mui/material/Dialog';
import { Button, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { forwardRef } from 'react';

export const PetOutsideFenceDialog = ({ open, setOpen, content }) => {
    const Transition = forwardRef(function Transition(props, ref) {
        return <Slide direction="down" ref={ref} {...props} />;
    });

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{'Alert!'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">{content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Seen</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
