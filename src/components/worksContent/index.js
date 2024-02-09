import './style.css'
import { useState } from 'react'
import { Tech, Yank, Vik } from '../../utils/texts'
import { useTranslation } from 'react-i18next'


const WorkContent = () => {
  const [content, setContent] = useState('tech')
  const { t } = useTranslation();

  const handleText = (name) => {
    setContent(name);
  };

  const renderContent = () => {
    switch (content) {
      case 'tech':
        return <Tech t={t} />;
      case 'yank':
        return <Yank t={t} />;
      case 'vik':
        return <Vik t={t} />;
      default:
        return <Tech t={t} />;
    }
  };

  return (
    <>
      <div className="text-white custom-title flex items-center justify-center md:text-left">
        <h2 className="">{t('Experiências Profissionais')}</h2>
      </div>

      <div className="grid grid-cols-2 grid-rows-1 flex justify-center text-white ">
        <div className="flex justify-center">
          <ul>
            <li className="fromRight" onClick={() => handleText('tech')}>
              TechKnowLedge Treinamentos
            </li>
            <li className="fromRight" onClick={() => handleText('yank')}>
              Yank! Solutions
            </li>
            <li className="fromRight" onClick={() => handleText('vik')}>
              Vik tech and services
            </li>
          </ul>

          <hr className="hrVertical" />
        </div>

        <div>{renderContent()}</div>
      </div>

    </>
  )
}

export default WorkContent
