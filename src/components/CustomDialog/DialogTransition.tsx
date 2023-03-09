import React, { forwardRef } from "react"

import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"

const DialogTransition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>
) {
	return <Slide direction={"down"} ref={ref} {...props} />
})

export default DialogTransition
