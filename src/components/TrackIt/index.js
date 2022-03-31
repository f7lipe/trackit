import Footer from "../universal/Footer";
import Habits from "../Habits";
import History from "../History";
import Navbar from "../universal/Navbar";
import Today from "../Today";

import { useState } from "react";

function TrackIt(){

    const [currentPage, setCurrentPage] = useState(0)
    
    return(
        <>
        <Navbar/>
            {currentPage === 0 && <Habits/>}
            {currentPage === 1 && <Today/>}
            {currentPage === 2 && <History/>}
        <Footer switchPageCallback={setCurrentPage}/>
        </>
    )
}

export default TrackIt
