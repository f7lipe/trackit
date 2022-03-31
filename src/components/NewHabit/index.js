import Weekdays from "../universal/Weekdays";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

function NewHabit(props){

    const {newHabitCallback, token} = props
    const [habitName, setHabitName] = useState("")
    const [selectedDays, setSelectedDays] = useState([])
    const [loading, setLoading] = useState(false)
    
    function submit(event){
        
        event.preventDefault()

        if(verify()){
            setLoading(true)
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            }
            
            const bodyParameters = {
                name: habitName, 
                days: selectedDays
             }
    
            const promise =  axios.post(URL, bodyParameters, config)
            promise.then(response =>{
                newHabitCallback(false) //altera o estado de NewHabit
            }) 
            promise.catch(err =>{
                alert(`Houve uma falha ao cadastrar seu hábito.\n Resposta do servidor: ${err.response.statusText}`)
                setLoading(false)
            })
    
        }
    }

    function verify(){
        if (selectedDays.length === 0){
            alert("Selecione pelo menos um dia da semana") 
            return false
        }
        return true
    }

    return(
        <NewHabitCard>   
            <Form onSubmit={submit}>
                <Label>
                    <Input type="text" name="habit" placeholder="nome do hábito" value={habitName} onChange={(e) => setHabitName(e.target.value)} required />
                </Label>
                <Label>
                <Weekdays isSelectable={true} callback={setSelectedDays}/>
                </Label>
                <ActionButtons>
                <ActionButton inputColor="gray" type="button" value="Cancelar" onClick={()=>newHabitCallback(false)}/>
                <ActionButton  type="submit" value="Salvar" disabled={loading}/>
                </ActionButtons>
                
            </Form>
        </NewHabitCard>
    )
}

const NewHabitCard = styled.section` 
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
height: 180px;
padding: 20px;
border-radius: 10px; 
background-color: white;
box-shadow: 0px 2px 4px rgba(10, 10, 10, 0.30);
margin-bottom: 60px;
`

const Form = styled.form`
width: 80vw;
display: flex;
flex-direction: column;
`
const Label = styled.label`
margin-bottom: 10px;
`
const Input = styled.input`
width: 100%;
height: 51px;
border-radius: 5px;
border: 1px #D4D4D4 solid;
padding: 20px;
`

const ActionButtons = styled.section`
display: flex;
justify-content: flex-end;
`

const ActionButton = styled.input`
width: 50px;
height: 35px;
background-color: ${props => props.inputColor ||  "#EA4D3D"};
color: white; 
border: none;
border-radius: 5px;
margin-right: 10px;
`

export default NewHabit