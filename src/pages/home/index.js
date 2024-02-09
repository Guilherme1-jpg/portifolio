import MenuHeader from '../../components/header'
import Banner from '../../components/banner'
import PresentationContent from '../../components/presentationContent'
import WorkContent from '../../components/worksContent'
import LanguagesContent from '../../components/languagesContent'
import ProjectContent from '../../components/projectContent'
import Footer from '../../components/footer'
import VLibras from '@djpfs/react-vlibras'


const Home = () => {
  return (
    <>
      <MenuHeader />
      <Banner />
      <PresentationContent />
      <WorkContent />
      <VLibras/>
      <LanguagesContent />
      <ProjectContent />
      <Footer />
    </>
  )
}

export default Home
