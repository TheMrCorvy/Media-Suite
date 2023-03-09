import { FC, useState, ChangeEvent } from "react"

import Grid from "@mui/material/Grid"
import Slider from "@mui/material/Slider"
import Typography from "@mui/material/Typography"
import TextField from "@mui/material/TextField"

const VideoFilters: FC = () => {
	const [value, setValue] = useState<number>(1)

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		if (typeof newValue === "number") {
			setValue(newValue)
		}
	}

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value)

		if (newValue <= 3 && newValue >= 1) {
			setValue(newValue)
		} else {
			setValue(100)
		}
	}

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12}>
				<Grid container>
					<Grid item xs={9}>
						<Typography variant="subtitle1">Saturation</Typography>
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
					valueLabelDisplay="auto"
					step={0.1}
					marks
					min={1}
					max={3}
					value={value}
					onChange={handleSliderChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">(cropping options)</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">(sharpening options)</Typography>
			</Grid>
		</Grid>
	)
}

export default VideoFilters
