import { FC, useState, useEffect, ChangeEvent } from 'react'

import Button from "@mui/material/Button"

const SelectFile: FC<Props> = ({ callback, fileType, multiple }) => {

    const [file, setFile] = useState<File>()

    const selectFile = (event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target
        const selectedFiles = files as FileList
        setFile(selectedFiles[0])
    }

    useEffect(() => file && callback(file), [file])

    return (
        <Button variant="contained" color="primary" component="label">
            Select file
            <input hidden accept={fileType + '/*'} type="file" multiple={multiple} onChange={selectFile} />
        </Button>
    )
}

interface Props {
    callback: (file: File) => void,
    fileType: 'video' | 'image' | 'audio'
    multiple?: boolean
}

export default SelectFile