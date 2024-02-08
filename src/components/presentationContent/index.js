import { useTranslation } from 'react-i18next'
import './style.css'

const PresentationContent = () => {
  const { t } = useTranslation();

  return (
    <>
      <div class="grid-cols-4 grid-rows-3 gap-3 mt-10">
        <div class="col-span-2 row-span-2 rounded p-5 flex justify-center mr-5">
          <h1 className="text-white md:text-left custom-text-presentation">
            {t('Sou Desenvolvedor Fullstack')}. |
          </h1>
        </div>
        <div class="rounded p-5 flex justify-center">
          <p className="text-white text-left ml-20">
            {t('Olá! Sou um desenvolvedor Full Stack com mais de 4 anos de ')}
            {t('experiência, especializado em criar soluções digitais inovadoras.')}
            <br /> {t('Ao longo da minha carreira, participei ativamente em equipes ')}
            {t('multidisciplinares, entregando projetos que superaram expectativas.')}
            <br />
            {t('Minha paixão pela tecnologia e dedicação em acompanhar as últimas ')}
            {t('tendências garantem que eu esteja sempre pronto ')}
            <br /> {t('para enfrentar novos desafios e contribuir para o sucesso dos ')}
            {t('projetos em que estou envolvido.')}
          </p>
        </div>
      </div>
    </>
  )
}

export default PresentationContent
