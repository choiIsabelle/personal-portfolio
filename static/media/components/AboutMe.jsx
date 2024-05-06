import styled from 'styled-components'
import './styling/aboutme.css'
import { AlternatingText } from './AlternatingText'
import {Line} from './svgs/Line'
import { SocialLinks } from './SocialLinks'
import { PersonalImageOutlineBox } from './PersonalImageOutlineBox'

const NameText = styled.h1`
    font-weight: bold;
    font-size: 40px;
    margin: 0;
    color: ${props => props.isPink ? '#da2780' : 'black'};
    background:  ${props => props.isPink ? 'linear-gradient(90deg, #da2780 0%,#660e3c 100%)' : 'linear-gradient(90deg, #bcbcbc 0%,#444444 100%)'};
    -webkit-background-clip: text;
    -webkit-mask-image: ${props => props.isPink ? 'linear-gradient(90deg, #000 0%, #000 100%)' : 'linear-gradient(90deg, #000 0%, #000 100%)'};
    mask-image: ${props => props.isPink ? 'linear-gradient(90deg, #000 0%, #000 100%)' : 'linear-gradient(90deg, #000 0%, #000 100%)'};
    color: ${props => props.isPink ? 'transparent' : 'transparent'};
`

const NameHeading = ({ isName, content }) => {
    return (
        <NameText isPink={isName}>{content}</NameText>
    );
};
const CirclesContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
`

const ElementsContainer = styled.div`
display: flex;
gap: 0px;
flex-direction: row;
`
const AboutMeText = styled.p`
text-align: left;
font-weight: 500;
`

const AboutMePart1Container = styled.div`
text-align: left;
width: 30rem;
margin-left: 10rem;
display: flex;
flex-direction: column;
`

const AboutMePart2 =()=>{
    return(
        <div style={{flexDirection:'column', display:'flex' }}>
        <AboutMeText>I'm a <b>3rd year Computer Science student</b> at the University of Ottawa with:</AboutMeText>
        <AboutMeText style={{color:'#da2780', fontWeight:'bold'}}> * Professional and academic experience in Front End Development. </AboutMeText>
        <AboutMeText><b>I'm expecting to graduate January 2027.</b></AboutMeText>
        </div>
    )
}
export const AboutMe=()=>{
    return(
    <div id="AboutMe-Intro" style={{flex:'display', flexDirection:'column'}}>
        <ElementsContainer>
        <AboutMePart1Container>
        <AlternatingText/>
            <NameHeading content={"Hello!"}><br/></NameHeading>
            <NameHeading isName={true} content={"I'm Isabelle"}></NameHeading>
            <SocialLinks/>
        <Line/>
        <AboutMePart2/>
        </AboutMePart1Container>
        <CirclesContainer>
        <div className='circles'>
                        <div className='circle1'></div>
                        <div className='circle2'></div>
        </div>
        </CirclesContainer>
        <PersonalImageOutlineBox/>
        </ElementsContainer>
    </div>
    )
}