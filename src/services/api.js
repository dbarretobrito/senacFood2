// src/services/api.js
import axios from "axios";

// NÃO coloque /api aqui — isso causa duplicação !
const baseURL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000";

// 5 minutos de inatividade (em ms)
const MAX_INACTIVITY_MS = 5 * 60 * 1000;

const api = axios.create({
  baseURL,
  withCredentials: true, // ok para Sanctum / cookies; não atrapalha com Bearer
});

// Função auxiliar pra verificar se a sessão expirou
function isSessionExpired() {
  const lastActivity = localStorage.getItem("senacfood_last_activity");

  if (!lastActivity) {
    // se nunca foi setado, vamos considerar que expirou
    return true;
  }

  const last = Number(lastActivity);
  if (Number.isNaN(last)) {
    return true;
  }

  const diff = Date.now() - last;
  return diff > MAX_INACTIVITY_MS;
}

// Função pra atualizar o horário da última atividade
function updateLastActivity() {
  localStorage.setItem("senacfood_last_activity", Date.now().toString());
}

// Intercepta requisições e injeta o token automaticamente
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("senacfood_token");

    if (!token) {
      return config;
    }

    // Se a sessão expirou, limpa e cancela a request
    if (isSessionExpired()) {
      localStorage.removeItem("senacfood_token");
      localStorage.removeItem("senacfood_last_activity");

      // opcional: mandar o usuário pro login na hora
      if (window.location.pathname !== "/login") {
        window.location.href = "/login";
      }

      // Cancela a request atual
      return Promise.reject(
        new axios.Cancel("Sessão expirada por inatividade.")
      );
    }

    // Sessão ainda é válida → atualiza o horário de atividade
    updateLastActivity();

    // injeta o token no header
    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
