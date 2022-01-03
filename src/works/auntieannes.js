
import "./auntieannes.css";
import { useState, useEffect, useRef } from "react";

import auntie_box from '../assets/auntie_box.png'
import arrow from '../assets/arrow.png'
import auntie_img3 from '../assets/auntie_img3.png'

import auntie_mobile1 from '../assets/auntie_mobile1.png'
import auntie_mobile2 from '../assets/auntie_mobile2.png'
import auntie_mobile3 from '../assets/auntie_mobile3.png'
import auntie_mobile4 from '../assets/auntie_mobile4.png'
import auntie_mobile5 from '../assets/auntie_mobile5.png'
import auntie_mobile6 from '../assets/auntie_mobile6.png'



import html from '../assets/tool/html.png'
import css from '../assets/tool/css.png'
import js from '../assets/tool/js.png'
import jquery from '../assets/tool/jquery.png'

import vsc from '../assets/tool/vsc.png'
import xd from '../assets/tool/xd.png'





const AuntieAnnes = ({ page,cursorPointer }) => {


    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const scroll = (e)=>{
        setScrollY(e.target.scrollTop)
    }

    const auntieRef = useRef(null);
    function scrollTop() {
        auntieRef.current.scrollTop = 0;
    }

    useEffect(() => {
        return () => {
            scrollTop()
        }
    }, [page])
    return (
        <div onScroll={scroll} ref={auntieRef} className={page == 'AuntieAnnes' ? "auntie auntieOn" : "auntie"}>
            <div className="auntie_content">
                <div className='auntie_banner' >
                    <div className="content2 pointer"></div>
                    <div className="btn2 pointer" onClick={()=>{scrollTop()}} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} style={ScrollY != 0 ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(135deg)'}} >
                        <img src={arrow} />
                    </div>
                </div>

                <section className="auntie_box1">
                    <div>
                        <div className="number">
                            02
                        </div>
                        <ul className="project_about">
                            <li><h3>TYPE</h3><span>web publishing</span></li>
                            <li><h3>YEAR</h3><span>2020</span></li>
                            <li><h3>PROJECT</h3><span>auntie web copy</span></li>
                            <li><h3>CONTRIBUTION</h3><span>100%</span></li>
                        </ul>
                    </div>
                </section>

                <section className="auntie_box2">

                </section>
                <section className="auntie_box3">
                    <img src={auntie_img3} />
                </section>


                <section className="auntie_box4">
                    <div>
                        <div>
                            <img src={auntie_mobile1} />
                        </div>
                        <div>
                            <img src={auntie_mobile2} />
                        </div>
                        <div>
                            <img src={auntie_mobile3} />
                        </div>
                        <div>
                            <img src={auntie_mobile4} />
                        </div>
                        <div>
                            <img src={auntie_mobile5} />
                        </div>
                        <div>
                            <img src={auntie_mobile6} />
                        </div>
                        
                    </div>

                </section>


                
                <section className="auntie_method">
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

export default AuntieAnnes;