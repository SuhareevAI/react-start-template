import React, { FC, useInsertionEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Key } from '../constants/LocalisationConstants';

export const LocalisationProvider: FC = () => {
  const { i18n } = useTranslation();

  useInsertionEffect(() => {
    localStorage.setItem(Key, i18n.language);
    const html = document.body.parentElement;
    html.lang = i18n.language;
  }, [i18n.language]);

  return null;
};
