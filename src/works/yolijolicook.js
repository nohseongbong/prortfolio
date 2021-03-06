
import "./yolijolicook.css";
import { useState, useEffect, useRef } from "react";

import yolijoli_box from '../assets/yolijoli_box.png'
import arrow from '../assets/arrow.png'


import java from '../assets/tool/java.png'
import spring from '../assets/tool/spring.png'
import html from '../assets/tool/html.png'
import css from '../assets/tool/css.png'
import js from '../assets/tool/js.png'
import jquery from '../assets/tool/jquery.png'

import vsc from '../assets/tool/vsc.png'
import tomcat from '../assets/tool/tomcat.png'
import oracle from '../assets/tool/oracle.png'
import eclipse from '../assets/tool/eclipse.png'





const YoliJoliCook = ({ page,cursorPointer }) => {


    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const scroll = (e)=>{
        setScrollY(e.target.scrollTop)
    }

    const yolijoliRef = useRef(null);
    function scrollTop() {
        yolijoliRef.current.scrollTop = 0;
    }

    useEffect(() => {
        return () => {
            scrollTop()
        }
    }, [page])
    return (
        <div onScroll={scroll} ref={yolijoliRef} className={page == 'YoliJoliCook' ? "yolijoli yolijoliOn" : "yolijoli"}>
            <div className="yolijoli_content">
                <div className='yolijoli_banner' >
                    <div className="content2 pointer"></div>
                    <div className="btn2 pointer" onClick={()=>{scrollTop()}} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} style={ScrollY != 0 ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(135deg)'}} >
                        <img src={arrow} />
                    </div>
                </div>

                <section className="yolijoli_box1">
                    <div>
                        <div className="number">
                            03
                        </div>
                        <ul className="project_about">
                            <li><h3>TYPE</h3><span>Web Frontend & Backend</span></li>
                            <li><h3>YEAR</h3><span>2021</span></li>
                            <li><h3>PROJECT</h3><span>Recipe Community Web Site</span></li>
                            <li><h3>CONTRIBUTION</h3><span>35%</span></li>
                        </ul>
                    </div>
                </section>

                <section className="yolijoli_box2">

                </section>
                <section className="yolijoli_box3">
                    <iframe width="80%" height="600" src="https://www.youtube.com/embed/EbYmwWb3M4g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </section>

                <section className="yolijoli_method">
                    <div className="method_box">
                        <div className="language">
                            <h2>Language</h2>
                            <div className="img">
                                <div><img src={java} /></div>
                                <div><img src={spring} /></div>
                                <div><img src={html} /></div>
                                <div><img src={css} /></div>
                                <div><img src={js} /></div>
                                <div><img src={jquery} /></div>
                            </div>
                        </div>
                        <div className="tool">
                            <h2>Tool</h2>
                            <div className="img">
                                <div><img src={eclipse} /></div>
                                <div><img src={vsc} /></div>
                                <div><img src={tomcat} /></div>
                                <div><img src={oracle} /></div>
                            </div>
                        </div>

                    </div>
                </section>


            </div>
        </div>

    )
}

export default YoliJoliCook;