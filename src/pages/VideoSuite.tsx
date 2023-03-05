import { FC, useState, useEffect } from "react"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"

import CustomDialog from "../components/CustomDialog"
import Loader from "../components/Loader"
import SelectFile from "../components/SelectFile"

import useFfmpeg from "../ffmpeg/useFfmpeg"

const VideoSuite: FC = () => {
	const [openDialog, setOpenDialog] = useState(false)
	const { ready, load } = useFfmpeg()

	const testEnv = process.env.NODE_ENV === "test"

	useEffect(() => {
		if (!testEnv) {
			load()
		}

		// setOpenDialog(!testEnv)
	}, [])

	return (
		<>
			<Grid container spacing={0}>
				<Grid item xs={12} sx={{ minHeight: "50vh", background: "red", padding: "1.5rem" }}>
					<Grid container rowSpacing={2} columnSpacing={2}>
						<Grid item xs={10} sm={6} md={4} xl={2}>
							<Card sx={{ aspectRatio: "16 / 9" }}>
								<CardMedia
									sx={{ height: "100%", width: "100%" }}
									image="./src/assets/lycoris_test.jpg"
									title="green iguana"
								/>
							</Card>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					sx={{ minHeight: "50vh", background: "green", padding: "1.5rem" }}
				>
					<Grid container rowSpacing={2} columnSpacing={2}>
						<Grid item xs={10} sm={6} md={4} xl={2}>
							<Card sx={{ aspectRatio: "16 / 9" }}>
								<CardMedia
									sx={{ height: "100%", width: "100%" }}
									image="./src/assets/lycoris_test.jpg"
									title="green iguana"
								/>
							</Card>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			<CustomDialog
				title={
					ready
						? "Please select a video file to continue"
						: "Wait while the app is loaidng..."
				}
				openFromProps={openDialog}
				maxWidth="sm"
				fullWidth
				hideCloseBtn
				freeze
			>
				{!ready ? (
					<Loader status={ready ? 100 : undefined} />
				) : (
					<SelectFile fileType="video" callback={() => setOpenDialog(false)} />
				)}
			</CustomDialog>
		</>
	)
}

export default VideoSuite
