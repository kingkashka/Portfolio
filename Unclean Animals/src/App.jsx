import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import pigs from '/home/kashka/development/portfolio/Unclean Animals/src/images/pigs.jpg'
import camel from '/home/kashka/development/portfolio/Unclean Animals/src/images/camel.jpg'
import zebra from '/home/kashka/development/portfolio/Unclean Animals/src/images/zebra.jpg'
import horse from '/home/kashka/development/portfolio/Unclean Animals/src/images/horse.jpg'
import marine from '/home/kashka/development/portfolio/Unclean Animals/src/images/Marine .jpg'
import eagle from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/eagle.jpg'
import vulture from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/vulture.jpg'
import buzzard from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/buzzard.jpg'
import falcon from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/falcon.jpg'
import kite from "/home/kashka/development/portfolio/Unclean Animals/src/images/small images/kite.jpg"
import raven from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/raven.jpeg'
import owl from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/owl.jpg'
import hawk from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/hawk.jpg'
import seagull from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/seagull.jpg'
import osprey5 from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/osprey5.jpg'
import nightOwl from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/nightOwl.jpg'
import lemur from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/lemur.jpg'
import cormorant from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/cormorant.jpg'
import barnOwl from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/barnOwl.jpg'
import pelican from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/pelican.jpg'
import crane from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/crane.jpg'
import stork from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/stork.jpg'
import heron from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/heron.jpg'
import lapwing from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/lapwing.jpg'
import bat from '/home/kashka/development/portfolio/Unclean Animals/src/images/small images/bat.jpg'
import Header from './components/Header'
import Card from './components/Card'
import LilCard from './components/LilCard'
import Body from './components/Body'
import Footer from './components/Footer'

function App() {

  return (
    <>
     <Header />
     <Body />
     <Card 
     image = {camel}
     title = {"הגמל - The camel"}
     description = {"GAMAL ( גמל ). This terrestrial animal is definitely the so-called camel but since the camel is not a ruminant and does not regurgitate its food the European Jewish and Christian bible translations which say mylath means “regurgitate” and that garah means “cud” are in error. The camel is a herbivore with two large, evenly sized toes. It has hooves that are the small nails at the tip of each toe, but it does not have a divided hoof or split hoof, which is a hoof split into two toes. Thus, it has the right diet but the wrong foot anatomy to be considered a clean food source."}
     />
     <Card 
     image = {zebra}
     title = {"השפן - The Zebra"}
     description = {"SHAPAN ( שפן ). This terrestrial animal is a herbivore with an undivided hoof and so must be a member of the so-called Equus genus. The European Jewish and Christian bible versions which say this animalis the “coney” or “rock-hyrax” are in error since neither animal has a hoof of any kind. These animals also do not regurgitate their food, which is a major red flag that the translation “cheweth the cud” was wrong from the very start even if this animal was a coney or rock-hyrax. The Ghabaray word shapan gives us the correct answer. It means “to hide, to cover,” and since we are dealing with a member of the Equus genus the only equine that fits this description is the zebra. The zebra's conspicuous stripes act as a cover (a defense mechanism) against insects that bite and suck bloodsuch as menacing horseflies and tsetse flies. These insects are less likely to land on black-and-white striped surfaces than uniformly colored ones."}
     /> 

     <Card 
     image = {horse}
     title = {"הארנבת - The Wild Horse"}
     description = {"ARAN-BATH ( ארנבת ). This terrestrial animal is a herbivore with an undivided hoof. Again, we are dealing with a member of the so-called Equus genus. Therefore, the European Jewish and Christian bible translations which say the aran-bath is the “hare” are in error since the hare does not have a hoof of any kind. The hare also does not regurgitate its food, which means even if hare was the correct animal mentioned in this verse the translation of mylath garah as “cheweth the cud” would still be inaccurate. Hence the theory that arnab, the common Arabic word for “hare,” is supposedly from the same root as the Ghabaray word aran-bath may be safely dismissed. The untamed wild horse asopposed to the domesticated horse is in view here. The word aran-bath combines two words. The word aran means “stridulous”. It is the scream or shrill creaking sound wild animals make, and also the sound heard from lofty trees with thick leaves when hit by strong winds. The word bath means “daughter”. Thus, aran-bath means “the scream of a daughter”. It is quite common to hear untamed horses scream in the wild, but it is very rare to hear a domesticated horse scream."}
     />
     <Card 
     image = {pigs} 
     title = {"החזיר - The Pig"}
     description = {`KHAZYR ( חזיר ). “And the KHAZAYR, for one dividing the hoof it is, and cleaving the cleft hoof, and just that foliage not willit chew, unclean it is to you all” (Thorah 3.11:7). The so-called pig, swine. Although the pigs have split hooves and functional dewclaws,
      and although they will forage for leaves, grass, roots, fruits and flowers like herbivores they areomnivorous scavengers and will eat plants, animals, and carrion. Thus, the pig has the right foot anatomy to be considered a clean food source but because of its diet and how it does not subsist onfoliage alone it is unclean among the hoofed terrestrial animals.`}
     />
     <Card 
     image = {marine}
     title = {"Everything in the waters"}
     description = {"This will you all eat from all which are in the waters: everything which to it has protruding fins and scales in the waters, in the seas, and in the rivers, them will you all eat. And everything which does not have to it protruding fins and scales in the seas, and in the rivers, from all that swarm in the waters,and from every living creature which is in the waters, an abomination they are to you all. Even an abomination will they be to you all, from their flesh not will you all eat, and their dead corpses will you all be repulsed. All which does not have to it protruding spines and scales in the waters, an abomination it is to you all (Thorah 3.11:9-12)."}
     />
     <LilCard 
     image = {eagle} 
     title = {'NASHAR ( נשר ). The so-called eagle.'}
     />
     <LilCard 
     image = {vulture} 
     title = {'PARAS ( פרס ). The so-called vulture.'}
     />
     <LilCard 
     image = {buzzard} 
     title = {'GHAZANAYH ( עזניה ). The so-called buzzard.'}
     />
     <LilCard 
     image = {falcon} 
     title = {"DA'AH ( דאה ). The so-called falcon."}
     />
     <LilCard 
     image = {kite} 
     title = {'AYH ( איה ). The so-called kite.'}
     />
     <LilCard 
     image = {raven} 
     title = {'GHARAB ( ערב ). The so-called raven, crow.'}
     />
     <LilCard 
     image = {owl} 
     title = {'BATH HA-YAINAH ( בת היענה ). The so-called true-owl.'}
     />
     <LilCard 
     image = {hawk} 
     title = {'THAKHAMAS ( תחמס ). The so-called hawk.'}
     />
     <LilCard 
     image = {seagull} 
     title = {'SHAKHAP ( שחף ). The so-called seagull.'}
     />
     <LilCard 
     image = {osprey5} 
     title = {'NATS ( נץ ). The so-called osprey.'}
     />
     <LilCard 
     image = {nightOwl} 
     title = {'CHOS ( כוס ). The so-called night owl.'}
     />
     <LilCard 
     image = {cormorant} 
     title = {'SHALACH ( שלך ). The so-called cormorant.'}
     />
     <LilCard 
     image = {barnOwl} 
     title = {'YANASHOP ( ינשוף ). The so-called barn-owl.'}
     />
     <LilCard 
     image = {lemur} 
     title = {'THANASH-MATH ( תנשמת ). The so-called flying colugos.'}
     />
     <LilCard 
     image = {pelican} 
     title = {`KA'ATH ( קאת ). The so-called pelican.`}
     />
     <LilCard 
     image = {crane} 
     title = {'RAKHAM ( רחם ). The so-called crane.'}
     />
     <LilCard 
     image = {stork} 
     title = {`KHASAYDAH ( חסידה ). The so-called stork`}
     />
     <LilCard 
     image = {heron} 
     title = {'ANAPAH ( אנפה ). The so-called heron.'}
     />
     <LilCard 
     image = {lapwing} 
     title = {'DOCH-YAPATH ( דוכיפת ). The so-called hoopoe.'}
     />
     <LilCard 
     image = {bat} 
     title = {'GHATLAP ( עטלף ). The so-called bat.'}
     />


     
     {/* <Footer/> */}
    </>
  )
}

export default App
