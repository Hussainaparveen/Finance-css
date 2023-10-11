import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page1() {
    const navigate=useNavigate();

    function Navigate(){
        navigate('/about');
    }
  return (
    <div className='page1'>
        <div className='header'>
            <div>
            <p className="com-name">dalto.</p>
            </div>
            <div className='head'>
                <p onClick={()=>{navigate('/')}}>Home </p>.
                <p onClick={Navigate}>About Us </p>.
                <p onClick={()=>{navigate('/company')}}>Company </p>.
                <p onClick={()=>{navigate('/contactus')}}>Contact Us </p>
            </div>
            <div >
                <div className='menu'></div>
                <div className='menu'></div>
            </div>
        </div>
        <div className='mainblock'>
            <button id='beta'>Announcing Our Beta Product</button>
            <div className='body'>A better way to manage your finance future with dalto</div>
            <div className='body1'>earn 5%* or more yield on your idle cash and simplify your finance in one unified platform</div>
        </div>
            <div >
                <button className='body-button' style={{backgroundColor:"yellow"}}>Get Started</button>
                <button className='body-button'>Try Demo</button>
            </div>
            <div className='footer'>
                <div className='footertext'><img id="thumbsup"src='thumbsup.png' alt='thumbs-up'/>  #1 most downloaded finance app</div>
                <div className='footertext'><img  id="apple" src='apple.png' alt='app-store'/>  app store rating 4.9/5.0</div>
            </div>

    </div>
  )
}

export default Page1