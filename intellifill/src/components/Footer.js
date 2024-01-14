import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer'>
        <div className='Socials'>
            <img className='logo' src="/logo.png" alt="" srcset="" />
            <div className='icons'>
                <img className='icon' src="/facebook.png" alt="" srcset="" />
                <img className='icon' src="/instagram.png" alt="" srcset="" />
                <img className='icon' src="/twitter.png" alt="" srcset="" />
                <img className='icon' src="/linkedin.png" alt="" srcset="" />
            </div>
        </div>
        <div className='Elements'>
            <div>
                <div>
                    About Us
                </div>
                <div>
                    Sitemap
                </div>
                <div>
                    Credits
                </div>
                <div>
                    Help Center
                </div>
                <div>
                    Community Guidlines
                </div>
            </div>
            <div>
                <div>
                    Accessibility
                </div>
                <div>
                    Mobile
                </div>
                <div>
                    Marketing
                </div>
                <div>
                    Advertismenet
                </div>
                <div>
                    Report Issue
                </div>
            </div>
            <div>
                <div>
                    Privacy Policy
                </div>
                <div>
                    Terms & condition
                </div>
                <div>
                    Trust & Safety
                </div>
            </div>
        </div>
        <div className='Downloads'>
            <img src="/pngegg.png" alt="" width={`100%`}/>
        </div>
    </div>
  )
}

export default Footer