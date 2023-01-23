import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../store/todo';

//compoonent that adds a task to the list element. I have used useState hooks to get the value 
//from input field and using the reducer to add tasks I have passed new value to the content
//I have used bootstrap elements to style the app

const AddTodoForm = () => {
	
	const [value, setValue] = useState();

	const dispatch = useDispatch();

	const onSubmit = (event) => {
		event.preventDefault();
		
		dispatch(addTask({
			content: value,
			})
		);
	};

	return (
		<form onSubmit={onSubmit} className='form-inline'>
			<label className='sr-only'>Name</label>
			<input
				type='text'
				className='form-control'
				placeholder='Add task'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			></input>

			<button type='submit' className='btn btn-secondary'>
				Add Task
			</button>
		</form>
	);
};

export default AddTodoForm;
