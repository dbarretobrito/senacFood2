import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  RegisterContainer,
  FormCard,
  Title,
  Subtitle,
  FieldGroup,
  Label,
  Input,
  Textarea,
  ButtonPrimary,
  ButtonGhost,
  HelperText,
  ErrorText,
  LinkButton, // <-- importado
} from "./styles";
import api from "../../services/api";

export default function RegisterPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
    perfil: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (field) => (e) => {
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (!form.name || !form.email || !form.password || !form.password_confirmation) {
      setErrorMsg("Preencha todos os campos obrigatórios.");
      return;
    }

    if (form.password !== form.password_confirmation) {
      setErrorMsg("A confirmação de senha não confere.");
      return;
    }

    try {
      setSubmitting(true);

      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
        perfil: form.perfil || null,
      };

      await api.post("/api/register", payload);

      setSuccessMsg("Cadastro realizado com sucesso! Você já pode fazer login.");
      setForm((prev) => ({
        ...prev,
        password: "",
        password_confirmation: "",
      }));

      setTimeout(() => {
        navigate("/login");
      }, 1200);
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);

      if (error.response?.status === 422) {
        setErrorMsg("Dados inválidos. Verifique nome, e-mail e senha.");
      } else if (error.response?.status === 409) {
        setErrorMsg("E-mail já cadastrado.");
      } else {
        setErrorMsg("Não foi possível realizar o cadastro agora.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleCancel = () => {
    navigate("/login");
  };

  return (
    <RegisterContainer>
      <FormCard>
        <Title>Crie sua conta</Title>
        <Subtitle>
          Comece a montar o seu caderno de receitas SenacFood.
        </Subtitle>

        {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
        {successMsg && (
          <HelperText style={{ color: "#16a34a" }}>{successMsg}</HelperText>
        )}

        <form onSubmit={handleSubmit}>
          <FieldGroup>
            <Label htmlFor="name">Nome *</Label>
            <Input
              id="name"
              value={form.name}
              onChange={handleChange("name")}
              placeholder="Seu nome"
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="email">E-mail *</Label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange("email")}
              placeholder="voce@exemplo.com"
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="password">Senha *</Label>
            <Input
              id="password"
              type="password"
              value={form.password}
              onChange={handleChange("password")}
              placeholder="Mínimo 8 caracteres"
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="password_confirmation">Confirme a senha *</Label>
            <Input
              id="password_confirmation"
              type="password"
              value={form.password_confirmation}
              onChange={handleChange("password_confirmation")}
            />
          </FieldGroup>

          <FieldGroup>
            <Label htmlFor="perfil">Perfil gastronômico (opcional)</Label>
            <Textarea
              id="perfil"
              rows={4}
              value={form.perfil}
              onChange={handleChange("perfil")}
              placeholder="Ex.: Sou vegano, gosto de receitas rápidas e saudáveis..."
            />
            <HelperText>
              Essas informações ajudam a IA a sugerir receitas mais alinhadas ao seu gosto.
            </HelperText>
          </FieldGroup>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "0.75rem",
            }}
          >
            <ButtonGhost type="button" onClick={handleCancel}>
              Cancelar
            </ButtonGhost>
            <ButtonPrimary type="submit" disabled={submitting}>
              {submitting ? "Enviando..." : "Cadastrar"}
            </ButtonPrimary>
          </div>
        </form>

        {/* ----------------------- */}
        {/* BOTÃO DE VOLTAR PARA LOGIN */}
        {/* ----------------------- */}
        <p
          style={{
            marginTop: "1.4rem",
            textAlign: "center",
            fontSize: "0.95rem",
          }}
        >
          Já tem uma conta?{" "}
          <LinkButton type="button" onClick={() => navigate("/login")}>
            Entrar
          </LinkButton>
        </p>
      </FormCard>
    </RegisterContainer>
  );
}
