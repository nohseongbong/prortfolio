
import "./menu.css";
import { useState, useEffect, useRef } from "react";
const Menu = ({state,cursorPointer,page,setPage,toggle}) => {

    const [menuData , setMenuData] = useState([{page : 'About'},{page : 'Works'},{page : 'Contact'}])
    let menuView =  menuData.map((item,index) => {
        return (
            <span key={index} className={page == item.page ? "pointer now" : "pointer"} onClick={() => { setPage(item.page);toggle(false);}} onMouseEnter={cursorPointer} onMouseLeave={cursorPointer} >{item.page}</span>
        )
    })

    return(
        <div className={state ? "menu menuOn" : "menu"}>
            <div className="menu_content">
                {menuView}
            </div>
        </div>

    )
}

export default Menu;