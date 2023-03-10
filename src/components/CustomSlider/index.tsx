import { FC, useState, useEffect, ChangeEvent } from "react"
import Grid from "@mui/material/Grid"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import Slider from "@mui/material/Slider"

interface Props {
	label: string
	id: string
	min: number
	max: number
	initialValue?: number
	step?: number
	size?: "small" | "medium"
	marks?: boolean
	disabled?: boolean
	color?: "primary" | "secondary"
	showTextField?: boolean
}

const CustomSlider: FC<Props> = ({
	label,
	id,
	min,
	max,
	initialValue,
	step,
	size,
	marks,
	disabled,
	color,
	showTextField,
}) => {
	const [value, setValue] = useState(min)

	useEffect(() => {
		if (initialValue !== undefined) {
			setValue(initialValue)
		}
	}, [])

	const sliderProps = {
		step,
		marks,
		min,
		max,
		size,
		disabled,
		color,
	}

	const handleSliderChange = (event: Event, newValue: number | number[]) => {
		setValue(newValue as number)
	}

	const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(event.target.value)

		if (newValue <= max && newValue >= min) {
			setValue(newValue)
		} else {
			setValue(max)
		}
	}

	if (min >= max) {
		return null
	}

	if (initialValue && (initialValue < min || initialValue > max)) {
		return null
	}

	if (step && (step < min || step > max)) {
		return null
	}

	return (
		<>
			<Grid container>
				<Grid item xs={9}>
					<Typography variant="subtitle1">{label}</Typography>
				</Grid>
				<Grid item xs={3}>
					{showTextField && (
						<TextField
							id={"custom-slider-text-field-" + id}
							name={id}
							data-testid={"custom-slider-text-field-" + id}
							label={label}
							type="number"
							value={value}
							onChange={handleTextChange}
							disabled={disabled}
						/>
					)}
				</Grid>
			</Grid>
			<Slider
				id={"custom-slider-" + id}
				data-testid={"custom-slider-" + id}
				aria-label={label}
				valueLabelDisplay="auto"
				{...sliderProps}
				value={value}
				onChange={handleSliderChange}
			/>
		</>
	)
}

export default CustomSlider
