
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


import html from '../assets/tool/html.png'
import css from '../assets/tool/css.png'
import js from '../assets/tool/js.png'
import jquery from '../assets/tool/jquery.png'

import vsc from '../assets/tool/vsc.png'
import xd from '../assets/tool/xd.png'





const Omega = ({ page,cursorPointer }) => {


    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const scroll = (e)=>{
        setScrollY(e.target.scrollTop)
    }

    const omegaRef = useRef(null);
    function scrollTop() {
        omegaRef.current.scrollTop = 0;
    }

    useEffect(() => {
        return () => {
            scrollTop()
        }
    }, [page])
    return (
        <div onScroll={scroll} ref={omegaRef} className={page == 'OMEGA' ? "omega omegaOn" : "omega"}>
            <div className="omega_content">
                <div className='omega_banner' >
                    <div className="content2 pointer"></div>
                    <div className="btn2 pointer" onClick={()=>{scrollTop()}} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} style={ScrollY != 0 ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(135deg)'}} >
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
                            <li><h3>PROJECT</h3><span>OMEGA web renewal</span></li>
                            <li><h3>CONTRIBUTION</h3><span>100%</span></li>
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



                <section className="omega_method">
                    <div className="method_box">
                        <div className="language">
                            <h2>Language</h2>
                            <div className="img">
                                <div><img src={html} /></div>
                                <div><img src={css} /></div>
                                <div><img src={js} /></div>
                                <div><img src={jquery} /></div>
                            </div>
                        </div>
                        <div className="tool">
                            <h2>Tool</h2>
                            <div className="img">
                                <div><img src={vsc} /></div>
                                <div><img src={xd} /></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>

    )
}

export default Omega;