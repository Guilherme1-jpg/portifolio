import React from 'react'
import Avatar from '../../assets/images/guiAvatar.png'
import Arrow from '../../assets/svg/seta.svg'

import './style.css'
import { useTranslation } from 'react-i18next'

const Banner = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="grid content-start">
        <div className="col-start-2 flex mr-7 mt-16">
          <img src={Arrow} alt="arrow" className="mt-4 hidden md:block" />
          <h1 className="text-white">
            {t('Olá, meu nome é')}{' '}
            <a className="textPurple">Guilherme Henrique</a>
          </h1>
        </div>
      </div>

      <div className="col-span-2 flex justify-center items-start mr-40 mt-5 md:col-span-1">
        <div className="circle-overlay">
          <div className="avatar-container">
            <img src={Avatar} alt="avatar" className="avatar-img" />
            <div className="background-svg"></div>
          </div>
        </div>

        <div className="ml-10 mt-10 px-10">
          <h1 className="text-3xl font-bold text-white underline">
            {t('Desenvolvedor Fullstack')}
          </h1>
          <h2 className="text-white mt-4 ">
            {t('Desenvolvedor FullStack há mais de 4 anos,')}
            <br />
            {t(
              'focado em entregar qualidade e software de mais alta qualidade.'
            )}
          </h2>
          <div className="drawing-circle">
            <h1 className="text-white mt-8">
             {t('Desejo passar uma boa')}
              <span className="circled-word">{t('impressão')}</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
