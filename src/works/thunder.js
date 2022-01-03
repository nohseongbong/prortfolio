
import "./thundering.css";
import { useState, useEffect, useRef } from "react";

import arrow from '../assets/arrow.png'



import react_native from '../assets/tool/react_native.png'
import recoil from '../assets/tool/recoil.png'
import js from '../assets/tool/js.png'

import vsc from '../assets/tool/vsc.png'
import xd from '../assets/tool/xd.png'
import android from '../assets/tool/android.png'


import img0 from '../assets/thundering_img/0.png'
import img1 from '../assets/thundering_img/1.png'
import img2 from '../assets/thundering_img/2.png'
import img3 from '../assets/thundering_img/3.png'
import img4 from '../assets/thundering_img/4.png'
import img5 from '../assets/thundering_img/5.png'
import img6 from '../assets/thundering_img/6.png'
import img7 from '../assets/thundering_img/7.png'
import img8 from '../assets/thundering_img/8.png'
import img9 from '../assets/thundering_img/9.png'
import img10 from '../assets/thundering_img/10.png'
import img11 from '../assets/thundering_img/11.png'
import img12 from '../assets/thundering_img/12.png'
import img13 from '../assets/thundering_img/13.png'
import img14 from '../assets/thundering_img/14.png'
import img15 from '../assets/thundering_img/15.png'
import img16 from '../assets/thundering_img/16.png'
import img17 from '../assets/thundering_img/17.png'
import img18 from '../assets/thundering_img/18.png'
import img19 from '../assets/thundering_img/19.png'
import img20 from '../assets/thundering_img/20.png'
import img21 from '../assets/thundering_img/21.png'
import img22 from '../assets/thundering_img/22.png'
import img23 from '../assets/thundering_img/23.png'
import img24 from '../assets/thundering_img/24.png'
import img25 from '../assets/thundering_img/25.png'
import img26 from '../assets/thundering_img/26.png'
import img27 from '../assets/thundering_img/27.png'
import img28 from '../assets/thundering_img/28.png'
import img29 from '../assets/thundering_img/29.png'
import img30 from '../assets/thundering_img/30.png'
import img31 from '../assets/thundering_img/31.png'
import img32 from '../assets/thundering_img/32.png'
import img33 from '../assets/thundering_img/33.png'
import img34 from '../assets/thundering_img/34.png'
import img35 from '../assets/thundering_img/35.png'





const ThundeRing = ({ page,cursorPointer }) => {

    const [img,setImg] = useState([img0,img1,img2,img3,img4,img5,img6,img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,img17,img18,img19,img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32,img33,img34,img35]);
    const [ScrollY, setScrollY] = useState(0);  // 스크롤값을 저장하기 위한 상태
    const scroll = (e)=>{
        setScrollY(e.target.scrollTop)
    }

    const thunderRef = useRef(null);
    function scrollTop() {
        thunderRef.current.scrollTop = 0;
    }

    useEffect(() => {
        return () => {
            scrollTop()
        }
    }, [page])
    return (
        <div onScroll={scroll} ref={thunderRef} className={page == 'ThundeRing' ? "thunder thunderOn" : "thunder"}>
            <div className="thunder_content">
                <div className='thunder_banner' >
                    <div className="content2 pointer"></div>
                    <div className="btn2 pointer" onClick={()=>{scrollTop()}} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} style={ScrollY != 0 ? {transform: 'rotate(-45deg)'} : {transform: 'rotate(135deg)'}} >
                        <img src={arrow} />
                    </div>
                </div>

                <section className="thunder_box1">
                    <div>
                        <div className="number">
                            04
                        </div>
                        <ul className="project_about">
                            <li><h3>TYPE</h3><span>App</span></li>
                            <li><h3>YEAR</h3><span>2021</span></li>
                            <li><h3>PROJECT</h3><span>ThundeRing App</span></li>
                            <li><h3>CONTRIBUTION</h3><span>80%</span></li>
                        </ul>
                    </div>
                </section>

                <section className="thunder_box2">

                </section>

                <section className="thunder_box4">
                    <div>
                        {
                            img.map((item,index) => {
                                return(
                                        <img src={item} />
                                )
                            })
                        }
                    </div>

                </section>


                
                <section className="thunder_method">
                    <div className="method_box">
                        <div className="language">
                            <h2>Language</h2>
                            <div className="img">
                                <div><img src={react_native} /></div>
                                <div><img src={recoil} /></div>
                                <div><img src={js} /></div>
                            </div>
                        </div>
                        <div className="tool">
                            <h2>Tool</h2>
                            <div className="img">
                                <div><img src={vsc} /></div>
                                <div><img src={xd} /></div>
                                <div><img src={android} /></div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </div>

    )
}

export default ThundeRing;