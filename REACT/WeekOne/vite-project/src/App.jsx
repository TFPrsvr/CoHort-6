import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompOne from './CompOne'
import CompTwo from './CompTwo'
import Count from './Count'
import Child from './Child'
import Center from './Center'
import Header from './Header'
import Body from './Body'
import Footer from './Footer'

function App() {
let user = {
  username: "Tabitha",
  role: "student"
} 

  return (
    <>
<Child user={user}/>

 
    </>
  )
}

export default App
