import { useEffect } from "react"

import useFfmpeg from "./ffmpeg/useFfmpeg"

function App() {
	const { ready, load } = useFfmpeg()

	useEffect(() => {
		if (process.env.NODE_ENV !== "test") {
			load()
		}
	})

	return (
		<>
			<h1>Hello World!</h1>
			{ready ? "ready" : "loading..."}
		</>
	)
}

export default App
