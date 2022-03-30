import Weekdays from "../universal/Weekdays";
import styled from "styled-components";

function NewHabit(){

    return(
        <NewHabit>   
            <Form>
                <Label>
                    <Input type="text" name="habit" placeholder="nome do hábito" required />
                </Label>
                <Label>
                <Weekdays></Weekdays>
                </Label>
                <ActionButtons>
                <ActionButton inputColor="gray" type="button" value="Cancelar" />
                <ActionButton  type="submit" value="Salvar" />
                </ActionButtons>
                
            </Form>
        </NewHabit>
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
width; 50px;
height: 35px;
background-color: ${props => props.inputColor ||  "#EA4D3D"};
color: white; 
border: none;
border-radius: 5px;
margin-right: 10px;
`

export default NewHabit