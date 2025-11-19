import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import loginImage from "../../assets/login-image.png";

import {
  LoginContainer,
  LoginCard,
  FormArea,
  Title,
  Subtitle,
  FieldGroup,
  FormLabel,
  Input,
  Button,
  ImageArea,
  LinkButton,
  ImageLogo,
  ForgotPasswordLink,
} from "./styles";

import api from "../../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const goToRegister = () => {
    navigate("/inscricao");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      const response = await api.post("/api/login", {
        email,
        password,
      });

      const data = response.data;

      const token =
        data.token ||
        data.access_token ||
        data?.data?.token ||
        data?.data?.access_token;

      if (!token) {
        throw new Error("Resposta de login não retornou um token válido.");
      }

      localStorage.setItem("senacfood_token", token);
      localStorage.setItem("senacfood_last_activity", Date.now().toString());

      navigate("/");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setErrorMessage(
        "Não foi possível fazer login. Verifique seu e-mail e senha."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <LoginContainer>
      <LoginCard>
        <FormArea>
          <Title>Bem vindo 👋</Title>
          <Subtitle>
            Faça login ou crie uma conta para aproveitar o melhor da culinária.
          </Subtitle>

          <form onSubmit={handleSubmit}>
            <FieldGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                id="email"
                placeholder="exemplo@email.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FieldGroup>

            <FieldGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                placeholder="Mínimo 8 caracteres"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <ForgotPasswordLink type="button">
                Esqueceu a senha?
              </ForgotPasswordLink>
            </FieldGroup>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Entrando..." : "Login"}
            </Button>
          </form>

          {errorMessage && (
            <p
              style={{
                color: "#dc2626",
                marginTop: "0.5rem",
                fontSize: "0.9rem",
              }}
            >
              {errorMessage}
            </p>
          )}

          <p style={{ marginTop: "1.2rem", fontSize: "0.95rem" }}>
            Não tem uma conta?{" "}
            <LinkButton type="button" onClick={goToRegister}>
              Inscreva-se
            </LinkButton>
          </p>
        </FormArea>

        <ImageArea>
          <ImageLogo>Senac Food</ImageLogo>
          <img src={loginImage} alt="Panquecas com morango e calda de chocolate" />
        </ImageArea>
      </LoginCard>
    </LoginContainer>
  );
}
