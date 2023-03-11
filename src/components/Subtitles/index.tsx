import { FC } from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import SelectItem from "../SelectItem"

const Subtitles: FC = () => {
	return (
		<Grid container spacing={2} sx={{ paddingTop: "1rem" }}>
			<Grid item xs={12} sm={6} md={4}>
				<SelectItem
					id="subtitles"
					label="Render Subtitles"
					fullWidth
					items={[
						{ name: "10", value: "10" },
						{ name: "12", value: "12" },
						{ name: "15", value: "15" },
					]}
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">language, file format, name, etc.</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">
					If you select to hard-burn any subtitle to the video the app will need to
					re-render it, so watch closely the video codec options, as well as the video
					filters in order prevent quality loss.
				</Typography>
			</Grid>
		</Grid>
	)
}

export default Subtitles
