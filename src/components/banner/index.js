import Avatar from '../../assets/images/guiAvatar.png'
import Arrow from '../../assets/svg/seta.svg'
import Background from '../../assets/svg/Gradient.svg'
import './style.css'

const Banner = () => {
  return (
    <>
      <div className="grid content-start">
        <div className="col-start-2 flex mr-7 mt-16">
          <img src={Arrow} alt="arrow" className="mt-4" />
          <h1 className="text-white">
            Olá, meu nome é <a class="textPurple">Guilherme Henrique</a>
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
            Desenvolvedor Fullstack
          </h1>
          <h2 className="text-white mt-4">
            Amante de javascript e php e vai mais texto aqui
          </h2>
          <div className="drawing-circle">
            <h1 className="text-white mt-8">
              Desejo passar uma boa{' '}
              <span className="circled-word">impressão</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
