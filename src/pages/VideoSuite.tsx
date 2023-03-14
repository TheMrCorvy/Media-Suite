import { FC, useContext, useState, useEffect } from "react"

import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardMedia from "@mui/material/CardMedia"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import Fab from "@mui/material/Fab"
import PlayCircleIcon from "@mui/icons-material/PlayCircle"

import CustomDialog from "../components/CustomDialog"
import Loader from "../components/Loader"
import SelectFile from "../components/SelectFile"
import ScrollableTabs from "../components/ScrollableTabs"
import VideoCodec from "../components/VideoCodec"
import VideoFilters from "../components/VideoFilters"
import Subtitles from "../components/Subtitles"
import AudioCodec from "../components/AudioCodec"
import AdvancedOptions from "../components/AdvancedOptions"

import useCustomDialog from "../hooks/useCustomDialog"
import useExtractLogsData from "../hooks/useExtractLogsData"

import { fetchFile } from "@ffmpeg/ffmpeg"
import FFmpegContext from "../context/Context"
import { FFmpegContextInterface } from "../context/types"

const VideoSuite: FC = () => {
	const { load, ffmpeg } = useContext(FFmpegContext) as FFmpegContextInterface
	const { getFileData } = useExtractLogsData()
	const [ready, setReady] = useState(false)

	useEffect(() => {
		load().then(() => setReady(true))
	}, [])

	const { handleClose, open } = useCustomDialog({ openFromProps: true })

	const readFileProps = async (files: FileList, index?: number) => {
		let logs: string[] = []

		if (!ffmpeg) {
			throw new Error("Something went wrong...")
		}

		ffmpeg.setLogger((log) => {
			logs.push(log.message)
		})

		setReady(false)

		fetchFile(files[index ? index : 0]).then((testFile) => {
			ffmpeg.FS("writeFile", "test.mkv", testFile)

			ffmpeg.run("-i", "test.mkv", "-f", "ffmetadata", "metadata.txt")
		})

		ffmpeg.setProgress(async ({ ratio }) => {
			if (ratio === 1) {
				const inputName = files[0].name
				const lastDot = inputName.lastIndexOf(".")
				const inputExtension = inputName.substring(lastDot + 1)

				const res = getFileData(logs)
				console.log({ ...res, inputName, inputExtension })
				setReady(true)
				handleClose()
			}
		})
	}

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
								<Grid item xs={12}>
									Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
									tempora ex neque eum assumenda accusamus eos et! Nostrum impedit
									velit expedita, iusto beatae excepturi ab. Reprehenderit,
									perspiciatis dicta. A, voluptate!
								</Grid>
								<Grid item xs={12}>
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
							<ScrollableTabs
								tabs={[
									"video codec",
									"video filters",
									"subtitles",
									"audio codec",
									"advanced",
								]}
							>
								<VideoCodec />
								<VideoFilters />
								<Subtitles />
								<AudioCodec />
								<AdvancedOptions />
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
				openFromProps={open}
				maxWidth="sm"
				fullWidth
				hideCloseBtn
				freeze
			>
				{!ready ? (
					<Loader status={ready ? 100 : undefined} />
				) : (
					<SelectFile
						fileType="video"
						includeExtensions={["mkv"]}
						callback={readFileProps}
						multiple
					/>
				)}
			</CustomDialog>
		</>
	)
}

export default VideoSuite
