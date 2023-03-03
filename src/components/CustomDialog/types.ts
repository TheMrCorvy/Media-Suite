import { ReactElement } from "react"

export interface CustomDialogProps extends BuildCustomDialogProps {
	children: ReactElement
}

interface BuildCustomDialogProps {
	title: string
	className?: any
	sx?: any
	trigger?: TriggerDialog
	openFromProps?: boolean
	fullWidth?: boolean
	maxWidth?: false | "xs" | "sm" | "md" | "lg" | "xl"
	hideCloseBtn?: boolean
}

export interface TriggerDialog {
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
	type: "Button" | "Fab"
	variant: "contained" | "outlined" | "text"
	size: "large" | "medium" | "small"
	color: "error" | "info" | "inherit" | "success" | "warning" | "primary" | "secondary"
}
