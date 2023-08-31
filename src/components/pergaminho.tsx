import React from 'react';
import Image from 'next/image';
export default function Pergaminho() {
	return (
		<>
			<Image
				className='absolute m-0 lg:m-auto h-full w-auto p-0 max-w-[364px] lg:max-w-full lg:max-h-full max-h-[648px] '
				src={'/bg-invite.png'}
				width={660}
				height={800}
				alt='Imagem de um pergaminho'
			/>
		</>
	);
}
