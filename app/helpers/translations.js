export const formatTranslation = (translations) => (
  Object.keys(translations).reduce((acc, primaryKey) => {
    const secondaryKeys = Object.keys(translations[primaryKey]);

    const newObj = secondaryKeys.reduce((acc2, secondaryKey) => ({
      ...acc2,
      [`${primaryKey}-${secondaryKey}`]: translations[primaryKey][secondaryKey],
    }), {});

    return { ...acc, ...newObj };
  }, {})
);
