import React from 'react'
import ReactDOM from 'react-dom'
// import { Hola } from 'hola'
import './index.css'
// import { Hello } from 'my-hello'
// import { Hola } from '@/hola'
import { Hello } from "@nx-wk/my-hello"
import { Truc } from "@nx-wk/my-lib"
// import App from './App'

// {/* <App /> */}
ReactDOM.render(
  <React.StrictMode>
        <Truc />
    <Hello />
    {/* <Hola /> */}
  </React.StrictMode>,
  document.getElementById('root')
)
