import { useState, useEffect } from "react"

interface Props {
	growingValue?: number
	time?: number
	maxLimit?: number
}

const useRegularIntervals = ({ growingValue, time, maxLimit }: Props) => {
	const intervalValue =
		growingValue && growingValue > 0 && growingValue <= 100 ? growingValue : 10

	const intervalTime = time && time > 0 ? time : 1000
	const limit = maxLimit && maxLimit > 0 && maxLimit <= 100 ? maxLimit : 90

	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const timer = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress < limit) {
					return prevProgress + intervalValue
				}

				clearInterval(timer)

				return prevProgress
			})
		}, intervalTime)
		return () => {
			clearInterval(timer)
		}
	}, [])

	return { progress }
}

export default useRegularIntervals
