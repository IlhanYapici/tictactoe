import { Box, Text, useColorMode } from "@chakra-ui/react"
import { useContext } from "react"
import { GameContext } from "../../../../context/GameContext/GameContext"

function WinnerBanner() {
	const { colorMode } = useColorMode()
	const {
		state: { playerName, winner }
	} = useContext(GameContext)

	const getWinner = () => {
		switch (winner) {
			case "player":
				return (
					<Text
						fontSize="3rem"
						fontWeight="bold"
						color={colorMode === "light" ? "#ffffff" : "#1a202c"}
					>
						{playerName}
						<br />
						wins!
					</Text>
				)
			case "computer":
				return (
					<Text
						fontSize="3rem"
						fontWeight="bold"
						color={colorMode === "light" ? "#ffffff" : "#1a202c"}
					>
						Computer
						<br />
						wins!
					</Text>
				)
			case null:
				return <></>
		}
	}

	return winner !== null ? (
		<Box
			zIndex={10}
			display="flex"
			justifyContent="center"
			alignItems="center"
			position="absolute"
			w="100%"
			h="150px"
			backgroundColor={colorMode === "light" ? "#1a202c" : "#ffffff"}
		>
			{getWinner()}
		</Box>
	) : null
}

export { WinnerBanner }
