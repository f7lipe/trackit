
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login";
import Signup from "../Signup";
import TrackIt from "../TrackIt";


function App(){
    return(
         <BrowserRouter>
         <Routes>
             <Route path="/" element={<Login/>} />
             <Route path="/signup" element={<Signup/>} />
             <Route path="/app"element={<TrackIt/>} />
         </Routes>
         </BrowserRouter>
    )
}

export default App