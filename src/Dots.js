import { useState, useEffect, useRef } from "react";
import { Animate, AnimateKeyframes, AnimateGroup } from "react-simple-animate";


const Dots = ({ scrollIndex, items }) => {

    const [dotsPlay, setDotsPlay] = useState(false);
    const [bold, setbold] = useState('normal');
    const [chocieIndex, setchocieIndex] = useState('');


    const textHover = (event) => {
        if(event.type == 'mouseenter'){
            let key = event.target.attributes[0].value;
            setchocieIndex(key);
            console.log('마우스 엔터',event.target.attributes[0].value)
            setbold('bold');
        }else{
            console.log('마우스 리브')
            setchocieIndex('');
            setbold('normal');
        }
    }



    let dotsView = items.map((item, index) => {
        return (
            <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={index}>
                <span data-key={index} onMouseEnter={textHover} onMouseLeave={textHover} style={{color:item.color,cursor:'pointer',fontWeight:bold}} >
                    {item.title}
                </span>
            </Animate>
        )
    })

    const mouseOver = (event) => {
        if(event.type == 'mouseenter'){
            console.log('마우스 엔터')
            setDotsPlay(true);
        }else{
            console.log('마우스 리브')
            setDotsPlay(false);
        }
    }


    return (
        <div style={{ backgroundColor: 'blue',width:130,position:'fixed',right:0,top:'50%',transform:'translate(0,-50%)'}} onMouseEnter={mouseOver} onMouseLeave={mouseOver}>
            <AnimateGroup  play={dotsPlay}>
                {dotsView}
            </AnimateGroup>
        </div>

    );
};

export default Dots;


<Animate play start={{ opacity: 0 }} end={{ opacity: 1 }}>
    <h1>React simple animate</h1>
</Animate>

{/* animate keyframes with individual element. */ }
<AnimateKeyframes
    play
    iterationCount="infinite"
    keyframes={["opacity: 0", "opacity: 1"]}
>
    <h1>React simple animate with keyframes</h1>
</AnimateKeyframes>

{/* animate group of animation in sequences */ }
<AnimateGroup play={false}>
    <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={0}>
        first
    </Animate>
    <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={1}>
        second
    </Animate>
    <Animate start={{ opacity: 0 }} end={{ opacity: 1 }} sequenceIndex={2}>
        third
    </Animate>
</AnimateGroup>