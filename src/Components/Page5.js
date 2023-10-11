import React from 'react'

function Page5() {
  return (
    <div>
    <div className='page5'>
        <div className='body-5'>
            <h1 id='jess-0'>What our clients say</h1>
            <p id='jess-1'>"Before Dalton it was a process from the dark ages.We had people just doing expenses full time, it was miserable, there was no integration, everything was manual."</p>
            <p id='jess-2'>Michelle Obama</p>
            <p id='jess-3'>Founder DJK</p>
        </div>
        <div className='arrow-5'>
          <img  id='arrow1' src='arrow.jfif' alt='arrow'/>
          <img  id='arrow' src='arrow.jfif' alt='arrow'/>
          {/* <div className="square"></div> */}
          <div className='people'>
            <img  id='michelle' src='michelle.jfif' alt='people'/>
            </div>
          
        </div> 
        
    </div>
    <div className='brands'>
    <p>Trusted by:</p>
  <img  className='brandimages'src='intercom.png' alt='intercom'/>
  <img className='brandimages' src='snowflake.png' alt='snowflake'/>
  <img className='brandimages' src='figure.png' alt='figure'/>
  <img className='brandimages' src='spacex.png' alt='spacex'/>
  <img className='brandimages' src='databricks.png' alt='databricks'/>
  <img className='brandimages' src='outreach.png' alt='outreach'/>
  <img className='brandimages' src='vuori.png' alt='vuori'/>
  </div>
  </div>
  )
}

export default Page5