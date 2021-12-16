import { useState, useEffect, useRef } from "react";

import Dots from "./Dots";
import Todo from './Todo/Todo.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./App.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

function App() {

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

  const [works , setWorks] = useState([
    {className : 'inner bg-yellow',title : 'portfolio1',color:'#FFF9D3',toggle:false},
    {className : 'inner bg-blue',title : 'portfolio2',color:'#2E9AB4',toggle:false},
    {className : 'inner bg-pink',title : 'portfolio3',color:'#B3B7FF',toggle:false},
    {className : 'inner bg-pink',title : 'portfolio4',color:'#B3B7FF',toggle:false},
    {className : 'inner bg-pink',title : 'portfolio5',color:'#B3B7FF',toggle:false},
  ]);

  let worksView = works.map((item,index) => {
    return (
      <div key={index} className={item.className}>
        <div className="content">
          {item.title}
        </div>
      </div>
    )
  }) 

  const [dotsPlay, setDotsPlay] = useState(false);
  const [chocieIndex, setchocieIndex] = useState('');

  

  // 우측 메뉴
  const Dots = () => {
    let choice = document.getElementsByClassName('dot')

    const textHover = (event) => {
        if(event.type == 'mouseenter'){
            console.log(event.target.id)
            let key = event.target.id;
            setchocieIndex(key);
            choice[key].click()
        }else{
            setchocieIndex('');
        }
    }



    let dotsView = works.map((item, index) => {
        return (
          <div className="work" id={index}  key={index} onMouseEnter={textHover} onMouseLeave={textHover}>
            <Animate id={index} start={{ opacity: 0,display:'none' }} end={{ opacity: 1,display:'block' }} sequenceIndex={index}>
                <div id={index} className="work_title"  style={{color:item.color,cursor:'pointer', fontSize : choiceIndex == index ? '35px' : '25px'}} >
                    {item.title}
                </div>
            </Animate>

            <div id={index} style={{width:choiceIndex == index ? 10 : 7,height:choiceIndex == index ? 10 : 7,borderRadius:100,backgroundColor:item.color}}></div>
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




  return (
    <div onWheel={onScroll} className="main">
        <Carousel onChange={(e) => {console.log(e,'이겅');setChoiceIndex(e)}} transitionTime={700}  ref={scrollRef} axis='vertical' className="outer"  showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false} emulateTouch={true}>
          {worksView}
        </Carousel>
        {Dots()}
    </div>
  );
}

export default App;

