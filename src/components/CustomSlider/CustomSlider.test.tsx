import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import CustomSlider from "."

describe("The component should render propperly", () => {
	it("Should render with only the required props", () => {
		render(<CustomSlider id="test" label="test" min={1} max={10} />)

		const slider = screen.getByTestId("custom-slider-test")
		const input = screen.queryByTestId("custom-slider-text-field-test")
		expect(slider).toBeInTheDocument()
		expect(input).not.toBeInTheDocument()
	})

	it("Should render with all the props", () => {
		render(
			<CustomSlider
				id="test"
				label="test"
				min={1}
				max={10}
				initialValue={2}
				step={1}
				size="medium"
				marks
				disabled
				color="primary"
				showTextField
			/>
		)

		const slider = screen.getByTestId("custom-slider-test")
		const input = screen.getByTestId("custom-slider-text-field-test")
		expect(slider).toBeInTheDocument()
		expect(input).toBeInTheDocument()
	})

	it("Shouldn't render if the min is more or equal to max", () => {
		render(<CustomSlider id="test" label="test" min={100} max={10} />)

		const slider = screen.queryByTestId("custom-slider-test")
		expect(slider).not.toBeInTheDocument()
	})

	it("Shouldn't render if the initial value is more than max, or less than min", () => {
		render(<CustomSlider id="test" label="test" min={1} max={10} initialValue={32} />)

		const slider = screen.queryByTestId("custom-slider-test")
		expect(slider).not.toBeInTheDocument()
	})

	it("Shouldn't render if the step is more than max, or less than min", () => {
		render(<CustomSlider id="test" label="test" min={1} max={10} step={32} />)

		const slider = screen.queryByTestId("custom-slider-test")
		expect(slider).not.toBeInTheDocument()
	})
})

describe("The component should update the state as expected", () => {
	it("Should update the state properly", async () => {
		user.setup()

		act(() =>
			render(
				<CustomSlider
					id="test"
					label="test"
					min={1}
					initialValue={2}
					max={10}
					showTextField
				/>
			)
		)

		const input = screen.getByRole("spinbutton") // input type="number"
		expect(input).toHaveValue(2)

		await act(async () => await user.type(input, "10"))
		expect(input).toHaveValue(10)
	})

	it("Shouldn't accept more than the max, or less than the min", async () => {
		render(<CustomSlider id="test" label="test" min={1} max={10} showTextField />)

		const input = screen.getByRole("spinbutton")
		expect(input).toHaveValue(1)

		// if it is more than max, or less than min, the input will write only the max value
		await act(async () => await user.type(input, "100"))
		expect(input).toHaveValue(10)

		await act(async () => await user.type(input, "-100"))
		expect(input).toHaveValue(10)
	})
})
