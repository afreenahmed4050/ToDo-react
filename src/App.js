import React, {useState, useEffect} from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from "firebase";
import { db } from "./firebase_config";
import TodoListItem from "./Todo";

function App(){
    const [todos,setTodos] = useState([])
    const [todoInput, setTodoInput] = useState('');

    useEffect(() => {
        getTodos();
    }, [])

    function handleChange(e){
        setTodoInput(e.target.value);
    }

    function getTodos(){
        db.collection("todos").orderBy('timestamp', 'desc').onSnapshot(function (querySnapshot) {
            setTodos(
                querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    todo: doc.data().todo,
                    progress: doc.data().progress,
                }))
            );
        })
    }

    function addTodo(e){
        e.preventDefault();
        console.log("submitted");

        db.collection('todos').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            todo: todoInput,
            progress: true,
        });

        setTodoInput('');
    }

    return (
        <div className="app">
            <form>
                <h1>Samreen's ToDo App 🔥</h1>
                <TextField value={todoInput} onChange={handleChange} id="standard-basic" label="Write a ToDO" />
                <Button className="button" type="submit" onClick={addTodo} variant="contained">Default</Button>
            </form>

            {todos.map((todo) => (
                <TodoListItem todo={todo.todo} progress={todo.progress} id={todo.id} />
            ))}
        </div>
    );
}

export default App;