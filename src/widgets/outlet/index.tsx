import { Outlet } from 'react-router-dom'

const ZOutlet = () => {
	return (
		<div
			className='w-full min-h-[100dvh] flex justify-center items-center' 
		>
			<Outlet/>
		</div>
	);
};

export default ZOutlet;