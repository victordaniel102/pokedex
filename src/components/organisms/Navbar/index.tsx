import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import LanguageSwitcher from "../../molecules/LanguageSwitcher";
import { NavbarContainer, NavbarLogo, NavbarMenu } from "./style";

export type NavbarItem = {
  text: string;
  onClick: Function;
};

interface INavbar {
  items?: NavbarItem[];
}

const Navbar = (props: INavbar) => {
  const navigate = useNavigate();

  return (
    <NavbarContainer>
      <NavbarLogo onClick={() => navigate("/pokedex")}>
        <Logo size="lg" />
      </NavbarLogo>
      <NavbarMenu>
        {props.items && props.items.length
          ? props.items.map((item) => (
              <Button text={item.text} onClick={item.onClick} />
            ))
          : null}
      </NavbarMenu>
      <LanguageSwitcher />
    </NavbarContainer>
  );
};

export default Navbar;
