import { FC, useState } from "react"

import Grid from "@mui/material/Grid"
import FormControl from "@mui/material/FormControl"
import InputLabel from "@mui/material/InputLabel"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import MenuItem from "@mui/material/MenuItem"
import CustomSlider from "../CustomSlider"

const VideoFilters: FC = () => {
	const [age, setAge] = useState("")

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string)
	}

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12}>
				<CustomSlider
					min={0}
					max={3}
					initialValue={1}
					step={0.1}
					label="Saturation"
					id="saturation"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={-1000}
					max={1000}
					initialValue={1}
					step={20}
					label="Contrast"
					id="contrast"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={-1}
					max={1}
					initialValue={0}
					step={0.1}
					label="Brightness"
					id="brightness"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={0.1}
					max={10}
					initialValue={1}
					step={0.1}
					label="Gamma"
					id="gamma"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={0.1}
					max={10}
					initialValue={1}
					step={0.1}
					label="Gamma R"
					id="gamma_r"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={0.1}
					max={10}
					initialValue={1}
					step={0.1}
					label="Gamma G"
					id="gamma_g"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={0.1}
					max={10}
					initialValue={1}
					step={0.1}
					label="Gamma B"
					id="gamma_b"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={0.1}
					max={10}
					initialValue={1}
					step={0.1}
					label="Gamma Weight"
					id="gamma_weight"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Framerate FPS</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={age}
						label="framerate FPS"
						onChange={handleChange}
						variant="outlined"
					>
						<MenuItem value={""}>Same as Source</MenuItem>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={12}>12</MenuItem>
						<MenuItem value={15}>15</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={24}>24</MenuItem>
						<MenuItem value={30}>30</MenuItem>
						<MenuItem value={48}>48</MenuItem>
						<MenuItem value={50}>50</MenuItem>
						<MenuItem value={60}>60</MenuItem>
						<MenuItem value={72}>72</MenuItem>
						<MenuItem value={75}>75</MenuItem>
						<MenuItem value={90}>90</MenuItem>
						<MenuItem value={100}>100</MenuItem>
						<MenuItem value={120}>120</MenuItem>
					</Select>
				</FormControl>
			</Grid>
		</Grid>
	)
}

export default VideoFilters
