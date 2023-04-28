import React, { useEffect, useState } from 'react'
import './Covid.css'

const Covid = () => {

    const [data,setData] = useState([])

    const getCovidData = async () => {
        try {
            const result = await fetch('https://data.covid19india.org/data.json')
            console.log(result)
            const Response = await result.json()
            console.log(Response.statewise[0])
            setData(Response.statewise[0])
        }
        catch(err) {
            console.log(err)
        }
        
    }

    useEffect(() => {
        getCovidData()
    },[])

    return (
        <>
        <section>
            <h1>🔴 LIVE</h1>
            <h2>COVID-19 CORONOVIRUS TRACKER</h2>
            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> OUR </span> COUNTRY </p>
                            <p className="card__total">INDIA</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> RECOVERED </p>
                            <p className="card__total">{data.recovered}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> CONFIRMED </p>
                            <p className="card__total">{data.confirmed}</p>
                        </div>
                    </div>
                </li>
            </ul>

            <ul>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> DEATHS </p>
                            <p className="card__total">{data.deaths}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> ACTIVE </p>
                            <p className="card__total">{data.active}</p>
                        </div>
                    </div>
                </li>
                <li className="card">
                    <div className="card__main">
                        <div className="card__inner">
                            <p className="card__name"><span> TOTAL </span> UPDATE </p>
                            <p className="card__total">{data.lastupdatedtime}</p>
                        </div>
                    </div>
                </li>
            </ul>
            </section>
        </>
    )
}

export default Covid
