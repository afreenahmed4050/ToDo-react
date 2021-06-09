import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo, progress, id}) {

    function toggleProcess(){
        db.collection("todos").doc(id).update({
            progress: !progress
        })
    }

    function deleteTodos(){
        db.collection("todos").doc(id).delete();
    }

    return (
        <div className="todoList">
            <ListItem>
                <ListItemText primary={todo} secondary={progress ? "⏰ In Progress" : "✔️ Completed"} />
            </ListItem>
            <Button onClick={toggleProcess}>{progress ? "Done" : "Undo"}</Button>
            <Button onClick={deleteTodos}>X</Button>
        </div>
    )
}
