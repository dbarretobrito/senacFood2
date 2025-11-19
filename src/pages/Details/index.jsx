import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import api from "../../services/api";
import { useFavorites } from "../../context/favorites";
import {
  PageWrapper,
  Card,
  TitleRow,
  Title,
  RecipeEmoji,
  MetaRow,
  MetaTag,
  SectionTitle,
  TextBlock,
  IngredientsList,
  IngredientItem,
  ActionsRow,
  ButtonDanger,
  ButtonGhost,
  HelperText,
  ErrorText,
} from "./styles";

// mapa simples de palavras-chave de categoria -> emoji
const categoryEmojiMap = {
  sobremesa: "🍰",
  doce: "🧁",
  bolo: "🎂",
  torta: "🍰",
  sorvete: "🍨",
  gelato: "🍨",
  picole: "🍦",
  carne: "🥩",
  frango: "🍗",
  bife: "🥩",
  porco: "🥓",
  sanduiche: "🥪",
  sanduíche: "🥪",
  lanche: "🍔",
  hamburguer: "🍔",
  hambúrguer: "🍔",
  salada: "🥗",
  folha: "🥗",
  verde: "🥗",
  vegano: "🥬",
  vegetariano: "🥬",
  veggie: "🥬",
  peixe: "🐟",
  salmao: "🐟",
  salmão: "🐟",
  atum: "🐟",
  "frutos do mar": "🦐",
  massa: "🍝",
  macarrao: "🍝",
  macarrão: "🍝",
  pasta: "🍝",
  espaguete: "🍝",
  sopa: "🍲",
  caldo: "🍲",
};

const DEFAULT_EMOJI = "🍽️";

function getEmojiForCategory(name) {
  if (!name) return DEFAULT_EMOJI;

  const normalized = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  for (const keyword of Object.keys(categoryEmojiMap)) {
    if (normalized.includes(keyword)) {
      return categoryEmojiMap[keyword];
    }
  }

  return DEFAULT_EMOJI;
}

export default function DetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { removeFavorite } = useFavorites();

  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function loadRecipe() {
      try {
        setLoading(true);
        setErrorMsg("");
        const { data } = await api.get(`/api/receita/${id}`);
        if (!isMounted) return;

        setRecipe(data?.receita || null);
      } catch (error) {
        console.error("Erro ao carregar receita:", error);
        if (isMounted) {
          setErrorMsg(
            error.response?.status === 404
              ? "Receita não encontrada."
              : "Não foi possível carregar a receita."
          );
          setRecipe(null);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadRecipe();

    return () => {
      isMounted = false;
    };
  }, [id]);

  const handleBack = () => {
    navigate("/");
  };

  const handleDelete = async () => {
    if (!recipe) return;

    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir esta receita? Essa ação não pode ser desfeita."
    );

    if (!confirmDelete) return;

    try {
      setDeleting(true);
      await api.delete(`/api/receitas/${recipe.id}`);

      // sincroniza favoritos: remove esta receita, se estiver favoritada
      removeFavorite(recipe.id);

      navigate("/");
    } catch (error) {
      console.error("Erro ao excluir receita:", error);
      setErrorMsg("Não foi possível excluir a receita. Tente novamente.");
    } finally {
      setDeleting(false);
    }
  };

  const categoryName = recipe?.categoria?.nome || "Sem categoria";
  const timeLabel = recipe?.tempo_preparo
    ? `${recipe.tempo_preparo} min`
    : "Tempo não informado";

  const recipeEmoji = getEmojiForCategory(categoryName);

  return (
    <>
      <Navbar />
      <div style={{ height: 70 }} /> {/* Spacer da navbar fixa */}

      <PageWrapper>
        <Card>
          {loading && <HelperText>Carregando receita...</HelperText>}
          {errorMsg && <ErrorText>{errorMsg}</ErrorText>}

          {!loading && recipe && (
            <>
              <TitleRow>
                <RecipeEmoji aria-hidden="true">{recipeEmoji}</RecipeEmoji>
                <Title>{recipe.titulo}</Title>
              </TitleRow>

              <MetaRow>
                <MetaTag>{categoryName}</MetaTag>
                <MetaTag>{timeLabel}</MetaTag>
              </MetaRow>

              {recipe.descricao && (
                <>
                  <SectionTitle>Descrição</SectionTitle>
                  <TextBlock>{recipe.descricao}</TextBlock>
                </>
              )}

              <SectionTitle>Ingredientes</SectionTitle>
              {recipe.ingredientes && recipe.ingredientes.length > 0 ? (
                <IngredientsList>
                  {recipe.ingredientes.map((ing) => (
                    <IngredientItem key={ing.id}>{ing.nome}</IngredientItem>
                  ))}
                </IngredientsList>
              ) : (
                <TextBlock>
                  Esta receita não possui ingredientes vinculados. Verifique o
                  modo de preparo para mais detalhes.
                </TextBlock>
              )}

              {recipe.modo_preparo && (
                <>
                  <SectionTitle>Modo de preparo</SectionTitle>
                  <TextBlock as="div" style={{ whiteSpace: "pre-line" }}>
                    {recipe.modo_preparo}
                  </TextBlock>
                </>
              )}

              <ActionsRow>
                <ButtonGhost type="button" onClick={handleBack}>
                  Voltar
                </ButtonGhost>
                <ButtonDanger
                  type="button"
                  onClick={handleDelete}
                  disabled={deleting}
                >
                  {deleting ? "Excluindo..." : "Excluir receita"}
                </ButtonDanger>
              </ActionsRow>
            </>
          )}

          {!loading && !recipe && !errorMsg && (
            <HelperText>Nenhuma receita encontrada.</HelperText>
          )}
        </Card>
      </PageWrapper>
    </>
  );
}
