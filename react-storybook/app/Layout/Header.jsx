import { useContext } from "react";
import { ThemeContext } from './Context/ThemeContext';

const Header = () => {

	const { isDark } = useContext(ThemeContext);

	return (
	<header className="header" 
	style={{
		backgroundColor: isDark ? 'black' : 'lightgray', 
		color: isDark ? 'white' : 'black',
	}}>
	<h1>페이지 제목 타이틀 입니다</h1>
	</header>
	);
};

export default Header;