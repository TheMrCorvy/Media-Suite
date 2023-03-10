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
						<MenuItem value={"copy"}>Copy Original Codec</MenuItem>
						<MenuItem value={"aac"}>AAC</MenuItem>
						<MenuItem value={"aac3"}>AAC3</MenuItem>
						<MenuItem value={"flac"}>FLAC</MenuItem>
						<MenuItem value={"opus"}>Opus</MenuItem>
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
						<MenuItem value={24}>24</MenuItem>
						<MenuItem value={32}>32</MenuItem>
						<MenuItem value={40}>40</MenuItem>
						<MenuItem value={48}>48</MenuItem>
						<MenuItem value={56}>56</MenuItem>
						<MenuItem value={64}>64</MenuItem>
						<MenuItem value={80}>80</MenuItem>
						<MenuItem value={96}>96</MenuItem>
						<MenuItem value={112}>112</MenuItem>
						<MenuItem value={128}>128</MenuItem>
						<MenuItem value={160}>160</MenuItem>
						<MenuItem value={192}>192</MenuItem>
						<MenuItem value={224}>224</MenuItem>
						<MenuItem value={224}>224</MenuItem>
						<MenuItem value={256}>256</MenuItem>
						<MenuItem value={320}>320</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	)
}

export default AudioCodec
