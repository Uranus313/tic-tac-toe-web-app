import { useParams,Navigate,useSearchParams } from "react-router-dom";
import APIClient from "../connections/apiconnection";
import useGetMatch from "../hooks/useGetMatch";
import { useEffect, useState } from "react";
import PlayButton from "./PlayButton";
function make_a_move(matchID,location,player){
    console.log("trying to post");
    const apiClient = new APIClient('moves/');
    apiClient.post({matchID : matchID, location : location, player : player });
}
function getText(number){
    if(number == 1){
        return 'X';
    }else if(number ==2){
        return 'O';
    }
    return null;
}


function MultiPlayGround(){
    // let params = useParams();
    let [params] = useSearchParams();
    let username = params.get('name')
    let matchID = params.get("ID")
    if( username == null || username == '' || matchID == null || matchID == ''){
        return <Navigate to={'/MultiplayerSignupForm'} />
    }
    let {data,error,isLoading} = useGetMatch(null,matchID);
    let playerNumber;
    let opponetName;
    let player1name;
    let player2name;
    if(!data){
        return (<div>
                    <p>game is loading</p>
                </div>)
    }
    if (data.player1 == username){
        playerNumber = 1;
        opponetName = data.player2;
        player1name = username;
        player2name = opponetName;
    }else{
        playerNumber = 2;
        opponetName = data.player1;
        player2name = username;
        player1name = opponetName;

    }
    // let [turn,setTurn] = useState(data.turn);

    let [isYourTurn,setIsYourTurn]= useState();
    let [winner,setWinner] = useState(null);
    useEffect(() => {
        console.log(data.turn % 1)
        if(data.turn % 2 == 1 ){

        if (playerNumber == 1){
            setIsYourTurn ( true);
            console.log(1000)
        }else{
            setIsYourTurn ( false);
            console.log(2000)

        }
    }else{
        if (playerNumber == 1){
            setIsYourTurn ( false);
            console.log(3000)

        }else{
            setIsYourTurn ( true);
            console.log(4000)

        }
    }
    if (data.winner){
        setWinner(data.winner);
        setIsYourTurn(false);
    }
    console.log("effect")},[data])
    
    console.log(username)
    console.log(isYourTurn)
    console.log(playerNumber)
    // console.log(turn)
 
    
    // let [selected,setSelected] = useState([0,0,0,0,0,0,0,0,0]);
    // let [winner,setWinner] = useState(null);
    // let [isdone,setIsdone] = useState(false);
    // let [replay,setReplay] = useState(0);
    return (
        <div style={{alignItems: "center",display: 'flex', flexDirection : "column",width : '100%'}}>
            <div style={{display: "flex", justifyContent: "space-between", color : "white", width : '100%'}}>

                
                    <p>{player1name + " is : O"}</p>
                    <p>{winner ? `The Winner is ${winner}` : null}</p>
                    <p>{player2name + " is : X"}</p>
                
                
                
            </div>
            <p style={{color : "white"}}>{data.turn}</p>
            {winner? null : <p style={{color : 'white'}}><span style={{color :(data.turn % 2 == 1)? 'blue' : 'red'}}>{(data.turn % 2 == 1)? player1name : player2name}</span>'s turn</p>}
            
            {/* <button onClick={ () => {setTurn(turn+1); postResults("Arsam","efef")}}>raise turn</button> */}
            {/* <button style={{backgroundColor: "orange",border: "none", borderRadius : '5px',padding: '10px 15px', cursor:'pointer'}} onClick={() => {setIsdone(false);setReplay(replay+1);setSelected([0,0,0,0,0,0,0,0,0]);setWinner(null);setTurn(1);}}>Replay</button> */}
            <div style={{display: "flex",flexWrap: 'wrap',width : '500px', justifyContent: 'space-between' }}>
            {data.plays.map((item,i) => <PlayButton turn={data.turn} isdone={item == 0?!isYourTurn: true} player={item}  setTurn = {() => {isYourTurn = false;}} setSelecter={(selector) => make_a_move(matchID,i,selector)}/>)}

            </div>
        </div>
    )
}
export default MultiPlayGround;