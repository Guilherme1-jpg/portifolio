import logo from './logo.svg'
import './App.css'
import MenuHeader from './components/header'
import Banner from './components/banner'
import PresentationContent from './components/presentationContent'
import WorkContent from './components/worksContent'
import LanguagesContent from './components/languagesContent'
import ProjectContent from './components/projectContent'
import Footer from './components/footer'

function App() {
  return (
    <>
      <div className="App">
        <MenuHeader />
        <Banner />
        <PresentationContent />
        <WorkContent />
        <LanguagesContent />
        <ProjectContent />
        <Footer />

        {/* nao vai ficar assim  */}
      </div>
    </>
  )
}

export default App
