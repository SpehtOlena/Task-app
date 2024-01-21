import './Button.css';
import { LuTrash2 } from "react-icons/lu";
import { FiEdit3 } from "react-icons/fi";

const Button = ({ children, onClick, type }) => {
	switch (type) {
		case "delete": {
			return (
				<LuTrash2 className={'button-delete'} size={30} />
			)
		}
		case "edit": {
			return (
				<FiEdit3 className={'button-edit'} size={30} />
			)
		}
		default: {
			return (
				<button className={'button-default'}>
					{children}
				</button>
			)
		}
	}

}
export default Button