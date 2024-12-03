import React from 'react'
import './about.css'

export default function Tools({item}) {
  return (
    <div className='img_container'>
    <img className='tool_img' src={item.img} alt="logo" />
    </div>
  )
}
