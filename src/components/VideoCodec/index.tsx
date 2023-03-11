import { FC, useContext } from "react"

import Grid from "@mui/material/Grid"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"

import CustomSlider from "../CustomSlider"
import SelectItem from "../SelectItem"

import FFmpegContext from "../../context/Context"
import { FFmpegContextInterface } from "../../context/types"

const VideoCodec: FC = () => {
	const { ffmpegSettings } = useContext(FFmpegContext) as FFmpegContextInterface
	const settings = ffmpegSettings.stringSettings

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={4} md={2}>
				<SelectItem
					id="output-format"
					label="Output Format"
					variant="outlined"
					fullWidth
					items={settings.outputFormats}
				/>
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
				<SelectItem
					id="video-codec"
					label="Video Codec"
					defaultOption={settings.videoCodecs[2]}
					variant="outlined"
					fullWidth
					items={settings.videoCodecs}
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
					defaultOption={settings.presets[4]}
					variant="outlined"
					fullWidth
					items={settings.presets}
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="tune"
					label="Tune"
					variant="outlined"
					fullWidth
					items={settings.tune}
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="profile"
					label="Profile"
					variant="outlined"
					fullWidth
					items={settings.profiles}
				/>
			</Grid>
		</Grid>
	)
}

export default VideoCodec
