export interface SelectFileProps extends useSelectFileProps {
	multiple?: boolean
	buttonProps?: {
		variant: "contained" | "outlined" | "text"
		color: "primary" | "error" | "info" | "inherit" | "secondary" | "success" | "warning"
		size: "large" | "medium" | "small"
	}
}

export interface useSelectFileProps {
	callback: (file: File) => void
	fileType: "video" | "image" | "audio" | "*"
	includeExtensions?: string[]
}
