import Footer from "../universal/Footer";
import Habits from "../Habits";
import History from "../History";
import Navbar from "../universal/Navbar";
import Today from "../Today";
import TokenContext from "../../contexts/TokenContext";
import ImageContext from "../../contexts/ImageContext";

import { useState, useContext } from "react";

function TrackIt(){

    const [currentPage, setCurrentPage] = useState(0)
    const {token} = useContext(TokenContext)
    const {image} = useContext(ImageContext)
    
    return(
        <>
        <Navbar image={image}/>
            {currentPage === 0 && <Habits/>}
            {currentPage === 1 && <Today/>}
            {currentPage === 2 && <History/>}
        <Footer switchPageCallback={setCurrentPage}/>
        </>
    )
}

export default TrackIt
