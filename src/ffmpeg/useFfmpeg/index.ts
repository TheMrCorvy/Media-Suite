import { createFFmpeg } from "@ffmpeg/ffmpeg"

const useFfmpeg = () => {
	const ffmpeg = createFFmpeg({ log: true })

	const load = async () => {
		await ffmpeg.load()

		return ffmpeg
	}

	return { load }
}

export default useFfmpeg
