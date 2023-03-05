import { FC, useState, useEffect } from "react"

import { styled } from "@mui/material/styles"

import Container from "@mui/material/Container"
import Box from "@mui/material/Box"
import CustomDialog from "../components/CustomDialog"
import Loader from "../components/Loader"
import SelectFile from "../components/SelectFile"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"

import Card from "@mui/material/Card"

import useFfmpeg from "../ffmpeg/useFfmpeg"

const Item = styled(Paper)(({ theme }) => ({
	backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: "center",
	color: theme.palette.text.secondary,
}))

const VideoSuite: FC = () => {
	const [openDialog, setOpenDialog] = useState(false)
	const { ready, load } = useFfmpeg()

	const testEnv = process.env.NODE_ENV === "test"

	useEffect(() => {
		if (!testEnv) {
			load()
		}

		setOpenDialog(!testEnv)
	}, [])

	return (
		<Container maxWidth="xl">
			<Box
				sx={{
					bgcolor: "#cfe8fc",
					height: "100vh",
					paddingTop: "1.5rem",
					paddingBottom: "1.5rem",
				}}
			>
				<Grid container spacing={0} sx={{ height: "100%", background: "red" }}>
					<Grid item xs={12} sx={{ height: "50%" }}>
						<Item>xs=8</Item>
					</Grid>
					<Grid item xs={12} sx={{ height: "50%", background: "green" }}>
						<Item>xs=4</Item>
					</Grid>
				</Grid>
			</Box>

			{/* <CustomDialog
				title={
					ready
						? "Please select a video file to continue"
						: "Wait while the app is loaidng..."
				}
				openFromProps={openDialog}
				maxWidth="sm"
				fullWidth
				hideCloseBtn
				freeze
			>
				{!ready ? (
					<Loader status={ready ? 100 : undefined} />
				) : (
					<SelectFile fileType="video" callback={() => setOpenDialog(false)} />
				)}
			</CustomDialog> */}
		</Container>
	)
}

export default VideoSuite
