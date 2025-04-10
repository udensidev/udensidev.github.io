const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://udensidev.github.io',
  title: 'MU.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mmesoma Udensi',
  role: 'Data Engineer',
  description:
    'I\'m a data professional with a strong foundation in analytics and machine learning. I enjoy working with data from end to end—building ETL pipelines, creating data models, and uncovering insights through statistical analysis. I\'m fluent in Python, R, SQL, and comfortable working with cloud platforms. \n\nWhat sets me apart is my ability to bridge the gap between technical work and business impact. I love translating complex data into clear, actionable insights that help teams make better decisions.',
  resume: '/files/Mmesoma_Udensi_CV.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/mmesomaudensi',
    github: 'https://github.com/udensidev',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Yelp Restaurant Business Intelligence',
    description:
      'Extracted and transformed 6M+ Yelp reviews into a star schema within Azure SQL, enabling BI insights to support new restaurant location decisions',
    stack: ['Python', 'SQL', 'Azure'],
    sourceCode: 'https://github.com/udensidev/',
    livePreview: 'https://github.com/udensidev/',
  },
  {
    name: 'Property Valuation Model',
    description:
      'Developed a property valuation model using linear regression and random forest models to predict property prices in Cook County, IL with high accuracy. The model was trained on a dataset of over 50,000 properties and achieved an R-squared value of 0.85.',
    stack: ['R'],
    sourceCode: 'https://github.com/udensidev/property-valuation-model',
    livePreview: 'https://github.com/udensidev/property-valuation-model',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'R',
  'SQL',
  'SAS',
  'Databricks',
  'AWS',
  'Azure',
  'Knime',
  'Tableau',
  'MongoDB',
  'Pandas',
  'Git',
  'CI/CD',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mudensi2@illinois.edu',
}

export { header, about, projects, skills, contact }
