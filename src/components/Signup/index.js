import styled from "styled-components"
import Brand from "../universal/Logo"

function Signup() {
    return (
        <Main>
            <Brand />
            <Form>
                <Label>
                    <Input type="e-mail" name="e-mail" placeholder="email" required />
                </Label>

                <Label>
                    <Input type="password" name="password" placeholder="senha" required />
                </Label>

                <Label>
                    <Input type="text" name="username" placeholder="nome" required />
                </Label>

                <Label>
                    <Input type="url" name="profile-picture" placeholder="foto" required />
                </Label>

                <EnterButton type="submit" value="Cadastrar" />
            </Form>
            <SigninButton>Já tem uma conta? Faça login</SigninButton>
        </Main>
    )
}

const Main = styled.form`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 10vh;
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
width: 80vw;
height: 51px;
border-radius: 5px;
border: 1px #D4D4D4 solid;
padding: 20px;
`
const EnterButton = styled.input`
width; 80vw;
height: 45px;
background-color: #EA4D3D;
color: white; 
border: none;
border-radius: 5px;
`
const SigninButton = styled.button`
margin-top: 20px;
border: none;
color:  #EA4D3D;
background-color: transparent;
`

export default Signup