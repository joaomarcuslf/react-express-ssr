import { saveCacheFile, getReactData } from './server';

const handler = (FILENAME, COMPONENT) => async (req, res) => {
  const reactComp = await getReactData(FILENAME, COMPONENT);

  try {
    await saveCacheFile(FILENAME, reactComp);
  } catch (ex) {
    console.error(ex);
  }

  return res.status(200).render('main', { reactApp: reactComp });
};

export default {
  handler,
};
