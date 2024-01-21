import './Header.css';
import logo from '../../assets/logo.png';
import bg from '../../assets/bg.png';

const Header = () => {
	return (
		<div className={'header'}>
			<img src={bg} alt="background" className={'header-bg'} />
			<div className={'header-logo'} >
				<img src={logo} alt="logo" />
			</div>
		</div>
	)
}
export default Header