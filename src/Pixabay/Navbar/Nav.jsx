import React from 'react'
import './index.css'
import logo1 from './imgs/download.svg'
import logo2 from './imgs/download-1.svg'

export default function Nav({setting,refs}) {
  return ( 
    <nav className='Navbar'>
      <section className='Navbar__act-nav'> 
        <div className='Navbar-cont'>
        <div className='Navbar-logo'>
          <img src={logo1} alt='' width="150px" height="45px"></img>
          <img src={logo2} alt='' width="50px" height="45px"></img>
        </div>
        <div className='Navbar-ele'>
          <a href='#'>Explore <i className="fa-solid fa-angle-down"></i></a>
          <a href='#'>Log in</a>
          <a href='#'>join</a>
          <a href='#'><i className="fa-solid fa-upload"></i> Upload</a>
          <a href='#'><i className="fa-solid fa-bars"></i></a>
        </div>
        </div>
        <section className='Navbar__main-ele'>
          <h1>Stunning royalty-free images & royalty-free stock</h1>
          <p>Over 4.2 million+ high quality stock images, videos and music shared by our talented community.</p>
          <input ref={refs} type='text' placeholder='Search for all images on Pixabay' onChange={(e) => setting(e.target.value)}></input>
        </section>
      </section>
    </nav>
  )
}
