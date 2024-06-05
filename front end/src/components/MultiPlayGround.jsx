import { useParams,Navigate,useSearchParams } from "react-router-dom";
function MultiPlayGround(){
    // let params = useParams();
    let [params] = useSearchParams();
     console.log(params.get('ID'))
    if( params.get('name') == null || params.get('name')== '' || params.get('ID') == null || params.get('ID') == ''){
        return <Navigate to={'/MultiplayerSignupForm'} />
    }
    return (
        <div>
            <p>{params.get('ID')}</p>
            <p>{params.get('name')}</p>
        </div>
    )
}
export default MultiPlayGround;