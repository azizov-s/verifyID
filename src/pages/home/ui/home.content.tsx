// const currentPallete = 'pallete1'

import { useState } from 'react'
import { Chip, Chips } from '../../../components/Chips'

const HomeContent = () => {
	// const currentPallete = 'pallete1'
	// const {colorTheme: currentPallete, setTheme: setCurrentPallete} = useTypePallete()
	// const {colorTheme: currentPallete, setTheme: setCurrentPallete} = useDarkSide()
	// const handleChangePallete = () => {
	// 	setCurrentPallete(currentPallete)
	// }
	// useEffect(() => {
	// 	console.log((currentPallete));
	// 	console.log(`bg-${currentPallete}-background`);
	// }, [currentPallete]);
	const [value, setValue] = useState<string[]>([]);

	return (
		<div 
			className={`w-full h-[100dvh] border-[1px] flex flex-col justify-start items-center px-12 bg-pallete1-background`}
		>
			<div className="w-full flex justify-between items-center">
				<p>checkout.com</p>
				<a href="">Verify later</a>
			</div>
			<img src="" alt="" className='w-[112px] h-[112px] bg-[gray]' />
			<p 
				className={`text-[24px] font-bold leading-34 text-pallete1-primary`}
			>
				Let's verify your identity in 3 minutes</p>
			<p 
				className={`text-pallete1-secondary`}
			>
				Verification of your identity is necessary to finalise your application for "your company name"
			</p>
			<button 
				className={`w-full h-9 mb-3 bg-pallete1-accent text-pallete1-primary  border-[1px]`}
			>
				Start verifying
			</button>
			<button 
				className={`w-full h-9 border-[1px] border-pallete1-primary text-pallete1-primary`}
			>
				{/* {currentPallete} */}
				pallete1
			</button>
			<button
				className={`w-full h-9 text-pallete1-primary`}
			>English</button>
			<a href="" 
				className={`text-pallete1-secondary`}
			>
					Why do I need to verify my identity?
			</a>
			<div>
				<Chips setValue={setValue} value={value}>
					<Chip value='1'>exp</Chip>
					<Chip value='2'>wer</Chip>
					<Chip value='3'>werwerwe</Chip>
				</Chips>
			</div>
		</div>
	);
};

export default HomeContent;