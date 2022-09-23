interface IMenuIconProps {
	isOpen: boolean
}

interface IAnimation {
	line1: '' | 'onOpenLine1' | 'onCloseLine1'
	line2: '' | 'onOpenLine2' | 'onCloseLine2'
	line3: '' | 'onOpenLine3' | 'onCloseLine3'
}

export type { IMenuIconProps, IAnimation }
