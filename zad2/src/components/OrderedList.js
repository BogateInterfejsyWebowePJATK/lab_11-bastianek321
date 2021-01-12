import React from "react"
import ListItem from "./ListItem"
import Button from "./Button"

export default function OrderedList({items = [], refresh = f => f}){
    return (
        <>
            <Button onRefresh={refresh} ></Button>
            <ul className="numbers">
                {items.map((item) =>{
                    return <ListItem item={item}></ListItem>
                })}
            </ul>
        </>
    )
}