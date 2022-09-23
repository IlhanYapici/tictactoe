import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button
} from '@chakra-ui/react'

import { IModalProps } from '../../../../_shared/Modal-types'

export function MultiplayerModal({ isOpen, onClose, ...props }: IModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Multiplayer mode</ModalHeader>
				<ModalCloseButton />
				<ModalBody></ModalBody>
				<ModalFooter>
					<Button onClick={onClose}>Cancel</Button>
					<Button onClick={onClose}>Play</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}
