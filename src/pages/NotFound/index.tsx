import Image from "../../components/atoms/Image";
import { NotFoundContainer, NotFoundTitle, NotFoundDescription } from "./style";
import Snorlax from "../../assets/snorlax.png";
import Button from "../../components/atoms/Button";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundContainer>
      <Image src={Snorlax} size="400px" />
      <NotFoundTitle>Ops</NotFoundTitle>
      <NotFoundDescription>
        Tem um Snorlax no seu caminho, volte e procure novas possibilidades!
      </NotFoundDescription>
      <Button
        onClick={() => navigate("/pokedex")}
        text="Voltar"
        colored
        backgroundColor="#FFF"
        textColor="#262626"
      />
    </NotFoundContainer>
  );
};

export default NotFound;
