import React from 'react'

export default function UiBtn(props) {
  return (
    <div>
       <button>
    {props.name}
    <div id="clip">
        <div id="leftTop" class="corner"></div>
        <div id="rightBottom" class="corner"></div>
        <div id="rightTop" class="corner"></div>
        <div id="leftBottom" class="corner"></div>
    </div>
    <span id="rightArrow" class="arrow"></span>
    <span id="leftArrow" class="arrow"></span>
          </button>
    </div>
  )
}
