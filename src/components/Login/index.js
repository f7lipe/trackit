import axios from "axios";
import styled from "styled-components"
import Brand from "../universal/Logo"

import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import { useState } from "react"

import TokenContext from "../../contexts/TokenContext";
import ImageContext from "../../contexts/ImageContext";
import { useContext } from "react";

function Login() {

    const {token, setToken} = useContext(TokenContext)
    const {image, setImage} = useContext(ImageContext)
    
    const [signinData, setSigninData] = useState({email:'', password:''})
    const [loading, setLoading] = useState(false)
    const redirectUser = useNavigate()
    
    function login(event){
        event.preventDefault()
        setLoading(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const promise = axios.post(URL,
            {
                email: signinData.email, 
                password: signinData.password
            })
        promise.then(response => {
            const contextValue = response.data //{id, name, image, email, password, token}
            setToken(contextValue.token)
            setImage(contextValue.image)
            redirectUser("/app")
        })
        promise.catch(err =>{
            alert(err.response.statusText)
            setLoading(false)
        })
    }
 
    return (
        <Main>
            <Brand />
            <Form onSubmit={login}> 
                <Label>
                    <Input type="e-mail" name="e-mail" placeholder="email" value={signinData.email} onChange={(e)=>setSigninData({...signinData, email: e.target.value})} required disabled={loading}/>
                </Label>
                <Label>

                    <Input type="password" name="password" placeholder="senha" value={signinData.password} onChange={(e)=>setSigninData({...signinData, password: e.target.value})} required disabled={loading}/>
                </Label>

                <EnterButton type="submit" value="Entrar" disabled={loading}>
                        {loading ? <ThreeDots color="white" height={80} width={80}/> : "Entrar"}
                </EnterButton>
            </Form>
            <Link to={"/signup"}>
            <SignupButton>Não tem uma conta? Cadastre-se</SignupButton>
            </Link>
        </Main>
    )
}

const Main = styled.main`
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
const EnterButton = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 80vw;
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