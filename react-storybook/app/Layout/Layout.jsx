//import { useContext } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
//import { ThemeContext } from './Context/ThemeContext';



//중간 컨포넌트 Layout
const Layout = () => {

	return (
		<div className="page">
			<Header />
			<Content />
			<Footer />
		</div>
		
	);

};

export default Layout;