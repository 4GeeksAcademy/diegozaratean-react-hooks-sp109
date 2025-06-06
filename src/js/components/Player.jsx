import React, { useState } from "react";

const Player = ()=>{

    const[backColor, setBackColor ]= useState('red')
    const[playColor, setPlayColor ]= useState('red')
    const[stopColor, setStopColor ]= useState('red')
    const[nextColor, setNextColor ]= useState('red')

    function back(){
        if(backColor=='red'){
            setBackColor('green')
            setPlayColor('red')
            setStopColor('red')
            setNextColor('red')
        }else{
            setBackColor('red')
        }
    }

    function play(){
        if(playColor=='red'){
            setPlayColor('green')
            setBackColor('red')
            setStopColor('red')
            setNextColor('red')
        }else{
            setPlayColor('red')
        }
    }

     function stop(){
        if(stopColor=='red'){
            setStopColor('green')
            setBackColor('red')
            setPlayColor('red')
            setNextColor('red')
        }else{
            setStopColor('red')
        }
    }

     function next(){
        if(nextColor=='red'){
            setNextColor('green')
            setBackColor('red')
            setStopColor('red')
            setPlayColor('red')
        }else{
            setNextColor('red')
        }
    }

    function oprimirBoton(boton){
        setBackColor('red')
        setStopColor('red')
        setPlayColor('red')
        setNextColor('red')

        if(boton =='back'){
            setBackColor('green')
        }else if(boton =='play'){
            setPlayColor('green')
        }

    }

    return(
        <>
            <h1>Player</h1>
            <button onClick={ ()=>oprimirBoton('back')} style={{backgroundColor: backColor}}>atras</button>
            <button onClick={ ()=>oprimirBoton('play')} style={{backgroundColor: playColor}}>play</button>
            <button onClick={ stop} style={{backgroundColor: stopColor}}>stop</button>
            <button onClick={ next} style={{backgroundColor: nextColor}}>siguiente</button>
        </>
    )
}

export default Player