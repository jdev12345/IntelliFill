import React from 'react'
import '../styles/Card.css'

function Card({props}) {
    // console.log(props)
    // console.log(props.name)
  return (
    <div className='Card'>
        <div className='top'>
            <div className='icon'>
                <img src={props.icon} alt="" srcset="" />
            </div>
            <div className='detail'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='org'>
                    {props.org}
                </div>
            </div>
            <div className='save'>
                
            </div>
        </div>
        <div className='bottom'>
            <div className='Participants'>
                {`More than ${props.participants}`}
            </div>
            <div className='fees'>
                {`₹ ${props.fees}`}
            </div>
            <div className='tags'>
                {props.tag && props.tag.map((e)=>{
                    return <div className='tag'>e</div>
                })}
            </div>
            <div className='viewDetail'>
                <a href="http://" target="_blank" rel="noopener noreferrer"></a>
            </div>
        </div>
    </div>
  )
}

export default Card