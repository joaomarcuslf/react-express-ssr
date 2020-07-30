import express from 'express';

const router = express.Router();

const projects = [
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/1',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/2',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/3',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/4',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/5',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/6',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/7',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
  {
    src: '/images/placeholder.png',
    alt: 'Placeholder image',
    linkTo: '/projects/8',
    description: 'Lorem ipsum dolor sit amnet in two places on the reality',
  },
];

router.get('/projects', async (req, res) => {
  const limit = req.query.limit || 100;

  return res.json(projects.slice(0, limit));
});

export default router;
