import { useTranslation } from 'react-i18next'
import GifAws from '../../assets/gif/awsgif.gif'
import ArrowClick from '../../assets/svg/arrowClick.svg'
import './style.css'

const ProjectContent = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="sm:col-span-2 lg:col-span-2 p-10 customsBg">
          <h1 className="text-white text-center">
            {t("Usando recursos da aws como o rekognition, foi criado uma api para ")}
            {t('analisar imagens e fazer o reconhecimento dos elementos da cena.')}
          </h1>
          <a
            className='flex justify-end'
            href="https://github.com/Guilherme1-jpg/IA-analysis-image"
            target="blank"
          >
            <img src={ArrowClick} alt="arrow" className='items-end'/>
          </a>
        </div>

        <div class="bg-white gradientCustom ">
          <img src={GifAws} alt="gif" width={450} className="mt-14" />
        </div>
      </div>
    </div>
  )
}

export default ProjectContent
