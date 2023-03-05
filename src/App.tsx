import CssBaseline from "@mui/material/CssBaseline"
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import theme from "./theme"

import VideoSuite from "./pages/VideoSuite"

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<VideoSuite />
		</ThemeProvider>
	)
}

export default App
