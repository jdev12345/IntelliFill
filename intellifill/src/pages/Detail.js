import { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import data from '../data/Details_data.json'
import data2 from '../data/Recommeded.json'
import '../styles/Detail.css'
import { Link } from 'react-router-dom';

const Detail = () => {
    let { id } = useParams()
    const [idx,setIdx] = useState(-1)
    if(idx!=id){
        setIdx(id)
    }
    let histroy = useNavigate()
    const [details, setDetail] = useState({})
    useEffect(() => {
        data?.cards?.map(obj => {
            if (obj.id == idx) {
                setDetail(obj)
            }
        })
    }, [idx])
    const posted = () => {
        var date1, date2;
        date1 = new Date(details.posted)
        date2 = new Date()
        var time_difference = date2.getTime() - date1.getTime();
        return Math.floor(time_difference / (1000 * 60 * 60 * 24));
    }
    return (
        <div className="Detail">
            <div className="back" onClick={() => { histroy(-1) }}>
                &larr; Back
            </div>
            <div className="detail2">
                <div className="info">
                    <div className="Detail_card">
                        <div className='top'>
                            <img src={details.icon} alt="" className='detail_icon' />
                            <div className='heading'>
                                <div className='name'>
                                    {details.name}
                                </div>
                                <div className='org text2'>
                                    {details.org}
                                </div>
                            </div>
                            <div className='save_share'>
                                <img src="/bookmark.png" alt="" />
                                <img src="/share.png" alt="" />
                            </div>
                        </div>
                        <div className='mid'>
                            <div className='date'>
                                <img src="/calender.png" alt="" />
                                <div className='date_data'>
                                    Exam Date: {details.date}
                                </div>
                            </div>
                            <div className='date'>
                                <img src="/crowd2.png" alt="" />
                                <div className='date_data'>
                                    Applicants: {details.participants}+
                                </div>
                            </div>
                        </div>
                        <div className='bottom'>
                            <div>
                                Posted {posted()} days ago, Ends on {details.ends}
                            </div>
                            <div className='apply'>
                                Apply Now
                            </div>
                        </div>
                    </div>
                    <div className="data">
                        <div className='desc'>
                            <div className='headings'>
                                Exam Description
                            </div>
                            <div className='dat'>
                                {details?.desc?.map(e => {
                                    return <li>{e}</li>
                                })}
                            </div>
                        </div>
                        <div className='elgi'>
                            <div className='headings'>
                                Eligibility
                            </div>
                            <div className='dat'>
                                <li>Age Limit - {details.AgeLimit}</li>
                                <li>Qualifying Exam - {details.Qualification}</li>
                                <li>Percentage - {details.Percentage}</li>
                                <li>Year of Passing - {details.YearOfPassing}</li>
                                <li>Number of Attempts - {details.Attempts}</li>
                            </div>
                        </div>
                        <div className='impdet'>
                            <div className='headings'>
                                Important Details
                            </div>
                            <div className='dat'>
                                {details?.Details?.map(e => {
                                    return <li>{e}</li>
                                })}
                            </div>
                        </div>
                        <div className='socials'>
                            <img src="/facebook2.png" alt="" />
                            <img src="/twitter2.png" alt="" />
                            <img src="/linkedin2.png" alt="" />
                            <div className='report'>Report this job</div>
                        </div>
                    </div>
                </div>
                <div className="interested">
                    <div className='heading'>
                        Exams you might be interested in
                    </div>
                    {data2?.cards?.map((card) => {
                        return (<div>
                            <div className='top'>
                                <div className='icon' >
                                    <img width={`50px`} src={card.icon} alt="" srcset="" />
                                </div>
                                <div className='detail'>
                                    <div className='name'>
                                        {card.name}
                                    </div>
                                    <div className='org text2'>
                                        {card.org}
                                    </div>
                                </div>
                            </div>
                            <div className='bottom'>
                                <div className='Participants'>
                                    <img src='/crowd.png' width={`30px`} style={{ marginRight: `10px` }} />
                                    <div>
                                        {`More than ${card.participants}`}
                                    </div>
                                </div>
                                <div className='fees'>
                                    <img src='/wallet.png' width={`30px`} style={{ marginRight: `10px` }} />
                                    <div>{`₹ ${card.fees}`}</div>
                                    <div className='viewDetail'>
                                        <Link to={`/detail/${card.id}`}>View Details  <div className='Arrow'>&gt;</div></Link>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                    <div className='viewAll'>
                        <div>View All</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail