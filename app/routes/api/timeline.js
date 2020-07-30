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
    description: {
      en: 'I worked in WebCom Team, which is an team that mantains the FAETERJ Social Medias(Facebook, Wordpress) and focus a lot on User interactions using a lot of marketing techniques, and agile praticles.',
      pt: 'Trabalhei no Time WebCom, que é uma equipe mantenedora das mídias sociais da FAETERJ (Facebook, Wordpress), com grande nas interações com o usuário, e usando técnicas de marketing e práticas ágeis para organização.',
    },
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
    tags: ['JavaScript', 'PHP', 'jQuery'],
    description: {
      en: 'PICT is an Technological Research Project focused on creating educational applications using technologies like HTML5, CSS3, Canvas, JavaScript. It uses pure JavaScript, has an very deep agile philosophy, using Kanban, Scrum focusing on code quality and UX/UI.',
      pt: 'O PICT é um projeto de pesquisa tecnológica focado na criação de aplicativos educacionais usando tecnologias como HTML5, CSS3, Canvas, JavaScript. Ele usa na maior parte JavaScript puro, tem uma filosofia ágil muito profunda, usando Kanban, Scrum, com foco na qualidade do código e UX/UI.',
    },
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
    tags: ['JavaScript', 'Node.js', 'Angular.js', 'jQuery'],
    description: {
      en: 'Minds At Work is an enterprise software developer, the I\'ve worked in different Projects from facial recognition to network simulation, we used AngularJS, jQuery, Mocha, Chai, Sinon, Istanbul, SCSS, Gulp, Websockets and others technologies.',
      pt: 'A Minds At Work é uma desenvolvedora de software empresarial. Trabalhei em diferentes projetos, de reconhecimento facial à simulação de redes. Utilizamos AngularJS, jQuery, Mocha, Chai, Sinon, Istambul, SCSS, Gulp, Websockets e outras tecnologias.',
    },
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
    tags: ['JavaScript', 'React', 'Node.js'],
    description: {
      en: 'B2W digital is the greatest E-commerce in Latina America. There we used React/Redux stack React Native for universal apps with RESTful APIs, and a lot of technologies like RestQL, a GraphQL-like implementation, and NodeJS for most of the Front-end APIs. Metric focused work, testing new feature with A/B, A/B/C tests, and it has scrum teams OKRs focused. And teams divided as Squads.',
      pt: 'O B2W digital é o maior E-commerce da América Latina. Lá usamos a Stack de React + Redux e React Native para aplicativos universais com APIs RESTful e muitas tecnologias como RestQL, implementação semelhante ao GraphQL, e NodeJS para a maioria das APIs front-end. Trabalhamos baseados em métricas, testando novos fluxos com testes A/B, A/B/C, e possuindo OKRs focadas nas equipes com Scrum. E equipes divididas como Squads.',
    },
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
    tags: ['JavaScript', 'Node.js', 'VueJavaScript', 'Angular'],
    description: {
      en: 'Zoox is a software company focused on Big Data projects and working with the Facial recognition engines. There we use Node.js and Vue stack.',
      pt: 'Zoox é uma empresa de software focada em projetos de Big Data e trabalhando com os mecanismos de reconhecimento facial. Lá usamos Node.js e pilha Vue.',
    },
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
    tags: ['JavaScript', 'React', 'Node.js', 'Ruby on Rails', 'Angular', 'Ionic'],
    description: {
      en: '',
      pt: '',
    },
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
