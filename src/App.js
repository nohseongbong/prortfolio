import { useState, useEffect, useRef } from "react";

import Dots from "./Dots";
import Todo from './Todo/Todo.js'

import "./App.css";


function App() {

  const scrollRef = useRef({});

  const content1 = useRef(null);
  const content2 = useRef(null);
  const content3 = useRef(null);


  const [num ,setNum] =useState(1);
  const onScroll = (e) => {
    console.log('new 스크롤' ,e.deltaY)
    
    if(e.deltaY > 0){
      if(num < 3){
          setNum(e => e+1)
          // scrollFnc(num+1)
      }
    }else{
      if(num > 1){
        setNum(e => e-1)
        // scrollFnc(num-1)
      }
    }
  };

  // const scrollFnc = (num) => {
  //   switch (num) {
  //     case 1:
  //       console.log(num , '실행됨' ,content1);
  //       content1.current.scrollIntoView({ behavior: 'smooth' });
  //     break;
  //     case 2:
  //       console.log(num , '실행됨');
  //       content2.current.scrollIntoView({ behavior: 'smooth' });
  //     break;
  //     case 3:
  //       console.log(num , '실행됨');
  //       content3.current.scrollIntoView({ behavior: 'smooth' });
  //     break;
    
  //   }
  // }

  return (
    <div ref={scrollRef} onWheel={onScroll} className="outer">
        <Dots scrollIndex={num} />
        <div className="inner bg-yellow">1</div>
        <div className="inner bg-blue">2</div>
        <div className="inner bg-pink">3</div>
    </div>
  );
}

export default App;

