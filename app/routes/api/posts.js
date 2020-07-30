import express from 'express';

const router = express.Router();

const posts = [
  {
    src: '/images/presentations/front-end-2020.png',
    alt: 'Front page of the slide, this is a image showcase to the post.',
    linkTo: 'https://github.com/joaomarcuslf2/front-end-2020/blob/master/Front-end%20em%202020.pdf',
    description: 'Front-end in 2020 - Presentation',
  },
  {
    src: '/images/posts/women-in-tech.png',
    alt: 'Women in Tech written in the image, this is a image showcase to the post.',
    linkTo: 'https://code.likeagirl.io/refletindo-sobre-mulheres-na-computa%C3%A7%C3%A3o-e-comunidades-t%C3%B3xicas-85a7efaa435',
    description: 'Refletindo sobre mulheres na computação e comunidades tóxicas',
  },
  {
    src: '/images/posts/how-moving-from-design.jpeg',
    alt: 'Devices on a table, this is a image showcase to the post.',
    linkTo: 'https://medium.com/@joaomarcuslf/back-to-2011-my-mother-said-d87dee1847e6',
    description: 'How moving from Design to Back-end made me a better Front-end',
  },
  {
    src: '/images/posts/mocha-es6-gulp.jpeg',
    alt: 'Notebook in table, this is a image showcase to the post.',
    linkTo: 'https://medium.com/@joaomarcuslf/testando-javascript-corretamente-com-mocha-es6-gulp-a29e9e4f25c1',
    description: 'Testando JavaScript corretamente com Mocha + ES6 + Gulp',
  },
];

router.get('/posts', async (req, res) => {
  const limit = req.query.limit || 100;

  return res.json(posts.slice(0, limit));
});

export default router;
