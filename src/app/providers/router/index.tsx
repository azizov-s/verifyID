import { createBrowserRouter } from 'react-router-dom'
import HomeContent from '../../../pages/home'
import ZOutlet from '../../../widgets/outlet'

const router = createBrowserRouter([
	{
		path: '/',
		element: <ZOutlet/>,
		children: [
			{
				index: true,
				element: <HomeContent/>
			}
		]
	}
])

export default router