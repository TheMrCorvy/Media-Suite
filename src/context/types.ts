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
