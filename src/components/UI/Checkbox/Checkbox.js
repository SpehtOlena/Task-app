import './Checkbox.css';
import { LuCheckCircle } from "react-icons/lu";
import { LuCircle } from "react-icons/lu";

const Checkbox = ({ onClick, complete }) => {
	return (
		<div className={'checkbox'} onClick={onClick}>
			{
				complete ? <LuCircle className={'uncomplete'} size={30} /> : <LuCheckCircle className={'complete'} size={30} />
			}
		</div>
	)
}
export default Checkbox