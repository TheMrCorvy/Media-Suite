import { createFFmpeg } from "@ffmpeg/ffmpeg"

const useFfmpeg = () => {
	const ffmpeg = createFFmpeg({
		log: true,
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

// add a function to "keep all attachments"
// ffmpeg -i 1.mkv -map 0 -c copy -disposition:s:0 default 2.mkv
/** */
