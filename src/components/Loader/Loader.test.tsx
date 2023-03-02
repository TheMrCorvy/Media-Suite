import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"
import Loader from "."

describe("The Loader component renders correctly", () => {
	it("Renders without props", () => {
		render(<Loader />)

		const initialProgressValue = screen.getByText("0%")
		expect(initialProgressValue).toBeInTheDocument()
	})

	it("Renders with props", () => {
		const props = {
			status: 32,
			time: 200,
			maxLimit: 53,
			growingValue: 2,
		}

		render(<Loader {...props} />)

		const initialProgressValue = screen.getByText("32%")
		expect(initialProgressValue).toBeInTheDocument()
	})
})
