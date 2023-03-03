import { useEffect } from "react"

import Button from "@mui/material/Button"

import CustomDialog from "./components/CustomDialog"
import Loader from "./components/Loader"

import useFfmpeg from "./ffmpeg/useFfmpeg"

function App() {
	const { ready, load } = useFfmpeg()

	const testEnv = process.env.NODE_ENV === "test"

	useEffect(() => {
		if (!testEnv) {
			load()
		}
	}, [])

	return (
		<>
			<h1>Hello World!</h1>
			{ready ? "ready" : "loading..."}
			<CustomDialog
				title={
					ready
						? "Please select a video file to continue"
						: "Wait while the app is loaidng..."
				}
				openFromProps={!testEnv}
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
						<input hidden accept="video/*" type="file" />
					</Button>
				)}
			</CustomDialog>
		</>
	)
}

export default App
