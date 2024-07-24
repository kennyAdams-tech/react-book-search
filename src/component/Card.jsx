import React, { useState } from 'react'
import './card.css'


const Card = ({data}) => {
  return (
    <div className='card-wrapper'>

        {data.map((item)=> {
           return (
              <div key={item.id} className="card">
                    <a href={item.volumeInfo.previewLink} target="_blank" >
                      <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" />
                    </a>
                    <div className="bottom">
                        <h3 className="title">{item.volumeInfo.title}</h3>
                        <h2 className="author">{item.volumeInfo.authors}</h2>
                        <p className="amount"><b>$ </ b>{item.saleInfo.saleability}</p>
                    </div> 

                    <a href={item.volumeInfo.previewLink} target="_blank" ><button className='btn'>Visit</button>
                    </a>
              </div>
           )
        })}
    </div>
  )
}

export default Card

