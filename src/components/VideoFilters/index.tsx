import { FC, useContext } from "react"

import Grid from "@mui/material/Grid"

import CustomSlider from "../CustomSlider"
import SelectItem from "../SelectItem"

import FFmpegContext from "../../context/Context"
import { FFmpegContextInterface, StringSetting, RangeSetting } from "../../context/types"

const VideoFilters: FC = () => {
	const { ffmpegSettings } = useContext(FFmpegContext) as FFmpegContextInterface
	const saturation = ffmpegSettings.videoFilters.saturation as RangeSetting
	const contrast = ffmpegSettings.videoFilters.contrast as RangeSetting
	const brightness = ffmpegSettings.videoFilters.brightness as RangeSetting
	const gamma = ffmpegSettings.videoFilters.gamma as RangeSetting
	const gammaR = ffmpegSettings.videoFilters.gammaR as RangeSetting
	const gammaG = ffmpegSettings.videoFilters.gammaG as RangeSetting
	const gammaB = ffmpegSettings.videoFilters.gammaB as RangeSetting
	const gammaWeight = ffmpegSettings.videoFilters.gammaWeight as RangeSetting
	const framerate = ffmpegSettings.videoFilters.framerate as StringSetting[]

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12}>
				<CustomSlider
					min={saturation.min}
					max={saturation.max}
					initialValue={saturation.defaultOption}
					step={saturation.step}
					label="Saturation"
					id="saturation"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={contrast.min}
					max={contrast.max}
					initialValue={contrast.defaultOption}
					step={contrast.step}
					label="Contrast"
					id="contrast"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={brightness.min}
					max={brightness.max}
					initialValue={brightness.defaultOption}
					step={brightness.step}
					label="Brightness"
					id="brightness"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={gamma.min}
					max={gamma.max}
					initialValue={gamma.defaultOption}
					step={gamma.step}
					label="Gamma"
					id="gamma"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={gammaR.min}
					max={gammaR.max}
					initialValue={gammaR.defaultOption}
					step={gammaR.step}
					label="Gamma R"
					id="gamma_r"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={gammaG.min}
					max={gammaG.max}
					initialValue={gammaG.defaultOption}
					step={gammaG.step}
					label="Gamma G"
					id="gamma_g"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={gammaB.min}
					max={gammaB.max}
					initialValue={gammaB.defaultOption}
					step={gammaB.step}
					label="Gamma B"
					id="gamma_b"
					marks
					showTextField
				/>
			</Grid>
			<Grid item xs={12}>
				<CustomSlider
					min={gammaWeight.min}
					max={gammaWeight.max}
					initialValue={gammaWeight.defaultOption}
					step={gammaWeight.step}
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
					items={framerate}
				/>
			</Grid>
		</Grid>
	)
}

export default VideoFilters
