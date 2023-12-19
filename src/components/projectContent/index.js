import GifAws from '../../assets/gif/awsgif.gif'
import ArrowClick from '../../assets/svg/arrowClick.svg'
import './style.css'

const ProjectContent = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-2 p-10 customsBg">
          <h1 className="text-white text-center">
            Usando recursos da aws como o rekognition, foi criado uma api para
            analisar imagens e fazer o reconhecimento dos elementos da cena.
          </h1>
          <a
            href="https://github.com/Guilherme1-jpg/IA-analysis-image"
            target="blank"
          >
            <img src={ArrowClick} alt="arrow" />
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
