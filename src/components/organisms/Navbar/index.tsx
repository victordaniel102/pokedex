import Button from "../../atoms/Button";
import Logo from "../../atoms/Logo";
import LanguageSwitcher from "../../molecules/LanguageSwitcher";
import { NavbarContainer, NavbarMenu } from "./style";

export type NavbarItem = {
  text: string;
  onClick: Function;
};

interface INavbar {
  items?: NavbarItem[];
}

const Navbar = (props: INavbar) => {
  return (
    <NavbarContainer>
      <Logo size="lg" />
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
