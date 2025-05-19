const skills = [
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Javascript',
    competency: 5,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'React',
    competency: 5,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React Native',
    competency: 2,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'C++',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'C',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Languages', 'Python', 'Machine Learning'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Flask',
    competency: 3,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'Bootstrap',
    competency: 4,
    category: ['Web Development', 'Styling'],
  },
  {
    title: 'Tailwind CSS',
    competency: 4,
    category: ['Web Development', 'Styling'],
  },
  {
    title: 'Material UI',
    competency: 4,
    category: ['Web Development', 'Styling'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages', 'Styling'],
  },
  {
    title: 'SQL',
    competency: 1,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'AWS',
    competency: 1,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'Git/GitHub',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Figma',
    competency: 3,
    category: ['Tools', 'Styling'],
  },
  {
    title: 'LaTeX',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'ElasticSearch',
    competency: 3,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'Jest',
    competency: 3,
    category: ['Web Development', 'Testing'],
  },
  {
    title: 'Cypress',
    competency: 3,
    category: ['Web Development', 'Testing'],
  },
  {
    title: 'Selenium',
    competency: 2,
    category: ['Web Development', 'Testing'],
  },
  {
    title: 'Atlassian Suite',
    competency: 4,
    category: ['Tools'],
  },
  {
    title: 'Jupyter',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Numpy',
    competency: 1,
    category: ['Data Science', 'Python', 'Machine Learning'],
  },
  {
    title: 'PyTorch',
    competency: 1,
    category: ['Data Science', 'Machine Learning', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
