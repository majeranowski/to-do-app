import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { completeTask } from '../store/todo';
import { deleteTask } from '../store/todo';
import { editTask } from '../store/todo';


const TodoItem = ({ nextId, id, content, completed }) => {
	const dispatch = useDispatch();
//using useRef hook to store a mutable value that I will need to create an edit field
	const inputRef = useRef(true);

	//changing focus functin that will set the focus on the element after clicking the "Edit" button
	const changeFocus = () => {
		inputRef.current.disabled = false;
		inputRef.current.focus();
	  };


	  const handleEditTask = (value, e) => {
		//13 is key code for enter key to accept the changes
		if (e.which === 13) {
		  //dispatching the function we created in the slice, content will have value specified below in the html area
		  dispatch(editTask({ id, content: value }));
		  inputRef.current.disabled = true;
		}
	  };
	//dispatch the action we created in slice, in the action id will stay the same and completed will be an opposite value
	const handleCompleteTask = () => {
		dispatch(completeTask({id: id,
		completed: !completed}))
	};
	
	const handleDeleteTask = () => {
		dispatch(deleteTask({id: id}))
	};
	

	
	   
	return (
		<li className={`list-group-item ${completed && 'list-group-item-warning'}`}>
			<div className='tasks'>
				<span>
					{/* Text area that will be in focus when edit button is clicked, default value is the content of the task we created*/}
				<textarea defaultValue={content} ref={inputRef} disabled={inputRef} onKeyPress={(e) => handleEditTask(inputRef.current.value, e)}></textarea>	
				</span>
				
				<button className='btn btn-success' checked={completed} onClick={handleCompleteTask}>Completed?</button>
				<button onClick={handleDeleteTask} className='btn btn-danger'>Delete</button>
				{/* Enabling text area*/}
				<button onClick={() => changeFocus()} className='btn btn-primary' >Edit - Click enter to accept changes</button>
			</div>
		</li>
	);
};

export default TodoItem;
