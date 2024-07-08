import React from 'react'
import "./App.css"
import Main_section from './pages/Main_section'
import Section_2 from './pages/Section_2'
import 'bootstrap/dist/css/bootstrap.min.css';
import Section_3 from './pages/Section_3';
import Section_4 from './pages/Section_4';
import Section_5 from './pages/Section_5';
import Section_6 from './pages/Section_6';
import Section_7 from './pages/Section_7';
import Section8 from './pages/Section8';
import Section_9 from './pages/Section_9';
import Section_10 from './pages/Section_10';
import Section_11 from './pages/Section_11';
import Footer from './pages/Footer';
import "./responsiveness.css"
const App = () => {
  return (
    <div className='gutter-0'>
     
< Main_section/>
<Section_2/>
<Section_3/>
<Section_4/>
<Section_5/>
<Section_6/>
<Section_7/>
<Section8/>
<Section_9/>
<Section_10/>
<Section_11/>
<Footer/>

    </div>
  )
}

export default App
