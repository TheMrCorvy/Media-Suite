import { FC, ReactElement, useEffect } from "react"

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';

import LiveHelpIcon from '@mui/icons-material/LiveHelp';

import DialogTransition from './DialogTransition';
import useCustomDialog from './useCustomDialog';

interface Props {
    children: ReactElement
    title: string
    className?: any
    trigger?: {
        tooltipPlacement:
        | "left"
        | "right"
        | "top"
        | "bottom"
        | "bottom-end"
        | "bottom-start"
        | "left-end"
        | "left-start"
        | "right-end"
        | "right-start"
        | "top-end"
        | "top-start"
        tooltipTitle: string
        type: 'Button' | 'Fab',
        variant: 'contained' | 'outlined' | 'text'
        size: 'large' | 'medium' | 'small'
        color: 'error' | 'info' | 'inherit' | 'success' | 'warning' | 'primary' | 'secondary'
    }
    openOnMount?: boolean
}

const CustomDialog: FC<Props> = ({ children, title, className, trigger, openOnMount

}) => {

    const { open, handleOpen, handleClose } = useCustomDialog()

    useEffect(() => {
        if (openOnMount) {
            handleOpen()
        }
    }, [])

    const renderDialogTrigger = () => {


        if (!trigger) {
            return null
        }

        const { color, size, variant, tooltipTitle, tooltipPlacement } = trigger

        if (trigger.type === 'Button') {
            return (<Button variant={variant} size={size} color={color} onClick={handleOpen}>
                {tooltipTitle}
            </Button>)
        }

        return (<Tooltip
            title={tooltipTitle}
            placement={tooltipPlacement}
        >
            <Fab

                size={size} color={color}
                aria-label="help"
                onClick={handleOpen}
            >
                <LiveHelpIcon />
            </Fab>
        </Tooltip>)
    }

    return (
        <div>
            {renderDialogTrigger()}
            <Dialog
                open={open}
                keepMounted
                className={className}
                onClose={handleClose}
                TransitionComponent={DialogTransition}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{title}</DialogTitle>
                <DialogContent>
                    {children}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default CustomDialog