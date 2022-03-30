import styled from "styled-components"
import Brand from "../universal/Logo"

function Login() {
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

                <EnterButton type="submit" value="Entrar" />
            </Form>
            <SignupButton>Não tem uma conta? Cadastre-se</SignupButton>
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
const SignupButton = styled.button`
margin-top: 20px;
border: none;
color:  #EA4D3D;
background-color: transparent;
`

export default Login