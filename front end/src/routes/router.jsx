import { createBrowserRouter } from "react-router-dom";
import App from "../components/App";
import TopPlayers from "../components/TopPlayers";
import PlayGround from "../components/PlayGround";
import SignupForm from "../components/SignupForm";
import Layout from "../components/HeaderLayout";
import FooterLayout from "../components/FooterLayout";
import MultiplayerSignupForm from "../components/MultiplayerSignupForm";
import WaitingPage from "../components/WaitingPage";
import MultiPlayGround from "../components/MultiPlayGround";

const router = createBrowserRouter([
    {path : '/',
    element: <Layout />,
    children: [{path: '',element : <FooterLayout />,
                children:[{path : '',element: <App/>},
                            {path: 'signupForm',element: <SignupForm />}]
    },{path : 'topScores',element: <TopPlayers />},
    {path : 'playGround/:names',element: <PlayGround />},
    {path: 'MultiplayerSignupForm',element: <MultiplayerSignupForm />},
    {path : "WaitingPage/:name",element: <WaitingPage />},
    {path : "MultiPlayGround",element: <MultiPlayGround />}]
    // children: [{path : '',element: <App/>},
    // {path : 'signupForm',element: <SignupForm/>},
    // {path : 'topScores',element: <TopPlayers />},
    // {path : 'playGround/:names',element: <PlayGround />}
    // ]
}
    



]);
export default router;