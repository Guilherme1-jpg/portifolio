import LanguagesGrid from '../languagesGrid'
import './style.css'

const LanguagesContent = () => {
  return (
    <>
      <div className="flex justify-center p-10 mt-10">
        <h1 className="text-white text-center">
          Ao longo da minha carreira profissional, adquiri uma sólida
          experiência em diversas linguagens de programação. <br />
          Minha jornada no desenvolvimento de software abrange um conjunto
          diversificado de tecnologias, <br />
          permitindo-me enfrentar desafios complexos e contribuir para o sucesso
          de projetos.
        </h1>
      </div>

      <div>
        <LanguagesGrid />
      </div>
    </>
  )
}

export default LanguagesContent
