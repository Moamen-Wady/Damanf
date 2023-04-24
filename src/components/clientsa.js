import React from 'react'
import './clientsa.css'
import "animate.css/animate.min.css";
import { AnimationOnScroll } from 'react-animation-on-scroll';


export default function Clientsa() {
    const trig = () => {
        window.scrollBy( 0, 1 );
    }
    const trigm = () => {
        window.scrollBy( 0, -1 );
    }
    return (
        <div>
            <div className='aclientscont '>
                <h1>بعض من عملاؤنا </h1>

                <div className=' clients '>
                    <div className="ccard">
                        <img src='c1.png' alt='' />
                    </div>
                    <div className="ccard">
                        <img src='c2.png' alt='' />
                    </div>
                    <div className="ccard">
                        <img src='c3.png' alt='' />
                    </div>
                    <div className="ccard">
                        <img src='c4.png' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}
