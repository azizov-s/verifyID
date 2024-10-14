import { Outlet } from 'react-router-dom'

const ZOutlet = () => {
	return (
		<div style={{width: '100%', minHeight: '100vh', backgroundColor: 'grey'}}>
			<Outlet/>
		</div>
	);
};

export default ZOutlet;