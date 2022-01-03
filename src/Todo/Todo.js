import './Todo.css';
import React, { useState, useEffect } from 'react';

import Modal from 'react-modal';
import Pagination from "react-js-pagination";

import add_icon from '../assets/add_icon.png'
import cancel_icon from '../assets/cancel_icon.png'
import check_icon from '../assets/check_icon.png'
import check_list_icon from '../assets/check_list_icon.png'
import edit_icon from '../assets/edit_icon.png'
import edit_icon2 from '../assets/edit_icon2.png'
import delete_icon from '../assets/delete_icon.png'
import delete_icon2 from '../assets/delete_icon2.png'
import modal_check_icon from '../assets/modal_check_icon.png'
import modal_progress_icon from '../assets/modal_progress_icon.png'
import list_icon from '../assets/list_icon.png'
import more_icon from '../assets/more_icon.png'
import proceeding_list_icon from '../assets/proceeding_list_icon.png'
import progress_icon from '../assets/progress_icon.png'
import plus_icon from '../assets/plus_icon.png'

function Todo({page}) {

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: 0,
      maxWidth: '400px',
      width: '400px',
      maxHeight: "350px",
      height: "350px",
      overflow: 'hidden'
    },
  };

  // 모달 토글
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // 추가 모달 토글
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  // key
  const [key, setKey] = useState(0);

  // 페이지 뷰
  const [pageList, setPageList] = useState([]);

  // 리스트 뷰
  const [nowList, setNowList] = useState([]);

  // 전체 리스트
  const [list, setList] = useState([]);

  // 진행중인 리스트
  const [progress_list, setProgress_list] = useState([]);

  // 진행 완료 된 리스트
  const [end_list, setEnd_list] = useState([]);

  // 모달에 선택된 데이터
  const [modalData, setModalData] = useState({});

  // 추가 택스트
  const [text, setText] = useState('');

  // 수정 택스트
  const [edit_text, setEdit_text] = useState('');

  // 수정 버튼 상태값
  const [edit_state, setEdit_state] = useState(false);

  // 탭 타입
  const [type, setType] = useState('all');


  // 페이징
  const [activePage, setActivePage] = useState(1);

  // 페이지 클릭 이벤트
  const handlePageChange = (pageNumber) => {
    console.log(`active page is ${pageNumber}`);
    setActivePage(pageNumber);
    pageFnc(pageNumber, nowList);
  }



  const pageFnc = (pageNumber, list) => {
    let arr = [];
    let last = pageNumber * 6;
    let start = pageNumber * 6 - 6

    list.map((item, index) => {
      if (index < last && index >= start) {
        arr.push(item)
      }
    })
    setPageList(arr)
  }



  // 탭 클릭 함수
  const tapClickFnc = (val) => {
    setType(val);
    switch (val) {
      case 'all':
        setNowList(list);
        setPageList(list);
        break;
      case 'progress':
        setNowList(progress_list);
        setPageList(progress_list);
        break;
      case 'end':
        setNowList(end_list);
        setPageList(end_list);
        break;
    }
  }


  // 리스트 클릭 이벤트
  const clickFnc = (key) => {

    let item = list.filter((x) => { return x.key == key })
    setModalData(item[0])
    setModalIsOpen(true)
  }

  // 삭제 이벤트
  const deleteFnc = () => {
    let arr = list.filter((x) => { return x.key != modalData.key })
    setList(arr)
    setNowList(arr);
    setModalIsOpen(false);
    setEdit_text('');
    let page = Math.floor(((arr.length - 1) / 6) + 1)
    console.log(page)
    pageFnc(page, arr);
    setActivePage(page)
  }



  // 추가 이벤트
  const addFnc = () => {
    let arr = [...list, { key: key, content: text, state: false }]
    setList(arr)
    setNowList(arr);
    setKey((x) => x + 1)
    setText('')
    setModalIsOpen2(false)
    let page = Math.floor((arr.length - 1) / 6 + 1)
    pageFnc(page, arr);
    setActivePage(page)

  }

  // 진행완료
  const clearFnc = () => {
    let arr = list.map((x) => x.key == modalData.key ? { ...x, state: true } : { ...x })
    setList(arr);
    setNowList(arr);
    closeFnc();
    pageFnc(activePage, arr);
  }


  useEffect(() => {
    setNowList(list)
  }, [])

  useEffect(() => {

    let trueList = list.filter((x) => { return x.state });
    let falseList = list.filter((x) => { return !x.state });

    setProgress_list(falseList);
    setEnd_list(trueList);

  }, [list])





  // 리스트 아이템 화면
  let listView = pageList.map((item, index) => {

    return index < 6 ? (
      <li key={index} onClick={() => { clickFnc(item.key); }}>
        {item.state == false ?
          <img className="check" src={progress_icon} /> :
          <img className="check" src={check_icon} />
        }
        <p>{item.content}</p>
        <img className="more_btn" src={more_icon} />
      </li>
    )
      : null
  })


  const closeFnc = () => {
    setModalIsOpen(false);
    setModalData({});
    setEdit_text('');
    setEdit_state(false)
  }

  const closeFnc2 = () => {
    setText('')
    setModalIsOpen2(false);
  }

  const editFnc = () => {
    if (edit_state) {
      setEdit_text('');
      setEdit_state(false);
    } else {
      setEdit_text(modalData.content);
      setEdit_state(true);
    }
  }

  // 수정
  const editFnc2 = () => {
    let arr = list.map((x) => x.key == modalData.key ? { ...x, content: edit_text } : { ...x })
    setList(arr);
    setNowList(arr);
    setModalIsOpen(false);
    setEdit_state(false)
    setEdit_text('');
    setModalData({})

    pageFnc(activePage, arr);
  }

  return (
    // 배경
    <div className={page == 'TodoList' ? "todo_bg todoOn" : "todo_bg"} >

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

          <img onClick={() => { setModalIsOpen2(true); }} className="add_btn" src={add_icon} />
        </header>

        <section>
          {/* 상단 탭바 */}
          <nav>
            <ul>
              {/* 전체 목록 */}
              <li onClick={() => { tapClickFnc('all') }}>
                <img src={list_icon} />
                <div style={type == 'all' ? { display: 'block' } : { display: 'none' }} className="affter_bar"></div>
              </li>
              {/* 남은 리스트 */}
              <li onClick={() => { tapClickFnc('progress') }}>
                <img src={proceeding_list_icon} />
                <div style={type == 'progress' ? { display: 'block' } : { display: 'none' }} className="affter_bar"></div>
              </li>
              {/* 실행 한 리스트 */}
              <li onClick={() => { tapClickFnc('end') }}>
                <img src={check_list_icon} />
                <div style={type == 'end' ? { display: 'block' } : { display: 'none' }} className="affter_bar"></div>
              </li>
            </ul>
          </nav>


          {/* 선택 된 현재 목록 */}
          <ul className="list_view">
            {/* 아이템 */}
            {listView}

          </ul>
          {nowList.length == 0 ? null :
            <Pagination
              activePage={activePage}
              itemsCountPerPage={6}
              totalItemsCount={nowList.length}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              firstPageText=""
              lastPageText=""
              prevPageText="<"
              nextPageText=">"
            />
          }

        </section>

      </div>
      {page == 'TodoList' ? 
      <>
        {/* 디테일 */}
        <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        id="modal"
      >
        <div className="modal_header">
          {modalData.state ?
            <img src={modal_check_icon} className="modal_check" /> :
            <img src={modal_progress_icon} className="modal_check" />
          }

          <img onClick={() => { closeFnc() }} src={cancel_icon} className="modal_close" />
        </div>

        <div className="modal_nav">
          <div className="nav_btn_box">
            <div className="nav_btn">
              <img onClick={() => { deleteFnc() }} src={delete_icon} className="modal_delete" />
            </div>
            <div className="nav_btn" onClick={() => { editFnc(); }}>
              <img src={edit_icon} className="modal_edit" />
            </div>
          </div>
          {edit_state ?
            <button onClick={() => { editFnc2() }}>
              <img className="add2" src={plus_icon} />
            </button> :
            <button onClick={() => { clearFnc() }}>
              <span className="clear">CLEAR</span>
            </button>
          }

        </div>

        <div className="modal_content">
          {edit_state ? <textarea value={edit_text} onChange={(e) => { setEdit_text(e.target.value) }}></textarea> : <p>{modalData.content}</p>}
        </div>
      </Modal>

      {/* 추가 하는 모달창 */}
      <Modal
        isOpen={modalIsOpen2}
        style={customStyles}
        id="modal"
        >
        <div className="modal_header2">
          <img onClick={() => { closeFnc2() }} src={cancel_icon} className="modal_close" />
        </div>

        <div className="modal_content2">
          <textarea onChange={(e) => setText(e.target.value)} autofocus></textarea>


        </div>

        <div className="modal_add_btn">
          <button onClick={() => { addFnc() }}>
            <img className="add" src={plus_icon} />
          </button>
        </div>


      </Modal>
    </>
      :null
    }
    



    </div>
  );
}

export default Todo;
