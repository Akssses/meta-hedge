import React, { useState } from 'react'
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Section1 } from './components/partials/Section1/Section1';
import { Section10 } from './components/partials/Section10/Section10';
import { Section11 } from './components/partials/Section11/Section11';
import { Section2 } from './components/partials/Section2/Section2';
import { Section3 } from './components/partials/Section3/Section3';
import { Section4 } from './components/partials/Section4/Section4';
import { Section5 } from './components/partials/Section5/Section5';
import { Section6 } from './components/partials/Section6/Section6';
import { Section7 } from './components/partials/Section7/Section7';
import { Section8 } from './components/partials/Section8/Section8';
import { Section9 } from './components/partials/Section9/Section9';


const App = () => {
  return (
    <main>
        <div className='container'>
          <div className='dot_grid'/>
          <Section1/>
          <Section2/>
        </div>
        <div className='container'>
          <Section3/>
          <Section4/>
          <Section5/>
          <Section6/>
          <Section7/>
          <Section8/>
          <Section9/>
          <Section10/>
          <Section11/>
        </div>
    </main>
  )
}

export default App
