
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Login from "../Login";
import Signup from "../Signup";
import TrackIt from "../TrackIt";

import TokenContext from "../../contexts/TokenContext";
import ImageContext from "../../contexts/ImageContext";

function App() {
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [image, setImage] = useState('')

    return (
        <TokenContext.Provider value={{ token, setToken }}>
            <ImageContext.Provider value={{ image, setImage }}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/app" element={<TrackIt />} />
                    </Routes>
                </BrowserRouter>
            </ImageContext.Provider>
        </TokenContext.Provider>
    )
}

export default App