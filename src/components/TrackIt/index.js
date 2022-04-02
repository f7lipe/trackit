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
    const [todayHabits, setTodayHabits] = useState(1)
    const [finishedToday, setFinishedToday] = useState(0)
    const {token} = useContext(TokenContext)
    const {image} = useContext(ImageContext)
    console.log(todayHabits, finishedToday)
    return(
        <>
        <Navbar image={image}/>
            {currentPage === 0 && <Habits token={token}/>}
            {currentPage === 1 && <Today token={token} setTodayHabitsCallback={setTodayHabits} setFinishedHabitsCallback={setFinishedToday}/>}
            {currentPage === 2 && <History/>}
        <Footer switchPageCallback={setCurrentPage} todayHabits={todayHabits} finishedToday={finishedToday}/>
        </>
    )
}

export default TrackIt
