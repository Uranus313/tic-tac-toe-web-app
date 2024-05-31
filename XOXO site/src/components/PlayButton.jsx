import { useEffect, useState } from "react";

function PlayButton ({turn,setSelecter,setTurn,isdone}){
    let [clicked,setClicked] = useState(false);
    let[bcolor,setBcolor] = useState ('');
    useEffect( (event) => {setClicked(isdone)},
    [isdone]);

    return (
        <div style={{width : '100px' , height : '100px' , backgroundColor : "brown" , display : "flex", alignItems : "center", justifyContent : 'center', margin: '20px'}} onClick={clicked? null : () => { setBcolor( (turn % 2 == 1)? 'blue': 'red');setSelecter( (turn % 2 == 1)? 1 : 2);setClicked(true); setTurn();  }}>
            <div style={{width : '70px' , height : '70px', display : clicked? 'block' : 'none' , backgroundColor : bcolor}}></div>
        </div>
    );
}
export default PlayButton