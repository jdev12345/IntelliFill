import React from 'react'
import '../styles/NavBar.css'
// import dp from './dp.jpeg'

function NavBar() {
  return (
    <div className='NavBar'>
        <div className='NavBar_icon NavBar_ele'><img className='NavBar_logo' src="/logo.png" alt="" srcset="" /></div>
        <div className='NavBar_link NavBar_ele NavBar_Home'>Home</div>
        <div className='NavBar_link NavBar_ele NavBar_Result'>Result</div>
        <div className='NavBar_link NavBar_ele NavBar_FAQ'>FAQ</div>
        <div className='NavBar_link NavBar_ele NavBar_AboutUs'>About Us</div>
        <div className='NavBar_link NavBar_ele NavBar_ContactUs'>Contact Us</div>
        <div className='NavBar_search NavBar_ele'>
          <input style={{backgroundImage: `url("/search.png")`}} className='NavBar_search_input' placeholder='Search Exams Here' type="search" name="" id="" />
          </div>
        <div className=' NavBar_ele'><img className='NavBar_notif' src="/notif.png" alt="" srcset="" /></div>
        <div className='NavBar_ele'><img className='NavBar_dp' src='./dp.jpeg' alt="" srcset="" /></div>
        <br />
    </div>
  )
}

export default NavBar