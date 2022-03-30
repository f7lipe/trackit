import styled from 'styled-components';


function Navbar(){
    return(

        <Header>
            <Logo>TrackIt</Logo>
            <ProfPic> </ProfPic>
        </Header>
        
    )
    
}

const Header = styled.header`
height: 67px;
background-color: rgb(247, 247, 247);
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
font-size: xx-large;
top: 0;
left: 0;
right: 0;
padding: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;
const Logo = styled.h1`
font-family: 'Playball';
font-style: normal;
font-weight: 400;
color: rgb(234, 77, 61);
`
const ProfPic = styled.div`
width: 45px;
height: 45px;
background: white;
border: 1px gray dashed;
border-radius: 50px;
`

export default Navbar