
import React, {
  useState
} from 'react'

import './App.css'
import Sobre from './section/about'

import Home from './section/home'

export default function App(){

  return(
    <div className='App'>
      <Home />
      <Sobre />
          
    </div>
  )
}