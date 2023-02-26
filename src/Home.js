import React from 'react'
import { Link } from 'react-router-dom';
import Card from './component';
import './home.css';
function Home() {
  return (
    <div className='row justify-content-around my-5'>
        <div className='col-3 py-5  boder-b-2 '>
            <h1 className='text-center'><Link to="/todo">Todolist</Link></h1>
        </div>
        <div className='col-3 py-5  boder-b-2  ' >
        <h1 className='text-center'><Link to="/login">LoginPage</Link></h1>
        </div>
        <div className='col-3 py-5  boder-b-2 '>
        <h1 className='text-center'><Link to="/profile">Profile</Link></h1>
        </div>
        <Card to="/todo"color="text-primary">Componet</Card>
        <Card to="/XOgame" color="text-primary">XO Game</Card>
        <Card to="/portfolio" color="text-primary">Portfolio</Card>
    </div>
  )
}

export default Home;
