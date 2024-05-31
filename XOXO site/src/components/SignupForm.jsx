import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupForm(){
    let [error,setError] = useState(null);
    const player1nameRef = useRef('');
    const player2nameRef = useRef('');
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        if(player1nameRef.current.value.search('::') != -1 || player1nameRef.current.value.search('::') != -1){
            setError("names shouldn't contain '::' ");
            return;
        }
        if(player1nameRef.current.value != '' && player2nameRef.current.value != ''  ){
            console.log(player1nameRef.current.value);
            console.log(player2nameRef.current.value);
            navigate(`/playGround/${player1nameRef.current.value + "::" + player2nameRef.current.value}`);
        }else{
            setError("player 1's and player 2's names shouldn't be empty");
        }
    }
    return (
        <form action="post" onSubmit={(event) => handleSubmit(event)} style={{display: "flex", alignItems:"center", flexDirection:'column',width: "100%", color: "white"}}>
            <h2>fill the form</h2>
            {error? <p style={{color : 'red'}}>{error}</p> : null }
            <input type="text" ref={player1nameRef} placeholder="player 1's name" style={{margin: '20px'}}/>
            <input type="text" ref={player2nameRef} placeholder="player 2's name" style={{margin: '20px'}}/>
            <button type="submit" style={{backgroundColor: "orange",border: "none", borderRadius : '10px'}}>start the game</button>

        </form>
    )
}
export default SignupForm;