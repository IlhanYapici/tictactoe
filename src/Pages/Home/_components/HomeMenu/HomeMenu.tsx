import {
	Menu,
	MenuButton,
	IconButton,
	MenuList,
	MenuItem,
	MenuGroup,
	MenuDivider,
	Box
} from '@chakra-ui/react'
import { MenuIcon } from '../AnimatedIcon/AnimatedIcon'

export function HomeMenu() {
	const getMenu = (userLoggedIn: boolean) => {
		//TODO: check if user is logged in

		if (userLoggedIn) {
			return (
				<MenuList>
					<MenuGroup>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Preferences</MenuItem>
					</MenuGroup>
					<MenuDivider />
					<MenuGroup>
						<MenuItem>Sign out</MenuItem>
					</MenuGroup>
				</MenuList>
			)
		} else {
			return (
				<MenuList>
					<MenuItem>Sign in</MenuItem>
					<MenuItem>Sign up</MenuItem>
				</MenuList>
			)
		}
	}

	/**
	 * if the user is not logged in, only show 2 options:
	 *      - sign in
	 *      - sign up
	 *
	 * else show:
	 *      - profile
	 *      - preferences
	 *      - sign out
	 */
	return (
		<Box position="absolute" top="10px" left="10px">
			<Menu>
				{({ isOpen }) => (
					<>
						<MenuButton
							h="40px"
							w="40px"
							isActive={isOpen}
							as={IconButton}
							icon={<MenuIcon isOpen={isOpen} />}
							variant="ghost"
						/>
						{getMenu(true)}
					</>
				)}
			</Menu>
		</Box>
	)
}
