
import "./menu.css";
const menu = ({state}) => {
    console.log('메뉴', state)
    return(
        <div className={state ? "menu menuOn" : "menu"}>
            <div>메뉴</div>
        </div>

    )
}

export default menu;