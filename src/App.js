import { useState, useEffect, useRef } from "react";

import Dots from "./Dots";
import Todo from './Todo/Todo.js'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./App.css";


function App() {

  const scrollRef = useRef(null);


  const nextClick = () => {
    let ele = document.getElementsByClassName('control-arrow control-next')[0];
    console.log('다음');
    ele.click();
  }
  const prevClick = () => {
    let ele = document.getElementsByClassName('control-arrow control-prev')[0];
    console.log('이전');
    ele.click();
  }

  const onScroll = (e) => {
    console.log('new 스크롤' ,e.deltaY)
    
    if(e.deltaY > 0){
      nextClick();
    }else{
      prevClick();
    }
  };

  const [works , setWorks] = useState([
    {className : 'inner bg-yellow',title : 'portfolio1'},
    {className : 'inner bg-blue',title : 'portfolio2'},
    {className : 'inner bg-pink',title : 'portfolio3'},
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

  return (
    <div onWheel={onScroll} className="main">
        <Carousel transitionTime={1000}  ref={scrollRef} axis='vertical' className="outer"  showArrows={true} showThumbs={false} showStatus={false} infiniteLoop={false} emulateTouch={true}>
          {worksView}
        </Carousel>
    </div>
  );
}

export default App;

