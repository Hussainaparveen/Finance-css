import React from 'react'

function Page3() {
  return (
    <div className='page3'>
        <div id='body3'>
            <img id='card'src='card.png' alt='card'/>
        </div>
        <div className='body3'>
          {/* <img src='one.png' alt='one'/> */}
          {/* <p className='number-back'></p> */}
          <p className='number'>1</p>
            <h2>Control your spend on single platform </h2>
            <p> Seamlessly integrate Dalton with your accounting systems and consolidate your finance stack.For a better future.</p>
            <button className='arrow'>See details <img  id='arrow' src='arrow.jfif' alt='arrow'/> </button>
        </div>
    </div>
  )
}

export default Page3