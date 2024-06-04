import { Outlet } from "react-router-dom";

function Layout(){
    return(<div style={{ height: '100%'}}>
        <h1 style={{padding : "10px", borderRadius : "10px", color : 'white',textAlign: 'center'}}>Tic-Tac-Toe</h1>
        <div style={{minHeight:"76%"}}>
            <Outlet />
        </div>
        
        <p style={{margin : '20px',textAlign: "center",color: "yellow", bottom:"10px",right:'0px',left:'0px'}}>Proved by Uranus 313</p>
    </div>);
    
}
export default Layout;