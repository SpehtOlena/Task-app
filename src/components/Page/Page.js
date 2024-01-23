import './Page.css';
import { useState } from 'react';
import Input from '../UI/Input/Input.js';
import Button from '../UI/Button/Button';
import Task from '../UI/Task/Task.js'

const Page = () => {
	const [inputValueTitle, setInputValueTitle] = useState();
	const [inputValueDescription, setInputValueDescription] = useState();
	const [todos, setTodos] = useState([]);
	const handleChangeTitle = (e) => {
		setInputValueTitle(e.target.value)
	}
	const handleChangeDescription = (e) => {
		setInputValueDescription(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault();
		if (inputValueTitle.trim()) {
			setTodos([...todos, { id: Date.now(), title: inputValueTitle, complete: false }])
			setInputValueTitle('')
			setInputValueDescription('')
			console.log(todos);
		} return null
	}
	const removeTask = (todoId) => {
		setTodos(todos.filter(id => id !== todoId))
	}
	const handleComplete = (todo_completed) => {
		setTodos(todos.filter(complete => complete !== todo_completed))
		console.log(todos);
	};
	return (
		<div className={'page'}>
			<div className={'input-container'}>
				<div className={'input-container-item'}>
					<Input type={'text'} placeholder={'Title'} value={inputValueTitle} onChange={handleChangeTitle} />
				</div>
				<div className={'input-container-item'}>
					<Input type={'description'} placeholder={'Description'} value={inputValueDescription} onChange={handleChangeDescription} />
				</div>
				<Button children={'Add'} onClick={handleSubmit} />
			</div>
			<div className={'tasks-container'}>
				{
					todos.map((item) => (
						<Task task={item} key={item.id} handleComplete={handleComplete} removeTask={removeTask} />
					))
				}
				{
					todos.length === 0 && <p>Empty</p>
				}
			</div>
			<div className={'statistic-container'}>
				<div className={'statistic-container-items'}>
					<p>Total tasks:<span className={'statistic-number'}>{todos.length}</span></p>
				</div>
				<div className={'statistic-container-items'}>
					<p>completed
						<span className={'statistic-number'}>{todos.filter(item => item.complete === true).length}</span>
						out of
						<span className={'statistic-number'}>{todos.length}</span>
						tasks</p>
				</div>
			</div>
		</div>

	)
}
export default Page