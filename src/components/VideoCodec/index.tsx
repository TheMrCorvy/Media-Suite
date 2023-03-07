import { FC, useState, ChangeEvent } from "react"

import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"

function valuetext(value: number) {
	return `${value}°C`
}

const VideoCodec: FC = () => {
	const [age, setAge] = useState("")

	const [value, setValue] = useState<number>(30)

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		if (typeof newValue === "number") {
			setValue(newValue)
		}
	}

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value)

		if (newValue <= 100 && newValue >= 0) {
			setValue(newValue)
		} else {
			setValue(100)
		}
	}

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={4} md={2}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">output format</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="Output Format"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={12} sm={8} md={10}>
				<Grid container>
					<Grid item xs={9}>
						<Typography variant="subtitle1">Quality of the video</Typography>
					</Grid>
					<Grid item xs={3}>
						<TextField
							id="outlined-controlled"
							label="Controlled"
							type="number"
							value={value}
							onChange={handleTextChange}
						/>
					</Grid>
				</Grid>
				<Slider
					aria-label="Quality of the video"
					getAriaValueText={valuetext}
					valueLabelDisplay="auto"
					step={1}
					marks
					min={0}
					max={100}
					value={value}
					onChange={handleSliderChange}
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">video codec</InputLabel>
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
			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">framerate FPS</InputLabel>
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
			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">encoder options</InputLabel>
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

			<Grid item>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Include found metadata"
					/>
				</FormGroup>
			</Grid>
		</Grid>
	)
}

export default VideoCodec
