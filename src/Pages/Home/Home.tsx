import { Box, Text } from "@chakra-ui/react"
import { useContext, useEffect } from "react"

import { OfflineButton } from "./_components/OfflineButton/OfflineButton"
import { MultiplayerButton } from "./_components/MultiplayerButton/MultiplayerButton"
import { HomeMenu } from "./_components/HomeMenu/HomeMenu"
import { GameContext } from "../../context/GameContext/GameContext"

export function Home() {
	const {
		functions: { resetContext }
	} = useContext(GameContext)

	useEffect(() => {
		resetContext()
	}, [])

	return (
		<>
			<Box
				position="absolute"
				top="0"
				width="100%"
				height="60px"
				display="flex"
				flexDir="row"
				justifyContent="center"
				alignItems="center"
			>
				<HomeMenu />
				<Text fontSize="3rem" fontWeight="bold" lineHeight="1">
					TicTacToe
				</Text>
			</Box>
			<Box
				width="30vw"
				height="fit-content"
				display="flex"
				flexDir="row"
				justifyContent="space-evenly"
			>
				<OfflineButton />
				<MultiplayerButton />
			</Box>
		</>
	)
}
