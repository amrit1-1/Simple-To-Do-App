import './App.css';
import Form from './components/Form';
import { ToDos } from './components/ToDos';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAll } from './redux/todoapp/actions';
import { useState } from 'react';

// This is the parent element that sets and manages most of the states.
function App() {

  // Using this to grab the 'delete' action
  const dispatch = useDispatch();

  // Grabs the todos 
  const todos = useSelector((state) => state.operationsReducer);

  // Controls the edit form being shown or not.
  const [editFormVisibility, setEditFormVisibility] = useState(false);

  // Controls the edited title of the todo task.
  const [editTodo, setEditTodo] = useState('');

  // Controls the info instructions being shown or not.
  const [infoVisibility, setInfoVisibility] = useState(false);

  // Controls what happens when you click 'edit'
  const handleEditClick = (content) => {
    setEditFormVisibility(true);
    setEditTodo(content);
  }

  // Controls what happens when you want to go back from editing
  const cancelUpdate = () => {
    setEditFormVisibility(false);
  }

  return (
    <div className="App">
      <div className='title-and-tasks'>
        {/*This div 'title-and-tasks' is stuck at the top no matter how far you scroll*/}
        <h1>TO DO LIST</h1>
        {/*Retrieves the current length of the todo array to display to user*/}
        <h4>{todos.length} TASKS</h4>
        {/*Conditional rendering that shows either the 'info' button or the instructions with a 'close' button*/}
        {infoVisibility === false?(
          <button className="info" onClick={() => setInfoVisibility(true)}>INFO</button>
        ):(
          <>
          <p>Use this web application to help organise, store, and edit your tasks.</p>
          <ol className='list'>
            <li> Add your task by typing it into the input field and clicking 'ADD'.</li>
            <li> Edit your task by clicking 'EDIT', then change the task title in the input field.</li>
            <li> Delete a task with the 'DELETE' button or delete all tasks with the 'CLEAR ALL' button at the bottom.</li>
          </ol>
          <button className='go-back' onClick={() => setInfoVisibility(false)}>CLOSE</button>
          </>
        )}
      </div>
      {/*Input form and 'todo' task elements*/}
      <Form editFormVisibility={editFormVisibility} editTodo={editTodo} cancelUpdate={cancelUpdate}/>
      <ToDos handleEditClick={handleEditClick} editFormVisibility={editFormVisibility}/>
      {/*If there's more than 1 task then the 'clear all' button appears */}
      {todos.length > 1 && (
        <button className='delete' onClick={() => dispatch(deleteAll())}>CLEAR ALL</button>
      )}
    </div>
  );
}

export default App;
