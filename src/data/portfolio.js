const portfolioData = { 
	"imageUrl": 'http://localhost:3000/',
	"logo": "images/app-logo.svg",
	"logoWhite": "images/app-logo-white.svg",
	"name": 'Jeshurun A. Sanchez',
	"role": 'Front-end Developer & Graphic Designer',
	"intro": "Let's build a beautiful website!",
	"projects": [
		{
			"id": 0,
			"title": "Portfolio Website",
			"imageUrl": "images/portfolio/portfolio.png",
			"link": "https://jeshport.firebaseapp.com/",
			"codeLink": "#",
			"description": "A personal website created using React JAvascript Framework",
			"technology": ["React", "Redux", "Axios", "Formik"],
		},	
		{
			"id": 1,
			"title": "Internship Project ~ Redesigning the Aux. Limited NZ website",
			"imageUrl": "images/portfolio/auxlimited.png",
			"link": "https://aux-web.firebaseapp.com/",
			"codeLink": "https://github.com/JeshurunSan/aux-website-react-firebase",
			"description": "This is a redesign concept for Aux. Limited Website: http://www.aux.nz",
			"technology": ["React", "Redux", "NodeJS", "Materialize CSS"],
		},
		{
			"id": 2,
			"title": "Be Informed NZ",
			"imageUrl": "images/portfolio/beinformed.png",
			"link": "https://be-informed-nz.firebaseapp.com/",
			"codeLink": "https://github.com/JeshurunSan/BeInformedNZ",
			"description": "This is an informative website about life in New Zealand. Our goal is to help Tourists, Students, Residents and others to know and find information about this amazing country.",
			"technology": ["React", "Redux", "Firebase-Auth", "Firebase-Firestore"],
		},									
		],
	"skills": [
		{
			"name": "HTML/CSS",
			"percentage": 80
		},
		{
			"name": "SASS/ SCSS",
			"percentage": 70
		},	
		{
			"name": "Javascript",
			"percentage": 80
		},							
		{
			"name": "Jquery",
			"percentage": 80
		},

		{
			"name": "REACT",
			"percentage": 50
		},
		{
			"name": "PHP (LARAVEL)",
			"percentage": 50
		},						
	],
	"workExp": [
		{
			"title": "Front-end Developer | Graphic Designer",
			"date" : '2019',
			"description": "Redesigned Company Website into a full web application using ReactJS and Firebase; Made revisions on their GhostTech website; Created pixel perfect icons for their mobile app “Recky” using Adobe Photoshop and Illustrator; Assisted in designing and producing YouTube companion ads for “Think New NZ” in Kargo, DV360 m-rec, DV360 leaderboard, DV360 half-page format.",
			"company": 'AUX Limited.'
		},
		{
			"title": "Web Developer | Graphic Designer",
			"date" : '2017 – 2018',
			"description": "Build and maintain two JavaScript web apps as automation tools for quicker and more efficient production for the company; Laying out and designing magazine pages for clients; Creating Brochures, Online Ad designs and other corporate paraphernalia for the company; Preparing all brochures, pamphlets, flyers, etc. for print and post-production.",
			"company": 'RR Donnelley'
		},
		{
			"title": "Video-photographer | Graphic Designer",
			"date" : '2016 – 2017',
			"description": "Filmed 5 promotional AVPs for FEU campuses using DSLR Cameras, Edited all production videos using Final Cut Pro, Adobe Premiere and After effects.",
			"company": 'Azilana Digital Photography'
		},
		{
			"title": "Junior Software Engineer | Graphic Designer",
			"date" : '2014 - 2015',
			"company": 'Orange and Bronze Software Development',
			"description": "Create web designs and layouts for clients, Design the company’s Identification Card, Designed the company USB and other corporate paraphernalia, Designed and produced office posters and put up an office mural/artworks.",	
		},				
	]	
 
}

export default portfolioData;