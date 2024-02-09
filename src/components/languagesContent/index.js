import React from 'react';
import { useTranslation } from 'react-i18next';
import LanguagesGrid from '../languagesGrid';
import './style.css';

const LanguagesContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="flex justify-center p-10 mt-10">
        <h1 className="text-white text-center">
          {t('Ao longo da minha carreira profissional, adquiri uma sólida experiência em diversas linguagens de programação.')} <br />
          {t('Minha jornada no desenvolvimento de software abrange um conjunto diversificado de tecnologias,')} <br />
          {t('permitindo-me enfrentar desafios complexos e contribuir para o sucesso de projetos.')}
        </h1>
      </div>

      <div>
        <LanguagesGrid />
      </div>
    </>
  );
};

export default LanguagesContent;
