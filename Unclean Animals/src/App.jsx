import './App.css'
import Header from './components/Header'
import BirdHeader from './components/BirdHeader'
import Card from './components/Card'
import LilCard from './components/LilCard'
import Body from './components/Body'
import Footer from './components/Footer'
import flyerCardData from './components/flyerCardData'
import beastData from './components/beastCardData'

function App() {
  // const styles = {
  //   backgroundColor: Props.darkMode ?  "#222222" : "#cccccc"
  // }
  const renderFlyerCard = flyerCardData.map(animal => <LilCard image = {animal.image} title = {animal.title}/>)
  const renderBeastCard = beastData.map(animal => <Card image={animal.image} title={animal.title} description={animal.description}/> )
  return (
    <>
     <Header />
     <Body />
     {renderBeastCard}
     <BirdHeader />
     <div className='lilCardContainer'>
        {renderFlyerCard}
     </div>
    </>
  )
}

export default App
