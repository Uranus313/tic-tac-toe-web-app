import { useEffect } from "react";
import { useParams,useNavigate,Navigate } from "react-router-dom";
import useGetMatch from "../hooks/useGetMatch";
function WaitingPage(){
    let params = useParams();
    // const navigate = useNavigate();
     console.log('test')
    if( params.name == undefined || params.name == ''){
        return <Navigate to={'/MultiplayerSignupForm'} />
    }
    let {data,error,isLoading} = useGetMatch(params.name,null);
    if(data){
        console.log('hello')
        return <Navigate to={`/MultiPlayGround/?ID=${data.matchID},name=${params.name}`} />
    }else{
        return (
            <div>
                <p>waiting for players</p>
            </div>
        )
    }


}
export default WaitingPage;