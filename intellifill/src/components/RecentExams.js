import React from 'react'
import data from '../data/Recommeded.json'
import { useState, useEffect } from 'react';
import Card from '../components/Card';

function RecentExams() {
  const [show,SetShow] = useState(false)
  const [list,setList] = useState([])
  const [tags,setTags] = useState([]);
  const [active,setActive] = useState(0);
  useEffect(()=>{
      setList(data?.cards)
      var temp=[]
      data?.cards?.map((prop)=>{
          temp.push(...prop.tags)
      })
      setTags(["All",...new Set(temp)])
  },[])

  const filter = idx => {
      setActive(idx)
  }
  useEffect(()=>{
      if(active===0){
          setList(data?.cards)
          return ;
      }
      const temp = []
      data?.cards?.map((prop)=>{
          prop?.tags?.map((tag)=>{
              if(tag==tags[active])temp.push(prop)
          })
      })
      setList(temp)
  },[active])

  return (
    <div className='Recommended_Exams'>
    <div className='PlaceHolder'>
      <div>Recent Exams</div>
      <div className='SeeAll' onClick={()=>{SetShow(!show)}}>{!show?'See All':'Close All'}</div>
    </div>
    <div className='tag_list'>
        {tags.map((e,idx)=>{
            return <div className={active!=idx?'tag':'tag active'} onClick={()=>filter(idx)}>{e}</div>
        })}
    </div>
    <div className={show?'Cards ShowAll':'Cards'}>
            {list?.map((card)=>{
                return <Card props={card}/>
            })}
        </div>
  </div>
  )
}

export default RecentExams