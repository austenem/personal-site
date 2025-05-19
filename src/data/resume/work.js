/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Harvard Medical School',
    position: 'Software Developer',
    url: 'https://hidivelab.org/',
    startDate: '2024-07-01',
    summary: 'The HIDIVE (Humans in Data Integration, Visualization, and Exploration) Lab in the Department of Biomedical Informatics at Harvard Medical School is a group of data scientists and software developers who are passionate about driving biomedical discovery by creating efficient and effective visual interfaces between analysts and data.',
    highlights: [
      'Maintained and enhanced the HuBMAP Data Portal, contributing new frontend features using TypeScript and React and addressing backend issues using Python.',
      'Led the introduction of collaborative features to the portal, allowing users to asynchronously share Jupyter notebooks and datasets.',
      'Built a bulk download feature for dataset files and metadata, streamlining access for researchers.',
      'Migrated key features from local to persistent storage, improving user experience across sessions.',
      'Expanded test coverage across the portal, including revamping end-to-end testing with Cypress to ensure stability across releases.',
    ],
  },
  {
    name: 'Harvard Division of Continuing Education',
    position: 'EdTech Software Engineer',
    url: 'https://dce.harvard.edu/',
    startDate: '2023-05-01',
    endDate: '2024-07-01',
    highlights: [
      'Developed complex React components for and integrated full-stack features into Harvard’s Immersive Classroom project to improve learning experiences for asynchronous students.',
      'Built an extensive validation library for the department’s React toolkit, streamlining input handling and optimizing development workflows.',
    ],
  },
  {
    name: 'Tufts University',
    position: 'JumboCode Project Manager',
    url: 'https://jumbocode.org/',
    startDate: '2023-08-01',
    endDate: '2024-05-01',
    summary: 'JumboCode is a student-run organization at Tufts University that partners with local non-profits to build software solutions for social good.',
    highlights: [
      'Led a team of a dozen student developers and designers in building a submission portal for a local nonprofit publication.',
      'Facilitated all communication with the client and effectively managed agile sprint cycles.',
      'Utilized TypeScript and React components in Next.js to build out a client-facing interface.',
    ],
  },
  {
    name: 'Tufts University',
    position: 'Data Structures Teaching Assistant',
    url: 'https://sites.tufts.edu/comp15/',
    startDate: '2022-09-01',
    endDate: '2024-05-01',
    summary: 'CS15 is an introductory data structures course at Tufts University focused on object-oriented programming and data structures in C++.',
    highlights: [
      'Led a weekly lab section and held a minimum of three weekly office hours to ensure students’ understanding of the course material and troubleshoot projects as needed.',
      'Graded and provided detailed written feedback on student homework and project submissions.',
      'Discussed assignments and potential changes to course infrastructure during weekly course staff meetings.',
    ],
  },
  {
    name: 'Tellescope',
    position: 'Software Developer Intern',
    url: 'https://tellescope.com/',
    startDate: '2022-06-01',
    endDate: '2022-08-01',
    summary: 'Tellescope is a healthcare startup with the goal of a modern digital patient experience.',
    highlights: [
      'Developed a chatbot component for I-Ally, a client app of Tellescope focused on the needs of family caregivers.',
      'Utilized OpenAI’s GPT-3 model to generate helpful answers and links for user queries based on an AI-sorted knowledge base retrieved from the client app, and integrated the component into the company’s codebase in order to render it within the client app.',
      'Discussed challenges during weekly stand-ups and tech reviews with a PM and other interns, and concluded the internship by presenting the finished project to the company.',
    ],
  },
  {
    name: 'Tufts University',
    position: 'JumboCode Frontend Developer',
    url: 'https://jumbocode.org/',
    startDate: '2021-09-01',
    endDate: '2022-05-01',
    summary: 'JumboCode is a student-run organization at Tufts University that partners with local non-profits to build software solutions for social good.',
    highlights: [
      'Wrote, tested, and formatted pages of an iOS app and web interface for Simply Smiles, a non-profit foster home organization.',
      'Collaborated with a team of ten student developers to integrate their expense database into this user interface, and utilized biweekly stand-ups to discuss any developments or challenges.',
      'Demonstrated finished app and website during organization-wide final presentations.',
    ],
  },
];

export default work;
