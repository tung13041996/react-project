import {React, useState} from 'react'
import './styles.scss'

export default function Accordion({Accordion, handleActive}) {

    const _handleActive = (index) => {
        handleActive(index)
    }

    
  return (
    <div className="accordion">
        <div className="accordion-list">
            {
                Accordion?.map((e,i) => 
                    <div className={`accordion-item ${e.isOpen ? 'active' : ''}`} onClick = {() => _handleActive(i)}>
                        <div className="accordion-title">{e.title}</div>
                        <div className="accordion-content">{e.content}</div>
                    </div>
                )
            }

        </div>
    </div>
  )
}
