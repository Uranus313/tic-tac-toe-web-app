import { useParams,Navigate,useSearchParams } from "react-router-dom";
import APIClient from "../connections/apiconnection";
function make_a_move(matchID,location,player){
    const apiClient = new APIClient('moves/');
    apiClient.post({matchID : matchID, location : location, player : player });
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
    let isYourTurn;
    if(data.turn % 1 == 1 ){
        if (playerNumber == 1){
            isYourTurn = true;
        }else{
            isYourTurn = false;
        }
    }else{
        if (playerNumber == 1){
            isYourTurn = false;
        }else{
            isYourTurn = true;
        }
    }
    let winner = null;
    if (data.winner){
        winner = data.winner;
    }
    // let [turn,setTurn] = useState(1);
    // let [selected,setSelected] = useState([0,0,0,0,0,0,0,0,0]);
    // let [winner,setWinner] = useState(null);
    // let [isdone,setIsdone] = useState(false);
    // let [replay,setReplay] = useState(0);
    return (
        <div style={{alignItems: "center",display: 'flex', flexDirection : "column",width : '100%'}}>
            <div style={{display: "flex", justifyContent: "space-between", color : "white", width : '100%'}}>
                {() => {
                    if (playerNumber == 1){
                        return(
                            <>
                            <p>{opponetName + " is : O"}</p>
                            <p>{winner ? `The Winner is ${winner}` : null}</p>
                            <p>{username + " is : X"}</p>
                            </>
                        );
                    }else{
                        return(
                            <>
                            <p>{username + " is : O"}</p>
                            <p>{winner ? `The Winner is ${winner}` : null}</p>
                            <p>{opponetName + " is : X"}</p>
                            </>
                        );
                    }
                }}
                
                
            </div>
            <p style={{color : "white"}}>{turn}</p>
            {winner? null : <p style={{color : 'white'}}><span style={{color :(turn % 2 == 1)? 'blue' : 'red'}}>{(turn % 2 == 1)? player1name : player2name}</span>'s turn</p>}
            
            {/* <button onClick={ () => {setTurn(turn+1); postResults("Arsam","efef")}}>raise turn</button> */}
            {/* <button style={{backgroundColor: "orange",border: "none", borderRadius : '5px',padding: '10px 15px', cursor:'pointer'}} onClick={() => {setIsdone(false);setReplay(replay+1);setSelected([0,0,0,0,0,0,0,0,0]);setWinner(null);setTurn(1);}}>Replay</button> */}
            <div style={{display: "flex",flexWrap: 'wrap',width : '500px', justifyContent: 'space-between' }}>
            {selected.map((item,i) => <PlayButton turn={data.turn} isdone={!isYourTurn} replay={null} setTurn = {() => {isYourTurn = false}} setSelecter={(selector) => make_a_move(matchID,i,selector)}/>)}

            </div>
        </div>
    )
}
export default MultiPlayGround;