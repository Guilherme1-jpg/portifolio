import WorkIcon from '../../assets/images/workIcon.png'
import './style.css'

const WorkContent = () => {
  return (
    <>
      <div className="text-white custom-title flex items-center justify-center md:justify-start p-5">
        <h2>Experiências Profissionais</h2>
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-3 mr-20 ">
        <div className="col-start-2 text-left row-start-1 ">
          <div className="custom-bg"></div>
          <div class="max-w-lg">
            <div class="flex flex-col md:flex-row md:max-w-xl max-w-sm mx-auto  bg-custom border-purple-200 my-5 shadow-2xl rounded-lg overflow-hidden">
              <div class="p-4 md:w-1/2">
                <img src={WorkIcon} class="" alt="work" />
              </div>
              <div class="p-4 md:w-1/2">
                <div class="h-full flex flex-col justify-between">
                  <div class="text-indigo-800 text-white">
                    TechKnowLedge Treinamentos
                  </div>
                  <p class="my-2 text-indigo-600 text-sm text-justify text-white">
                    Desenvolvedor Fullstack, usando javascript.
                  </p>
                  <div>
                    <button class="mt-4 text-white  px-8 py-2  dark:bg-purple-dark rounded-lg hover:bg-indigo-900">
                      Veja mais...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-3 text-left row-start-1">
          <div class="max-w-lg">
            <div class="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-custom my-5 shadow-2xl rounded-lg overflow-hidden">
              <div class="p-4 md:w-1/2">
                <img src={WorkIcon} class="w-full" alt="work" />
              </div>
              <div class="p-4 md:w-1/2">
                <div class="h-full flex flex-col justify-between">
                  <div class="text-indigo-800  text-white">Yank! Solutions</div>
                  <p class="my-2 text-indigo-600 text-sm text-justify text-white">
                    Desenvolvedor Fullstack, usando javascript.
                  </p>
                  <div>
                    <button class="mt-4 text-white px-8 py-2 bg-indigo-600 hover:bg-indigo-900 rounded-lg dark:bg-purple-dark">
                      Veja mais...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-start-2 text-left row-start-2">
          <div class="max-w-lg">
            <div class="flex flex-col md:flex-row md:max-w-4xl max-w-sm mx-auto bg-custom rounded-lg overflow-hidden">
              <div class="p-4 md:w-1/2">
                <img src={WorkIcon} class="w-full" alt="work" />
              </div>
              <div class="p-4 md:w-1/2">
                <div class="h-full flex flex-col justify-between">
                  <div class="text-indigo-800 text-1xl text-white ">
                    VIK SERVICES OUTSOURCING
                  </div>
                  <p class="my-2 text-indigo-600 tracking-tight text-sm text-white text-justify">
                    Desenvolvedor Fullstack, usando javascript e frameworks
                  </p>
                  <div>
                    <button class="mt-4 text-white px-8 py-2 rounded-lg dark:bg-purple-dark hover:bg-indigo-900">
                      Veja mais...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkContent
