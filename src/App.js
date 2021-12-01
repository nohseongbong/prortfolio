import './App.css';
import React,{useState,useEffect} from 'react';

import add_icon from './assets/add_icon.png'
import cancel_icon from './assets/cancel_icon.png'
import check_icon from './assets/check_icon.png'
import check_list_icon from './assets/check_list_icon.png'
import delete_icon from './assets/delete_icon.png'
import list_icon from './assets/list_icon.png'
import more_icon from './assets/more_icon.png'
import proceeding_list_icon from './assets/proceeding_list_icon.png'
import progress_icon from './assets/progress_icon.png'

function App() {


  // 전체 리스트
  const [list,setList] = useState([{content:'안녕하세요',state:false}]);

  // 진행중인 리스트
  const [progress_list,setProgress_list] = useState([]);

  // 진행이 완료 된 리스트
  const [end_list,setEnd_list] = useState([]);


  // 리스트 클릭 이벤트
  const clickFnc = (index) => {
    let arr = list.map((x,index2) => ( index == index2 ? {...x,state : !x.state} : {...x}));
    setList(arr);
  }

  // 추가 이벤트
  const addFnc = () => {
    setList((x) => [...x,{content:'안녕하세요',state:false}]);
  }

  useEffect(() => {

    let trueList = list.filter((x) => {return x.state});
    let falseList = list.filter((x) => {return !x.state});

    setProgress_list(falseList);
    setEnd_list(trueList);
  },[list])

  // 리스트 아이템 화면
  let listView = list.map((item,index) => {
    return (
      <li key={index} onClick={() => {clickFnc(index)}}>
        {item.state == false ?
        <img className="check" src={progress_icon}/> :
        <img className="check" src={check_icon}/>
      }
        <p>{item.content}</p>
        <img className="more_btn" src={more_icon}/>
      </li>
    )
  })

  return (
    // 배경
    <div className="bg">

      {/* to do list 컨테이너 */}
      <div className="todo_wrap">
        {/* to do list header */}
        <header>
          <div className="tasks_box">
            {/* 끝 낸 리스트 갯수 */}
            <h2>{end_list.length}</h2>
            {/* 총 리스트 갯수 */}
            <div className="counts">
              <h3>Tasks</h3>
              <h4>/ {list.length}</h4>
            </div>
          </div>

          <img onClick={()=>{addFnc();}} className="add_btn" src={add_icon}/>
        </header>

        <section>
          {/* 상단 탭바 */}
          <nav>
            <ul>
              {/* 전체 목록 */}
              <li>
                <img src={list_icon} />
                <div className="affter_bar"></div>
              </li>
              {/* 남은 리스트 */}
              <li>
                <img src={proceeding_list_icon} />
                <div className="affter_bar"></div>
              </li>
              {/* 실행 한 리스트 */}
              <li>
                <img src={check_list_icon} />
                <div className="affter_bar"></div>
              </li>
            </ul>
          </nav>


          {/* 선택 된 현재 목록 */}
          <ul className="list_view">
            {/* 아이템 */}
            {listView}
           
          </ul>
        </section>

        {/* <h1>TODO LIST</h1> */}
      </div>
    </div>
  );
}

export default App;
