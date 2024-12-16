import Home from "../pages/home";
import Report from "../pages/Report";
import Login from "../authentication/Login";
import MyContract from "../pages/myContract";
import Signup from "../authentication/Signup";
import FindProject from "../pages/FindProject";
import RequestProject from "../pages/RequestProject";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "../pages/Profile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/findproject" element={<FindProject />} />
                    <Route path="/report" element={<Report />} />
                    <Route path="/mycontract" element={<MyContract />} />
                    <Route
                        path="/requestproject"
                        element={<RequestProject />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
