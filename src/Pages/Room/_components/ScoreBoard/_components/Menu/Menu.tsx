import { useState, useContext } from 'react'
import { FiSettings as SettingsIcon } from 'react-icons/fi'
import {
	IconButton,
	Button,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	VStack,
	InputGroup,
	InputLeftAddon,
	Input,
	ModalFooter,
	Tooltip
} from '@chakra-ui/react'

import { GameContext } from '../../../../../../context/GameContext/GameContext'
import { IPlayers } from '../../../../../../context/GameContext/GameContext-types'

function Menu() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const {
		state: { players },
		functions: { updatePlayers }
	} = useContext(GameContext)
	const [nicknames, setNicknames] = useState<IPlayers>(players)

	const handleInputs = (
		e: React.ChangeEvent<HTMLInputElement>,
		player: 1 | 2
	) => {
		switch (player) {
			case 1:
				setNicknames({ ...nicknames, player1: e.target.value })
				break
			case 2:
				setNicknames({ ...nicknames, player2: e.target.value })
				break
		}
	}

	const onSave = () => {
		setIsLoading(true)

		const t = setTimeout(() => {
			updatePlayers(nicknames)
			setIsLoading(false)
			onClose()
		}, 500)

		return () => clearTimeout(t)
	}

	const SaveButton = () => {
		if (
			nicknames.player1 === players.player1 &&
			nicknames.player2 === players.player2
		) {
			return (
				<Tooltip hasArrow label="Nicknames have not changed.">
					<div>
						<Button
							isLoading={isLoading}
							variant="outline"
							colorScheme="gray"
							disabled={true}
						>
							Save
						</Button>
					</div>
				</Tooltip>
			)
		} else {
			return (
				<Button
					isLoading={isLoading}
					variant="outline"
					colorScheme="whatsapp"
					onClick={onSave}
				>
					Save
				</Button>
			)
		}
	}

	return (
		<>
			<IconButton
				aria-label="Open settings"
				icon={<SettingsIcon />}
				variant="solid"
				onClick={onOpen}
			/>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Settings</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack>
							<InputGroup>
								<InputLeftAddon children="Player 1" />
								<Input
									type="text"
									defaultValue={players.player1}
									placeholder="Player 1 nickname"
									onChange={(e) => handleInputs(e, 1)}
								/>
							</InputGroup>

							<InputGroup>
								<InputLeftAddon children="Player 2" />
								<Input
									type="text"
									defaultValue={players.player2}
									placeholder="Player 2 nickname"
									onChange={(e) => handleInputs(e, 2)}
								/>
							</InputGroup>
						</VStack>
					</ModalBody>
					<ModalFooter>{SaveButton()}</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	)
}

export { Menu }
