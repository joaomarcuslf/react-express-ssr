import fs from 'fs';
import { renderToString } from 'react-dom/server';

export const saveCacheFile = async (fileName, renderedComponent) => (
  new Promise((resolve, reject) => {
    fs.writeFile(`tmp/${fileName}.html`, renderedComponent, (err) => {
      if (err) return reject(renderedComponent);

      return resolve(renderedComponent);
    });
  })
);

export const getReactData = async (fileName, reactComp) => new Promise((resolve) => {
  fs.readFile(`tmp/${fileName}.html`, (err, data) => {
    if (err) return resolve(renderToString(reactComp));

    return resolve(data);
  });
});
