import { useState, useEffect, ChangeEvent } from "react"

import { useSelectFileProps } from "./types"

const useSelectFiles = ({ includeExtensions, fileType, callback }: useSelectFileProps) => {
	const [file, setFile] = useState<File>()

	const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		const selectedFiles = files as FileList
		setFile(selectedFiles[0])
	}

	const addExtensions = () => {
		let str = ""

		if (includeExtensions && includeExtensions.length >= 1) {
			includeExtensions.forEach((extension) => {
				str += ",." + extension
			})
		}

		return str
	}

	useEffect(() => file && callback(file), [file])

	const accept = () => {
		if (fileType !== "*") {
			return fileType + "/*" + addExtensions()
		}
		return undefined
	}

	return { accept, selectFile }
}

export default useSelectFiles
