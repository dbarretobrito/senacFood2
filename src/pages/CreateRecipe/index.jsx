// src/pages/CreateRecipe/index.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PageWrapper,
  FormCard,
  Title,
  Subtitle,
  FieldGroup,
  Label,
  Input,
  Textarea,
  Select,
  CheckboxList,
  CheckboxItem,
  ActionsRow,
  ButtonPrimary,
  ButtonGhost,
  HelperText,
  ErrorText,
  InlineRow,
  SmallButton,
} from "./styles";
import api from "../../services/api";
import Navbar from "../../components/Navbar";

export default function CreateRecipePage() {
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [form, setForm] = useState({
    titulo: "",
    descricao: "",
    modo_preparo: "",
    tempo_preparo: "",
    categoria_id: "",
    ingredientesSelecionados: [], // [id, id...]
  });

  const [loadingData, setLoadingData] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  // estados para criar categoria/ingrediente na própria tela
  const [newCategoryName, setNewCategoryName] = useState("");
  const [creatingCategory, setCreatingCategory] = useState(false);

  const [newIngredientName, setNewIngredientName] = useState("");
  const [creatingIngredient, setCreatingIngredient] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadDeps() {
      try {
        setLoadingData(true);
        setErrorMsg("");

        const [catRes, ingRes] = await Promise.all([
          api.get("/api/categorias"),
          api.get("/api/ingredientes"),
        ]);

        if (!isMounted) return;

        setCategories(catRes.data?.data || []);
        setIngredients(ingRes.data?.data || []);
      } catch (error) {
        console.error("Erro ao carregar categorias/ingredientes:", error);
        if (isMounted) {
          setErrorMsg(
            "Não foi possível carregar categorias ou ingredientes. Tente novamente."
          );
        }
      } finally {
        if (isMounted) setLoadingData(false);
      }
    }

    loadDeps();

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

  const handleToggleIngredient = (id) => {
    setForm((prev) => {
      const alreadySelected = prev.ingredientesSelecionados.includes(id);
      return {
        ...prev,
        ingredientesSelecionados: alreadySelected
          ? prev.ingredientesSelecionados.filter((x) => x !== id)
          : [...prev.ingredientesSelecionados, id],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setSuccessMsg("");

    if (
      !form.titulo ||
      !form.descricao ||
      !form.modo_preparo ||
      !form.tempo_preparo
    ) {
      setErrorMsg("Preencha todos os campos obrigatórios.");
      return;
    }

    try {
      setSaving(true);

      const payload = {
        titulo: form.titulo,
        descricao: form.descricao,
        modo_preparo: form.modo_preparo,
        tempo_preparo: Number(form.tempo_preparo),
        categoria_id: form.categoria_id || null,
        ingredientes: form.ingredientesSelecionados.map((id) => ({ id })),
      };

      const { data } = await api.post("/api/receitas", payload);

      setSuccessMsg(data.message || "Receita criada com sucesso!");
      // reset básico
      setForm({
        titulo: "",
        descricao: "",
        modo_preparo: "",
        tempo_preparo: "",
        categoria_id: "",
        ingredientesSelecionados: [],
      });

      // leva de volta pra home depois de alguns segundos
      setTimeout(() => {
        navigate("/");
      }, 1200);
    } catch (error) {
      console.error("Erro ao criar receita:", error);
      if (error.response?.status === 422) {
        setErrorMsg("Dados inválidos. Verifique os campos e tente novamente.");
      } else {
        setErrorMsg("Não foi possível criar a receita no momento.");
      }
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  // criar categoria na hora
  const handleCreateCategory = async () => {
    if (!newCategoryName.trim()) return;
    try {
      setCreatingCategory(true);
      const { data } = await api.post("/api/categorias", {
        nome: newCategoryName.trim(),
      });

      const created = data?.data; // { id, nome }
      if (created) {
        setCategories((prev) => [...prev, created]);
        setForm((prev) => ({
          ...prev,
          categoria_id: String(created.id),
        }));
      }
      setNewCategoryName("");
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      setErrorMsg("Não foi possível criar a categoria agora.");
    } finally {
      setCreatingCategory(false);
    }
  };

  // criar ingrediente na hora
  const handleCreateIngredient = async () => {
    if (!newIngredientName.trim()) return;
    try {
      setCreatingIngredient(true);
      const { data } = await api.post("/api/ingredientes", {
        nome: newIngredientName.trim(),
      });

      const created = data?.data; // { id, nome }
      if (created) {
        setIngredients((prev) => [...prev, created]);
      }
      setNewIngredientName("");
    } catch (error) {
      console.error("Erro ao criar ingrediente:", error);
      setErrorMsg("Não foi possível criar o ingrediente agora.");
    } finally {
      setCreatingIngredient(false);
    }
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <FormCard>
          <Title>Nova receita</Title>
          <Subtitle>Cadastre uma receita para o seu caderno SenacFood.</Subtitle>

          {loadingData && (
            <HelperText>Carregando categorias e ingredientes...</HelperText>
          )}

          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}
          {successMsg && (
            <HelperText style={{ color: "#16a34a" }}>{successMsg}</HelperText>
          )}

          {!loadingData && (
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <Label htmlFor="titulo">Título da receita *</Label>
                <Input
                  id="titulo"
                  value={form.titulo}
                  onChange={handleChange("titulo")}
                  placeholder="Ex.: Panqueca de aveia com banana"
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="descricao">Descrição *</Label>
                <Textarea
                  id="descricao"
                  value={form.descricao}
                  onChange={handleChange("descricao")}
                  rows={3}
                  placeholder="Uma breve descrição da receita..."
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="modo_preparo">Modo de preparo *</Label>
                <Textarea
                  id="modo_preparo"
                  value={form.modo_preparo}
                  onChange={handleChange("modo_preparo")}
                  rows={5}
                  placeholder="Explique o passo a passo do preparo..."
                  required
                />
              </FieldGroup>

              <FieldGroup>
                <Label htmlFor="tempo_preparo">
                  Tempo de preparo (minutos) *
                </Label>
                <Input
                  id="tempo_preparo"
                  type="number"
                  min="1"
                  value={form.tempo_preparo}
                  onChange={handleChange("tempo_preparo")}
                  placeholder="Ex.: 30"
                  required
                />
              </FieldGroup>

              {/* CATEGORIA */}
              <FieldGroup>
                <Label htmlFor="categoria_id">Categoria</Label>
                <Select
                  id="categoria_id"
                  value={form.categoria_id}
                  onChange={handleChange("categoria_id")}
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.nome}
                    </option>
                  ))}
                </Select>
                {categories.length === 0 && (
                  <HelperText>
                    Você ainda não cadastrou categorias. Crie uma abaixo para
                    começar.
                  </HelperText>
                )}

                <InlineRow>
                  <Input
                    type="text"
                    placeholder="Nova categoria (ex.: Sobremesa)"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                  />
                  <SmallButton
                    type="button"
                    onClick={handleCreateCategory}
                    disabled={creatingCategory || !newCategoryName.trim()}
                  >
                    {creatingCategory ? "Criando..." : "Adicionar"}
                  </SmallButton>
                </InlineRow>
              </FieldGroup>

              {/* INGREDIENTES */}
              <FieldGroup>
                <Label>Ingredientes</Label>
                {ingredients.length === 0 && (
                  <HelperText>
                    Você ainda não cadastrou ingredientes. Crie ingredientes
                    abaixo ou descreva tudo no modo de preparo por enquanto.
                  </HelperText>
                )}

                {ingredients.length > 0 && (
                  <CheckboxList>
                    {ingredients.map((ing) => (
                      <CheckboxItem key={ing.id}>
                        <label>
                          <input
                            type="checkbox"
                            checked={form.ingredientesSelecionados.includes(
                              ing.id
                            )}
                            onChange={() => handleToggleIngredient(ing.id)}
                          />
                          <span>{ing.nome}</span>
                        </label>
                      </CheckboxItem>
                    ))}
                  </CheckboxList>
                )}

                <InlineRow style={{ marginTop: "0.5rem" }}>
                  <Input
                    type="text"
                    placeholder="Novo ingrediente (ex.: Aveia em flocos)"
                    value={newIngredientName}
                    onChange={(e) => setNewIngredientName(e.target.value)}
                  />
                  <SmallButton
                    type="button"
                    onClick={handleCreateIngredient}
                    disabled={
                      creatingIngredient || !newIngredientName.trim()
                    }
                  >
                    {creatingIngredient ? "Criando..." : "Adicionar"}
                  </SmallButton>
                </InlineRow>
              </FieldGroup>

              <ActionsRow>
                <ButtonGhost type="button" onClick={handleCancel}>
                  Cancelar
                </ButtonGhost>
                <ButtonPrimary type="submit" disabled={saving}>
                  {saving ? "Salvando..." : "Salvar receita"}
                </ButtonPrimary>
              </ActionsRow>
            </form>
          )}
        </FormCard>
      </PageWrapper>
    </>
  );
}
