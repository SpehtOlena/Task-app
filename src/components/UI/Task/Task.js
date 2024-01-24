import './Task.css';
import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.js';
import Button from '../Button/Button.js';
import React from 'react';

import StyledEdiText from './StyledEditText.js'

const Task = ({ task, removeTask, handleComplete }) => {
	const [complete, setComplete] = useState(true);
	const handleClick = () => {
		setComplete(!complete);
		const check = (task.complete) = complete;
		handleComplete(check);
	}
	function onSave(task) {
	}

	return (
		<div key={task.id} className={'task'}>
			<div className={'task-title'}>
				<Checkbox onClick={handleClick} complete={complete} />
				{
					<StyledEdiText className={complete ? 'task-complete' : 'task-uncomplete'}
						type='text'
						value={task.title}
						onSave={onSave}>
						{task.title} </StyledEdiText>
				}

				<Button type={'delete'} onClick={() => removeTask(task)} />
			</div>
			<div className={'divider'} />
			<div className={'task-description'}>
				<StyledEdiText className={complete ? 'task-complete-s' : 'task-uncomplete-s'}
					type='text'
					value={task.description}
					onSave={onSave}>
					{task.description}
				</StyledEdiText>
			</div>

		</div>
	)
}
export default Task