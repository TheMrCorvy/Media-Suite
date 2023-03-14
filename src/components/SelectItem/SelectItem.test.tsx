import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"

import SelectItem from "."

describe("The coumponent should render properly", () => {
	it("Renders properly", () => {
		render(
			<SelectItem
				id="test"
				label="test"
				items={[{ name: "testing name", value: "testing value" }]}
			/>
		)

		// const label = screen.logTestingPlaygroundURL()
		const label = screen.getByTestId("test")
		expect(label).toBeInTheDocument()
	})
})
