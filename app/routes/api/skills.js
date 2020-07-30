import express from 'express';

const router = express.Router();

const skills = [
  {
    name: 'JavaScript',
    progress: 90,
  },
  {
    name: 'CSS',
    progress: 80,
  },
  {
    name: 'HTML',
    progress: 75,
  },
  {
    name: 'Ruby',
    progress: 71,
  },
  {
    name: 'Git',
    progress: 75,
  },
  {
    name: 'MongoDB',
    progress: 55,
  },
  {
    name: 'PostgreSQL',
    progress: 55,
  },
  {
    name: 'Team Work',
    progress: 78,
  },
  {
    name: 'Conflict Resolution',
    progress: 70,
  },
  {
    name: 'Agile Methodologies',
    progress: 65,
  },
  {
    name: 'Algorithms',
    progress: 70,
  },
  {
    name: 'Software Engineer',
    progress: 68,
  },
];

router.get('/skills', async (req, res) => {
  const limit = req.query.limit || 100;

  return res.json(skills.sort((a, b) => {
    if (a.progress > b.progress) return -1;
    if (b.progress > a.progress) return 1;

    return 0;
  }).slice(0, limit));
});

export default router;
