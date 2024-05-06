import styled from "styled-components"
import { useEffect, useState } from "react"

const Text = styled.h2`
`

const items = [
    "React + Typescript",
    "UX design and implementation",
    "CS @ uOttawa"
]
export const AlternatingText=()=>{
    const [currentItem, setCurrentItem] = useState(items[0]);
    let index = Math.floor(Math.random() * items.length);

    function setItem(){
        let newItem = items[index]
        if (newItem === currentItem){
            index = (index+1) % items.length;
            setCurrentItem(items[index])
        }
        else{
            setCurrentItem(newItem)
        }
        return
    }

    useEffect(()=>{
        setTimeout(()=>{
            setItem()
        }, 1000)
    }, [currentItem])
    
    return(
        <div>
            <Text>{currentItem}</Text>
        </div>
    )
}