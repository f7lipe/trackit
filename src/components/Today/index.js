import TodayHabit from "../TodayCard"

import styled from "styled-components"
import dayjs from "dayjs"
import moment from "moment"
import 'moment/locale/pt-br' 
import { useState, useEffect } from "react"
import 'dayjs/locale/pt-br'
import axios from "axios"

function Today(props) {

    const {token, setTodayHabitsCallback, setFinishedHabitsCallback} = props

    const [habits, setHabits] = useState([])
    const [update, setUpdate] = useState(0)
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    }

    function getHabits(){
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const promise = axios.get(URL, config)
        promise.then(response=>{
            const data = response.data
            setHabits(data)
            setTodayHabitsCallback(data.length)
            countDone(data)
        })
    }

    
    function countDone(habits){
       let done = 0 
        for(let habit of habits){
            if(habit.done){
                done++
            }
        }
        setFinishedHabitsCallback(done)
        return done
    }
    useEffect(getHabits,[update]) //carrega na primeira inicialização
    

    return <>
    <Main>
    <ViewLabel>
           {moment().format('LL')} 
           <SubLabel>{countDone(habits) === 0 ? 'Nenhum hábito concluído ainda' : `Você concluiu ${(countDone(habits)/habits.length)*100}% dos seus hábitos pra hoje`}</SubLabel>
        </ViewLabel>
     
        {
            habits.map(todayHabit => <TodayHabit 
                key={todayHabit.id}
                id={todayHabit.id} 
                name={todayHabit.name} 
                done={todayHabit.done} 
                currentSequence={todayHabit.currentSequence}
                highestSequence={todayHabit.highestSequence}
                token={token}
                callback={setUpdate}/>)
        }
        
    </Main>

    </>
}


const Main = styled.main`
padding: 20px;
margin-top: 90px;
margin-bottom: 70px;
`

const ViewLabel = styled.h1`
color: #FF3B30;
font-size: 18px;
font-weight: 700;
margin-bottom: 20px;
`
const SubLabel = styled.h2`
color: gray;
font-size: 16px;
font-weight: 500;
margin-top: 4px;
`



export default Today