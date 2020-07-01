import { hydrate } from 'react-dom';

export const hydratatePage = (component, target) => (
  hydrate(component, document.getElementById(target))
);
