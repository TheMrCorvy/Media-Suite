import { useEffect, useState } from "react"

const useCustomDialog = (openFromProps?: boolean) => {
	const [open, setOpen] = useState(openFromProps ? openFromProps : false)

	useEffect(() => {
		if (openFromProps !== undefined) {
			setOpen(openFromProps)
		}
	}, [openFromProps])

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return { open, handleOpen, handleClose }
}

export default useCustomDialog
