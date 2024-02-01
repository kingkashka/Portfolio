import React from 'react'
import './App.css'
import Header from './components/Header'
import BeastHeader from './components/BeastHeader'
import FlyerHeader from './components/BirdHeader'
import CreeperHeader from './components/CreeperHeader'
import FifthAnimals from './components/5thAnimals'
// import CleanFishHeader from './components/CleanFish'
import Card from './components/Card'
import LilCard from './components/LilCard'
import Body from './components/Body'
import Footer from './components/Footer'
import beastData from './components/beastCardData'
// import cleanFishData from './components/cleanFishData'
import flyerCardData from './components/flyerCardData'
import creeperData from './components/creepersCardData'
import creeperOnFoursData from './components/creepersOnEarth'

function App() {
  const renderFlyerCard = flyerCardData.map(animal => <LilCard image = {animal.image} title = {animal.title} label = {animal.label} transliteration = {animal.transliteration}/>)
  const renderBeastCard = beastData.map(animal => <Card image={animal.image} title={animal.title} description={animal.description} label={animal.label}/> )
  const renderCreeperCard = creeperData.map(animal => <LilCard image = {animal.image} title = {animal.title} label = {animal.label} transliteration = {animal.transliteration}/>)
  const renderCreeperOnFourCard = creeperOnFoursData.map(animal => < LilCard image = {animal.image} title = {animal.title} label = {animal.label} transliteration = {animal.transliteration}/>)
  
  return (
    <>
         <Header />
         <Body />
         <BeastHeader />
         {renderBeastCard}
         <FlyerHeader />
      <div className='lilCardContainer'>
         {renderFlyerCard }
      </div>
         <CreeperHeader />
      <div className='creeperCardContainer'>
         {renderCreeperCard}
      </div>
         <FifthAnimals />
      <div className='lilCardContainer'>
         {renderCreeperOnFourCard}
      </div>
    </>
  )
}

export default App
