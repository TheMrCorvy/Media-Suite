import { FC, useState } from "react"

import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"

import CustomSlider from "../CustomSlider"

const VideoCodec: FC = () => {
	const [age, setAge] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={4} md={2}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Output Format</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="Output Format"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={'mp4'}>MP4</MenuItem>
						<MenuItem value={'mkv'}>MKV</MenuItem>
						<MenuItem value={'webm'}>WEBM</MenuItem>
					</Select>
				</FormControl>
			</Grid>

			<Grid item xs={12} sm={8} md={10}>
				<CustomSlider
					showTextField
					id="select-video-quality"
					label="Select Video Quality"
					min={0}
					max={50}
					initialValue={23}
					step={1}
					marks
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Video Codec</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="video codec"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={'copy'}>Copy Original Codec</MenuItem>
						<MenuItem value={'libaom-av1'}>AV1</MenuItem>
						<MenuItem value={'libx264'}>H.264</MenuItem>
						<MenuItem value={'libx265'}>H.265</MenuItem>
						<MenuItem value={'mpeg2'}>MPEG-2</MenuItem>
						<MenuItem value={'libtheora'}>Theora</MenuItem>
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

			<Grid item xs={12} >
				<Typography variant="h5">
					Encoder Options
				</Typography>
			</Grid>

			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Preset (Encoding Speed)</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="encoder options"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={'ultrafast'}>UltraFast</MenuItem>
						<MenuItem value={'superfast'}>Super Fast</MenuItem>
						<MenuItem value={'veryfast'}>Very Fast</MenuItem>
						<MenuItem value={'faster'}>Faster</MenuItem>
						<MenuItem value={'fast'}>Fast</MenuItem>
						<MenuItem value={'medium'}>Medium</MenuItem>
						<MenuItem value={'slow'}>Slow</MenuItem>
						<MenuItem value={'slower'}>Slower</MenuItem>
						<MenuItem value={'veryslow'}>Very Slow</MenuItem>
						<MenuItem value={'placebo'}>Placebo</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Tune</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="encoder options"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={'film'}>Film</MenuItem>
						<MenuItem value={'animation'}>Animation</MenuItem>
						<MenuItem value={'grain'}>Grain</MenuItem>
						<MenuItem value={'stillimage'}>Still Image</MenuItem>
						<MenuItem value={'fastdecode'}>Fast Decode</MenuItem>
						<MenuItem value={'zerolatency'}>Zero Latency</MenuItem>
						<MenuItem value={'pjsmr'}>pjsmr</MenuItem>
					</Select>
				</FormControl>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Profile</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="encoder options"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={'baseline'}>Baseline</MenuItem>
						<MenuItem value={'main'}>Main</MenuItem>
						<MenuItem value={'high'}>High</MenuItem>
						<MenuItem value={'high10'}>High10</MenuItem>
						<MenuItem value={'high422'}>High422</MenuItem>
						<MenuItem value={'high444'}>High444</MenuItem>
					</Select>
				</FormControl>
			</Grid>


		</Grid>
	)
}

export default VideoCodec
