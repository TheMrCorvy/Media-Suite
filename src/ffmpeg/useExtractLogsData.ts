const useExtractLogsData = (logs: string[]) => {
	const fileInfo = {
		streams: [{}],
		fileFormat: "",
		fileQuality: "",
		basicInfo: [""],
	}

	const stream = {
		type: "",
		info: "",
		lang: "",
		title: "", //optional
		streamIndex: 0, // optional
	}

	// search for the format and type of the file
	for (let index = 0; index < logs.length; index++) {
		const log = logs[index]
		const wordIndex = log.indexOf("Input #0, ")

		if (wordIndex === -1) {
			continue
		}

		const infoArr = log.split(",") // ["Input #0", "matroska","webm"," from 'test.mkv':"]

		fileInfo.fileFormat = infoArr[1] // "matroska"
		fileInfo.fileQuality = infoArr[2] // "webm"

		break
	}

	/**
	 * notas para despues:
	 *
	 * se puede obtener el index del log que dio la ultima coincidencia, para de esa forma no
	 * tener que empezar desde cero en cada ciclo, y que el contenido sea otra funcion que retorna
	 * un condicional para que el bucle pueda saber cuando detenerse
	 */
	// search for the basic info of the file
	for (let index = 0; index < logs.length; index++) {
		const log = logs[index] // "  Duration: 00:24:02.08, start: 0.000000, bitrate: 8165 kb/s",
		const wordIndex = log.indexOf("Duration: ")

		if (wordIndex === -1) {
			continue
		}

		const basicInfo = log.split(",") // ["  Duration: 00:24:02.08", "start: 0.000000", "bitrate: 8165 kb/s"]
		fileInfo.basicInfo = basicInfo

		break
	}

	// search for the stream's metadata
	for (let index = 0; index < logs.length; index++) {
		const log = logs[index]
		const wordIndex = log.indexOf("Stream #0:")
		//  Stream #0:0(jpn): Video: h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"

		if (wordIndex === -1) {
			continue
		}

		const isAttachment = log.indexOf("Attachment") !== -1

		if (isAttachment) {
			break
		}

		const streamPropsArr = log.split(":") // 0(jpn)
		const streamPropsStr = streamPropsArr[1].split("(") // 0
		stream.streamIndex = Number(streamPropsStr[0]) // "0" => 0

		const langIndex = log.indexOf("(") + 1 // ya que siempre tra el primero, lo que sigue de esto es el idioma
		const lang = log.slice(langIndex)
		stream.lang = lang[0] + lang[1] + lang[2] // "jpn"

		const streamInfoArr = log.split("): ")
		// "Video: h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"
		const type = streamInfoArr[1].split(":")
		// ["Video", " h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"]
		stream.type = type[0]
		// "Video"
		stream.info = type[1]
		// " h264 (High), yuv420p(progressive), 1920x1080 [SAR 1:1 DAR 16:9], 23.98 fps, 23.98 tbr, 1k tbn, 47.95 tbc (default)"

		if (type[0] !== "Subtitle") {
			fileInfo.streams.push({ ...stream, title: "" })
			continue
		}

		const subTitleLog = logs[index + 2]
		const titleIndex = subTitleLog.split(": ")
		stream.title = titleIndex[1]

		fileInfo.streams.push(stream)
	}

	return fileInfo
}

export default useExtractLogsData
