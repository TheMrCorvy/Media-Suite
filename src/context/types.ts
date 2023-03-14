import { ReactNode } from "react"
import { FFmpeg } from "@ffmpeg/ffmpeg"
import { FileInfo } from "../hooks/useExtractLogsData/types"

export interface FFmpegContextInterface {
	load: () => Promise<void>
	ffmpeg: FFmpeg | null
	ffmpegSettings: FFmpegSettings
	queue: JobQueue
	addToQueue: (job: JobItem) => void
	nextJob: () => boolean // queue is over = true, otherwise false
}

export interface Props {
	children: ReactNode
}

export interface StringSetting {
	name: string
	value: string
}

export interface RangeSetting {
	min: number
	max: number
	step: number
	defaultOption?: number
}

export interface FFmpegSettings {
	videoCodec: {
		[key: string]: StringSetting[] | RangeSetting
	}
	subtitles: any // just for now
	videoFilters: {
		[key: string]: StringSetting[] | RangeSetting
	}
	audioCodec: {
		[key: string]: StringSetting[] | RangeSetting
	}
	audioFilters: {
		[key: string]: StringSetting[] | RangeSetting
	}
}

export type JobQueue = JobItem[]

export interface JobItem {
	file: File
	fileInfo: FileInfo
	previewUrl: string
	command: string[]
	settingsSelected: FFmpegSettings
	readyToStart: boolean
}
