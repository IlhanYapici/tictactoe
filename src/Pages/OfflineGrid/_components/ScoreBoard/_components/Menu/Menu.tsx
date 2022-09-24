import { useState, useContext } from "react"
import { FiSettings as SettingsIcon } from "react-icons/fi"
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
} from "@chakra-ui/react"

import { GameContext } from "../../../../../../context/GameContext/GameContext"

function Menu() {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [isLoading, setIsLoading] = useState<boolean>(false)
	const {
		state: { playerName },
		functions: { updatePlayerName }
	} = useContext(GameContext)
	const [nickname, setNickname] = useState<string>(playerName)

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNickname(e.target.value)
	}

	const onSave = () => {
		setIsLoading(true)

		const t = setTimeout(() => {
			updatePlayerName(nickname)
			setIsLoading(false)
			onClose()
		}, 500)

		return () => clearTimeout(t)
	}

	const SaveButton = () => {
		if (nickname === playerName) {
			return (
				<Tooltip hasArrow label="Nickname has not changed.">
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
									defaultValue={playerName}
									placeholder="Player 1 nickname"
									onChange={handleInput}
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
