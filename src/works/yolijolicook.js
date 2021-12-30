
import "./yolijolicook.css";
import { useState, useEffect, useRef } from "react";

import yolijoli_box from '../assets/yolijoli_box.png'
import arrow from '../assets/arrow.png'


import yolijoli_img_m1 from '../assets/yolijoli_img_m1.png'





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
                            <li><h3>LANGUAGE</h3><span>html5 & css3 & jquery & js & java & javaSpring & oracleSQL</span></li>
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


            </div>
        </div>

    )
}

export default YoliJoliCook;