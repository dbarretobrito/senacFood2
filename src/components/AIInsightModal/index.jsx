// src/components/AIInsightModal/index.jsx
import React, { useEffect, useState } from "react";
import api from "../../services/api";
import {
  Overlay,
  ModalContainer,
  Header,
  Title,
  CloseButton,
  Body,
  Greeting,
  MealGrid,
  MealCard,
  MealTitle,
  MealFieldLabel,
  MealText,
  TimePill,
  LoadingBox,
  ErrorBox,
} from "./styles";

// Agora os endpoints batem exatamente com o backend Laravel (/api/...)
function getEndpointFromMode(mode) {
  switch (mode) {
    case "ingredientes":
      return "/api/ingredientes/insight";
    case "receitas":
      return "/api/receitas/insight";
    case "perfil":
    default:
      return "/api/insight";
  }
}

export default function AIInsightModal({ isOpen, onClose, mode = "perfil" }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  // Limpa estado quando fecha
  useEffect(() => {
    if (!isOpen) {
      setLoading(false);
      setError("");
      setData(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    // 🔐 Usa o MESMO token do login/interceptor
    const token = localStorage.getItem("senacfood_token");
    if (!token) {
      setError("Você precisa estar logado para ver as sugestões da IA.");
      setData(null);
      return;
    }

    const endpoint = getEndpointFromMode(mode);

    setLoading(true);
    setError("");
    setData(null);

    api
      .get(endpoint)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.error("Erro ao carregar insights da IA:", err);
        setError("Não foi possível carregar as sugestões agora.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [isOpen, mode]);

  if (!isOpen) {
    return null;
  }

  const cafe = data?.cafe_da_manha;
  const almoco = data?.almoco;
  const jantar = data?.jantar;

  const handleOverlayClick = (e) => {
    // clicar fora fecha; clicar dentro do card não
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-labelledby="ai-modal-title"
      >
        <Header>
          <Title id="ai-modal-title">Sugestões da Chef IA</Title>
          <CloseButton
            type="button"
            onClick={onClose}
            aria-label="Fechar sugestões da IA"
          >
            ×
          </CloseButton>
        </Header>

        <Body>
          {data?.saudacao && <Greeting>{data.saudacao}</Greeting>}

          {loading && <LoadingBox>Carregando sugestões da IA…</LoadingBox>}

          {error && !loading && <ErrorBox>{error}</ErrorBox>}

          {!loading && !error && data && (
            <MealGrid>
              {cafe && (
                <MealCard>
                  <MealTitle>Café da manhã</MealTitle>
                  <div>
                    <MealFieldLabel>Título</MealFieldLabel>
                    <MealText>{cafe.titulo}</MealText>
                  </div>
                  <div>
                    <MealFieldLabel>Descrição</MealFieldLabel>
                    <MealText>{cafe.descricao}</MealText>
                  </div>
                  <div>
                    <MealFieldLabel>Modo de preparo</MealFieldLabel>
                    <MealText>{cafe.modo_preparo}</MealText>
                  </div>
                  <TimePill>
                    ⏱ {cafe.tempo_preparo || "Tempo não informado"}
                  </TimePill>
                </MealCard>
              )}

              {almoco && (
                <MealCard>
                  <MealTitle>Almoço</MealTitle>
                  <div>
                    <MealFieldLabel>Título</MealFieldLabel>
                    <MealText>{almoco.titulo}</MealText>
                  </div>
                  <div>
                    <MealFieldLabel>Descrição</MealFieldLabel>
                    <MealText>{almoco.descricao}</MealText>
                  </div>
                  <div>
                    <MealFieldLabel>Modo de preparo</MealFieldLabel>
                    <MealText>{almoco.modo_preparo}</MealText>
                  </div>
                  <TimePill>
                    ⏱ {almoco.tempo_preparo || "Tempo não informado"}
                  </TimePill>
                </MealCard>
              )}

              {jantar && (
                <MealCard>
                  <MealTitle>Jantar</MealTitle>
                  <div>
                    <MealFieldLabel>Título</MealFieldLabel>
                    <MealText>{jantar.titulo}</MealText>
                  </div>
                  <div>
                    <MealFieldLabel>Descrição</MealFieldLabel>
                    <MealText>{jantar.descricao}</MealText>
                  </div>
                  <div>
                    <MealFieldLabel>Modo de preparo</MealFieldLabel>
                    <MealText>{jantar.modo_preparo}</MealText>
                  </div>
                  <TimePill>
                    ⏱ {jantar.tempo_preparo || "Tempo não informado"}
                  </TimePill>
                </MealCard>
              )}
            </MealGrid>
          )}

          {!loading && !error && !data && (
            <LoadingBox>Nenhum dado carregado ainda.</LoadingBox>
          )}
        </Body>
      </ModalContainer>
    </Overlay>
  );
}
