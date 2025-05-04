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
    'I\'m a data professional with a strong foundation in analytics, machine learning, and end-to-end data workflows. I enjoy working across the full data lifecycle — building ETL pipelines, designing data models, and uncovering insights through statistical analysis. I\'m fluent in Python, R, and SQL, and comfortable working with cloud platforms. I\'m passionate about using data not just to answer questions, but to drive strategy and create real-world value.',
  resume: '/files/Mmesoma_Udensi_CV.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/mmesomaudensi',
    github: 'https://github.com/udensidev',
  },
}

const projects = [
  // projects can be added and removed
  // if there are no projects, Projects section won't show up
  {
    name: 'AWS Marketing Offers Pipeline',
    description:
      'A real-time, serverless data pipeline built with AWS Kinesis, Lambda, DynamoDB, and S3 to simulate user browsing activity and generate targeted marketing offers. Transformed data is cataloged with AWS Glue and can be queried using Athena. Infrastructure is fully provisioned with Terraform and automated via Makefile.',
    stack: ['AWS', 'Terraform', 'Makefile'],
    sourceCode: 'https://github.com/udensidev/aws-marketing-offer-pipeline',
    livePreview: 'https://github.com/udensidev/aws-marketing-offer-pipeline',
  },
  {
    name: 'News Sentiment Pipeline',
    description:
      'This project scrapes crypto and finance news from CoinDesk, summarizes the articles using a fine-tuned BART model, and analyzes their sentiment with a lightweight RoBERTa classifier. Articles are ranked based on sentiment scores',
    stack: ['Python', 'Web Scraping', 'NLP'],
    sourceCode: 'https://github.com/udensidev/financial-news-sentiment',
    livePreview: 'https://github.com/udensidev/financial-news-sentiment',
  },
  {
    name: 'BitOracle Chatbot',
    description:
      'An interactive chatbot that fetches live Bitcoin price data and embeds it into AI prompts for dynamic reasoning. Users can ask trend-related questions, and the chatbot responds naturally using Google\'s Gemini Flash 2.0 model.',
    stack: ['Python', 'Gradio', 'Google Gemini'],
    sourceCode: 'https://github.com/udensidev/bitoracle-chatbot',
    livePreview: 'https://github.com/udensidev/bitoracle-chatbot',
  },
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
  {
    name: 'Disaster Tweet Classifier',
    description:
      'Built a Bernoulli Naive Bayes model capable of distinguishing between tweets that announce real emergencies and those that don\'t. The model achieved an F1-score of 0.79 on the test set.',
    stack: ['Python', 'NLP', 'TF-IDF'],
    sourceCode: 'https://github.com/udensidev/disaster-tweet-classification',
    livePreview: 'https://github.com/udensidev/disaster-tweet-classification',
  }
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'R',
  'SQL',
  'JSONpath',
  'JSONata',
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
  'Docker'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mudensi2@illinois.edu',
}

export { header, about, projects, skills, contact }
