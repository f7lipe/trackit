import Habit from "../Habit"
import NewHabit from "../NewHabit"
import styled from "styled-components"
import { useState, useEffect } from "react"
import axios from "axios"

function Habits(props) {
    const [reload, setReload] = useState(false)
    const [newHabit, setNewHabit] = useState(false)
    const [habits, setHabits] = useState([])
    const { token } = props

    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function getHabits(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const promise = axios.get(URL, config)
        promise.then(response=>{
            const data = response.data
            setHabits(data)
            console.log(data)
        })
    }
    useEffect(getHabits,[newHabit, reload]) //carrega na primeira inicialização
    

    return (
        <Main>
            <TitleLabel>
                <h1>Meus hábitos</h1>
                <AddButton onClick={() => setNewHabit(true)}>+</AddButton>
            </TitleLabel>

            {newHabit && <NewHabit token={token} newHabitCallback={setNewHabit} />}

            {habits.length === 0 &&
                <ViewLabel>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </ViewLabel>}
           
                
            {habits.map(habit => <Habit callback={setReload} key={habit.id} name={habit.name} id={habit.id} days={habit.days} token={token}/>)}
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