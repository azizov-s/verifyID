import { createBrowserRouter } from 'react-router-dom'
import ZOutlet from '../../../widgets/outlet'

const router = createBrowserRouter([
	{
		path: '/',
		element: <ZOutlet/>
	}
])

export default router