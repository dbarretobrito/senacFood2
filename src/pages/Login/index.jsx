import rectangle from "../../assets/rectangle.png";
import {
  LoginContainer,
  FormArea,
  Title,
  Subtitle,
  Input,
  Button,
  ImageArea,
} from "./styles";

export default function Login() {
  return (
    <LoginContainer>
      <FormArea>
        <Title>Bem-vindo 👋</Title>
        <Subtitle>
          Faça login ou crie uma conta para aproveitar o melhor da culinária.
        </Subtitle>

        <Input placeholder="exemplo@email.com" type="email" />
        <Input placeholder="Mínimo 8 caracteres" type="password" />
        <Button>Entrar</Button>

        <p>
          Não tem uma conta? <a href="#">Inscreva-se</a>
        </p>
      </FormArea>

      <ImageArea>
        <img src={rectangle} alt="Imagem de login" />
      </ImageArea>
    </LoginContainer>
  );
}
