import React from 'react'
import styled from 'styled-components'
import {palette} from './palette'
import { LocationIcon } from './svgs/LocationIcon'
import {OpenLinkIcon} from './svgs/OpenLinkIcon'

const StyledHeading = styled.h3`
font-weight: 500;
font-size: clamp(1.25rem, 2vw, 22px); 
color:  ${(props) => props.color };
line-height: 1.5;
`

const StyledHeadingContainer = styled.div`
display: flex;
gap: 0.45rem;
align-items: center;
`

const ExperienceTitle =({title, company, location})=>{
    return (
        <StyledHeadingContainer>
            <StyledHeading>{title}</StyledHeading><StyledHeading color={palette.lightRed}> @ {company}</StyledHeading>
            <LocationIcon width={25} height={25}/>
            <StyledHeading color={palette.green}>{location}</StyledHeading>
            <OpenLinkIcon width={23} height={23}/>
        </StyledHeadingContainer>
    )
}

const ExperienceSection=(props)=> {
const {title, company, location} = props

return (
    <div><ExperienceTitle title={title} company={company} location={location}/></div>
  )
}

export default ExperienceSection
