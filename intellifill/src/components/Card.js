import React from 'react'
import '../styles/Card.css'
import { Link } from "react-router-dom";

function Card({props}) {
  return (
    <div className='Card'>
        <div className='top'>
            <div className='icon' >
                <img width={`100%`} src={props.icon} alt="" srcset="" />
            </div>
            <div className='detail'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='org text2'>
                    {props.org}
                </div>
            </div>
            <div className='save'>
                <img src="/bookmark.png" alt="" />
            </div>
        </div>
        <div className='bottom'>
            <div className='Participants'>
                <img src='/crowd.png' width={`30px`} style={{marginRight:`10px`}}/>
                <div>
                  {`More than ${props.participants}`}
                </div>
            </div>
            <div className='fees'>
                <img src='/wallet.png' width={`30px`} style={{marginRight:`10px`}}/>
                <div>{`₹ ${props.fees}`}</div>
            </div>
            <div className='tags'>
                {props.tags && props.tags.map((e)=>{
                    return <div className='tag'>{e}</div>
                })}
            </div>
            <div className='viewDetail'>
                <Link to={`/detail/${props.id}`}>View Details  <div className='Arrow'>&gt;</div></Link>
            </div>
        </div>
    </div>
  )
}

export default Card