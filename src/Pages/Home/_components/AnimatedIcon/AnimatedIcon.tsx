import { useEffect, useState } from 'react'

import { IMenuIconProps, IAnimation } from './AnimatedIcon-types'

import './AnimatedIcon-styles.css'

function MenuIcon({ isOpen }: IMenuIconProps) {
	const [animation, setAnimation] = useState<IAnimation>({
		line1: '',
		line2: '',
		line3: ''
	})

	const getClassname = (target: 1 | 2 | 3) => {
		switch (target) {
			case 1:
				return 'menu-icon__line-1' + ' ' + animation.line1
			case 2:
				return 'menu-icon__line-2' + ' ' + animation.line2
			case 3:
				return 'menu-icon__line-3' + ' ' + animation.line3
		}
	}

	useEffect(() => {
		if (isOpen) {
			setAnimation({
				line1: 'onOpenLine1',
				line2: 'onOpenLine2',
				line3: 'onOpenLine3'
			})
		} else {
			setAnimation({
				line1: 'onCloseLine1',
				line2: 'onCloseLine2',
				line3: 'onCloseLine3'
			})
		}
	}, [isOpen])

	return (
		<div className="menu-icon">
			<div className={getClassname(1)}></div>
			<div className={getClassname(3)}></div>
			<div className={getClassname(2)}></div>
		</div>
	)
}

export { MenuIcon }
