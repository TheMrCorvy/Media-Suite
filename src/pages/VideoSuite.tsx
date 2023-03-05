import { FC, useState, useEffect } from "react"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Fab from "@mui/material/Fab"
import Typography from "@mui/material/Typography"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"

import CustomDialog from "../components/CustomDialog"
import Loader from "../components/Loader"
import SelectFile from "../components/SelectFile"
import ScrollableTabs from "../components/ScrollableTabs"

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
							<TextField
								sx={{ width: "100%" }}
								variant="standard"
								defaultValue="Hello World"
								label="Edit Name of the File"
							/>
							<Card sx={{ aspectRatio: "16 / 9" }}>
								<CardMedia
									sx={{ height: "100%", width: "100%" }}
									image="./src/assets/lycoris_test.jpg"
									title="green iguana"
								/>
							</Card>
						</Grid>
						<Grid item xs>
							<Grid container>
								<Grid xs={12}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
									tempora ex neque eum assumenda accusamus eos et! Nostrum impedit
									velit expedita, iusto beatae excepturi ab. Reprehenderit,
									perspiciatis dicta. A, voluptate!
								</Grid>
								<Grid xs={12}>
									<Grid container>
										<Grid item xs={8}>
											<Button variant="contained">Load Preset</Button>
										</Grid>
										<div style={{ flexGrow: 1 }} />
										<Grid item xs={4}>
											<Grid container>
												<Grid item xs={8}>
													<Button variant="contained">Save Preset</Button>
												</Grid>
												<Grid item xs={4}>
													<Fab color="success" aria-label="start">
														<PlayCircleIcon />
													</Fab>
												</Grid>
											</Grid>
										</Grid>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>

				<Grid
					item
					xs={12}
					sx={{ minHeight: "50vh", background: "green", padding: "1.5rem" }}
				>
					<Grid container rowSpacing={2} columnSpacing={2}>
						<Grid item xs={12}>
							<ScrollableTabs tabs={["tab 1", "tab 2", "tab 3"]}>
								<Typography variant="body1">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
								</Typography>
								<Typography variant="body1">
									Aspernatur ipsum quae officiis.{" "}
								</Typography>
								<Typography variant="body1">
									Tempore ab, velit qui illo dignissimos enim laudantium.
									Reprehenderit cum ad consequatur nulla quia, distinctio numquam
									praesentium reiciendis!
								</Typography>
							</ScrollableTabs>
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
