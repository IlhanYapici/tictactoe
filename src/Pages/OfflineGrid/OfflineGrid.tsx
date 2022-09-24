import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { WinnerBanner } from "./_components/WinnerBanner/WinnerBanner"
import { ScoreBoard } from "./_components/ScoreBoard/ScoreBoard"
import { GridContainer } from "./_components/Grid/Grid"
import { Progress } from "@chakra-ui/react"

export function OfflineGrid() {
	const { roomId } = useParams()
	const [isLoading, setIsLoading] = useState<boolean>(true)

	useEffect(() => {
		const t = setTimeout(() => {
			setIsLoading(false)
		}, 3000)

		return () => clearTimeout(t)
	}, [])

	const gridLayout = (
		<>
			<WinnerBanner />
			<ScoreBoard />
			<GridContainer />
		</>
	)

	return isLoading ? (
		<Progress isIndeterminate size="md" w="60vw" borderRadius="1rem" />
	) : (
		gridLayout
	)
}
