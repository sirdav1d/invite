'use client';
import Image from 'next/image';
import {
	TitleAnimation,
	ImageAnimation,
	TextAnimation,
	P1Animation,
	P2Animation,
	P3Animation,
} from '@/animations';
import { motion } from 'framer-motion';

export default function Home() {
	return (
		<main className='flex h-screen items-center justify-center bg-default p-0 m-0 lg:p-10 relative overflow-hidden '>
			<Image
				className='absolute m-0 lg:m-auto h-full w-auto p-0 max-w-[364px] lg:max-w-full lg:max-h-full max-h-[648px] '
				src={'/bg-invite.png'}
				width={660}
				height={800}
				alt='Imagem de um pergaminho'
			/>
			<div className='flex flex-col max-h-[480px] max-w-[240px] lg:max-w-[420px] z-50 items-center justify-start gap-3 h-full pt-4   '>
				<motion.h2
					variants={TitleAnimation}
					initial='close'
					animate='open'
					className='ita text-5xl lg:text-6xl'>
					Convocação Real
				</motion.h2>
				<motion.div
					variants={ImageAnimation}
					initial='close'
					animate='open'>
					<Image
						className='h-32 w-auto lg:h-40  '
						src={'/clarice.png'}
						width={180}
						height={200}
						alt='Imagem da Clarice'
					/>
				</motion.div>
				<motion.p
					variants={TextAnimation}
					initial='close'
					animate='open'
					className='text-bitter text-sm lg:text-base  '>
					Sua alteza Real, a princesa Clarice,
					<br /> Convida a todos os príncipes e princesas, de todos os reinos ao
					redor, para a comemoração do seu <strong>1º aniversário!</strong>{' '}
					<br />
					Será uma honra tê-los em nosso castelo.
				</motion.p>
				<div className='self-start text-sm lg:text-base  '>
					<motion.p
						variants={P1Animation}
						initial='close'
						animate='open'>
						Data: 24/09/2023{' '}
					</motion.p>
					<motion.p
						variants={P2Animation}
						initial='close'
						animate='open'>
						Horário: 15:00 horas
					</motion.p>
					<motion.p
						variants={P3Animation}
						initial='close'
						animate='open'>
						Local: Rua Betula Negra, Nº 19 - Itaim Paulista
					</motion.p>
				</div>
			</div>
			<Image
				className='absolute bottom-[8%] lg:bottom-[17%] right-[37%] scale-75 lg:scale-100 animate-pulse '
				src={'/brancaDeNeve.png'}
				width={100}
				height={140}
				alt='Branca de neve'
			/>
		</main>
	);
}
