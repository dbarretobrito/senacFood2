// src/pages/Profile/index.jsx
import React, { useEffect, useState } from "react";
import {
  PageWrapper,
  Card,
  Title,
  Subtitle,
  FieldGroup,
  Label,
  Input,
  Textarea,
  HelperText,
  ErrorText,
  ActionsRow,
  ButtonPrimary,
} from "./styles";
import api from "../../services/api";
import Navbar from "../../components/Navbar";

export default function ProfilePage() {
  const [userId, setUserId] = useState(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    perfil: "",
    password: "",
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadUser() {
      try {
        setLoading(true);
        setErrorMsg("");

        const { data } = await api.get("/api/user");
        if (!isMounted) return;

        const user = data;

        setUserId(user.id);
        setForm((prev) => ({
          ...prev,
          name: user.name || "",
          email: user.email || "",
          perfil: user.perfil || "",
        }));
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
        if (isMounted) {
          setErrorMsg(
            "Não foi possível carregar seus dados no momento. Tente novamente."
          );
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadUser();

    return () => {
      isMounted = false;
    };
  }, []);

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

    if (!userId) {
      setErrorMsg("Usuário não encontrado.");
      return;
    }

    if (!form.password) {
      setErrorMsg("Informe sua senha atual para confirmar as alterações.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        name: form.name,
        email: form.email,
        perfil: form.perfil,
        password: form.password,
      };

      const { data } = await api.patch(`/api/users/edit/${userId}`, payload);

      setSuccessMsg(data.message || "Dados atualizados com sucesso!");
      setForm((prev) => ({ ...prev, password: "" }));
    } catch (error) {
      console.error("Erro ao atualizar usuário:", error);
      if (error.response?.data?.message) {
        setErrorMsg("Não foi possível atualizar: verifique os dados e a senha.");
      } else {
        setErrorMsg("Erro ao atualizar os dados. Tente novamente.");
      }
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <Card>
          <Title>Meu perfil</Title>
          <Subtitle>Atualize seus dados e preferências culinárias.</Subtitle>

          {loading && <HelperText>Carregando dados...</HelperText>}
          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
          {successMsg && (
            <HelperText style={{ color: "#16a34a" }}>{successMsg}</HelperText>
          )}

          {!loading && (
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  value={form.name}
                  onChange={handleChange("name")}
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange("email")}
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="perfil">Perfil gastronômico</Label>
                <Textarea
                  id="perfil"
                  rows={4}
                  value={form.perfil}
                  onChange={handleChange("perfil")}
                  placeholder="Ex.: Sou vegano, gosto de receitas rápidas para o jantar, evito frituras..."
                />
                <HelperText>
                  Essas informações ajudam a IA a sugerir receitas mais
                  alinhadas ao seu gosto.
                </HelperText>
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="password">Senha atual *</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange("password")}
                  placeholder="Digite sua senha para confirmar as alterações"
                />
              </FieldGroup>

              <ActionsRow>
                <ButtonPrimary type="submit" disabled={saving}>
                  {saving ? "Salvando..." : "Salvar alterações"}
                </ButtonPrimary>
              </ActionsRow>
            </form>
          )}
        </Card>
      </PageWrapper>
    </>
  );
}
