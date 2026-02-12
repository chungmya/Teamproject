import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";
import { Button } from "../../components/Button/Button";

const Footer = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: isDark ? "black" : "lightgray",
      }}
    >
      <Button
        size="lg"
        variant="danger"
        className="button"
        onClick={toggleTheme}
      >
        Dark Mode
      </Button>
    </footer>
  );
};

export default Footer;
