import { useState, useEffect, useContext } from "react"

import { WinnerBanner } from "./_components/WinnerBanner/WinnerBanner"
import { ScoreBoard } from "./_components/ScoreBoard/ScoreBoard"
import { GridContainer } from "./_components/Grid/Grid"
import { Progress } from "@chakra-ui/react"
import { AiProvider } from "../../context/AiContext/AiContext"
import { GameContext } from "../../context/GameContext/GameContext"

export function OfflineGrid() {
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const gameCtx = useContext(GameContext)

	// useEffect(() => {
	// 	const t = setTimeout(() => {
	// 		setIsLoading(false)
	// 	}, 1000)

	// 	return () => clearTimeout(t)
	// }, [])

	const gridLayout = (
		<>
			<WinnerBanner />
			<ScoreBoard />
			<AiProvider>
				<GridContainer />
			</AiProvider>
		</>
	)

	return isLoading ? (
		<Progress isIndeterminate size="md" w="60vw" borderRadius="1rem" />
	) : (
		gridLayout
	)
}
