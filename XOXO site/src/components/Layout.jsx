import { Outlet } from "react-router-dom";

function Layout(){
    return(<>
        <h1 style={{padding : "10px", borderRadius : "10px", color : 'white',textAlign: 'center'}}>Tic-Tac-Toe</h1>
        <Outlet/>
        <p style={{margin : '20px'}}>Proved by Uranus 313</p>
    </>);
    
}
export default Layout;