import config from "../../functions/config"
import get from "../../functions/get"
import Habit from "../Habit"
import NewHabit from "../NewHabit"
import styled from "styled-components"
import { useState, useEffect } from "react"

function Habits({ token }) {
    const [update, setUpdate] = useState(['no']) //será atualizado em Habit
    const [isAddingNewHabit, setIsAddingNewHabit] = useState(false) //será atualizado também em NewHabit
    const [habits, setHabits] = useState([])

    function getHabits(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const headers = config(token)
        const promise = get(URL, headers)
        promise.then(response=>{
            const data = response.data
            setHabits(data)
        })
    }

    useEffect(getHabits,[isAddingNewHabit, update]) //renderiza novamente se houver alterações em isAddingNewHabit, update
    

    return (
        <Main>
            <TitleLabel>
                <h1>Meus hábitos</h1>
                <AddButton onClick={() => setIsAddingNewHabit(true)}>+</AddButton>
            </TitleLabel>

            {isAddingNewHabit && <NewHabit token={token} addingNewHabit={setIsAddingNewHabit} />}

            {habits.length === 0 &&
                <ViewLabel>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </ViewLabel>}
           
                
            {habits.map(habit => <Habit update={setUpdate} 
                                        key={habit.id} 
                                        name={habit.name} 
                                        id={habit.id} 
                                        days={habit.days}
                                        token={token}
                                        />)}
        </Main>
    )
}

const Main = styled.main`
padding: 20px;
margin-top: 90px;
margin-bottom: 70px;
`
const TitleLabel = styled.section`
display: flex;
justify-content: space-between; 
align-items: center;
color: red;
font-size: 23px; 
height: 50px;
`

const AddButton = styled.button`
width: 32px;
height: 32px;
font-size: xx-large;
display: flex;
align-items: center;
justify-content: center;
color: white; 
border: none;
border-radius: 50px; 
background-color: black; 
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const ViewLabel = styled.h1`
color: #9A9A9A;
font-size: 18px;
font-weight: 700;
`

export default Habits