import React from 'react'
import { useState } from 'react';

function Page6() {
    const [visible, setVisible] =useState(false);
  return (
    <div className='page6'>
        <div className='head-6'>
        <h1 id="head6">Your burning questions, answered</h1>
        <p>If you have a question that isn't answered in our FAQs then please get in touch and let us know.</p>
        </div>
        <div className='FAQ'>
            <h3> Why should i Care About Financial Planning? </h3> 
            {/* <button onClick={() => setVisible(!visible)}>{visible ? '-' : '+'}</button>
      {visible && <div>My element</div>} */}
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
            {/* <div className='plus'>+</div> */}
       </div>       
        <div className='FAQ'>
            <h3> how do I create a Budget? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
        </div>
        <div className='FAQ'>
            <h3> What are the Different Types of Investments? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
            
        </div>
        <div className='FAQ'>
            <h3> How can i Improve My Credit Score? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
        </div>
        <div className='FAQ'>
            <h3> What is debt Management? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
        </div>
        <div className='FAQ'>
            <h3> How Can I start saving for Retirement? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
        </div>
        <div className='FAQ'>
            <h3> What are the Tax Implications of different Financial Choices? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
        </div>
        <div className='FAQ'>
            <h3> What is the importance of emergency funds? </h3>
            <p>Financial Planning is essential because it helps you achieve your financial goals and secure your financial future</p>
        </div>
        <div>
                <button className='body-button' style={{backgroundColor:"yellow"}}>See All FAQs</button>
                <button className='body-button' style={{backgroundColor:'white',border:'1px solid gray'}}>Get in touch</button>
            </div>
    </div>
  )
}

export default Page6