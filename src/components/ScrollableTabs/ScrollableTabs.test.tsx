import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import ScrollableTabs from "."

const tabs = ["tab 1", "tab 2", "tab 3"]

describe("The component should render propperly under different conditions", () => {
	it("Should render", () => {
		render(
			<ScrollableTabs tabs={tabs}>
				<p>lorem</p>
				<p>ipsum</p>
			</ScrollableTabs>
		)

		const tab1 = screen.getByText("tab 1")
		expect(tab1).toBeInTheDocument()

		const text = screen.getByText("lorem")
		expect(text).toBeInTheDocument()
	})

	it("Should render the exact amount of tabs", () => {
		render(
			<ScrollableTabs tabs={tabs}>
				<p>lorem</p>
				<p>ipsum</p>
			</ScrollableTabs>
		)

		const tab1 = screen.getByText("tab 1")
		const tab2 = screen.getByText("tab 2")
		const tab3 = screen.getByText("tab 3")
		expect(tab1).toBeInTheDocument()
		expect(tab2).toBeInTheDocument()
		expect(tab3).toBeInTheDocument()

		const text = screen.getByText("lorem")
		expect(text).toBeInTheDocument()

		// we cant search for "ipsum" because since it wasn't selected, it won't be rendered in the document
	})
})

describe("The component should be clickeable, and change the tabs properly", () => {
	it("Should select the tab that was clicked", async () => {
		act(() => {
			render(
				<ScrollableTabs tabs={tabs}>
					<p>lorem</p>
					<p>ipsum</p>
				</ScrollableTabs>
			)
		})

		const tab2 = screen.getByText("tab 2")
		expect(tab2).toBeInTheDocument()
		expect(tab2.getAttribute("is-selected")).toBe("false")

		await act(async () => await user.click(tab2))
		expect(tab2.getAttribute("is-selected")).toBe("true")
	})

	it("Should show the tab content of the specified tab", async () => {
		act(() => {
			render(
				<ScrollableTabs tabs={tabs}>
					<p>lorem</p>
					<p>ipsum</p>
				</ScrollableTabs>
			)
		})

		const tab2 = screen.getByText("tab 2")
		const text1 = screen.getByText("lorem")
		expect(text1).toBeInTheDocument()

		await act(async () => await user.click(tab2))
		const text2 = screen.getByText("ipsum")
		expect(text2).toBeVisible()
	})
})
