import Footer from "../universal/Footer";
import Habits from "../Habits";
import History from "../History";
import Login from "../Login";
import Navbar from "../universal/Navbar";
import Signup from "../Signup";
import Today from "../Today";

import { useState } from "react";

function App(){

    const [currentPage, setCurrentPage] = useState(0)

    console.log(currentPage)

    return(

        //<Login/>
        //<Signup/>
        <>
        <Navbar/>
            {currentPage === 0 && <Habits/>}
            {currentPage === 1 && <Today/>}
            {currentPage === 2 && <History/>}
        <Footer switchPageCallback={setCurrentPage}/>
        </>
    )
}

export default App