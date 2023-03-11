import { FC, useState } from "react"

import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

interface Item {
	name: string
	value: string
}

interface Props {
	id: string
	label: string
	items: Item[]
	defaultOption?: Item
	fullWidth?: boolean
	variant?: "filled" | "outlined" | "standard"
}

const SelectItem: FC<Props> = ({ id, label, items, defaultOption, fullWidth, variant }) => {
	const [value, setValue] = useState(defaultOption ? defaultOption.value : "")

	const handleChange = (event: SelectChangeEvent) => {
		setValue(event.target.value as string)
	}

	return (
		<FormControl fullWidth={fullWidth}>
			<InputLabel id={`select-item-label-${id}`}>{label}</InputLabel>
			<Select
				labelId={`select-item-label-${id}`}
				id={`select-item-menu-${id}`}
				value={value}
				label={label}
				onChange={handleChange}
				variant={variant}
				name={id}
			>
				{items.map((item, i) => (
					<MenuItem value={item.value} key={`select-item-${id}-${i}`}>
						{item.name}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)
}

export default SelectItem
