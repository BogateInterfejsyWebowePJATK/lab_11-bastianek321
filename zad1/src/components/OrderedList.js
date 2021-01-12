import React from "react"
import ListItem from "./ListItem"

export default function OrderedList({items}){
    return (
        <ul className="numbers">
            {items.map((item) =>{
                return <ListItem item={item}></ListItem>
            })}
        </ul>
    )
}