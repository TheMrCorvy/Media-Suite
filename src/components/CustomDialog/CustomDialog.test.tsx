import { describe, it } from "vitest"
import { screen, render } from "@testing-library/react"
import user from "@testing-library/user-event"
import { act } from "react-dom/test-utils"

import CustomDialog from "."
import { CustomDialogProps } from "./types"

type CustomProps = Omit<CustomDialogProps, "children">

describe("The dialog renders properly, and behaves different depending on the props", () => {
	it("Renders without any trigger", () => {
		const props: CustomProps = {
			title: "Testing dialog without triggers",
		}

		act(() => {
			render(
				<CustomDialog {...props}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
				</CustomDialog>
			)
		})

		const dialogTitle = screen.getByText(props.title)
		expect(dialogTitle).toBeInTheDocument()
	})

	it("Renders with a Button trigger", () => {
		const props: CustomProps = {
			title: "Testing dialog button trigger",
			trigger: {
				type: "Button",
				color: "primary",
				size: "small",
				variant: "contained",
				tooltipPlacement: "top",
				tooltipTitle: "Testing button trigger",
			},
		}

		act(() => {
			render(
				<CustomDialog {...props}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
				</CustomDialog>
			)
		})

		const dialogTitle = screen.getByText(props.title)
		const buttonTrigger = screen.getByText("Testing button trigger")

		expect(dialogTitle).toBeInTheDocument()
		expect(buttonTrigger).toBeInTheDocument()
	})

	it("Renders with a Fab icon as a trigger", () => {
		const props: CustomProps = {
			title: "Testing dialog fab icon trigger",
			trigger: {
				type: "Fab",
				color: "primary",
				size: "small",
				variant: "contained",
				tooltipPlacement: "top",
				tooltipTitle: "Testing fab icon trigger",
			},
		}

		act(() => {
			render(
				<CustomDialog {...props}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
				</CustomDialog>
			)
		})

		const dialogTitle = screen.getByText(props.title)
		const fabIconTrigger = screen.getByTestId("trigger-fab-icon")

		expect(dialogTitle).toBeInTheDocument()
		expect(fabIconTrigger).toBeInTheDocument()
	})
})

describe("The dialog opens and closes properly", () => {
	it("Opens", async () => {
		user.setup()

		const props: CustomProps = {
			title: "Testing dialog button trigger",
			trigger: {
				type: "Button",
				color: "primary",
				size: "small",
				variant: "contained",
				tooltipPlacement: "top",
				tooltipTitle: "Testing button trigger",
			},
		}

		act(() => {
			render(
				<CustomDialog {...props}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
				</CustomDialog>
			)
		})

		const buttonTrigger = screen.getByText("Testing button trigger")

		expect(buttonTrigger).toBeInTheDocument()

		await act(async () => await user.click(buttonTrigger))

		await new Promise((resolve) => setTimeout(resolve, 0))

		const dialogTitle = screen.getByText(props.title)
		expect(dialogTitle).toBeVisible()
	})

	it("Opens on mount", () => {
		const props: CustomProps = {
			title: "Testing dialog button trigger",
			openOnMount: true,
		}

		act(() => {
			render(
				<CustomDialog {...props}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
				</CustomDialog>
			)
		})

		const dialogTitle = screen.getByText(props.title)
		expect(dialogTitle).toBeVisible()
	})

	it("Closes", async () => {
		user.setup()

		const props: CustomProps = {
			title: "Testing dialog button trigger",
			trigger: {
				type: "Button",
				color: "primary",
				size: "small",
				variant: "contained",
				tooltipPlacement: "top",
				tooltipTitle: "Testing button trigger",
			},
		}

		act(() => {
			render(
				<CustomDialog {...props}>
					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. </p>
				</CustomDialog>
			)
		})

		const buttonTrigger = screen.getByText("Testing button trigger")

		await act(async () => await user.click(buttonTrigger))

		await new Promise((resolve) => setTimeout(resolve, 0))

		const dialogTitle = screen.getByText(props.title)
		expect(dialogTitle).toBeVisible()

		const closeBtn = screen.getByText("Close")

		await act(async () => await user.click(closeBtn))

		await act(async () => {
			await new Promise((resolve) => setTimeout(resolve, 1000))
		})

		expect(dialogTitle).not.toBeVisible()
	})
})
