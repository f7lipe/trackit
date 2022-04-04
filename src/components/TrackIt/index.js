import config from "../../functions/config";
import countDone from "../../functions/countDone";
import Footer from "../universal/Footer";
import get from "../../functions/get";
import Habits from "../Habits";
import History from "../History";
import ImageContext from "../../contexts/ImageContext";
import Navbar from "../universal/Navbar";
import Today from "../Today";
import TokenContext from "../../contexts/TokenContext";
import { useState, useContext, useEffect } from "react"; 

function TrackIt(){

    const [currentPage, setCurrentPage] = useState(1) //Página inicial: Today 
    const [progress, setProgress] = useState({today: 0, done: 0})
    const [habits, setHabits] = useState([])
    const {token} = useContext(TokenContext)
    const {image} = useContext(ImageContext)
   
    function getHabits() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const headers = config(token)
        const promise = get(URL, headers)
        promise.then(response => {
            const habitsData = response.data
            setHabits(habitsData)
            setProgress({ today: habitsData.length, done: countDone(habitsData) })
        })
    }

    useEffect(getHabits, [habits, token])

    return(
        <>
        <Navbar profilePicture={image}/>
            {currentPage === 0 && <Habits token={token}/>}
            {currentPage === 1 && <Today token={token} habits ={habits}/>}
            {currentPage === 2 && <History token={token}/>}
        <Footer currentPage={setCurrentPage} progress={progress}/>
        </>
    )
}

export default TrackIt
