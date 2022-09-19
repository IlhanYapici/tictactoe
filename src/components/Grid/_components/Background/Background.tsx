import { Box } from "@chakra-ui/react"

function Background() {
	return (
		<Box
			zIndex={1}
			position="absolute"
			top="2.5%"
			left="2.5%"
			w="95%"
			h="95%"
			borderRadius={6}
			bgColor="blue.500"
		></Box>
	)
}

export { Background }
