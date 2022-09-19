import { useToast } from "@chakra-ui/react"
import { useEffect } from "react"

import { WinnerBanner } from "./components/WinnerBanner/WinnerBanner"
import { GridContainer } from "./components/Grid/Grid"
import { ScoreBoard } from "./components/ScoreBoard/ScoreBoard"
import { GameProvider } from "./context/GameContext/GameContext"

import "./App.css"

function App() {
	const toast = useToast()

	useEffect(() => {
		const t = setTimeout(() => {
			if (navigator.onLine) {
				toast({
					title: "You're connected!",
					description: "You can play online against other players.",
					status: "success",
					duration: 5000
				})
			} else {
				toast({
					title: "No internet connexion x(",
					description: "You can't play online...",
					status: "error",
					duration: 5000
				})
			}
		}, 150)

		return () => clearTimeout(t)
	}, [navigator.onLine])

	return (
		<GameProvider>
			<WinnerBanner />
			<ScoreBoard />
			<GridContainer />
		</GameProvider>
	)
}

export default App
