import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div>
            <h1>Header Page</h1>
            <nav>
              <ul>
                  <li> <Link to={'/'}>Home</Link> </li>
                  <li> <Link to={'/content'}>Content</Link></li>
                  <li> <Link to={'/contact'}>Contact</Link></li>
                  <li> <Link to={'/todolist'}>ToDo List</Link></li>
                  <li> <Link to={'/tabbing'}>Tabbing</Link> </li>
                  <li> <Link to={'/blogs'}>Blog</Link> </li>

              </ul>
            </nav>
    </div>
    
  )
}
