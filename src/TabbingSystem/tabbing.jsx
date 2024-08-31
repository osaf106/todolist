import React from 'react'
import { tabs } from './TabbingData'
import { useState } from 'react'
import '../TabbingSystem/tabbingCss.css'
import Header from '../Component/header'
export default function Tabbing() {
   
    let [Activetabsdata,setActiveTabsData] = useState(0)
    let [activeContent,setActiveContent] = useState(tabs[0])
    let dataChange =(i)=>{
            setActiveContent(tabs[i])
            setActiveTabsData(i)
    }

  return (
    <div className='tabOuter'>
        <Header/>
        <h1 style={{textAlign:'left'}}>Tabbing</h1> 
            <ul>
                {
                    tabs.map((data,i)=>{
                        return(
                            <li >
                                <button className={Activetabsdata==i?"ActiveTab":""} onClick={()=>dataChange(i)}>{data.Title}</button>
                             </li>
                        )
                    })
                }
                
            </ul>
            <p>
                {activeContent.Discription}
            </p>
    </div>
  )
}
