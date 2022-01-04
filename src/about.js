
import "./about.css";
import { useState, useEffect, useRef } from "react";

import my from './assets/about/my.png'


import html from './assets/tool/html.png'
import css from './assets/tool/css.png'
import js from './assets/tool/js.png'
import jquery from './assets/tool/jquery.png'
import java from './assets/tool/java.png'
import react from './assets/tool/react.png'
import react_native from './assets/tool/react_native.png'
import recoil from './assets/tool/recoil.png'
import spring from './assets/tool/spring.png'

import vsc from './assets/tool/vsc.png'
import xd from './assets/tool/xd.png'
import oracle from './assets/tool/oracle.png'
import tomcat from './assets/tool/tomcat.png'
import eclipse from './assets/tool/eclipse.png'
import android from './assets/tool/android.png'


const About = ({state,cursorPointer,page,setPage,toggle}) => {

    return(
        <div className={page == 'About' ? "about aboutOn" : "about"}>
            <div className="about_contetns">
                <h2>ABOUT</h2>
                <div className="about_content1 contents" >
                    <div className="my_img">
                        <img src={my} />
                    </div>
                    <div className="my_info" >
                        <div>
                            <h4>NAME</h4>
                            <span>Noh Seong Bong</span>
                        </div>
                        <div>
                            <h4>AGE</h4>
                            <span>29</span>
                        </div>
                        <div>
                            <h4>MBTI</h4>
                            <span>ESFJ-A</span>
                        </div>
                        <div>
                            <h4>ABOUT</h4>
                            <span>안녕하세요.<br/>저는 프론트엔드 개발자 노성봉입니다.<br/>1년 정도 공부하고 실무로 6개월 다져진 프론트엔드 개발자입니다.</span>
                        </div>
                    </div>
                </div>

                <div className="about_content2 contents">
                    <h3>Technology Stack</h3>
                    <div className="img_box">
                        <h3>language</h3>
                        <div className="language">
                            <div className="img_wrap">
                                <img src={html} />
                            </div>
                            <div className="img_wrap">
                                <img src={css} />
                            </div>
                            <div className="img_wrap">
                                <img src={js} />
                            </div>
                            <div className="img_wrap">
                                <img src={jquery} />
                            </div>
                            <div className="img_wrap">
                                <img src={java} />
                            </div>
                            <div className="img_wrap">
                                <img src={spring} />
                            </div>
                            <div className="img_wrap">
                                <img src={react} />
                            </div>
                            <div className="img_wrap">
                                <img src={react_native} />
                            </div>
                            <div className="img_wrap">
                                <img src={recoil} />
                            </div>
                        </div>

                        <h3>tool</h3>
                        <div className="tool">
                            <div className="img_wrap">
                                <img src={vsc} />
                            </div>
                            <div className="img_wrap">
                                <img src={eclipse} />
                            </div>
                            <div className="img_wrap">
                                <img src={android} />
                            </div>
                            <div className="img_wrap">
                                <img src={oracle} />
                            </div>
                            <div className="img_wrap">
                                <img src={xd} />
                            </div>
                            <div className="img_wrap">
                                <img src={tomcat} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About;