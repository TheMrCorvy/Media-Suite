import { useState } from "react"

import { Stream, FileInfo, ExecFunction, LoopFor } from "./types"

const useExtractLogsData = () => {
	const [fileInfo, setFileInfo] = useState<FileInfo>({
		streams: [],
		fileFormat: "",
		fileQuality: "",
		basicInfo: [],
	})
	const [stream, setStream] = useState<Stream>({
		type: "",
		info: "",
		lang: "",
		streamIndex: 0,
	})
	const [currentIndex, setCurrentIndex] = useState(0)
	const [logs, setLogs] = useState<string[]>([])

	const getFileData = (paramLogs: string[]) => {
		setLogs(paramLogs)
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
		if (currentIndex > logs.length) {
			throw new Error("The index is bigger than the length of the array")
		}

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

		setFileInfo({ ...fileInfo, fileFormat: infoArr[1], fileQuality: infoArr[2] })
		setCurrentIndex(index)

		return true
	}

	const getFileInfo: ExecFunction = (index) => {
		const log = logs[index]
		const basicInfo = log.split(",") // ["  Duration: 00:24:02.08", "start: 0.000000", "bitrate: 8165 kb/s"]

		setFileInfo({ ...fileInfo, basicInfo })
		setCurrentIndex(index)

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

		setStream({ ...stream, streamIndex: Number(streamPropsStr[0]) }) // "0" => 0

		const langIndex = log.indexOf("(") + 1 // ya que siempre tra el primero, lo que sigue de esto es el idioma
		const lang = log.slice(langIndex)
		setStream({ ...stream, lang: lang[0] + lang[1] + lang[2] }) // "jpn"

		const streamInfoArr = log.split("): ")
		// "Video: h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"
		const type = streamInfoArr[1].split(": ")
		// ["Video", " h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"]

		setStream({ ...stream, type: type[0], info: type[1] })
		// "Video"
		// " h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"

		if (type[0] !== "Subtitle") {
			const streams = fileInfo.streams
			streams.push({ ...stream, title: "" })

			setFileInfo({ ...fileInfo, streams })
			setStream({
				type: "",
				info: "",
				lang: "",
				streamIndex: 0,
			})

			setCurrentIndex(index)

			return false
		}

		const subTitleLog = logs[index + 2]
		const titleIndex = subTitleLog.split(": ")
		const title = titleIndex[1]
		setStream({ ...stream, title })

		const streams = fileInfo.streams
		streams.push({ ...stream, title: "" })

		setFileInfo({ ...fileInfo, streams })
		setStream({
			type: "",
			info: "",
			lang: "",
			streamIndex: 0,
		})

		setCurrentIndex(index)

		return false
	}

	return { getFileData }
}

export default useExtractLogsData
