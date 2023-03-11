import { FC, useContext } from "react"

import Grid from "@mui/material/Grid"

import CustomSlider from "../CustomSlider"
import SelectItem from "../SelectItem"

import { FFmpegContextInterface } from "../../context/types"
import FFmpegContext from "../../context/Context"

const VideoFilters: FC = () => {
	const { ffmpegSettings } = useContext(FFmpegContext) as FFmpegContextInterface
	const set = ffmpegSettings.rangeSettings

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12}>
				<CustomSlider
					min={set.saturation.min}
					max={set.saturation.max}
					initialValue={set.saturation.defaultOption}
					step={0.1}
					label="Saturation"
					id="saturation"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.contrast.min}
					max={set.contrast.max}
					initialValue={set.contrast.defaultOption}
					step={20}
					label="Contrast"
					id="contrast"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.brightness.min}
					max={set.brightness.max}
					initialValue={set.brightness.defaultOption}
					step={0.1}
					label="Brightness"
					id="brightness"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.gamma.min}
					max={set.gamma.max}
					initialValue={set.gamma.defaultOption}
					step={0.1}
					label="Gamma"
					id="gamma"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.gamma.min}
					max={set.gamma.max}
					initialValue={set.gamma.defaultOption}
					step={0.1}
					label="Gamma R"
					id="gamma_r"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.gamma.min}
					max={set.gamma.max}
					initialValue={set.gamma.defaultOption}
					step={0.1}
					label="Gamma G"
					id="gamma_g"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.gamma.min}
					max={set.gamma.max}
					initialValue={set.gamma.defaultOption}
					step={0.1}
					label="Gamma B"
					id="gamma_b"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={set.gamma.min}
					max={set.gamma.max}
					initialValue={set.gamma.defaultOption}
					step={0.1}
					label="Gamma Weight"
					id="gamma_weight"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="framerate"
					label="Framerate FPS"
					variant="outlined"
					fullWidth
					items={ffmpegSettings.stringSettings.framerate}
				/>
			</Grid>
		</Grid>
	)
}

export default VideoFilters
