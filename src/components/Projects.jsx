import React from 'react'
import styled from 'styled-components'
import * as c from './CustomComponents'
import ExperienceSection from './ExperienceSection'

const StyledSectionHeaderContainer = styled.div`
display: flex;
gap: 0.5rem;
`

const ProjectsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    flex-wrap: wrap;
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

const ExperienceSectionContainer = styled.div`
display: flex;
flex-direction: column;
`

const Projects = () => {
  return (
    <ProjectsWrapper>
    <ExperienceSectionContainer>
    <StyledSectionHeaderContainer>
        <c.NameText>My</c.NameText><c.NameText isPink>Work Experience</c.NameText>
    </StyledSectionHeaderContainer>
        <ExperienceSection title="DevSecOps" company="Ford Motor Company of Canada" location="Ottawa, ON, CA"/>
    </ExperienceSectionContainer>
    </ProjectsWrapper>
  )
}

export default Projects
