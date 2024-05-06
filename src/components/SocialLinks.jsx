import styled from 'styled-components'
import { GitHubIcon } from './svgs/GithubIcon'
import {EmailIcon} from './svgs/EmailIcon'
import {LinkedInIcon} from './svgs/LinkedInIcon'
import {ResumeIcon} from './svgs/ResumeIcon'

const SocialLinksContainer = styled.div`
display: flex;
gap: 0.7rem;
flex-direction: row;
`

export const SocialLinks=()=>{
    return(
        <SocialLinksContainer>
            <GitHubIcon/>
            <LinkedInIcon/>
            <EmailIcon/>
            <ResumeIcon/>
        </SocialLinksContainer>
    )
}