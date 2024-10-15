import { Outlet } from 'react-router-dom'

const ZOutlet = () => {
	return (
		<div
			className='w-full min-h-[100vh]' 
		>
			<Outlet/>
		</div>
	);
};

export default ZOutlet;