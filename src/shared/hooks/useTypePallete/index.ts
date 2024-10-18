import { useEffect, useState } from 'react'

function useTypePallete() {
	const [theme, setTheme] = useState<string>(localStorage.pallete)
	const colorTheme = theme === 'pallete1' ? 'pallete2' : 'pallete1'
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove(colorTheme)
		root.classList.add(theme)
		localStorage.setItem('pallete', theme)
	}, [theme, colorTheme])
	return { colorTheme, setTheme }
}
export default useTypePallete