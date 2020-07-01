import { formatTranslation } from '../../helpers/translations';

import menu from './menu.json';
import intro from './intro.json';
import language from './language.json';
import form from './form.json';

export default {
  translation: formatTranslation({
    ...menu,
    ...language,
    ...intro,
    ...form,
  }),
};
