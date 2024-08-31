import React from 'react'
import Header from '../Component/header'
import { blogs } from '../Data/blogsData'
import { Link } from 'react-router-dom'

export default function BlogForDynamicRouter() {
    let MapsBlog = blogs.map((data,i)=>{
        return(
            <div className="blogiItems" key={i}>
                <h3>{data.title}</h3>
                <p>
                    {data.body}
                </p>
                <button ><Link to={`/blogs/${data.id}`}>Read more</Link></button>
                
            </div>
        )
    })
  return (
    
    <div>
            <Header/>
            <h1>BlogForDynamicRouter</h1>
            <div className='container'>
                {MapsBlog}
                
            </div>
    </div>
  )
}
