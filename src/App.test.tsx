import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"
import App from "./App"

describe("rendering app", () => {
	it("renders", () => {
		render(<App />)

		expect(screen.getByRole('heading', {
			level: 1
		})).toHaveTextContent('Hello World!')
	})
})
