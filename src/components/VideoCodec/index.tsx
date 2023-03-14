import { FC, useContext } from "react"

import Grid from "@mui/material/Grid"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"

import CustomSlider from "../CustomSlider"
import SelectItem from "../SelectItem"

import FFmpegContext from "../../context/Context"
import { FFmpegContextInterface, StringSetting, RangeSetting } from "../../context/types"

const VideoCodec: FC = () => {
	const { ffmpegSettings } = useContext(FFmpegContext) as FFmpegContextInterface
	const outputFormats = ffmpegSettings.videoCodec.outputFormats as StringSetting[]
	const videoCodecs = ffmpegSettings.videoCodec.codecs as StringSetting[]
	const presets = ffmpegSettings.videoCodec.presets as StringSetting[]
	const tune = ffmpegSettings.videoCodec.tune as StringSetting[]
	const profiles = ffmpegSettings.videoCodec.profiles as StringSetting[]
	const csrf = ffmpegSettings.videoCodec.csrf as RangeSetting

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={4} md={2}>
				<SelectItem
					id="output-format"
					label="Output Format"
					variant="outlined"
					fullWidth
					items={outputFormats}
				/>
			</Grid>

			<Grid item xs={12} sm={8} md={10}>
				<CustomSlider
					showTextField
					id="select-video-quality"
					label="Select Video Quality"
					min={csrf.min}
					max={csrf.max}
					initialValue={csrf.defaultOption}
					step={csrf.step}
					marks
				/>
			</Grid>

			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="video-codec"
					label="Video Codec"
					defaultOption={videoCodecs[2]}
					variant="outlined"
					fullWidth
					items={videoCodecs}
				/>
			</Grid>
			<Grid item>
				<FormGroup>
					<FormControlLabel
						control={<Checkbox defaultChecked />}
						label="Include found metadata"
					/>
				</FormGroup>
			</Grid>

			<Grid item xs={12}>
				<Typography variant="h5">Encoder Options</Typography>
			</Grid>

			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="presets"
					label="Preset (Encoding Speed)"
					defaultOption={presets[4]}
					variant="outlined"
					fullWidth
					items={presets}
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<SelectItem id="tune" label="Tune" variant="outlined" fullWidth items={tune} />
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="profile"
					label="Profile"
					variant="outlined"
					fullWidth
					items={profiles}
				/>
			</Grid>
		</Grid>
	)
}

export default VideoCodec
