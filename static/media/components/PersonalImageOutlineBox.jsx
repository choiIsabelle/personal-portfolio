import styled from "styled-components"
import choiIsabelleimage from './images/choiIsabelleimage.jpg'

const BoxOutline = styled.div`
border: 5px solid #da2780;
width: 349px;
height: 349px;
position: absolute;
z-index: -1;
margin-top: 6.5rem;
margin-left: 41rem;
border-radius: 10px;
&.grow {
    transition: all .2s ease-in-out;

    &:hover {
        background-position: left center;
        transform: scale(1.1);
    }
}

&:hover {
    background-position: left center;
    transform: scale(1.1);
}
`

const StyledImage = styled.div`
margin-top: 5.5rem;
border-radius: 10px;
height: 349px;
width: 349px;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
&.grow {
    transition: all .2s ease-in-out;

    &:hover {
        background-position: left center;
        transform: scale(1.1);
    }
}

&:hover {
    background-position: left center;
    transform: scale(1.1);
}
`

export const PersonalImageOutlineBox=()=>{
    return(
        <>
        <StyledImage id='img'></StyledImage> 
        <BoxOutline/>
        </>
    )
}