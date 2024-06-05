import { useEffect, useState } from "react";

function PlayButton ({turn,setSelecter,setTurn,isdone,replay,resetReplay,player}){
    let [clicked,setClicked] = useState(isdone);
    let[bcolor,setBcolor] = useState ('');
    let [text,setText] = useState('');
    
    useEffect ( () => {if (player == 1){
        setText('X');
        setBcolor('blue');
    }else if (player == 2){
        setText('O');
        setBcolor('red')
    }},[player]);
    useEffect( (event) => {setClicked(isdone)},
    [isdone]);
    useEffect(() => {if(replay == true){setClicked(false);setText('')}},[replay]);
    // console.log(isdone)
    // console.log(clicked)
    return (
        <div style={{width : '100px' , height : '100px' , backgroundColor : "brown" , display : "flex", alignItems : "center", justifyContent : 'center', margin: '20px', color: bcolor,fontSize: '70px'}} onClick={clicked? null : () => { setBcolor( (turn % 2 == 1)? 'blue': 'red');setText((turn % 2 == 1)? 'X': 'O');setSelecter( (turn % 2 == 1)? 1 : 2);setClicked(true); setTurn();resetReplay();  }}>
            {text? <p>{text}</p> : null}
            {/* <div style={{width : '70px' , height : '70px', display : clicked? 'block' : 'none' , backgroundColor : bcolor}}></div> */}
        </div>
    );
}
export default PlayButton;