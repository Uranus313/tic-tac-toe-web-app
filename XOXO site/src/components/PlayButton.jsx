import { useEffect, useState } from "react";

function PlayButton ({turn,setSelecter,setTurn,isdone,replay}){
    let [clicked,setClicked] = useState(false);
    let[bcolor,setBcolor] = useState ('');
    let [text,setText] = useState('');
    useEffect( (event) => {setClicked(isdone)},
    [isdone]);
    useEffect(() => {setClicked(false)},[replay]);
    
    return (
        <div style={{width : '100px' , height : '100px' , backgroundColor : "brown" , display : "flex", alignItems : "center", justifyContent : 'center', margin: '20px', color: bcolor,fontSize: '70px'}} onClick={clicked? null : () => { setBcolor( (turn % 2 == 1)? 'blue': 'red');setText((turn % 2 == 1)? 'X': 'O');setSelecter( (turn % 2 == 1)? 1 : 2);setClicked(true); setTurn();  }}>
            {text? <p>{text}</p> : null}
            {/* <div style={{width : '70px' , height : '70px', display : clicked? 'block' : 'none' , backgroundColor : bcolor}}></div> */}
        </div>
    );
}
export default PlayButton;