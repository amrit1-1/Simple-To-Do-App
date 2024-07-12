import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, handleEditSubmit } from '../redux/todoapp/actions';

// This element controls the input form, whether its adding or editing a to-do
const Form = ({editFormVisibility, editTodo, cancelUpdate}) => {

    const dispatch = useDispatch();

    const [todoValue, setTodo] = useState("");

    const [editValue, setEditValue] = useState("");
    useEffect(() => {
        setEditValue(editTodo.content)
    }, [editTodo])

    // Adds the new task from input field to the todo's grabbed with dispatch
    const handleSubmit = (e) => {
        e.preventDefault();
        let date = new Date();
        let time = date.getTime();
        let todoObj = {
            id: time,
            content: todoValue,
            completed: false
        }
        setTodo("");
        dispatch(addTodo(todoObj))
    }

    // Edits the new task from the input field and changes it in the todo's grabbed with dispatch
    const editSubmit = (e) => {
        e.preventDefault();
        let editedObj = {
            id: editTodo.id,
            content: editValue,
            completed: false
        }
        dispatch(handleEditSubmit(editedObj))
    }

    return(
        <>
        {/*Conditional rendering that shows an 'add task' functionality or an 'edit' functionality depending
        on whether the edit button has been clicked or not. */}
        {editFormVisibility===false?(
            <form className="form" onSubmit={handleSubmit}>
                <label>Add your task: </label>
                <div>
                    <input type="text" required value={todoValue} onChange={(e) => setTodo(e.target.value)}/>
                    <button type="submit" className="button">ADD</button>
                </div>
            </form>
        ):(
            <form className="form" onSubmit={editSubmit}>
                <label>Update your task: </label>
                <div>
                    <input type="text" required value={editValue || ""} onChange={(e) => setEditValue(e.target.value)}/>
                    <button type="submit" className="update">UPDATE</button>
                </div>
                {/* This button allows the user to cancel the 'edit' element and return to normal page which 
                has the 'add task' element. */}
                <button type="button" className="back" onClick={cancelUpdate}>GO BACK</button>
            </form>
        )}
        </>
    )
}

export default Form;