import { useEffect, useState } from "react"

interface Props {
	openFromProps?: boolean
	freeze?: boolean
}

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

export default useCustomDialog
