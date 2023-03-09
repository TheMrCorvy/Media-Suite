import { useEffect, useState } from "react"

const useCustomDialog = ({ openFromProps, freeze }: Props) => {
	const [open, setOpen] = useState(false)

	useEffect(() => {
		if (openFromProps !== undefined) {
			setOpen(openFromProps)
		}
	}, [openFromProps])

	const handleOpen = () => {
		setOpen(!freeze ? true : false)
	}

	const handleClose = () => {
		setOpen(!freeze ? false : true)
	}

	return { open, handleOpen, handleClose }
}

interface Props {
	openFromProps?: boolean
	freeze?: boolean
}

export default useCustomDialog
