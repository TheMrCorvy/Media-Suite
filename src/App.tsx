import { useEffect } from "react"


import DialogContentText from '@mui/material/DialogContentText';

import CustomDialog from "./components/CustomDialog"

import useFfmpeg from "./ffmpeg/useFfmpeg"


function App() {
	const { ready, load } = useFfmpeg()

	useEffect(() => {
		if (process.env.NODE_ENV !== "test") {
			load()
		}
	}, [])

	return (
		<>
			<h1>Hello World!</h1>
			{ready ? "ready" : "loading..."}
			<CustomDialog openOnMount={true} title='testing dialog'>
				<DialogContentText id="alert-dialog-slide-description" >
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic deserunt assumenda quisquam reiciendis corrupti vitae numquam asperiores similique mollitia aspernatur libero nulla blanditiis nisi esse quia, velit nam, doloremque magni!
				</DialogContentText>
			</CustomDialog>
		</>
	)
}

export default App
