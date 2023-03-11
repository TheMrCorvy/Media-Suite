export interface Stream {
	type: string
	info: string
	lang: string
	streamIndex: number
	title?: string
}

export interface FileInfo {
	streams: Stream[]
	fileFormat: string
	fileQuality: string
	basicInfo: string[]
}

export type ExecFunction = (index: number) => boolean // true => break | false => continue

export type LoopFor = (props: LoopForParams) => number

export interface LoopForParams {
	startFrom: number
	searchFor: string
	execFunction: ExecFunction
}
