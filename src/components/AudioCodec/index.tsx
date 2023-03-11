import { FC, useContext } from "react"

import Grid from "@mui/material/Grid"

import SelectItem from "../SelectItem"

import { FFmpegContextInterface } from "../../context/types"
import FFmpegContext from "../../context/Context"

const AudioCodec: FC = () => {
	const { ffmpegSettings } = useContext(FFmpegContext) as FFmpegContextInterface
	const set = ffmpegSettings.stringSettings

	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<SelectItem
					fullWidth
					items={[
						{ name: "10", value: "10" },
						{ name: "12", value: "12" },
						{ name: "15", value: "15" },
					]}
					id="audio-track"
					label="Select Audio Track"
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<SelectItem
					fullWidth
					items={set.audioCodecs}
					id="audio-encoder"
					defaultOption={set.audioCodecs[0]}
					label="Audio Codec"
				/>
			</Grid>
			<Grid item xs={12} sm={6} md={4} lg={3}>
				<SelectItem
					fullWidth
					items={set.audioBitrate}
					id="audio-bitrate"
					defaultOption={set.audioBitrate[15]}
					label="Audio Bitrate"
				/>
			</Grid>
		</Grid>
	)
}

export default AudioCodec
