import React, { forwardRef, FC } from 'react'

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

const DialogTransition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction={'down'} ref={ref} {...props} />;
});

type Props = "left" | "up" | 'down' | 'right' | undefined


export default DialogTransition