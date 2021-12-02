import './App.css';
import React,{useState,useEffect} from 'react';

import Modal from 'react-modal';

import add_icon from './assets/add_icon.png'
import cancel_icon from './assets/cancel_icon.png'
import check_icon from './assets/check_icon.png'
import check_list_icon from './assets/check_list_icon.png'
import edit_icon from './assets/edit_icon.png'
import edit_icon2 from './assets/edit_icon2.png'
import delete_icon from './assets/delete_icon.png'
import delete_icon2 from './assets/delete_icon2.png'
import modal_check_icon from './assets/modal_check_icon.png'
import modal_progress_icon from './assets/modal_progress_icon.png'
import list_icon from './assets/list_icon.png'
import more_icon from './assets/more_icon.png'
import proceeding_list_icon from './assets/proceeding_list_icon.png'
import progress_icon from './assets/progress_icon.png'
import plus_icon from './assets/plus_icon.png'

function App() {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      maxWidth : '400px',
      width : '400px',
      maxHeight : "350px",
      height : "350px",
      overflow : 'hidden'
    },
  };

  // 모달 토글
  const [modalIsOpen , setModalIsOpen] = useState(false);

  // 추가 모달 토글
  const [modalIsOpen2 , setModalIsOpen2] = useState(false);

  // key
  const [key , setKey] = useState(0);

  // 전체 리스트
  const [list,setList] = useState([]);

  // 진행중인 리스트
  const [progress_list,setProgress_list] = useState([]);

  // 진행 완료 된 리스트
  const [end_list,setEnd_list] = useState([]);

  // 모달에 선택된 데이터
  const [modalData,setModalData] = useState({});
  // 추가 택스트
  const [text,setText] = useState('');

  // 수정 택스트
  const [edit_text,setEdit_text] = useState('');

  // 수정 버튼 상태값
  const [edit_state,setEdit_state] = useState(false);




  // 리스트 클릭 이벤트
  const clickFnc = (key) => {
    // let arr = list.map((x,index2) => ( index == index2 ? {...x,state : !x.state} : {...x}));
    // setList(arr);
    let item = list.filter((x) => {return x.key == key})
    setModalData(item[0])
    setModalIsOpen(true)
  }

  // 삭제 이벤트
  const deleteFnc = () => {
    let arr = list.filter((x) => {return x.key != modalData.key})
    setList(arr)
    setModalIsOpen(false);
    setEdit_text('');
  }

  // 추가 이벤트
  const addFnc = () => {
    setList((x) => [...x,{key : key,content : text,state : false}])
    setKey((x) => x+1)
    setModalIsOpen2(false)
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
      <li key={index} onClick={() => {clickFnc(item.key);}}>
        {item.state == false ?
        <img className="check" src={progress_icon}/> :
        <img className="check" src={check_icon}/>
      }
        <p>{item.content}</p>
        <img className="more_btn" src={more_icon}/>
      </li>
    )
  })

  const closeFnc = () => {
    setModalIsOpen(false);
    setModalData({});
    setEdit_text('');
  }

  const closeFnc2 = () => {
    setText('')
    setModalIsOpen2(false);
  }

  const editFnc = () => {
    if(edit_state){
      setEdit_text('');
      setEdit_state(false);
    }else{
      setEdit_text(modalData.content);
      setEdit_state(true);
    }
  }
  const editFnc2 = () => {
    let arr = list.map((x) => x.key == modalData.key ? {...x,content : edit_text} : {...x})
    setList(arr);
    setModalIsOpen(false);
    setEdit_state(false)
    setEdit_text('');
    setModalData({})
  }

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

          <img onClick={()=>{setModalIsOpen2(true);}} className="add_btn" src={add_icon}/>
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

      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        id="modal"
      >
          <div className="modal_header">
              {modalData.state ? 
              <img src={modal_check_icon} className="modal_check" />:
              <img src={modal_progress_icon} className="modal_check" />          
            }
              
              <img onClick={() => {closeFnc()}} src={cancel_icon} className="modal_close"/>
          </div>

          <div className="modal_nav">
            <div className="nav_btn_box">
              <div className="nav_btn">
                <img onClick={() => {deleteFnc()}} src={delete_icon} className="modal_delete" />
              </div>
              <div className="nav_btn" onClick={() => {editFnc();}}>
                <img src={edit_icon} className="modal_edit" />
              </div>
            </div>
            {edit_state ?
            <button onClick={()=>{editFnc2()}}>
              <img className="add2" src={plus_icon} />
            </button> :
            <div></div>
          }
            
          </div>

          <div className="modal_content">
            {edit_state ? <textarea value={edit_text} onChange={(e) => {setEdit_text(e.target.value)}}></textarea> :<p>{modalData.content}</p> }
          </div>
      </Modal>


      <Modal
        isOpen={modalIsOpen2}
        style={customStyles}
        id="modal"
      >
          <div className="modal_header2">
              <img onClick={() => {closeFnc2()}} src={cancel_icon} className="modal_close"/>
          </div>

          <div className="modal_content2">
            <textarea onChange={(e) => setText(e.target.value)} autofocus></textarea>
            
            
          </div>

          <div className="modal_add_btn">
            <button onClick={()=>{addFnc()}}>
              <img className="add" src={plus_icon} />
            </button>
          </div>

          
      </Modal>




    </div>
  );
}

export default App;
