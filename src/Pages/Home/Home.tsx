import { Box, Text, useColorMode } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import {} from 'react-icons/hi'

import { OfflineButton } from './_components/OfflineButton/OfflineButton'
import { MultiplayerButton } from './_components/MultiplayerButton/MultiplayerButton'
import { HomeMenu } from './_components/HomeMenu/HomeMenu'

export function Home() {
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
