import config from "../../functions/config";
import post from "../../functions/post"
import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react";
import Weekdays from "../universal/Weekdays";

function NewHabit({ addingNewHabit, isAddingNewHabit, token, updateAll }) {

    const [habitName, setHabitName] = useState("")
    const [selectedDays, setSelectedDays] = useState([]) //será atualizado em Weekdays
    const [loading, setLoading] = useState(false)

    function addNewHabit(event) {

        event.preventDefault()

        if (verifySelectedDays(selectedDays)) {
            setLoading(true)
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
            const data = { name: habitName, days: selectedDays }
            const headers = config(token)
            const promise = post(URL, data, headers)
            promise.then(() => { 
                setHabitName("")
                updateAll(['yes'])
                addingNewHabit(false) //altera isAddingNewHabit em NewHabit
                setLoading(false)
            }) 
            promise.catch(err => {
                alert(`Houve uma falha ao cadastrar seu hábito.\n Resposta do servidor: ${err.response.statusText}`)
                setLoading(false)
            })
        }
    }

    function verifySelectedDays(selected) {
        if (selected.length === 0) {
            alert("Selecione pelo menos um dia da semana")
            return false
        }
        return true
    }

    return (
        <NewHabitCard isVisible={isAddingNewHabit}>
            <Form onSubmit={addNewHabit}>
                <Label>
                    <Input type="text"
                        name="habit"
                        placeholder="nome do hábito"
                        value={habitName}
                        onChange={(e) => setHabitName(e.target.value)}
                        required />
                </Label>
                <Label>
                    <Weekdays isSelectable={true}
                        callback={setSelectedDays} />
                </Label>
                <ActionButtons>
                    <ActionButton inputColor="gray"
                        type="button"
                        onClick={() => addingNewHabit(false) /* atualiza isAddingNewHabit em Habits */}> 
                        Cancelar
                    </ActionButton>
                    <ActionButton type="submit" 
                                  disabled={loading}>
                        {loading ? <ThreeDots color="white" height={30} width={30} /> : "Salvar"}
                    </ActionButton>
                </ActionButtons>
            </Form>
        </NewHabitCard>
    )
}

const NewHabitCard = styled.section` 
display: ${props =>props.isVisible ? 'flex' : 'none'};
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
const ActionButton = styled.button`
width: 70px;
height: 35px;
background-color: ${props => props.inputColor || "#EA4D3D"};
color: white; 
border: none;
border-radius: 5px;
margin-right: 10px;
display: flex;
justify-content: center;
align-items: center;
`

export default NewHabit