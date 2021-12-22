
import "./contact.css";
import { useState, useEffect, useRef } from "react";

import git from './assets/git.png'
import naver from './assets/naver.png'
import tel from './assets/tel.png'
import kakao from './assets/kakao.png'
import facebook from './assets/facebook.png'

const Contact = ({state,cursorPointer,page,setPage,toggle}) => {

    return(
        <div className={page == 'Contact' ? "contact contactOn" : "contact"}>
            <h2>CONTACK</h2>
            <div className="contact_content">
                <div className="text_box">
                    <div>
                        <img className="" src={naver}  />
                        <span>shtjdqhd@naver.com</span>
                    </div>
                    <div>
                        <img className="" src={tel}  />
                        <span>010-5067-4188</span>
                    </div>
                </div>
                <div className="link_box">
                    <img className="pointer" src={git} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} />
                    <img className="pointer" src={kakao} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} />
                    <img className="pointer" src={facebook} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} />
                </div>
            </div>
        </div>

    )
}

export default Contact;