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
	const { load, ffmpeg, exit } = useContext(FFmpegContext) as FFmpegContextInterface
	const { getFileData } = useExtractLogsData()
	const [ready, setReady] = useState(false)
	const [previewUrl, setPreviewUrl] = useState("")

	useEffect(() => {
		load().then(() => {
			setReady(true)
		})
	}, [])

	const { handleClose, open } = useCustomDialog({ openFromProps: true })

	const readFileProps = async (files: FileList, index?: number) => {
		let logs: string[] = []

		if (!ffmpeg) {
			throw new Error("Something went wrong...")
		}
		setReady(false)

		ffmpeg.setLogger((log) => {
			logs.push(log.message)
		})

		const inputFile = files[index ? index : 0]
		const resFile = await fetchFile(inputFile)

		await ffmpeg.FS("writeFile", inputFile.name, resFile)
		await ffmpeg.run("-i", inputFile.name, "-f", "ffmetadata", "metadata.txt")

		ffmpeg.FS("unlink", inputFile.name)
		const inputName = inputFile.name
		const lastDot = inputName.lastIndexOf(".")
		const inputExtension = inputName.substring(lastDot + 1)
		const res = getFileData(logs)

		console.clear()
		await exit()

		console.log({ ...res, inputName, inputExtension, previewUrl })

		generatePreviewUrl(res.basicInfo[0], inputFile)
	}

	const createTimeStamp = (minutes: number, seconds: number) => {
		if (minutes > 0) {
			return `00:${Math.floor(Math.random() * minutes)}:00`
		}

		return `00:00:${Math.floor(Math.random() * seconds)}`
	}

	const generatePreviewUrl = async (durationStr: string, video: File) => {
		const strArr = durationStr.split(":")
		const minutes = Number(strArr[2])
		const seconds = Number(strArr[2])
		const timeStamp = createTimeStamp(minutes, seconds)
		let logs: string[] = []

		if (!ffmpeg) {
			throw new Error("Something went wrong...")
		}

		const newFFmpeg = await load()

		if (!newFFmpeg.isLoaded()) {
			await load()
		}

		newFFmpeg.setLogger((log) => {
			logs.push(log.message)
		})

		const resFile = await fetchFile(video)
		await newFFmpeg.FS("writeFile", video.name, resFile)
		await newFFmpeg.run(
			"-ss",
			timeStamp,
			"-i",
			video.name,
			"-frames:v",
			"1",
			"-q:v",
			"2",
			"preview.jpg"
		)

		const data = newFFmpeg.FS("readFile", "preview.jpg")
		const url = URL.createObjectURL(new Blob([data.buffer], { type: "image/jpg" }))
		setPreviewUrl(url)
		setReady(true)
		handleClose()
		newFFmpeg.FS("unlink", video.name)
		newFFmpeg.FS("unlink", "preview.jpg")
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
									image={
										previewUrl ? previewUrl : "./src/assets/lycoris_test.jpg"
									}
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
					<Loader maxLimit={95} growingValue={5} />
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
