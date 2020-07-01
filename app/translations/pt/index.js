import { formatTranslation } from '../../helpers/translations';

import intro from './intro.json';
import language from './language.json';
import form from './form.json';

export default {
  translation: formatTranslation({
    ...language,
    ...intro,
    ...form,
  }),
};
