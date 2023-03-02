import { useEffect } from "react"

import DialogContentText from "@mui/material/DialogContentText"

import CustomDialog from "./components/CustomDialog"

import useFfmpeg from "./ffmpeg/useFfmpeg"

import { CustomDialogProps } from "./components/CustomDialog/types"

type CustomProps = Omit<CustomDialogProps, "children">

function App() {
	const { ready, load } = useFfmpeg()

	const props: CustomProps = {
		title: 'Testing dialog button trigger',
		trigger: {
			type: 'Button',
			color: 'primary',
			size: 'small',
			variant: 'contained',
			tooltipPlacement: 'top',
			tooltipTitle: 'Testing button trigger'
		}
	}

	useEffect(() => {
		if (process.env.NODE_ENV !== "test") {
			// load()
		}
	}, [])

	return (
		<>
			<h1>Hello World!</h1>
			{ready ? "ready" : "loading..."}
			<CustomDialog {...props}>
				<DialogContentText id="alert-dialog-slide-description">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic deserunt assumenda
					quisquam reiciendis corrupti vitae numquam asperiores similique mollitia
					aspernatur libero nulla blanditiis nisi esse quia, velit nam, doloremque magni!
				</DialogContentText>
			</CustomDialog>
		</>
	)
}

export default App
