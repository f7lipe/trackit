import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components"
import Brand from "../universal/Logo"
import { ThreeDots } from "react-loader-spinner";

function Signup() {

    const [signupData, setSignupData] = useState({email:'', name:'', image:'', password:'', photoUrl:''})
    const [loading, setLoading] = useState(false)
    let redirectUser = useNavigate()
    function signup(event){
        event.preventDefault()
        setLoading(true)
        const SINGUP_API = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
        const promise = axios.post(SINGUP_API,
            {email: signupData.email,
            name: signupData.name,
            password: signupData.password,
            image: signupData.photoUrl}
            )

        promise.then((response)=>{
            redirectUser("/")
        })

        promise.catch(err =>{
            alert(err.response.statusText)
            setLoading(false)
        });

        
    }

    
    return (
        <Main>
            <Brand />
            <Form onSubmit={signup} >
                <Label>
                    <Input type="e-mail" name="e-mail" placeholder="email" value={signupData.email} onChange={(e)=>setSignupData({...signupData, email: e.target.value})} required disabled={loading}/>
                </Label>

                <Label>
                    <Input type="password" name="password" placeholder="senha" value={signupData.password} onChange={(e)=>setSignupData({...signupData, password: e.target.value})} required disabled={loading}/>
                </Label>

                <Label>
                    <Input type="text" name="username" placeholder="nome" value={signupData.name} onChange={(e)=>setSignupData({...signupData, name: e.target.value})} required disabled={loading}/>
                </Label>

                <Label>
                    <Input type="url" name="profile-picture" placeholder="foto" value={signupData.photoUrl} onChange={(e)=>setSignupData({...signupData, photoUrl: e.target.value})} required disabled={loading}/>
                </Label>

                <EnterButton type="submit" value="Cadastrar" disabled={loading}>
                    {loading ? <ThreeDots color="white" height={80} width={80}/> : "Cadastrar" }
                </EnterButton>
                
            </Form>
            <Link to={"/"}>
            <SigninButton>Já tem uma conta? Faça login</SigninButton>
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

:disabled{
    background: #ccc;
}
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
align-items: center;
justify-content: center;
width: 80vw;
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