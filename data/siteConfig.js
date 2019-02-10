module.exports = {
  siteTitle: 'RAW',
  siteDescription: `Personal Resume/Portfolio site`,
  authorName: 'Ralph Alex Woiwode',
  githubUsername: 'RAWoiwode',
  authorAvatar: '/images/avatar.jpeg',
  authorDescription: `Software Engineer; I enjoy working on challenging problems to see what strategies I can develop;<br />
											I currently work as a web tool developer using <strong>PHP, SQL, &amp; Javascript</strong>. <br />
											I am also leading a <em>"Coding Interview Club"</em> at UTEP. The purpose of the club is to help prepare students for technical interviews and provide some tips along the way`,
  skillsLanguages: [
    {
      name: 'Python',
      level: 60
    },
    {
      name: 'Ruby',
      level: 50
    },
    {
      name: 'C/C++',
      level: 30
    },
    {
      name: 'Java',
      level: 40
    }
  ],
	skillsWebbased: [
		{
			name: 'PHP',
			level: 70
		},
		{
			name: 'HTML/Bootstrap',
			level: 60
		},
		{
			name: 'CSS',
			level: 50
		},
		{
			name: 'JS',
			level: 50
		}
	],
	skillsSoftware: [
		{
			name: 'Jetbrains',
			level: 45
		},
		{
			name: 'GitHub',
			level: 40
		},
		{
			name: 'Atlassian JIRA',
			level: 30
		},
		{
			name: 'IDA Pro',
			level: 25
		}
	],
	skillsDB: [
		{
			name: 'MySQL',
			level: 60
		},
		{
			name: 'MSSQL',
			level: 50
		},
	],
	skillsFrameworks: [
		{
			name: 'React',
			level: 40
		},
		{
			name: 'Ruby on Rails',
			level: 45
		},
		{
			name: 'Atlassian',
			level: 20
		},
	],
  jobs: [
	  {
		  company: "University of Texas at El Paso",
		  begin: {
			  month: 'jan',
			  year: '2019'
		  },
		  duration: null,
		  occupation: "Coding Interview Club Founder",
		  description: "I lead a club that looks to provide some technical interview guidance to undergraduates."

	  },
    {
      company: "University of Texas at El Paso",
      begin: {
        month: 'jun',
        year: '2016'
      },
      duration: null,
      occupation: "Departmental Systems Administrator",
      description: "I apply Agile methods to develop dynamic web-based data integration projects for the Office of Research of Sponsored Projects."
  
    },
      {
      company: "Starbucks",
      begin: {
        month: 'feb',
        year: '2012'
      },
      duration: '5 yrs & 2 mths',
      occupation: "Barista/Shift Manager",
      description: "Lead a team of baristas to achieve high customer satisfaction during peak hours on a weekly basis."
    }, {
      company: "Coilcraft",
      begin: {
        month: 'nov',
        year: '2010'
      },
      duration: '4 yrs & 2 mths',
      occupation: "Buyer/Shipper",
      description: "Order a majority of all raw materials needed and prepared shipments."
    },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/rawoiwode/",
    github: "https://github.com/RAWoiwode",
    email: "rawoiwode@gmail.com",
    resume: "https://drive.google.com/file/d/1Q4mItGFPud5MPwYUJqTtC6LGb1FKI8TP/view?usp=sharing"
  },
  siteUrl: 'https://rawoiwode.com',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/loop375.jpg',
  googleAnalyticsId: 'UA-134207055-1',
  background_color: '#ffffff',
  theme_color: '#083D77',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Ralph Alex Woiwode',
      url: '/',
    }
  ]
};