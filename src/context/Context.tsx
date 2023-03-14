import { createContext, useState } from "react"
import { createFFmpeg, FFmpeg } from "@ffmpeg/ffmpeg"
import { Props, FFmpegContextInterface } from "./types"
import { ffmpegSettings } from "./settings"

const FFmpegContext = createContext<FFmpegContextInterface | null>(null)

export const FFmpegProvider = ({ children }: Props) => {
	const [ffmpeg, setFFmpeg] = useState<FFmpeg | null>(null)
	const [files, setFiles] = useState<FileList>()
	const [currentJob, setCurrentJob] = useState<number>(0)

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

	const updateQueue = (files: FileList) => {
		setFiles(files)
	}

	const value: FFmpegContextInterface = { load, ffmpeg, ffmpegSettings }

	return <FFmpegContext.Provider value={value}>{children}</FFmpegContext.Provider>
}

export default FFmpegContext
