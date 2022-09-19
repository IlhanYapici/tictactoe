import { useEffect, useState } from "react"
import { HStack, useColorMode, Switch } from "@chakra-ui/react"
import {
	BsFillSunFill as SunIcon,
	BsFillMoonFill as MoonIcon
} from "react-icons/bs"

import { IAnimation } from "./ThemeSwitch-types"

import "./ThemeSwitch-styles.css"

function ThemeSwitch() {
	const { colorMode, toggleColorMode } = useColorMode()
	const [animation, setAnimation] = useState<IAnimation>({ sun: "", moon: "" })

	const getClassNames = (icon: "sun" | "moon") => {
		switch (icon) {
			case "sun":
				return "sun-icon" + " " + animation.sun
			case "moon":
				return "moon-icon" + " " + animation.moon
		}
	}

	useEffect(() => {
		if (colorMode === "light") {
			setAnimation({ sun: "onEntranceSun", moon: "onExit" })
		} else {
			setAnimation({ sun: "onExit", moon: "onEntranceMoon" })
		}
	}, [colorMode])

	return (
		<HStack position="absolute" top={5} right={5}>
			<div className="icons-container">
				<SunIcon className={getClassNames("sun")} />
				<MoonIcon className={getClassNames("moon")} />
			</div>
			<Switch
				isChecked={colorMode === "dark" ? false : true}
				colorScheme="yellow"
				onChange={toggleColorMode}
			/>
		</HStack>
	)
}

export { ThemeSwitch }
