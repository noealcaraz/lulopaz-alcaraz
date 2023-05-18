import React from 'react'
import NavBar from './components/NavBar'
import ListContainer from './components/ListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const App = () => {
  return (
    <div className='black'>
    <NavBar />
    <ListContainer greeting="BIENVENIDOS A NUESTRA WEB!"/>
    </div>
  )
}
 
export default App;
