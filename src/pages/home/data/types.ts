// export interface StructureType {

// }

const structure = [
	{

	}
]

const page1 = {
	image: {
		src: '',
		styles: ''
	},
	title: {
		text: "Let's verify your identity in 3 minutes",
		styles: ''
	},
	description: {
		text: 'Verification of your identity is necessary to finalise your application for OXR', 
		styles: ''
	},
	button: {
		text: 'Start verifying',
		styles: '',
		action: ''
	},
	selectLang: {
		id: '1',
		name: 'English'
	},
	question: {
		text: 'Why do I need to verify my identity?',
		styles: '',
		link: ''
	}
}

const page2 = {
	title: {
		text: "Choose your document",
		styles: ''
	},
	notify: {
		status: 'attention',
		text: 'In the next step, you will record the original document',
		styles: ''
	},
	list: {
		styles: '',
		items: [
			'National ID card',
			'Passport',
			'Residence permit',
			'Driving licence'
		]
	},
	widget: {
		description: {
			text: '',
			styles: ''
		},
		selectLang: {
			id: '2',
			name: 'Italian'
		},
		button: {
			text: 'Continue verifying',
			styles: '',
			action: ''
		}
	}
}

const page3 = {
	title: {
		text: 'Get ready to hold and tilt the front of your document',
		styles: ''
	},
	description: {
		text: 'This lets us detect holograms and security marks',
		styles: ''
	},
	image: {
		src: '',
		styles: ''
	},
	button: {
		text: "I'm ready to tilt my document",
		styles: '',
		action: ''
	}
}


const page4 = {
	title: {
		text: 'Get ready to hold and tilt the back of your document',
		styles: ''
	},
	description: {
		text: 'This lets us detect holograms and security marks',
		styles: ''
	},
	image: {
		src: '',
		styles: ''
	},
	button: {
		text: "I'm ready to tilt my document",
		styles: '',
		action: ''
	}
}

const page5 = {
	title: {
		text: "We'll take a short video of the front and side profile of your face",
		styles: ''
	},
	description: {
		text: 'This lets us detect holograms and security marks',
		styles: ''
	},
	image: {
		src: '',
		styles: ''
	},
	button: {
		text: "I'm ready to tilt my document",
		styles: '',
		action: ''
	}
}