import Habit from "../Habit"
import NewHabit from "../NewHabit"
import styled from "styled-components"
import { useState } from "react"
function Habits() {
    const [newHabit, setNewHabit] = useState(false)
    return (
        <Main>
            <TitleLabel>
                <h1>Meus hábitos</h1>
                <AddButton onClick={()=>setNewHabit(true)}>+</AddButton>
            </TitleLabel>

            {/*
        <ViewLabel>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
        </ViewLabel>
        */}

            {newHabit && <NewHabit newHabitCallback={setNewHabit}/>}
            <Habit />
            <Habit />
            <Habit />
            <Habit />
            <Habit />
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
alig-items: center;
color: red;
font-size: 23px; 
height: 50px;
`

const AddButton = styled.button`
width: 32px;
height: 32px;
color: white; 
border: none;
border-radius: 50px; 
background-color: red; 
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const ViewLabel = styled.h1`
color: #9A9A9A;
font-size: 18px;
font-weight: 700;
`

export default Habits