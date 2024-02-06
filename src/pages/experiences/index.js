import MenuHeader from '../../components/header'
import Developer from '../../assets/svg/developer.svg'
import Testing from '../../assets/svg/testing.svg'
import './styled.css'

const ExperiencesAbout = () => {
  return (
    <>
      {/* mudar */}
      <MenuHeader />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 grid-rows-7 gap-4 mt-10">
          <div className="col-start-2 text-white ">
            <h1 className="custom-titles">TechknowLedge Treinamentos</h1>{' '}
            Desenvolvedor de Sistemas FullStack
          </div>
          <div className="col-start-2 row-start-2">
            <div className="text-white">
              <h1 className="text-description">Linguagens e Frameworks</h1>
            </div>
            <div className="glass-paragraph">
              <h2 className="text-paragraph">
                Durante minha trajetória profissional, tive a oportunidade de
                atuar no desenvolvimento e manutenção de aplicações web,
                envolvendo tecnologias como ReactJS, NodeJS, PostgreSQL,
                TypeORM, práticas de injeção de dependência e os princípios
                SOLID. Essa experiência foi marcada por diversos desafios e
                conquistas significativas
              </h2>
            </div>
          </div>
          <div className="col-start-3 row-start-2">
            <div>
              <img src={Developer} alt="developer" />
            </div>
          </div>
          <div className="col-start-2 row-start-3">
            <div>
              <img src={Testing} alt="testing" />
            </div>
          </div>
          <div className="col-start-3 row-start-3">
            <div>
              <h1 className="text-white">Linguagens e Frameworks</h1>
            </div>
            <div>
              <h2 className="text-white">Javascript e php</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 grid-rows-7 gap-4 ">
          <div className="col-start-2 text-white ">
            <h1 className="custom-titles">Yank! Solutions </h1>Desenvolvedor
            FullStack NodeJs
          </div>
          <div className="col-start-2 row-start-2">
            <div className="text-white">
              <h1 className="text-description">Linguagens e Frameworks</h1>
            </div>
            <div className="glass-paragraph">
              <h2 className="text-paragraph">
                <ul>
                  <li>Elaboração de protótipos e documentação</li>
                  <li>Controle de versionamento Git/Bitbucket</li>
                  <li>Contrução e Gerenciamento de ambiente com PM2 e Nginx</li>
                  <li>Orquestração com Docker e Kubernetes</li>
                  <li>Desenvolvimento de marketplace/e-commerce</li>
                  <li>Utilização de Vue 2 e 3, NodeJs, mongoDB e mongoose</li>
                  <li>Elaboração de ciclos de pagamentos com Stripe</li>
                  <li>
                    Elaboração de APIs com node v16, com integrações com
                    gateways de pagamento
                  </li>
                  <li>Integração de APIs</li>
                </ul>
              </h2>
            </div>
          </div>
          <div className="col-start-3 row-start-2">
            <div>
              <img src={Developer} alt="developer" />
            </div>
          </div>
          <div className="col-start-2 row-start-3">
            <div>
              <img src={Testing} alt="testing" />
            </div>
          </div>
          <div className="col-start-3 row-start-3">
            <div>
              <h1 className="text-white">Linguagens e Frameworks</h1>
            </div>
            <div>
              <h2 className="text-white">Javascript e php</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <div className="grid grid-cols-4 grid-rows-7 gap-4">
          <div className="col-start-2 text-white ">
            <h1 className="custom-titles">Vik Tech and Services</h1>
            Desenvolvedor Back end
          </div>
          <div className="col-start-2 row-start-2">
            <div className="text-white">
              <h1 className="text-description">Linguagens e Frameworks</h1>
            </div>
            <div className="glass-paragraph">
              <h2 className="text-paragraph">
                <ul>
                  <li>
                    Utilização de Nodejs, Typescript, Nestjs, ReactJs,
                    PostgreSql, PrismaORM e javascript.
                  </li>
                  <li>Desenvolvimento Front end e Back end.</li>
                  <li>Controle de versionamento via Git e Jira.</li>
                  <li>Orquestração via Docker, Kubernetes.</li>
                  <li>Utilização de AWS, EC2, Fargate</li>
                  <li>Elaboração de Microsserviços</li>
                  <li>
                    Elaboração de protótipos utilizando Figma e elaboração de UX
                    e UI.
                  </li>
                  <li>Integração entre back end e front end via API´s.</li>
                  <li>
                    Utilização dos conceitos de Clean code, SOLID, DDD, TDD e
                    Microsserviços.
                  </li>

                  <li>Analise e Revisão de código.</li>
                </ul>
              </h2>
            </div>
          </div>
          <div className="col-start-3 row-start-2">
            <div>
              <img src={Developer} alt="developer" />
            </div>
          </div>
          <div className="col-start-2 row-start-3">
            <div>
              <img src={Testing} alt="testing" />
            </div>
          </div>
          <div className="col-start-3 row-start-3">
            <div>
              <h1 className="text-white">Linguagens e Frameworks</h1>
            </div>
            <div>
              <h2 className="text-white">Javascript e php</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperiencesAbout
