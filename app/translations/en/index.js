import { formatTranslation } from '../../helpers/translations';

import buttons from './buttons.json';
import inputs from './inputs.json';
import languages from './languages.json';
import texts from './texts.json';
import others from './others.json';

export default {
  translation: {

    ...formatTranslation({
      ...buttons,
      ...inputs,
      ...languages,
      ...texts,
    }),
    ...others,
  },
};
