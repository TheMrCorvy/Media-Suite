import { FC, useEffect } from "react"

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import Tooltip from "@mui/material/Tooltip"
import Fab from "@mui/material/Fab"

import LiveHelpIcon from "@mui/icons-material/LiveHelp"

import DialogTransition from "./DialogTransition"
import useCustomDialog from "./useCustomDialog"

import { CustomDialogProps } from "./types"

const CustomDialog: FC<CustomDialogProps> = (props) => {
	const {
		children,
		title,
		className,
		trigger,
		openFromProps,
		fullWidth,
		maxWidth,
		sx,
		hideCloseBtn,
		freeze,
	} = props

	const { open, handleOpen, handleClose } = useCustomDialog({ openFromProps, freeze })

	const renderDialogTrigger = () => {
		if (!trigger) return null

		const { color, size, variant, tooltipTitle, tooltipPlacement } = trigger

		if (trigger.type === "Button") {
			return (
				<Button variant={variant} size={size} color={color} onClick={handleOpen}>
					{tooltipTitle}
				</Button>
			)
		}

		return (
			<Tooltip title={tooltipTitle} placement={tooltipPlacement}>
				<Fab
					size={size}
					color={color}
					aria-label="help"
					onClick={handleOpen}
					data-testid="trigger-fab-icon"
				>
					<LiveHelpIcon />
				</Fab>
			</Tooltip>
		)
	}

	return (
		<div>
			{renderDialogTrigger()}
			<Dialog
				open={open}
				keepMounted
				fullWidth={fullWidth}
				maxWidth={maxWidth}
				onClose={handleClose}
				TransitionComponent={DialogTransition}
				aria-describedby="alert-dialog-slide-description"
				sx={sx}
			>
				<DialogTitle>{title}</DialogTitle>
				<DialogContent className={className}>{children}</DialogContent>
				{!hideCloseBtn && (
					<DialogActions>
						<Button onClick={handleClose}>Close</Button>
					</DialogActions>
				)}
			</Dialog>
		</div>
	)
}

export default CustomDialog
