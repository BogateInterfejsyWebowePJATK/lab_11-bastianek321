import React from "react"

export default function Button({onRefresh = f => f}){
    return (
        <button onClick={() => onRefresh()} style={{height: '100px', width: '100px'}}>Kliknij mnie</button>
    )
} 