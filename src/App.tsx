import { useState, useEffect } from "react"
// import reactLogo from './assets/react.svg'

import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg"

function App() {
	const [ready, setReady] = useState(false)

	const load = async () => {
		const ffmpeg = createFFmpeg({ log: true })

		await ffmpeg.load()

		setReady(true)
	}

	useEffect(() => {
		if (process.env.NODE_ENV !== "test") {
			load()
		}
	}, [])

	return (
		<>
			<h1>Hello World!</h1>
			{ready ? "ready" : "loading..."}
		</>
	)
}

export default App
