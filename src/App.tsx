import CssBaseline from "@mui/material/CssBaseline"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import theme from "./theme"

import { FFmpegProvider } from "./context/Context"

import VideoSuite from "./pages/VideoSuite"

function App() {
	return (
		<FFmpegProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<VideoSuite />
			</ThemeProvider>
		</FFmpegProvider>
	)
}

export default App
