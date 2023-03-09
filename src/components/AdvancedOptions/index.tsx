import { FC } from "react"

import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"

import SelectFile from "../SelectFile"
import { SelectFileProps } from "../SelectFile/types"

const AdvancedOptions: FC = () => {
	const props: SelectFileProps = {
		callback: (files) => console.log(files),
		fileType: "*",
		multiple: true,
		buttonProps: {
			variant: "contained",
			color: "error",
			size: "large",
		},
	}

	return (
		<Grid container sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={4} md={3} lg={2}>
				<SelectFile {...props} />
			</Grid>
			<Grid item xs={12} sm={8} md={9} lg={10}>
				<TextField fullWidth label="Insert FFMPEG command" variant="outlined" />
			</Grid>
		</Grid>
	)
}

export default AdvancedOptions
