import { createContext, useState } from "react"
import { createFFmpeg, FFmpeg } from "@ffmpeg/ffmpeg"
import { Props, FFmpegContextInterface, JobQueue, JobItem } from "./types"
import { ffmpegSettings } from "./settings"

const FFmpegContext = createContext<FFmpegContextInterface | null>(null)

export const FFmpegProvider = ({ children }: Props) => {
	const [ffmpeg, setFFmpeg] = useState<FFmpeg | null>(null)
	const [queue, setQueue] = useState<JobQueue>([])

	const load = async () => {
		// if (ffmpeg) {
		// 	return
		// }

		const ffmpegInstance = createFFmpeg({
			log: true,
		})

		await ffmpegInstance.load()
		await setFFmpeg(ffmpegInstance)

		return ffmpegInstance
	}

	const addToQueue = (job: JobItem) => {
		setQueue([...queue, job])
	}

	const exit = async () => {
		if (!ffmpeg) return

		await ffmpeg.exit()
		setFFmpeg(null)
	}

	const nextJob = () => {
		if (queue.length > 1) {
			const newQueue = queue
			newQueue.shift()
			setQueue(newQueue)

			return false
		}

		return true
	}

	const value: FFmpegContextInterface = {
		load,
		ffmpeg,
		ffmpegSettings,
		queue,
		addToQueue,
		nextJob,
		exit,
	}

	return <FFmpegContext.Provider value={value}>{children}</FFmpegContext.Provider>
}

export default FFmpegContext
