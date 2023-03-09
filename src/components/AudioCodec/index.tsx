import { FC, useState } from "react"

import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

const AudioCodec: FC = () => {
	const [age, setAge] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Audio Track</InputLabel>
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
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Audio Codec</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="framerate FPS"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Mix Down</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="encoder options"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Bitrate</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="encoder options"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	)
}

export default AudioCodec
