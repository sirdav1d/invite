import { MotionStyle, Variants } from 'framer-motion';

interface TitleAnimationProps {
	open: MotionStyle;
	close: MotionStyle;
}

export const TitleAnimation: Variants = {
	open: {
		opacity: 1,
		scale: 1,
		x: 0,
		y: 0,
		transition: {
			duration: 1.5,
			type: 'tween',
		},
	},
	close: {
		opacity: 0,
		scale: 2,
		x: '-10%',
		y: 100,
	},
};

export const ImageAnimation: Variants = {
	open: {
		opacity: 1,
		scale: 1,
		x: 0,
		transition: {
			duration: 2,
			type: 'tween',
			delay: 1,
		},
	},
	close: {
		opacity: 0,
		scale: 0.2,
		x: '-10%',
	},
};

export const TextAnimation: Variants = {
	open: {
		opacity: 1,

		x: 0,
		transition: {
			duration: 1,
			type: 'tween',
			delay: 2,
		},
	},
	close: {
		opacity: 0,
		x: -100,
	},
};

export const P1Animation: Variants = {
	open: {
		opacity: 1,

		x: 0,
		transition: {
			duration: 1.5,
			type: 'tween',
			delay: 2.6,
		},
	},
	close: {
		opacity: 0,
		x: -100,
	},
};

export const P2Animation: Variants = {
	open: {
		opacity: 1,

		x: 0,
		transition: {
			duration: 1.5,
			type: 'tween',
			delay: 2.8,
		},
	},
	close: {
		opacity: 0,
		x: -100,
	},
};

export const P3Animation: Variants = {
	open: {
		opacity: 1,

		x: 0,
		transition: {
			duration: 1.5,
			type: 'tween',
			delay: 3,
		},
	},
	close: {
		opacity: 0,
		x: -100,
	},
};


