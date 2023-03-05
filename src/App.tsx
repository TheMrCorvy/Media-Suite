import { useEffect, useState, ChangeEvent } from "react"

import Button from "@mui/material/Button"

import CustomDialog from "./components/CustomDialog"
import Loader from "./components/Loader"

import useFfmpeg from "./ffmpeg/useFfmpeg"
import VideoSuite from "./pages/VideoSuite"

function App() {
	const [video, setVideo] = useState<File>()
	const [openDialog, setOpenDialog] = useState(false)
	const { ready, load } = useFfmpeg()

	const testEnv = process.env.NODE_ENV === "test"

	useEffect(() => {
		if (!testEnv) {
			load()
		}

		setOpenDialog(!testEnv)
	}, [])

	const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		const selectedFiles = files as FileList
		setVideo(selectedFiles?.[0])
		setOpenDialog(false)
	}

	return (
		<>
			<VideoSuite />
			{ready ? "ready" : "loading..."}
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
					<Button variant="contained" color="primary" component="label">
						Select file
						<input hidden accept="video/*" type="file" onChange={selectFile} />
					</Button>
				)}
			</CustomDialog>
		</>
	)
}

export default App
