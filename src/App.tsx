import { useEffect } from "react"

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
				title={ready ? 'Please select a video file to continue' : 'Wait while the app is loaidng...'}
				openFromProps={!testEnv}
				maxWidth="sm"
				fullWidth
				hideCloseBtn
			>
				<Loader status={ready ? 100 : undefined} />
			</CustomDialog>
		</>
	)
}

export default App
