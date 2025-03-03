import styled from 'styled-components'
import { GitHubIcon } from './svgs/GithubIcon'
import {EmailIcon} from './svgs/EmailIcon'
import {LinkedInIcon} from './svgs/LinkedInIcon'
import {ResumeIcon} from './svgs/ResumeIcon'

const SocialLinksContainer = styled.div`
display: flex;
width: fit-content;
height: fit-content;
padding: 0.5rem;
gap: 1rem;
flex-direction: row;
background-color: black;
border-radius: 10px;
background-color: ${props => props.dark ? 'black' : 'white'};
` 

export const SocialLinks=(props)=>{
    const {height, width, dark} = props
    return(
        <SocialLinksContainer dark>
            <GitHubIcon height={height} width={width} dark={dark}/>
            <LinkedInIcon  height={height} width={width} dark/>
            <EmailIcon  height={height} width={width} dark/>
            <ResumeIcon  height={height} width={width} dark/>
        </SocialLinksContainer>
    )
}