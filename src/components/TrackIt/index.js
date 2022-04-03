import Footer from "../universal/Footer";
import Habits from "../Habits";
import History from "../History";
import ImageContext from "../../contexts/ImageContext";
import Navbar from "../universal/Navbar";
import Today from "../Today";
import TokenContext from "../../contexts/TokenContext";
import { useState, useContext } from "react"; 

function TrackIt(){

    const [currentPage, setCurrentPage] = useState(1) //Página inicial: Today 
    const [progress, setProgress] = useState({today: 0, done: 0})
    const {token} = useContext(TokenContext)
    const {image} = useContext(ImageContext)

    return(
        <>
        <Navbar profilePicture={image}/>
            {currentPage === 0 && <Habits token={token}/>}
            {currentPage === 1 && <Today token={token} progress={setProgress}/>}
            {currentPage === 2 && <History token={token}/>}
        <Footer currentPage={setCurrentPage} progress={progress}/>
        </>
    )
}

export default TrackIt
