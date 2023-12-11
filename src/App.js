import logo from './logo.svg'
import './App.css'
import MenuHeader from './components/header'
import Banner from './components/banner'
import PresentationContent from './components/presentationContent'
import WorkContent from './components/worksContent'
import LanguagesContent from './components/languagesContent'

function App() {
  return (
    <>
      <div className="App">
        <MenuHeader />
        <Banner />
        <PresentationContent />
        <WorkContent />
        <LanguagesContent />

        {/* nao vai ficar assim  */}
      </div>
    </>
  )
}

export default App
