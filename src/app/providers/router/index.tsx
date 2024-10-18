import { createBrowserRouter } from 'react-router-dom'
import HomeContent from '../../../pages/home'
import ZOutlet from '../../../widgets/outlet'

const data = ['home',  'blogs', 'information']
// const data2 = ['home', 'about', 'blogs', 'information']

const getArray = (): any[] => {
	return data.map((e) => ({
		path: e + '/',
		element: `hello, its ${e}'s page`
	}))
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <ZOutlet/>,
		children: [
			{
				index: true,
				element: <HomeContent/>
			},
			...getArray()
			// ...data.map((e) => ({
			// 		path: e + '/',
			// 		element: `hello, its ${e}'s page`
			// 	}
			// ))
		]
	}	
])

export default router