import React, { useState } from 'react'
import './Loginform.css'
import { LuEye } from "react-icons/lu";
import { LuEyeClosed } from "react-icons/lu";



function Loginform() {


let [passtype,setpasstype]=useState("true")

  return (



    <section id='loginform'>
        <div className="container">
            <div className="loginformwrapper">
                <h2>Log in</h2>
                <div className="inputwrapper">
                <input className='email' type="email" placeholder='Enter youer email' />
                <input className="password" type={`${passtype?"password":"text"}` }placeholder='Enter your password' />
                <button className='icon'onClick={()=>setpasstype(!passtype)}>
                  {passtype?"<LuEye/>":"<LuEyeClosed />"}
                  </button>
                <button className='logbtn'>Log in</button>
                </div>


            </div>
        </div>
    </section>
  )
}

export default Loginform