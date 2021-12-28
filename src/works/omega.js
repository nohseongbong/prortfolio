
import "./omega.css";
import { useState, useEffect, useRef } from "react";

import omega_box from '../assets/omega_box.png'
import arrow from '../assets/arrow.png'
import omega_img2 from '../assets/omega_img2.png'
import omega_img3 from '../assets/omega_img3.png'

import omega_mobile1 from '../assets/omega_mobile1.png'
import omega_mobile2 from '../assets/omega_mobile2.png'
import omega_mobile3 from '../assets/omega_mobile3.png'
import omega_mobile4 from '../assets/omega_mobile4.png'
import omega_mobile5 from '../assets/omega_mobile5.png'
import omega_mobile6 from '../assets/omega_mobile6.png'
import omega_mobile7 from '../assets/omega_mobile7.png'
import omega_mobile8 from '../assets/omega_mobile8.png'



const Omega = ({ page,cursorPointer }) => {
    console.log(page, '오메가')
    return (
        <div className={page == 'OMEGA' ? "omega omegaOn" : "omega"}>
            <div className="omega_content">
                <div className='omega_banner' >
                    <div className="content2 pointer" style={{ backgroundImage: `url(${omega_box})` }} ></div>
                    <div className="btn2 pointer" >
                        <img src={arrow} />
                    </div>
                </div>

                <section className="omega_box1">
                    <div>
                        <div className="number">
                            01
                        </div>
                        <ul className="project_about">
                            <li><h3>TYPE</h3><span>web publishing & design</span></li>
                            <li><h3>YEAR</h3><span>2020</span></li>
                            <li><h3>LANGUAGE</h3><span>html5 & css3 & jquery</span></li>
                            <li><h3>PROJECT</h3><span>OMEGA web renewal</span></li>
                            <li><h3>Contribution</h3><span>100%</span></li>
                        </ul>
                    </div>
                </section>

                <section className="omega_box2">

                </section>
                <section className="omega_box3">
                    <img src={omega_img2} />
                    <img src={omega_img3} />
                </section>


                <section className="omega_box4">
                    <div>
                        <div>
                            <img src={omega_mobile1} />
                        </div>
                        <div>
                            <img src={omega_mobile2} />
                        </div>
                        <div>
                            <img src={omega_mobile3} />
                        </div>
                        <div>
                            <img src={omega_mobile4} />
                        </div>
                        <div>
                            <img src={omega_mobile5} />
                        </div>
                        <div>
                            <img src={omega_mobile6} />
                        </div>
                        <div>
                            <img src={omega_mobile7} />
                        </div>
                        <div>
                            <img src={omega_mobile8} />
                        </div>
                    </div>


                </section>
            </div>
        </div>

    )
}

export default Omega;