import { createContext, useState } from "react"
import { createFFmpeg, FFmpeg } from "@ffmpeg/ffmpeg"
import { Props, FFmpegContextInterface } from "./types"

const FFmpegContext = createContext<FFmpegContextInterface | null>(null)

export const FFmpegProvider = ({ children }: Props) => {
	const [ffmpeg, setFFmpeg] = useState<FFmpeg | null>(null)

	const load = async () => {
		if (ffmpeg) {
			return
		}

		const ffmpegInstance = createFFmpeg({
			log: true,
		})

		await ffmpegInstance.load()
		await setFFmpeg(ffmpegInstance)
	}

	const value: FFmpegContextInterface = { load, ffmpeg }

	return <FFmpegContext.Provider value={value}>{children}</FFmpegContext.Provider>
}

export default FFmpegContext
