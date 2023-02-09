import Logo from "../../atoms/Logo";
import LanguageSwitcher from "../../molecules/LanguageSwitcher";
import { NavbarContainer } from "./style";

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo size="lg" />
      <LanguageSwitcher />
    </NavbarContainer>
  );
};

export default Navbar;
