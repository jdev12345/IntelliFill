import React from 'react'
import NavBar from '../components/NavBar'
import SimpleImageSlider from "react-simple-image-slider";
import '../styles/Home.css'
import Card from '../components/Card';
import data from '../data/Recommeded.json'

const images = [
  { url: "/SlideShow/1.png" },
  { url: "/SlideShow/2.png" },
  { url: "/SlideShow/3.png" },
];


function Home() {
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
          <div className='SeeAll'>See All</div>
        </div>
        <div className='Cards'>
            {data?.cards?.map((card)=>{
                return <Card props={card}/>
            })}
        </div>
        </div>
    </div>
  )
}

export default Home