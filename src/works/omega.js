
import "./omega.css";
import { useState, useEffect, useRef } from "react";

import omega_box from '../assets/omega_box.png'
import arrow from '../assets/arrow.png'

const Omega = ({page}) => {
    console.log(page,'오메가')
    return(
        <div className={page == 'OMEGA' ? "omega omegaOn" : "omega"}>
            <div className="omega_content">
                <div className='omega_banner' >
                    <div className="content2 pointer"  style={{ backgroundImage : `url(${omega_box})` }} ></div>
                    <div className="btn2 pointer" >
                        <img src={arrow} />
                    </div>
                </div>
                <div>
                    시작asddddddddddddddddddddddddddddddddddddddddddddd
                </div>
                <div>
                    끝
                </div>
            </div>
        </div>

    )
}

export default Omega;