import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container marginTop'>
            <h1>Home Page</h1>
            <Link to='/form' ><button className='link-to-form'>Form</button></Link>
        </div>
    )
}

export default Home
