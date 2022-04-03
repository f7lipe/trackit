import Brand from "../universal/Logo"
import ImageContext from "../../contexts/ImageContext";
import { Link, useNavigate } from "react-router-dom";
import post from "../../functions/post";
import styled from "styled-components"
import { ThreeDots } from "react-loader-spinner";
import TokenContext from "../../contexts/TokenContext";
import { useState, useContext } from "react"

function Login() {

    const { setToken } = useContext(TokenContext)
    const { setImage } = useContext(ImageContext)
    
    const [signinData, setSigninData] = useState({email:'', password:''})
    const [loading, setLoading] = useState(false)
    const redirectUser = useNavigate()
    
    function login(event){
        event.preventDefault()
        setLoading(true)
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const credentials = {email: signinData.email, password: signinData.password}
        const promise = post(URL, credentials)
        promise.then(response => {
            const contextValue = response.data //{id, name, image, email, password, token}
            setToken(contextValue.token)
            setImage(contextValue.image)
            localStorage.setItem('token', contextValue.token)
            localStorage.setItem('profPic', contextValue.image)
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