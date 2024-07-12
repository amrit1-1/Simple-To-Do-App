import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { removeTodo, handleCheckbox } from '../redux/todoapp/actions';

// This function exports the list of 'to-dos', grabbing the information using dispatch and selector
export const ToDos = ({handleEditClick, editFormVisibility}) => {

    const dispatch = useDispatch();

    const todos = useSelector((state) => state.operationsReducer);

    // This maps each task in its own 'Row' element with its own checkbox, edit and delete elements.
    return todos.map((todo) => (
        <div key={todo.id} className="todo">
            <Container>
                <Row>
                    {/*Conditional rendering that doesnt display a checkbox if the user has clicked the 'edit' button*/}
                    {editFormVisibility === false && (
                    <Col xs={1}>
                    <input style={{alignContent: "center"}} type="checkbox" checked={todo.completed}
                    onChange={() => dispatch(handleCheckbox(todo.id))}></input>
                    </Col>
                    )}
                    <Col xs={1}>
                    </Col>
                    <Col>
                    <p style={todo.completed === true ? {textDecoration: 'line-through', textAlign: "left"}: {textDecoration: 'none', textAlign: "left"}}>{todo.content}</p>
                    </Col>
                    <Col xs={3}>
                    <div style={{alignContent: "center"}}>
                        {/*Conditional rendering that doesnt display the 'edit' button if the task has been checked off*/}
                        {todo.completed === true ? (
                            <>
                            <span onClick={() => dispatch(removeTodo(todo.id))} className='delete-tool'>DELETE</span>
                            </>
                        ):(
                            <>
                            <span onClick={() => handleEditClick(todo)} className='edit-tool'>EDIT</span>
                            <span onClick={() => dispatch(removeTodo(todo.id))} className='delete-tool'>DELETE</span>
                            </>
                        )}
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
    ))
}