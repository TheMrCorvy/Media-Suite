import { useEffect } from "react"

import CustomDialog from "./components/CustomDialog"
import Loader from "./components/Loader"

import useFfmpeg from "./ffmpeg/useFfmpeg"

function App() {
	const { ready, load } = useFfmpeg()

	useEffect(() => {
		if (process.env.NODE_ENV !== "test") {
			load()
		}
	}, [])

	return (
		<>
			<h1>Hello World!</h1>
			{ready ? "ready" : "loading..."}
			<CustomDialog
				title="test"
				openOnMount={process.env.NODE_ENV !== "test"}
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
