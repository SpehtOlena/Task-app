import './Empty.css';
import empty from '../../assets/empty.png'

const Empty = () => {
	return (
		<div className={'empty-container'}>
			<img src={empty} alt="you don't have any task" className={'empty-image'} />
			<p>You don't have any tasks yet!</p>
		</div>
	)
}
export default Empty