import React, { useState } from 'react'
import axios from 'axios'
function News() {
    const [news, setNews] = useState([])

    const clickhere = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=27789f9042e84aa19f4a8b1cafbfbdc9')
            .then((Response) => {
                console.log(Response);
                setNews(Response.data.articles)
            })

    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <button className='btn btn-primary' onClick={clickhere}>click here</button>
                    </div>
                </div>
            </div>


            <div className='container'>
                <div className='row'>
                    {
                        news.map((value) => {
                            return (
                                <div className='col-4'>
                                    <div className="card mt-4" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={value.urlToImage} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{value.title}</h5>
                                            <p className="card-text">{value.description}</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            )


                        })
                    }

                </div>

            </div>

        </>
    )
}

export default News