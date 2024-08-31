import React from 'react'
import Header from '../Component/header'
import { useLocation } from 'react-router-dom'
import { blogs } from './blogsData';

export default function BlogsDataDetails() {
  let locationFind = useLocation();
  let currentlocation = locationFind.pathname.split('/')[2];
  let filterLocation = blogs.filter((v)=>v.id==currentlocation)[0];
  console.log(filterLocation);
  return (
    <div>
        <Header/>
        <h1>BlogsDataDetails</h1>
        <hr />
        <h1>{filterLocation.title}</h1>
        <p>{filterLocation.userId}</p>
        <p>{filterLocation.body}</p>

    </div>
  )
}
