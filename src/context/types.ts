import { ReactNode } from "react"
import { FFmpeg } from "@ffmpeg/ffmpeg"

export interface FFmpegContextInterface {
	load: () => Promise<void>
	ffmpeg: FFmpeg | null
}

export interface Props {
	children: ReactNode
}
