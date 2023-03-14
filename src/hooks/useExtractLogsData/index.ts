import { Stream, FileInfo, ExecFunction, LoopFor } from "./types"

const useExtractLogsData = () => {
	let fileInfo: FileInfo = {
		streams: [],
		fileFormat: "",
		fileQuality: "",
		basicInfo: [],
		inputName: "",
		inputExtension: "",
	}
	let stream: Stream = {
		type: "",
		info: "",
		lang: "",
		streamIndex: 0,
	}
	let currentIndex = 0
	let logs: string[]

	const getFileData = (paramLogs: string[]) => {
		logs = paramLogs
		loopFor({
			startFrom: currentIndex,
			searchFor: "Input #0, ",
			execFunction: getTypeQuality,
		})
		loopFor({
			startFrom: currentIndex,
			searchFor: "Duration: ",
			execFunction: getFileInfo,
		})
		loopFor({
			startFrom: currentIndex,
			searchFor: "Stream #0:",
			execFunction: getStreamData,
		})

		return fileInfo
	}

	const loopFor: LoopFor = ({ startFrom, searchFor, execFunction }) => {
		let currentIndex = startFrom

		for (let index = currentIndex; index < logs.length; index++) {
			const log = logs[index]
			const wordIndex = log.indexOf(searchFor)

			if (wordIndex === -1) {
				continue
			}

			const result = execFunction(index)

			if (result) {
				currentIndex = index

				break
			}
		}

		return currentIndex
	}

	const getTypeQuality: ExecFunction = (index) => {
		const log = logs[index]
		const infoArr = log.split(",") // ["Input #0", "matroska","webm"," from 'test.mkv':"]

		fileInfo = { ...fileInfo, fileFormat: infoArr[1], fileQuality: infoArr[2] }
		currentIndex = index

		return true
	}

	const getFileInfo: ExecFunction = (index) => {
		const log = logs[index]
		const basicInfo = log.split(",") // ["  Duration: 00:24:02.08", "start: 0.000000", "bitrate: 8165 kb/s"]

		fileInfo = { ...fileInfo, basicInfo }
		currentIndex = index

		return true
	}

	const getStreamData: ExecFunction = (index) => {
		const log = logs[index]
		const isAttachment = log.indexOf("Attachment") !== -1

		if (isAttachment) {
			return true
		}

		const streamPropsArr = log.split(":") // 0(jpn)
		const streamPropsStr = streamPropsArr[1].split("(") // 0

		stream = { ...stream, streamIndex: Number(streamPropsStr[0]) } // "0" => 0

		const langIndex = log.indexOf("(") + 1
		const lang = log.slice(langIndex)
		stream = { ...stream, lang: lang[0] + lang[1] + lang[2] } // "jpn"

		const streamInfoArr = log.split("): ")
		// "Video: h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"
		const type = streamInfoArr[1].split(": ")
		// ["Video", " h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"]

		stream = { ...stream, type: type[0], info: type[1] }
		// "Video"
		// " h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"

		if (type[0] !== "Subtitle") {
			const streams = fileInfo.streams
			streams.push({ ...stream, title: "" })

			fileInfo = { ...fileInfo, streams }
			stream = {
				type: "",
				info: "",
				lang: "",
				streamIndex: 0,
			}
			currentIndex = index
			return false
		}

		const subTitleLog = logs[index + 2]
		const titleIndex = subTitleLog.split(": ")
		const title = titleIndex[1]
		stream = { ...stream, title }

		const streams = fileInfo.streams
		streams.push(stream)

		fileInfo = { ...fileInfo, streams }
		stream = {
			type: "",
			info: "",
			lang: "",
			streamIndex: 0,
		}

		currentIndex = index

		return false
	}

	return { getFileData }
}

export default useExtractLogsData
