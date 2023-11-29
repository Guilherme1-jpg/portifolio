import './style.css'

const PresentationContent = () => {
  return (
    <>
      <div class="grid-cols-4 grid-rows-3 gap-3">
        {/* <div class="row-span-3 rounded p-5"></div> */}
        <div class="col-span-2 row-span-2 rounded p-5 ">
          <h1 className="text-white custom-text">
            Sou Desenvolvedor Fullstack. |
          </h1>
        </div>
        <div class="rounded p-5">
          <p className="text-white custom-text-paragraph ">
            Olá! Sou um desenvolvedor Full Stack com mais de 3 anos de
            experiência, especializado em criar soluções digitais inovadoras.
            <br /> Ao longo da minha carreira, participei ativamente em equipes
            multidisciplinares, entregando projetos que superaram expectativas.
            <br />
            Minha paixão pela tecnologia e dedicação em acompanhar as últimas
            tendências garantem que eu esteja sempre pronto
            <br /> para enfrentar novos desafios e contribuir para o sucesso dos
            projetos em que estou envolvido.
          </p>
        </div>
        {/* <div class="row-start-3 col-start-2 col-span-3 bg-pink-100 rounded p-5"></div> */}
      </div>
    </>
  )
}

export default PresentationContent
