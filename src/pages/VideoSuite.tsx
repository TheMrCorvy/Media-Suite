import { FC, useState, useEffect } from "react"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
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

		setOpenDialog(!testEnv)
	}, [])

	return (
		<Container maxWidth="xl">
			{/* <h1>Hello World!</h1> */}
			<Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />

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
		</Container>
	)
}

export default VideoSuite
