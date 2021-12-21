import { useState, useEffect, useRef } from "react";

import Dots from "./Dots";
import Todo from './Todo/Todo.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./works.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

import omega_box from './assets/omega_box.png'
import auntie_box from './assets/auntie_box.png'
import yolijoli_box from './assets/yolijoli_box.png'
import thunder_box from './assets/thunder_box.png'

import omega_bg from './assets/omega_bg.png'
import auntie_bg from './assets/auntie_bg.png'
import yolijoli_bg from './assets/yolijoli_bg.png'
import thunder_bg from './assets/thunder_bg.png'
import arrow from './assets/arrow.png'

function works() {

    // 최종 화면
    return (
        <div onWheel={onScroll} className="main" style={{ backgroundImage: `url(${works[choiceIndex].bg})` }} >

        </div>
    );
}

export default works;

