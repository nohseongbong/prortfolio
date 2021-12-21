import { useState, useEffect, useRef } from "react";

import Dots from "./Dots";
import Todo from './Todo/Todo.js'
import Menu from './menu.js'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./App.css";
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

function App() {

  const canvasRef = useRef(null);

  // 스크롤 테그 ref
  const scrollRef = useRef(null);
  // 스크롤 사용가능 여부
  const [scrollState , setScrollState] = useState(true);

  // 현재 선택된 인덱스
  const [choiceIndex , setChoiceIndex] = useState(0);


  // next 함수
  const nextClick = () => {
    var next = document.getElementsByClassName('control-arrow control-next')[0];
    next.click();
    setTimeout(function() { 
      setScrollState(true);
    }, 700);
  }
  // prev 함수
  const prevClick = () => {
    var prev = document.getElementsByClassName('control-arrow control-prev')[0];
    prev.click();
    setTimeout(function() { 
      setScrollState(true);
    }, 700);
  }

  // 스크롤 핸들러
  const onScroll = (e) => {
    if(scrollState){
      if(e.deltaY > 0){
        nextClick();
      }else{
        prevClick();
      }
      setScrollState(false);
    }
  };

  // 워크스 데이터
  const [works , setWorks] = useState([
    {className : 'inner',title : 'OMEGA',color:'#fff',box:omega_box,bg:omega_bg,toggle:false , textColor : '#B93A3A',circle : '#B93A3A'},
    {className : 'inner',title : 'AuntieAnnes',color:'#fff',box:auntie_box,bg:auntie_bg,toggle:false , textColor : '#FFB500' , circle : '#FFB500'},
    {className : 'inner',title : 'YoliJoliCook',color:'#fff',box:yolijoli_box,bg:yolijoli_bg,toggle:false , textColor : '#fff', circle : '#9B3B1C'},
    {className : 'inner',title : 'ThundeRing',color:'#fff',box:thunder_box,bg:thunder_bg,toggle:false , textColor : '#004BBA', circle : '#004BBA'},
  ]);

  // 컨텐츠 화면
  let worksView = works.map((item,index) => {
    return (
      <div key={index} className={item.className}>
        <div className="content"  style={{ backgroundImage : `url(${item.box})` }}>
          {/* <span>{item.title}</span> */}
        </div>
      </div>
    )
  }) 

  // 우측 메뉴
  const Dots = () => {
    let choice = document.getElementsByClassName('dot')
    // 우측 사이드 바 호버 기능
    const textHover = (event) => {
        if(event.type == 'mouseenter'){
            // console.log(event.target.id)
            let key = event.target.id;
            setChoiceIndex(key);
            choice[key].click()
            choice[Number(key)+4].click()
        }else{
            setChoiceIndex(choiceIndex);
        }
    }


    // 우측 사이드 바 목록
    let dotsView = works.map((item, index) => {
        return (
          <div className="work" id={index}  key={index} onMouseEnter={textHover} onMouseLeave={textHover}>
            <Animate id={index} start={{ opacity: 0,display:'none' }} end={{ opacity: 1,display:'block' }} sequenceIndex={index}>
                <div id={index} className="work_title"  style={{color: choiceIndex == index ? item.textColor : 'rgba(0, 0, 0, 0.288)',cursor:'pointer', fontSize : choiceIndex == index ? '35px' : '25px'}} >
                    {item.title}
                </div>
            </Animate>

          </div>
        )
    })

    return (
        <div className="works">
              <AnimateGroup  play={true}>
                  {dotsView}
              </AnimateGroup>
        </div>

      );
  };

  // 컨텐츠 텍스트 아이템
  let textItem = works.map((item, index) => {
    return (
      <div className="item_title" style={{color:item.textColor}}  key={index}>
        {item.title}
      </div>
    )
  })

  useEffect(() => {
  }, [choiceIndex])

  const subFnc = (e) =>{
    let choice = document.getElementsByClassName('dot');
    choice[Number(e)+4].click();
    // console.log(e,'현재 인덱스 값' ,Number(e)+4 ,choice)

  }

  
  const [toggle,setToggle] = useState(false);


  // 최종 화면
  return (
    <div onWheel={onScroll} className="main" style={{ backgroundImage : `url(${works[choiceIndex].bg})` }} >
        <Carousel onChange={(e) => {setChoiceIndex(e);subFnc(e) }} transitionTime={700}  ref={scrollRef} axis='vertical' className="outer"  showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false} emulateTouch={true}>
          {worksView}
        </Carousel>
        {Dots()}

        <Carousel className="titleBox" transitionTime={700} axis='vertical' showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false} emulateTouch={false}>
            {textItem}
        </Carousel>
        
        <div className="btn" style={{backgroundColor:works[choiceIndex].circle}}>
          <img src={arrow} />
        </div>

        <div className="ham_btn" onClick={() => {setToggle(!toggle)}}>
            <div style={{backgroundColor:toggle ? '#fff' : works[choiceIndex].textColor}} className={toggle ? "line line1 on" : "line line1"}></div>
            <div style={{backgroundColor:toggle ? '#fff' : works[choiceIndex].textColor}} className={toggle ? "line line2 on" : "line line2"}></div>
        </div>   

        <Menu state={toggle} />
    </div>
  );
}

export default App;

