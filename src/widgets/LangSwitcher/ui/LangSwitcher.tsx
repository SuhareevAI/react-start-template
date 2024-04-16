import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from '../../../app/constants/LocalisationConstants';
import { Button } from '../../../shared/ui/Button/Button';

export const LangSwitcher: FC = () => {
  const { i18n } = useTranslation();

  const onClick = () => {
    const currentLanguage = i18n.language;
    const lanuage = currentLanguage == locales.ru.code ? locales.en.code : locales.ru.code;
    i18n.changeLanguage(lanuage);
  };

  return (
    <Button size="small" style="secondary" onClick={onClick}>
      {locales[i18n.language as keyof typeof locales].title}
    </Button>
  );
};
