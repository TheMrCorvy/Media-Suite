import { FC, useState, useEffect, ChangeEvent } from "react"

import Button from "@mui/material/Button"

const SelectFile: FC<Props> = ({ callback, fileType, multiple, button }) => {
	const [file, setFile] = useState<File>()

	const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		const selectedFiles = files as FileList
		setFile(selectedFiles[0])
	}

	useEffect(() => file && callback(file), [file])

	return (
		<Button {...button} component="label">
			Select File
			<input
				hidden
				accept={fileType + "/*"}
				type="file"
				multiple={multiple}
				onChange={selectFile}
			/>
		</Button>
	)
}

interface Props {
	callback: (file: File) => void
	fileType: "video" | "image" | "audio"
	multiple?: boolean
	button?: {
		variant: "contained" | "outlined" | "text"
		color: "primary" | "error" | "info" | "inherit" | "secondary" | "success" | "warning"
		size: "large" | "medium" | "small"
	}
}

export default SelectFile
