import { createFFmpeg } from "@ffmpeg/ffmpeg"

const useFfmpeg = () => {
	const ffmpeg = createFFmpeg({
		log: false,
	})

	const load = async () => {
		await ffmpeg.load()

		return ffmpeg
	}

	return { load }
}

export default useFfmpeg

// important for later
// https://github.com/ffmpegwasm/ffmpeg.wasm-core#configuration
