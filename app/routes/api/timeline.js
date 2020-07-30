import express from 'express';
import moment from 'moment';
import { uniq } from 'lodash';

const router = express.Router();

const timeline = [
  {
    name: 'Social Media - Internship',
    company: {
      name: 'FAETERJ-Rio',
      img: 'faeterj-rio.png',
      ref: 'https://www.linkedin.com/school/faeterj-rio/',
    },
    tags: [],
    description: 'Manages the social media of the FAETERJ institution.',
    startDate: '2015-08',
    endDate: '2016-4',
  },
  {
    name: 'Front-end Developer - Technological Research Project(PICT)',
    company: {
      name: 'FAETERJ-Rio',
      img: 'faeterj-rio.png',
      ref: 'https://www.linkedin.com/school/faeterj-rio/',
    },
    tags: ['JS', 'PHP', 'jQuery'],
    description: `
      I worked in academic applications in order to facilitate the teaching of subjects in the area of computing in colleges, using HTML / CSS and JavaScript.

      I also worked using various Agile practices such as Kanban and Daily meetings, and applied XP and Scrum during the projects and Github to keep the project versioned and Open Source.
    `,
    startDate: '2015-11',
    endDate: '2016-11',
  },
  {
    name: 'Front-end Developer - Internship',
    company: {
      name: 'Minds At Work Sistemas e Projetos Ltda',
      img: 'minds-at-work.png',
      ref:
        'https://www.linkedin.com/company/minds-at-work-sistemas-e-projetos-ltda/',
    },
    tags: ['JS', 'Node.js', 'Angular.js', 'jQuery'],
    description: `
      I worked on applications using JavaScript along with other libraries and frameworks for Frontend and with C#/.net and Java/Spring in the Backend.

      I also worked with agile Scrum practices using Kanban; I used Jenkins for Continuous integration and Mercurial / HG for versioning, in multidisciplinary teams for projects in different areas.
    `,
    startDate: '2016-05',
    endDate: '2017-01',
  },
  {
    name: 'Full-stack Developer - Junior',
    company: {
      name: 'B2W Digital',
      img: 'b2w-digital.png',
      ref: 'https://www.linkedin.com/company/b2w---companhia-global-do-varejo/',
    },
    tags: ['JS', 'React', 'Node.js'],
    description: `
      I participate in projects in several stages of E-Commerce using JavaScript for the development of universal and responsive applications with React and React Native for Frontend and Node.js for the Backend.

      I also work with AWS services such as Elastic Beanstalk, EC2 and S3, also with Git, continuous deployment with Gitlab and Bamboo pipeline, and Agile practices such as scrum.
    `,
    startDate: '2017-02',
    endDate: '2018-09',
  },
  {
    name: 'Full-stack Developer - Middle',
    company: {
      name: 'Zoox Smart Data',
      img: 'zoox.jpeg',
      ref: 'https://www.linkedin.com/company/zoox-smart-data-brasil/',
    },
    tags: ['JS', 'Node.js', 'VueJS', 'Angular'],
    description: `
      I worked on the company's innovation team, that focuses on developing the company's newest products using the latest technologies such as Vue/Vuex for the front end and Koa.js for the back end.

      The project in which I was most of the time was SmartPass, this project focuses on using recognition and data enrichment to expedite the completion and generation of the guest web check-in, so that it does not need to enter the normal hotel queue, and for the hotel client, it has access to create management reports using the captured data.

      We also used some of AWS services like Elastic Beanstalk, S3, and Rekognition. As additional tools were used Git with Bitbucket and Git-flow, and agile practices such as Scrum and Kanban using Jira.
    `,
    startDate: '2018-09',
    endDate: '2019-12',
  },
  {
    name: 'Full-stack Developer - Middle',
    company: {
      name: 'Working Minds',
      img: 'working-minds.png',
      ref: 'https://www.linkedin.com/company/working-minds/',
    },
    tags: ['JS', 'React', 'Node.js', 'Ruby on Rails', 'Angular', 'Ionic'],
    description: '',
    startDate: '2020-01',
    endDate: null,
  },
];

router.get('/timeline', async (req, res) => {
  const {
    startDate = '2015-08',
    endDate = moment().format('YYYY-MM'),
  } = req.query;

  return res.json(
    timeline.filter((event) => (
      moment(startDate).isSameOrBefore(event.startDate)
        && moment(endDate).isSameOrAfter(event.startDate)
    )),
  );
});

router.get('/timeline/tags', async (req, res) => res.json(
  uniq(timeline.reduce((acc, element) => acc.concat(element.tags), [])),
));

export default router;
