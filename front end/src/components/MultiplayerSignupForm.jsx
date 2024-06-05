import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIClient from "../connections/apiconnection";
function MultiplayerSignupForm(){
    let [error,setError] = useState(null);
    const playerNameRef = useRef('');
    const navigate = useNavigate();
    function handleSubmit(event){
        event.preventDefault();
        if(playerNameRef.current.value != ''   ){
            console.log(playerNameRef.current.value);
            const apiClient = new APIClient(`waitingUsers/`);
            apiClient.post(null,{name : playerNameRef.current.value}).then(() => navigate(`/WaitingPage/${playerNameRef.current.value}`)).catch((err) => console.log(err));
        }else{
            setError("player's name shouldn't be empty");
        }
    }
    return (
        <form action="post" onSubmit={(event) => handleSubmit(event)} style={{display: "flex", alignItems:"center", flexDirection:'column',width: "100%", color: "white"}}>
            <h2>fill the form</h2>
            {error? <p style={{color : 'rgb(230, 18, 18)'}}>{error}</p> : null }
            <input type="text" ref={playerNameRef} placeholder="player's name" style={{margin: '20px',padding: '4px 15px',borderRadius: '20px',outline:'none',border:'none'}}/>
            <button type="submit" style={{backgroundColor: "orange",border: "none", borderRadius : '5px',padding: '10px 15px', cursor:'pointer'}}>find game</button>

        </form>
    )
}
export default MultiplayerSignupForm;