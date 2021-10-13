import React from 'react';
import { Link } from "react-router-dom";
import './Landing.css'

export default function Landing() {
  return (
    <div className='containerLanding'>
      <div className='divLanding'>
        <Link to='/home'>
          <button className='btnLanding' >WELCOME</button>
        </Link>
      </div>
    </div>
  )
};