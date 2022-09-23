import { useEffect, useState } from "react"

import { IMenuIconProps, IAnimation } from "./AnimatedIcon-types"

import "./MenuIcon-styles.css"

function MenuIcon({ isOpen }: IMenuIconProps) {
	const [animation, setAnimation] = useState<IAnimation>({
		line1: "",
		line2: ""
	})

	const getClassname = (target: 1 | 2) => {
		switch (target) {
			case 1:
				return "menu-icon__line-1" + " " + animation.line1
			case 2:
				return "menu-icon__line-2" + " " + animation.line2
		}
	}

	useEffect(() => {
		if (isOpen) {
			setAnimation({ line1: "onOpenLine1", line2: "onOpenLine2" })
		} else {
			setAnimation({ line1: "onCloseLine1", line2: "onCloseLine2" })
		}
	}, [isOpen])

	return (
		<div className="menu-icon">
			<div className={getClassname(1)}></div>
			<div className={getClassname(2)}></div>
		</div>
	)
}

export { MenuIcon }
