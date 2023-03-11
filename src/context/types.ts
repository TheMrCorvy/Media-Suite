import { ReactNode } from "react"
import { FFmpeg } from "@ffmpeg/ffmpeg"

export interface FFmpegContextInterface {
	load: () => Promise<void>
	ffmpeg: FFmpeg | null
	ffmpegSettings: FFmpegSettings
}

export interface Props {
	children: ReactNode
}

interface StringSetting {
	name: string
	value: string
}

interface RangeSetting {
	min: number
	max: number
	defaultOption?: number
}

export interface FFmpegSettings {
	stringSettings: {
		[key: string]: StringSetting[]
	}
	rangeSettings: {
		[key: string]: RangeSetting
	}
}
