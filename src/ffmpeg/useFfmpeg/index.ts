import { useState } from "react"
import { createFFmpeg } from "@ffmpeg/ffmpeg"

const useFfmpeg = () => {
	const [ready, setReady] = useState(false)

	const ffmpeg = createFFmpeg({ log: true })

	const load = async () => {
		await ffmpeg.load()

		setReady(true)
	}

	return { ready, load, ffmpeg }
}

export default useFfmpeg
