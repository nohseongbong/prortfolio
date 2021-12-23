import { useState, useEffect, useRef } from "react";

import Todo from './Todo/Todo.js'
import Menu from './menu.js'
import Contact from './contact'
import Omega from './works/omega'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./App.css";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";

import omega_box from './assets/omega_box.png'
import auntie_box from './assets/auntie_box.png'
import yolijoli_box from './assets/yolijoli_box.png'
import thunder_box from './assets/thunder_box.png'
import todo_box from './assets/todo_box.png'

import omega_bg from './assets/omega_bg.png'
import auntie_bg from './assets/auntie_bg.png'
import yolijoli_bg from './assets/yolijoli_bg.png'
import thunder_bg from './assets/thunder_bg.png'
import todo_bg from './assets/todo_bg.png'

import arrow from './assets/arrow.png'

function App() {

  // 현재 works 화면
  // const [nowWork,setNowWork] = useState('');


  // 현재 페이지
  const [nowPage , setNowPage] = useState('OMEGA');

  // 메뉴 토글
  const [toggle,setToggle] = useState(false);


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
    if(nowPage == "Works"){
      if(scrollState){
        if(e.deltaY > 0){
          nextClick();
        }else{
          prevClick();
        }
        setScrollState(false);
      }
    }
  };

  // 마우스 커서
  const cursorPointer = (event) => {
    let mouseCursor = document.querySelector(".cursor"); 
    if(event.type == 'mouseenter'){
      mouseCursor.classList.add("pointer");
    }else{
      mouseCursor.classList.remove("pointer");
    }
  }

  // 워크스 데이터
  const [works , setWorks] = useState([
    {className : 'inner',title : 'OMEGA',box:omega_box,bg:omega_bg,toggle:false , textColor : '#B93A3A',circle : '#B93A3A'},
    {className : 'inner',title : 'AuntieAnnes',box:auntie_box,bg:auntie_bg,toggle:false , textColor : '#FFB500' , circle : '#FFB500'},
    {className : 'inner',title : 'YoliJoliCook',box:yolijoli_box,bg:yolijoli_bg,toggle:false , textColor : '#fff', circle : '#9B3B1C'},
    {className : 'inner',title : 'ThundeRing',box:thunder_box,bg:thunder_bg,toggle:false , textColor : '#004BBA', circle : '#004BBA'},
    {className : 'inner',title : 'TodoList',box:todo_box,bg:todo_bg,toggle:false , textColor : '#302900', circle : '#302900'},
  ]);

  // 컨텐츠 화면
  let worksView = works.map((item,index) => {
    return (
      <div key={index} className={item.className} onClick={() => {setNowPage(item.title);}} >
        <div className="content pointer"  style={{ backgroundImage : `url(${item.box})` }} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer}>
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
            let key = event.target.id;
            setChoiceIndex(key);
            choice[key].click()
            choice[Number(key)+5].click()
        }else{
            setChoiceIndex(choiceIndex);
        }
    }


    // 우측 사이드 바 목록
    let dotsView = works.map((item, index) => {
        return (
          <div className="work pointer" id={index}  key={index} onMouseEnter={textHover} onMouseLeave={textHover}>
            <Animate id={index} start={{ opacity: 0,display:'none' }} end={{ opacity: 1,display:'block' }} sequenceIndex={index}>
                <div id={index} className="work_title"  style={{color: choiceIndex == index ? item.textColor : 'rgba(0, 0, 0, 0.288)', fontSize : choiceIndex == index ? '35px' : '25px'}} >
                    {item.title}
                </div>
            </Animate>

          </div>
        )
    })

    return (
        <div className="works pointer" onMouseEnter={cursorPointer} onMouseLeave={cursorPointer}>
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
    if(toggle){
      setScrollState(false)
    }else{
      setScrollState(true)
    }
  }, [toggle])
  
  // 좌측 택스트 캐러셀
  const subFnc = (e) =>{
    let choice = document.getElementsByClassName('dot');
    choice[Number(e)+5].click();
    // console.log(e,'현재 인덱스 값' ,Number(e)+4 ,choice)

  }

  // 마우스 커서 설정
  useEffect(() => {
    let mouseCursor = document.querySelector(".cursor");
    window.addEventListener("scroll", cursor);
    window.addEventListener("mousemove", cursor);
    function cursor(e) {
      mouseCursor.style.left = e.pageX + "px";
      mouseCursor.style.top = e.pageY + "px";
    }

  }, [])

  // 메인화면
  let mainView = () => {
    return (
      <>
      {/* works 목록 */}
        <Carousel onChange={(e) => {setChoiceIndex(e);subFnc(e) }} transitionTime={700}  ref={scrollRef} axis='vertical' className="outer"  showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false} emulateTouch={true}>
          {worksView}
        </Carousel>

        {/* 우측 works 목록 */}
        {Dots()}


        {/* 좌측 works 타이틀 캐러셀 */}
        <Carousel className="titleBox" transitionTime={700} axis='vertical' showArrows={false} showThumbs={false} showStatus={false} infiniteLoop={false} emulateTouch={false}>
            {textItem}
        </Carousel>
        

        {/* works 화살표 버튼 */}
        <div className="btn pointer" style={{backgroundColor:works[choiceIndex].circle}} onClick={() => {setNowPage(works[choiceIndex].title);}} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer}>
          <img src={arrow} />
        </div>


      </>

    )
  }


  // 최종 화면
  return (
    <div onWheel={onScroll} className="main" style={{ backgroundImage : `url(${works[choiceIndex].bg})` }} >
      {/* 커서 포인트 */}
        <div className="cursor"></div>

        {/* 메뉴 토글 버튼 */}
        <div className="ham_btn pointer" onClick={() => {setToggle(!toggle); }} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer}>
          <div style={{backgroundColor:toggle ? '#fff' : works[choiceIndex].textColor}} className={toggle ? "line line1 on" : "line line1"}></div>
            <div style={{backgroundColor:toggle ? '#fff' : works[choiceIndex].textColor}} className={toggle ? "line line2 on" : "line line2"}></div>
        </div>   
      

        {/* 메인페이지 */}
        {/* { nowPage == 'Works' ? mainView() : null} */}
        {  mainView()}

        {/* 오메가 */}
        <Omega page={nowPage} />

        {/* 투두 todo list */}
        <Todo page={nowPage} /> 
      
        {/* 연락처 contack */}
        <Contact page={nowPage} cursorPointer={cursorPointer} />



        {/* 메뉴창 */}
        <Menu state={toggle} cursorPointer={cursorPointer} page={nowPage} setPage={setNowPage} toggle={setToggle} />
    </div>
  );
}

export default App;

