import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"

import SelectFile from "."
import { SelectFileProps } from "./types"

describe("The component should render as intended", () => {
	it("Renders", () => {
		render(<SelectFile callback={() => { }} fileType="video" />)

		const inputBtn = screen.getByText("Select File")
		expect(inputBtn).toBeInTheDocument()
	})

	it("Reanders with all the custom properties", () => {
		const props: SelectFileProps = {
			callback: () => { },
			fileType: "video",


			includeExtensions: ["mkv", "test"],
			multiple: true,
			buttonProps: {
				variant: "contained",
				color: "primary",
				size: "large",
			},
		}

		render(<SelectFile {...props} />)

		const inputBtn = screen.getByTestId("select-file")
		expect(inputBtn).toBeInTheDocument()
		expect(inputBtn.getAttribute("accept")).toBe("video/*,.mkv,.test")
		expect(inputBtn.hasAttribute("multiple")).toBe(true)
	})
})
