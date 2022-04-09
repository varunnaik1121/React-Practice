
import React from 'react'
import { useState } from 'react'
import Card from './Cards'
import {cardItems} from './data'
const Game = () => {
    const [cards,setCards] = useState([])
    //random cards after every new game
    const shuffleCards = ()=>{
        const shuffledCards = [...cardItems].sort(()=>Math.random() - 0.5).map((card)=>({...card}))
        setCards(shuffledCards)
    }
    React.useEffect(()=>{
        shuffleCards()
    },[])

    return <>
        <Card cards={cards} shuffleCards={shuffleCards}>
        </Card>
    </>
}

export default Game
