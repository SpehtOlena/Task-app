import ReactDOM from 'react-dom';
import './Modal.css';
import Button from '../UI/Button/Button';

const Modal = ({ isOpen, onClose, children, task, removeTask }) => {
	if (!isOpen) return null;
	return ReactDOM.createPortal(
		<div className={'modal-overlay'}>
			<div className={'modal'}>
				Do you want to Delet this item?

				<div className={'modal-button-container'}>
					{children}
					<Button type={'small'} onClick={onClose}>No</Button>
				</div>
			</div>
		</div>,
		document.getElementById('modal-root')
	)
}
export default Modal