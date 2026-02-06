import { useContext } from "react";
import { ThemeContext } from './Context/ThemeContext';

const Content = () => {
		const { isDark } = useContext(ThemeContext);

	return (
	<div className="content" 
	style={{
		backgroundColor: isDark ? 'black' : 'white', 
		color: isDark ? 'white' : 'black',
	}}>
	<h1>컨텐츠 영역 내용 입니다~</h1>
	</div>
	);
};

export default Content;