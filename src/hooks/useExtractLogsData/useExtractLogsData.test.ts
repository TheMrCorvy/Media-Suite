import { testLogs, expectedOutput } from "./test.json"
import useExtractLogsData from "."

describe("The hook should extract the data of a file", () => {
	it("Should extract the correct info of the logs", () => {
		const { getFileData } = useExtractLogsData()

		const result = getFileData(testLogs)

		expect(result).toMatchObject(expectedOutput)

		const jsonRes = JSON.stringify(result)
		const jsonExpected = JSON.stringify(expectedOutput)
		expect(jsonRes).toBe(jsonExpected)
	})
})
