import './Task.css';
import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.js';
import Button from '../Button/Button.js';

const Task = ({ task, editTask, removeTask, handleComplete }) => {
	const [complete, setComplete] = useState(true);
	const handleClick = () => {
		setComplete(!complete);
		const check = (task.complete) = complete;
		handleComplete(check);
	}
	return (
		<div key={task.id} className={'task'}>
			<div className={'task-title'}>
				<Checkbox onClick={handleClick} complete={complete} />
				<p className={complete ? 'task-complete' : 'task-uncomplete'}>
					{task.title}
				</p>
				<Button type={'edit'} onClick={() => editTask(task)} />
				<Button type={'delete'} onClick={() => removeTask(task)} />
			</div>
			<div className={'divider'} />
			<div className={'task-description'}>
				<p className={complete ? 'task-complete' : 'task-uncomplete'}>
					{task.description}
				</p>
			</div>

		</div>
	)
}
export default Task