import styled from 'styled-components'
import './styling/aboutme.css'
// import { AlternatingText } from './AlternatingText'
// import {Line} from './svgs/Line'
import { SocialLinks } from './SocialLinks'
import { PersonalImageOutlineBox } from './PersonalImageOutlineBox'
import { Card } from './CustomComponents'
import { palette } from './palette'

const NameText = styled.h1`
    font-weight: bold;
    font-size: 50px;
    margin: 0;
    color: ${props => props.isPink ? '#da2780' : 'black'};
    background:  ${props => props.isPink ? 'linear-gradient(90deg,#4a0c25 0%,#a91212 100%)' : 'linear-gradient(90deg,#919191 0%,#919191 100%)'};
    -webkit-background-clip: text;
    -webkit-mask-image: ${props => props.isPink ? 'linear-gradient(90deg, #000 0%, #000 100%)' : 'linear-gradient(90deg, #000 0%, #000 100%)'};
    mask-image: ${props => props.isPink ? 'linear-gradient(90deg, #000 0%, #000 100%)' : 'linear-gradient(90deg, #000 0%, #000 100%)'};
    color: ${props => props.isPink ? 'transparent' : 'transparent'};
`
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

const AboutMeInnerContainer = styled.div`
text-align: left;
width: 30rem;
margin-left: 10rem;
display: flex;
flex-direction: column;
`

const GreetingContainer = styled.div`
gap: 1rem;
display: flex;
`

const AboutMeWrapper = styled.div`
display: flex;
margin-top: 1rem;
gap: 0.5rem;
flex-direction: row;
`

const AboutMeTextBlock =()=>{
    return(
        <GreetingContainer>
            <AboutMeText>I am a 3rd year Computer Science CO-OP student at the University of Ottawa. I expect to graduate by January 2027. My past projects demonstrate my proficency
                and aptitude for web-development. I have 12 months of work experience including front-end development and DevOps.
            </AboutMeText>
        </GreetingContainer>
    )
}
export const AboutMe=()=>{
    const NameHeading = ({ isName, content }) => {
        return (
            <NameText isPink={isName}>{content}</NameText>
        );
    };
    return(
        <>
    <AboutMeWrapper id="AboutMe_Wrapper">
        <AboutMeInnerContainer id="AboutMe_InnerContainer">
        <GreetingContainer>
            <NameHeading content={"Hey! I'm "}></NameHeading>
            <NameHeading isName={true} content={"Isabelle."}></NameHeading>
        </GreetingContainer>
        <AboutMeTextBlock/>
            <SocialLinks height={35} width={35} dark/>
        </AboutMeInnerContainer>
        <PersonalImageOutlineBox/>
    </AboutMeWrapper>
    </>
    )
}
{/* <CirclesContainer>
<div className='circles'>
                <div className='circle1'></div>
                <div className='circle2'></div>
</div>
</CirclesContainer> */}