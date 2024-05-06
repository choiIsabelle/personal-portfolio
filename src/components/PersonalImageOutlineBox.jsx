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
`
export const PersonalImageOutlineBox=()=>{
    return(
        <>
        <img style={{marginTop:'5.5rem', borderRadius:'10px'}} height='349px' width='349px' src={choiIsabelleimage} alt="personalImage"/>
        <BoxOutline/>
        </>
    )
}