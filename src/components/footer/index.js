import Gmail from '../../assets/images/gmail.png'
import Linkedin from '../../assets/images/linkedin.png'
import Github from '../../assets/images/github.png'

const Footer = () => {
  return (
    <>
      <div className="flex justify-center items-center mr-20 mt-20">
        <div className="grid grid-cols-2 grid-rows-2 gap-2 p-10 mr-20 mt-20">
          <div className="col-span-3 mt-20">
            <h1 className="text-white mb-3 text-lg text-gray-500 md:text-xl dark:text-white-400 flex justify-start ">
              Contato
            </h1>
          </div>
          <div className="col-span-2 row-start-2">
            <h1 className="text-white text-left">
              No momento, estou procurando me juntar a uma equipe para agregar{' '}
              <br /> com os meus conhecimentos e assim construir aplicações de
              qualidade e eficiência.
            </h1>
            <div className="mt-5">
              <ul className="flex flex-wrap items-center justify-start text-gray-900 dark:text-white">
                <li className="">
                  <a href="https://github.com/Guilherme1-jpg" target="blank">
                    <img
                      src={Github}
                      className="me-2 md:me-4 "
                      alt="html"
                      width="30"
                    />
                  </a>
                </li>

                <li className="">
                  <a
                    href="https://www.linkedin.com/in/guilherme-henrique-6b3389136/"
                    target="blank"
                  >
                    <img
                      src={Linkedin}
                      className="me-2 md:me-4 "
                      alt="html"
                      width="30"
                    />
                  </a>
                </li>

                <li className="">
                  <a href="mailto:henriqueoliveiragui18@gmail.com?subject=bom+dia">
                    <img
                      src={Gmail}
                      className="me-2 md:me-4 "
                      alt="html"
                      width="30"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
