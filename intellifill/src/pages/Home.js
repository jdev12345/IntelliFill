import React from 'react'
import NavBar from '../components/NavBar'
import SimpleImageSlider from "react-simple-image-slider";
import '../styles/Home.css'
import Card from '../components/Card';
import Footer from '../components/Footer';
import data from '../data/Recommeded.json'
import { useState } from 'react';
import RecentExams from '../components/RecentExams';

const images = [
  { url: "/SlideShow/1.png" },
  { url: "/SlideShow/2.png" },
  { url: "/SlideShow/3.png" },
];


function Home() {
    const [show,SetShow] = useState(false)
    return (
    <div className='Home'>
        <NavBar/>
        <SimpleImageSlider
        style={{borderRadius:`20px`,marginLeft:'10vw',marginTop:`5vh`}}
        width={`80vw`}
        height={200}
        images={images}
        showBullets={true}
        showNavs={true}
      />
      <div className='Recommended_Exams'>
        <div className='PlaceHolder'>
          <div>Recommended Exams</div>
          <div className='SeeAll' onClick={()=>{SetShow(!show)}}>{!show?'See All':'Close'}</div>
        </div>
        <div className={show?'Cards ShowAll':'Cards'}>
            {data?.cards?.map((card)=>{
                return <Card props={card}/>
            })}
        </div>
      </div>
        <RecentExams/>
        <Footer/>
    </div>
  )
}

export default Home