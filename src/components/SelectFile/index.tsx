import { FC } from "react"

import Button from "@mui/material/Button"

import { SelectFileProps } from "./types"
import useSelectFiles from "./useSelectFile"

const SelectFile: FC<SelectFileProps> = ({
	callback,
	fileType,
	includeExtensions,
	multiple,
	buttonProps,
}) => {
	const { accept, selectFile } = useSelectFiles({ callback, fileType, includeExtensions })

	return (
		<Button {...buttonProps} component="label">
			Select File
			<input
				hidden
				accept={accept()}
				type="file"
				multiple={multiple}
				onChange={selectFile}
				data-testid="select-file"
			/>
		</Button>
	)
}

export default SelectFile
