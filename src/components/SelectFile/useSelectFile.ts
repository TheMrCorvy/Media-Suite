import { useState, useEffect, ChangeEvent } from "react"

import { useSelectFileProps } from "./types"

const useSelectFiles = ({ includeExtensions, fileType, callback }: useSelectFileProps) => {
	const [fileList, setFileList] = useState<FileList>()

	const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
		const { files } = event.target
		const selectedFiles = files as FileList
		setFileList(selectedFiles)
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

	useEffect(() => {
		fileList && callback(fileList)
	}, [fileList])

	const accept = () => {
		if (fileType !== "*") {
			return fileType + "/*" + addExtensions()
		}
		return undefined
	}

	return { accept, selectFile }
}

export default useSelectFiles
