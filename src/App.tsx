import { useEffect, useState, ChangeEvent } from "react"



import CustomDialog from "./components/CustomDialog"
import Loader from "./components/Loader"
import SelectFile from "./components/SelectFile"

import useFfmpeg from "./ffmpeg/useFfmpeg"
import VideoSuite from "./pages/VideoSuite"

function App() {

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
					<SelectFile fileType="video" callback={() => setOpenDialog(false)} />
				)}
			</CustomDialog>
		</>
	)
}

export default App
