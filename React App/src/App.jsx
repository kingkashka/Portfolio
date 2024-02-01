import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Header from './Header'
import Card from './Card'
import Footer from './Footer'
import genesis from '/home/kashka/development/portfolio/React App/src/images/genesis.jpg'
import exodus from  '/home/kashka/development/portfolio/React App/src/images/exodus.jpg'
import leviticus from "/home/kashka/development/portfolio/React App/src/images/leviticus.jpg"
import numbers from "/home/kashka/development/portfolio/React App/src/images/numbers.jpg"
import deuteronomy from "/home/kashka/development/portfolio/React App/src/images/deuteronomy.jpg"

function App() {
  function run(){
    console.log("hello")
  }
  function hover(){
    console.log('');
  }
  return(
    
    <>
    <Header />
      <div>
              <Card 
              label={`ספר א`}
              image={genesis}
              title="Genesis"
              description="The Book of Genesis is the first book of the Hebrew Bible. Genesis is an account of the creation of the world, the early history of humanity, and the origins of the Jewish people."/>
              <Card 
              label={`ספר ב`}
              image={exodus}
              title="Exodus"
              description="Exodus, the liberation of the people of Israel from slavery in Egypt in the 13th century bce, under the leadership of Moses"/>
              <Card 
              label={`ספר ג`}
              image={leviticus}
              title="Leviticus"
              description="Leviticus is a book of laws regulating the offering of sacrifices, the duties of priests, the liturgical calendar, the sexual, dietary, and economic practices of the Israelites, and many other issues of ritual and moral holiness."/>
              <Card 
              label={`ספר ד`}
              image={numbers}
              title="Numbers"
              description="It chronicles the forty years that the Israelites spent crossing the wilderness, in their trek from the Exodus out of Egypt, to the Promised Land of Israel"/>
              <Card 
              label={`ספר ה`}
              image={deuteronomy}
              title="Deuteronomy"
              description="It begins with a recap of the Israelites escaping slavery in Egypt and continues with their journey to Mount Horeb/Sinai. In the book, Moses receives the Ten Commandments and other laws before he transitions power to Joshua and dies."/>
      </div>
    </>
    
  )
  
}

export default App

{/* <div
  onClick={e => console.log('onClick')}
  onMouseEnter={e => console.log('onMouseEnter')}
  onMouseOver={e => console.log('onMouseOver')}
  onMouseDown={e => console.log('onMouseDown')}
  onMouseUp={e => console.log('onMouseUp')}
  onMouseLeave={e => console.log('onMouseLeave')}
/> */}
