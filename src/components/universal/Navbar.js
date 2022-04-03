import styled from 'styled-components';


function Navbar(props) {
    const { profilePicture } = props
    return (

        <Header>
            <Logo>TrackIt</Logo>
            <ProfPic>
               <Image src={profilePicture}/>
            </ProfPic>
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
border: 1px gray;
border-radius: 50px;
`
const Image = styled.img`
width: 45px;
height: 45px;
border-radius: 50px;
`

export default Navbar