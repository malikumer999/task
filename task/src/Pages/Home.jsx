import React from 'react'
import Head from '../Components/Home/Head'
import Navbar from '../Components/Common/Navbar'
import About from '../Components/Home/About'
import Ourwork from '../Components/Home/Ourwork'
import Ourservice from '../Components/Home/Ourservice'
import CreateTogether from '../Components/Home/CreateTogether'
import Footer from '../Components/Home/Footer'

function Home() {
  return (
    <div className='body'>
        <Navbar/>
        <Head/>
        <About/>
        <Ourwork/>
        <Ourservice/>
        <CreateTogether/>
        <Footer/>
    </div>
  )
}

export default Home