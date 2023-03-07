import { FC, useState } from "react"

import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Typography from "@mui/material/Typography"

const Subtitles: FC = () => {
	const [age, setAge] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">render subtitles</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="video codec"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">language, file format, name, etc.</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">
					If you select to hard-burn any subtitle to the video the app will need to
					re-render it, so watch closely the video codec options, as well as the video
					filters in order prevent quality loss.
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Subtitles
