import './Task.css';
import { useState } from 'react';
import Checkbox from '../Checkbox/Checkbox.js';
import Button from '../Button/Button.js';
import React from 'react';

import StyledEdiText from './StyledEditText.js'
import Modal from '../../Modal/Modal.js';

const Task = ({ task, removeTask, handleComplete, onClose }) => {
	const [complete, setComplete] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);
	const onClickButton = () => {
		setModalOpen(!modalOpen)
		console.log(modalOpen);
	}
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

				<Button type={'delete'} onClick={onClickButton} />
				{/* <Button type={'delete'} onClick={() => removeTask(task)} /> */}
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
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
				<Button type={'small'} onClick={() => removeTask(task)}>Yes</Button>
			</Modal>
		</div >
	)
}
export default Task