import Header from './components/Header';
import Body from './components/Body';
import Card from './components/Card';
import productData from './components/Products';
import Greeting from './components/userGreeting';
import './App.css'

function App() {
  const renderProducts = productData.map(product => <Card image = {product.image} title = {product.title} label = {product.label}/>)

  return (
    <>
    {/* <Greeting  isLoggedIn = {true} userName = "Muggsy"/> */}
    <Header />
    <Body />
    {renderProducts}
    </>
  )
}

export default App
