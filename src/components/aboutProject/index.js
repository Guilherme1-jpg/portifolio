import { useTranslation } from 'react-i18next'
import GitHubWhite from '../../assets/images/githubblack.png'
import ArrowClick from '../../assets/svg/arrowClick.svg'
import './style.css'

const CodeSamples = () => {
  const { t } = useTranslation()
  return (
    <>
      <div className="flex justify-center items-center mt-10 ">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-5 mr-10 mt-20">
          <div className="col-span-3 mt-20">
            <h1 className="text-white mb-3 text-lg text-gray-500 md:text-xl dark:text-white-400 flex justify-start ">
              {t('Projetos')}
            </h1>
          </div>
          <div className="col-span-2 row-start-2">
            <h1 className="text-white text-left">
              {
                'Além de projetos já feitos durante minhas experiências profissionais,'
              }
              <br />
              {t(
                'é possivel visualizar um pouco das minhas competências e padrões aplicados.'
              )}
            </h1>
            <div className='buttonGit '>
            <a
            className='flex justify-end '
            href="https://github.com/Guilherme1-jpg/IA-analysis-image"
            target="blank"
          >
            Perfil Github
             <img src={ArrowClick} alt="arrow" className='items-end' />
             
          </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CodeSamples
