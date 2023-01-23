import React from 'react';
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

//component that adds the new Todo items using .map method to the ul element 

//useSelector hoookstakes in a function argument that returns the part of the state that we want,
//in this example whole task.
const TodoList = () => {
	const tasks = useSelector((state)=> state.tasks);


	return (
		<ul className='list-group'>
			{tasks.map((task) => (
				<TodoItem nextId={task.nextId} id={task.id} content={task.content} completed={task.completed} />
			))}
		</ul>
	);
};

export default TodoList;
