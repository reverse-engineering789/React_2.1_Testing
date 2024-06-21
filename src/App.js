import Biography from './components/Biography';
import Addpica from './addpic/Addpica';
import Testtt from './components/Testtt';
import React from 'react'
import Achivements from './components/Achivements';
import './App.css';

const App = () => {
  return (
  <div>
    <div className='App'> 
      <Biography />
      <Testtt/>
      <Addpica />
      <Achivements />
    </div>
  </div>
  )
}

export default App
