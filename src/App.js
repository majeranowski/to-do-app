import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

//The biggest challange was the edit button. It took me a lot of approaches but hopefully I found one that is not too bad
//React sometimes can be very tricky and it's easy to lose yourself between the lines :)
const App = () => {
	return (
		<div className='container'>
			<h1>Do you have something to do today?</h1>
			<AddTodoForm />
			<TodoList />
		</div>
	);
};

export default App;
