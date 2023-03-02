import { ReactElement } from "react"

export interface CustomDialogProps {
	children: ReactElement
	title: string
	className?: any
	trigger?: TriggerDialog
	openOnMount?: boolean
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
