import { useContext } from "react";
import { LanguageContext } from "../../../context/language";
import Switch from "../../atoms/Switch";
import { LanguageSwitcherContainer, LanguageText } from "./style";

const LanguageSwitcher = () => {
  const { dictionary, language, selectedLanguage, changeLanguage } =
    useContext(LanguageContext);

  return (
    <LanguageSwitcherContainer
      onClick={() => changeLanguage!(language == "ptbr" ? "en" : "ptbr")}
    >
      <LanguageText>{selectedLanguage}</LanguageText>
    </LanguageSwitcherContainer>
  );
};

export default LanguageSwitcher;
